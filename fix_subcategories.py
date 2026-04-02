import re
content = open('data/toolsData.ts').read()

# 1. Create ai-course-creator subcategory under education-translation
edu_pattern = '"education-translation": {'
edu_idx = content.find(edu_pattern)
if edu_idx != -1:
    first_bracket = content.find('[', edu_idx)
    new_subcat = '\n    "ai-course-creator": [],'
    # Find a good place to insert - after first existing subcategory closing
    insert_pos = content.find('\n    "', edu_idx + len(edu_pattern))
    if insert_pos != -1:
        content = content[:insert_pos] + new_subcat + content[insert_pos:]
        print("Created ai-course-creator subcategory")

# 2. Update tool subcategories
updates = {
    'manus-ai': 'ai-agent',
    'unlucid-ai': 'ai-art-generator',
    'spicychat-ai': 'ai-character',
    'pephop-ai': 'ai-character',
    'joyland-ai': 'ai-character',
    'lunchbreak-ai': 'ai-bypasser',
    'vheer-ai': 'ai-art-generator',
    'khui-ai': 'ai-character',
    'dreamina-ai': 'ai-art-generator',
    'celebify-ai': 'ai-influencer',
    'createporn': 'nsfw',
    'motionmuse-ai': 'nsfw',
    'pica-ai': 'ai-art-generator',
    'agnes-ai': 'ai-agent',
    '2short-ai': 'ai-short-video-generator',
    'pixnova-ai': 'ai-art-generator',
    'learning-studio-ai': 'ai-course-creator',
    'sakura-ai': 'ai-character',
    'doctrina-ai': 'ai-quiz-generator',
    'beart-ai': 'ai-photo-editor',
}

for tool_id, new_sub in updates.items():
    # Find the tool line and update subcategory
    pattern = r'(id: "' + tool_id + r'".*?subcategory: ")[^"]*(")'
    new_content = re.sub(pattern, r'\g<1>' + new_sub + r'\2', content, flags=re.DOTALL)
    if new_content != content:
        content = new_content
        print(f"Updated {tool_id} -> {new_sub}")
    else:
        print(f"WARNING: {tool_id} not found")

open('data/toolsData.ts', 'w').write(content)
print("\nDone!")
