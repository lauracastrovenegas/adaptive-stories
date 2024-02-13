import json

def process_json_file(input_file, output_file):
    # Read JSON file
    with open(input_file, 'r') as f:
        data = json.load(f)

    articleUrls = []
    articleUrls2 = []

    # Process each object in the array
    for item in data:
        # Append base URL to Article attribute
        url = 'https://www.washingtonpost.com' + item['Article']

        articleUrls.append({"url": url})
        articleUrls2.append(url)

    # Write the modified data to a new JSON file
    with open(output_file, 'w') as f:
        json.dump(articleUrls, f, indent=2)

    with open('firstTwoWeeksUrls.json', 'w') as f:
        json.dump(articleUrls2, f, indent=2)

    print(len(articleUrls))

# Example usage:
input_file_path = 'washpoArticlesFirst2Weeks.json'  # Replace with your input file path
output_file_path = 'scapperInput.json'  # Replace with your desired output file path

process_json_file(input_file_path, output_file_path)