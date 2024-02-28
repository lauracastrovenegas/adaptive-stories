import os
import urllib
from bs4 import BeautifulSoup
from urllib.request import urlopen
import json
from collections import defaultdict
from PIL import Image
import requests
import argparse
from datetime import date, timedelta, datetime
import json

parser = argparse.ArgumentParser(description='Parser')
parser.add_argument("--output_dir", type=str, help="output directory")
parser.add_argument("--input_filename", type=str, help="input json filename")
args = parser.parse_args()
output_dir=args.output_dir
input_filename=args.input_filename

os.makedirs(output_dir, exist_ok=True)

f = open(input_filename)
data = json.load(f)
print(len(data))

for item in data:
    file_name = '%s' % item["headline"]

    with open(os.path.join(output_dir, file_name+'.json'), 'w') as writer:
        json_object = json.dumps(item, indent=4)        
        writer.write(json_object)