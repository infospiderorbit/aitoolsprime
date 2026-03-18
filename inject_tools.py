import re

with open("data/toolsData.ts", "r") as f:
    content = f.read()

with open("new_tools_formatted.ts", "r") as f:
    new_lines = f.readlines()

# Group new tools by category
from collections import defaultdict
categories = defaultdict(list)
for line in new_lines:
    line = line.strip()
    if not line:
        continue
    match = re.search(r'category: "([^"]+)"', line)
    if match:
        categories[match.group(1)].append(line)

# Inject into each category
injected = 0
for category, tools in categories.items():
    tools_block = "\n      " + "\n      ".join(tools)
    # Find the category key and inject after its opening bracket
    pattern = f'"{category}": {{'
    idx = content.find(pattern)
    if idx == -1:
        print(f"⚠️  Category not found: {category}")
        continue
    # Find the first [ after the category opening
    bracket_idx = content.find("[", idx)
    if bracket_idx == -1:
        continue
    content = content[:bracket_idx+1] + tools_block + "\n" + content[bracket_idx+1:]
    injected += len(tools)
    print(f"✅ Added {len(tools)} tools to {category}")

with open("data/toolsData.ts", "w") as f:
    f.write(content)

print(f"\n✅ Done! {injected} tools injected into toolsData.ts")
