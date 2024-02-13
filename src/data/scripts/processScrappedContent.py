import json
from datetime import datetime

def process_json_file(raw_scrapped_content_file, output_file):
    # Read JSON file
    with open(raw_scrapped_content_file, 'r') as f:
        data = json.load(f)

    articles = []
    key_words = ["israel", "Israel", "Hamas", "hamas", "Gaza", "gaza", "palestine", "Palestine", "Israeli", "israeli"]

    # Process each object in the array
    for item in data:
        # do not include style or opinion articles, even if they mention key words
        if "style" in item["url"] or "opinions" in item["url"]:
            continue

        # do not include articles that were published before Oct 7 or after Oct 21
        if not is_within_range(item["date"]):
            continue

        mention_count = 0
        for key_word in key_words:
            if key_word in item["text"]:
                mention_count = mention_count + 1
        
        # only include articles that mention the key words more than once
        if mention_count > 1:
            article = {}
            article["url"] = item["url"]
            article["headline"] = item["title"]
            article["publishDate"] = item["date"]
            article["imageUrl"] = item["image"]
            article["description"] = item["description"]
            article["content"] = item["text"]
            articles.append(article)
            

    # Write the modified data to a new JSON file
    with open(output_file, 'w') as f:
        json.dump(articles, f, indent=2)

    print(len(articles))

def is_within_range(date_str):
    # Parse the date string into a datetime object
    date_object = datetime.strptime(date_str, "%Y-%m-%dT%H:%M:%S.%fZ")

    # Define the range start and end dates
    range_start = datetime(2023, 10, 7)
    range_end = datetime(2023, 10, 21)

    # Check if the date is within the specified range
    return range_start <= date_object <= range_end

input_file_path = 'dataset_washington-post-scraper_2024-02-13_19-26-33-298.json' 
output_file_path = 'processedArticleContent.json' 

process_json_file(input_file_path, output_file_path)