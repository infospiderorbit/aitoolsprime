import re
content = open('data/toolsData.ts').read()

# Find and fix all tools that have subcategory matching their category
# sitting inside wrong bucket
fixed = 0
pattern = re.compile(r'(\n      \{ id: "[^"]+".*?subcategory: "([^"]+)"[^}]*\},)', re.DOTALL)

def fix_cat(content, category):
    cat_start = content.find('"' + category + '": {')
    if cat_start == -1:
        return content, 0
    next_cat = re.search(r'\n  "[a-z][a-z-]+": \{', content[cat_start+10:])
    cat_end = cat_start + 10 + next_cat.start() if next_cat else content.rfind('\n};')
    cat_content = content[cat_start:cat_end]
    buckets = re.findall(r'    "([a-z][a-z0-9-]+)": \[', cat_content)
    removed = 0
    for tool_m in pattern.finditer(cat_content):
        tool_str = tool_m.group(1)
        actual_sub = tool_m.group(2)
        if actual_sub == category:
            cat_content = cat_content.replace(tool_str, '', 1)
            removed += 1
    content = content[:cat_start] + cat_content + content[cat_end:]
    return content, removed

cats = ['writing-editing','image-generation-editing','video-animation','coding-development',
        'marketing-advertising','office-productivity','business-management','education-translation',
        'health-wellness','art-creative-design','music-audio','voice-generation-conversion',
        'research-data-analysis','chatbots-virtual-companions']

total = 0
for cat in cats:
    content, removed = fix_cat(content, cat)
    if removed:
        print(f'Removed {removed} wrong tools from {cat}')
    total += removed

open('data/toolsData.ts', 'w').write(content)
print(f'Total removed: {total}')
