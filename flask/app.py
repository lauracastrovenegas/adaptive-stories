from flask import Flask, request, jsonify
from openai import OpenAI
import openai
import json
from datetime import datetime
import os
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/run-extract-events": {"origins": "http://localhost:3000"}})

load_dotenv()
client = OpenAI(
    api_key=os.getenv('OPENAI_API_KEY')
)

@app.route('/run-extract-events', methods=['POST'])
def run_extract_events():
    print('HELLO FROM ENDPOINT')
    file = request.json
    filename = file['filename']
    if os.path.exists('./cache/' + filename):
        print('IN CACHE')
        f = open('./cache/' + filename)
        data = json.load(f)
        f.close()
        return jsonify({'result': data})
    data = json.loads(file['data'])
    print(data)

    sorted_articles = sorted(data, key=lambda x: datetime.strptime(x['publishDate'], "%Y-%m-%dT%H:%M:%S.%fZ"))
    all_events = []
    group_size = 6
    num_groups = len(sorted_articles) // group_size
    last_group_size = len(sorted_articles) % group_size

    print("Number of Articles: " + str(len(sorted_articles)))

    # Process groups of group_size each
    for i in range(0, num_groups * group_size, group_size):
        events_group = extract_events(i, i + group_size, sorted_articles)
        all_events = all_events + events_group

    # Process leftover articles
    events_group = extract_events(num_groups * group_size, (num_groups * group_size) + last_group_size, sorted_articles)
    all_events = all_events + events_group

    sorted_events = sorted(all_events, key=convert_to_datetime)
    dated_events_only = [event for event in sorted_events if event["date"] != 'Date Unknown']

    print("DONE")
    # cache
    with open('./cache/' + filename, 'w') as file:
        json.dump(dated_events_only, file)

    return jsonify({'result': dated_events_only})

system_prompt = [
    {"role": "system",
        "content": '''You will be provided with a series of articles.
        Each article will be delimited by triple quotes.
        For each article, you will get the headline, the date it was published, and the content of the article.
        Extract all events mentioned within the content of these articles.
        Focus on specific dates and events referred to in the articles.
        Use the provided articles as the sole source for information.
        Output a JSON with all of the extracted events.
        For each event, include the date of the event, the title of the event, the details of the event, and a list of the titles of the articles that referred to this event.
        If an exact date is not provided for an event, if a relative date is provided for the event, use the publish date to get the exact date if possible.
        If no date is available, set the event date as "Date Unknown".
        Use this format for event dates: "%A, %B %d, %Y".
        If there are multiple events mentioned in a single article, output all events.
        If an event is mentioned multiple times, update the details of the event based on the information from the articles that mention it, and include all of the titles that refer to the event to the output for that event.'''}]

# Define reusable method to put together article content of end_idx - start_idx articles
def get_user_prompt(start_idx, end_idx, sorted_articles):
    user_prompts = []

    if end_idx > len(sorted_articles):
        end_idx = len(sorted_articles)

    articles = ''

    for article_idx in range(start_idx, end_idx):
        headline = sorted_articles[article_idx]["headline"]
        published_date = datetime.strptime(sorted_articles[article_idx]["publishDate"], "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%A, %B %d, %Y at %I:%M %p")
        content = sorted_articles[article_idx]["content"]

        article_content = '"""Headline: ' + headline + '.\n Publishing date: ' + published_date + '.\n Content: ' + content + '."""\n\n'

        articles = articles + article_content

    user_prompt = {"role": "user", "content": articles}
    user_prompts.append(user_prompt)

    return user_prompts

# reusable method to query gpt and print response
def query_gpt(system_prompt, user_prompts, client):
    messages = system_prompt + user_prompts

    response = client.chat.completions.create(
            model="gpt-4-0125-preview",
            messages=messages,
            response_format={ "type": "json_object" }
        )

    return response.choices[0].message.content

def extract_events(start_idx, end_idx, sorted_articles):
    print("Processing articles " + str(start_idx) + " to " + str(end_idx-1))
    user_prompts = get_user_prompt(start_idx, end_idx, sorted_articles)
    gpt_output = query_gpt(system_prompt, user_prompts, client)

    json_object = json.loads(gpt_output)

    events_group = json_object["events"]

    return events_group

# Define a function to convert the date string to a datetime object
def convert_to_datetime(obj):
    if obj["date"] == "Date Unknown":
        return datetime.max  # Assign a maximum datetime for "Date Unknown"
    else:
        try:
            return datetime.strptime(obj["date"], "%A, %B %d, %Y")
        except ValueError:
            try:
                return datetime.strptime(obj["date"], "%B, %Y")
            except ValueError:
                try:
                  return datetime.strptime(obj["date"], "%B %Y")
                except ValueError:
                  try:
                    return datetime.strptime(obj["date"], "%Y")
                  except ValueError:
                    return datetime.max  # For unknown date formats, place at the end

if __name__ == '__main__':
    app.run(debug=True)