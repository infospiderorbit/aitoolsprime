import re

content = open('data/toolsData.ts').read()

# Tools to move: (tool_id, target_bucket)
moves = [
    ('manus-ai', 'ai-agent'),
    ('agnes-ai', 'ai-agent'),
    ('unlucid-ai', 'ai-art-generator'),
    ('vheer-ai', 'ai-art-generator'),
    ('dreamina-ai', 'ai-art-generator'),
    ('pica-ai', 'ai-art-generator'),
    ('pixnova-ai', 'ai-art-generator'),
    ('spicychat-ai', 'ai-character'),
    ('pephop-ai', 'ai-character'),
    ('joyland-ai', 'ai-character'),
    ('khui-ai', 'ai-character'),
    ('sakura-ai', 'ai-character'),
    ('lunchbreak-ai', 'ai-bypasser'),
    ('celebify-ai', 'ai-influencer'),
    ('createporn', 'nsfw'),
    ('motionmuse-ai', 'nsfw'),
    ('2short-ai', 'ai-short-video-generator'),
    ('pixnova-ai', 'ai-art-generator'),
    ('learning-studio-ai', 'ai-course-creator'),
    ('doctrina-ai', 'ai-quiz-generator'),
    ('beart-ai', 'ai-photo-editor'),
]

moved = 0
for tool_id, target_bucket in moves:
    # Find the tool line
    tool_pattern = re.compile(r'\n      \{ id: "' + tool_id + r'"[^\}]+\},')
    match = tool_pattern.search(content)
    if not match:
        print(f"NOT FOUND: {tool_id}")
        continue
    
    tool_line = match.group(0)
    
    # Check if already in correct bucket
    tool_pos = match.start()
    # Find which bucket this tool is in
    bucket_start = content.rfind('"' + target_bucket + '": [', 0, tool_pos)
    bucket_end = content.find('\n    ],', bucket_start) if bucket_start != -1 else -1
    
    if bucket_start != -1 and bucket_start < tool_pos < bucket_end:
        print(f"OK: {tool_id} already in {target_bucket}")
        continue
    
    # Remove from current location
    content = content.replace(tool_line, '', 1)
    
    # Add to target bucket
    target_pattern = '"' + target_bucket + '": ['
    if target_pattern in content:
        content = content.replace(target_pattern, target_pattern + tool_line, 1)
        print(f"Moved {tool_id} -> {target_bucket}")
        moved += 1
    else:
        print(f"TARGET BUCKET NOT FOUND: {target_bucket}")
        # Put it back
        content = content.replace(target_pattern, target_pattern + tool_line, 1)

open('data/toolsData.ts', 'w').write(content)
print(f"\nDone! Moved {moved} tools")
