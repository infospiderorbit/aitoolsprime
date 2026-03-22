import re
content = open('data/toolsData.ts').read()

cat_start = content.find('"writing-editing": {')
next_cat = re.search(r'\n  "[a-z][a-z-]+": \{', content[cat_start+10:])
cat_end = cat_start + 10 + next_cat.start()
cat_content = content[cat_start:cat_end]

buckets = re.findall(r'    "([a-z][a-z0-9-]+)": \[', cat_content)

b_start = cat_content.find('    "ai-blog-generator": [')
b_end = cat_content.find('\n    ],', b_start)
bucket_content = cat_content[b_start:b_end]

moved = 0
for tool_match in re.finditer(r'(\n      \{ id: "[^"]+".*?subcategory: "([^"]+)"[^}]*\},)', bucket_content, re.DOTALL):
    tool_str = tool_match.group(1)
    actual_sub = tool_match.group(2)
    if actual_sub != 'ai-blog-generator':
        cat_content = cat_content.replace(tool_str, '', 1)
        if actual_sub in buckets:
            cat_content = cat_content.replace('    "' + actual_sub + '": [', '    "' + actual_sub + '": [' + tool_str, 1)
        moved += 1

content = content[:cat_start] + cat_content + content[cat_end:]
open('data/toolsData.ts', 'w').write(content)
print(f'Fixed! Moved/removed {moved} tools')
