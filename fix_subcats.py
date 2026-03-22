import re

content = open('data/toolsData.ts').read()

def fix_category(content, category):
    cat_start = content.find('"' + category + '": {')
    if cat_start == -1:
        return content, 0
    next_cat = re.search(r'\n  "[a-z][a-z-]+": \{', content[cat_start+10:])
    cat_end = cat_start + 10 + next_cat.start() if next_cat else content.rfind('\n};')
    cat_content = content[cat_start:cat_end]
    buckets = re.findall(r'    "([a-z][a-z0-9-]+)": \[', cat_content)
    moved = 0
    for bucket in buckets:
        bucket_pattern = '    "' + bucket + '": ['
        b_start = cat_content.find(bucket_pattern)
        if b_start == -1:
            continue
        b_end = cat_content.find('\n    ],', b_start)
        if b_end == -1:
            continue
        for tool_match in re.finditer(r'(\n      \{ id: "[^"]+".+?subcategory: "([^"]+)"[^}]*\},)', cat_content[b_start:b_end], re.DOTALL):
            tool_str = tool_match.group(1)
            actual_sub = tool_match.group(2)
            if actual_sub != bucket and actual_sub in buckets:
                cat_content = cat_content.replace(tool_str, '', 1)
                correct = '    "' + actual_sub + '": ['
                cat_content = cat_content.replace(correct, correct + tool_str, 1)
                moved += 1
    content = content[:cat_start] + cat_content + content[cat_end:]
    return content, moved

categories = ['writing-editing','image-generation-editing','video-animation','coding-development','marketing-advertising','office-productivity','business-management','education-translation','health-wellness','art-creative-design','music-audio','voice-generation-conversion','research-data-analysis','chatbots-virtual-companions']

total = 0
for cat in categories:
    content, moved = fix_category(content, cat)
    if moved > 0:
        print(f'Moved {moved} in {cat}')
    total += moved

open('data/toolsData.ts', 'w').write(content)
print(f'Done! Total moved: {total}')
