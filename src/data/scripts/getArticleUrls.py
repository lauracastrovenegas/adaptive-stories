import json

def process_json_file(input_file, output_file):
    # Read JSON file
    with open(input_file, 'r') as f:
        data = json.load(f)

    articleUrls = []

    # Process each object in the array
    for item in data:
        # Append base URL to Article attribute
        url = 'https://www.washingtonpost.com' + item['Article']

        articleUrls.append({"url": url})

    # Write the modified data to a new JSON file
    with open(output_file, 'w') as f:
        json.dump(articleUrls, f, indent=2)

# Example usage:
input_file_path = 'washpostArticles.json'  # Replace with your input file path
output_file_path = 'output.json'  # Replace with your desired output file path

process_json_file(input_file_path, output_file_path)