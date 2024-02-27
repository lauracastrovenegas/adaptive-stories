import json
from datetime import datetime

def process_json_file(input_file, output_file):
    # Read JSON file
    with open(input_file, 'r') as f:
        articles = json.load(f)

    articles = sorted(articles, key=lambda x: datetime.strptime(x['publishDate'], "%Y-%m-%dT%H:%M:%S.%fZ"))

    with open(output_file, "w", encoding="utf-8") as file:
        # Iterate through articles and write information to the file
        for article_idx in range(0, len(articles)):
            

            formatted_date = datetime.strptime(articles[article_idx]['publishDate'], "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%A, %B %d, %Y at %I:%M %p")

            file.write(f"ARTICLE NUMBER {article_idx + 1}\n\n")
            file.write(f"Headline: {articles[article_idx]['headline']}\n")
            file.write(f"Publish Date: {formatted_date}\n")
            file.write(f"URL: {articles[article_idx]['url']} \n")
            file.write(f"Description: {articles[article_idx]['description']}\n\n")
            file.write(f"Content: {articles[article_idx]['content']}\n")
            file.write("\n\n---\n\n")  # Add newlines between articles

# Example usage:
input_file_path = 'processedArticleContentElection.json'  # Replace with your input file path
output_file_path = 'electionArticles.txt'  # Replace with your desired output file path

process_json_file(input_file_path, output_file_path)