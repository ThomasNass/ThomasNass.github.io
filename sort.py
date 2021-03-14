import json
import re

# file to convert
file = "ScoreKeeper\Project\ordspråk.txt"

# create dictionary where data will be stored
dict = {}

# read file
with open(file) as fn:
    for d in fn:
        # read lines from file and trim spaces to get valid words only
        key, desc = re.split("-", d)
        dict[key] = desc.strip()

# now thta dictionary is created, lets create json output file
otfile = open("output.json", "w")
json.dump(dict, otfile)
otfile.close()

# lets run
