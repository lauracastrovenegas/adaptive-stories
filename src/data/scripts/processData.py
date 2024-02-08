import json

def process_json_file(input_file, output_file, topic_tags_file):
    # Read JSON file
    with open(input_file, 'r') as f:
        data = json.load(f)

    unique_topic_tags = set()

    # Process each object in the array
    for item in data:
        # Convert Topic Tags from string to array
        item['Topic Tags'] = item['Topic Tags'].split(',')

        # Add description and imageUrl attributes
        item['description'] = ''  # Add your description logic here
        item['imageUrl'] = ''  # Add your imageUrl logic here

        # Append base URL to Article attribute
        item['Article'] = 'https://www.washingtonpost.com' + item['Article']

        unique_topic_tags.update(item['Topic Tags'])

    # Write the modified data to a new JSON file
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=2)

    # Write unique topic tags to another file
    with open(topic_tags_file, 'w') as f:
        json.dump(list(unique_topic_tags), f, indent=2)

# Example usage:
input_file_path = 'washpostArticles.json'  # Replace with your input file path
output_file_path = 'output.json'  # Replace with your desired output file path
topic_tags_file_path = 'topic_tags.json'  # Replace with your desired topic tags file path

process_json_file(input_file_path, output_file_path, topic_tags_file_path)