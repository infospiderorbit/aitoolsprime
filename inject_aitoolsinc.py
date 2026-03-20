import csv
import re

# Load new tool names
with open("new_aitoolsinc_tools.txt") as f:
    new_names = set(line.strip() for line in f if line.strip())

# Load scraped data
tools_by_name = {}
with open("aitoolsinc_tools2.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = row["name"].strip()
        if name in new_names and name not in tools_by_name:
            tools_by_name[name] = row

print(f"Matched {len(tools_by_name)} tools")

# Load existing toolsData.ts
content = open("data/toolsData.ts").read()

# Group by category
from collections import defaultdict
by_category = defaultdict(list)
for name, tool in tools_by_name.items():
    by_category[tool["category"]].append(tool)

injected = 0
for category, tools in by_category.items():
    pattern = f'"{category}": {{'
    idx = content.find(pattern)
    if idx == -1:
        print(f"Category not found: {category}")
        continue
    bracket_idx = content.find("[", idx)
    if bracket_idx == -1:
        continue
    
    tools_block = ""
    for t in tools:
        name = t["name"].replace('"', "'")
        desc = t["description"].replace('"', "'")[:150]
        if not desc:
            desc = f"AI-powered tool for {category.replace('-', ' ')}"
        tool_id = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        line = f'\n      {{ id: "{tool_id}", name: "{name}", description: "{desc}", url: "{t["website"]}", upvotes: 50, verified: false, rating: 4.0, icon: "🤖", category: "{category}", subcategory: "{category}" }},'
        tools_block += line
    
    content = content[:bracket_idx+1] + tools_block + "\n" + content[bracket_idx+1:]
    injected += len(tools)
    print(f"Added {len(tools)} tools to {category}")

open("data/toolsData.ts", "w").write(content)
print(f"Done! {injected} tools injected!")
