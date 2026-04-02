import re
content = open('data/toolsData.ts').read()

# Remove all pixnova entries
tool_pattern = re.compile(r'\n      \{ id: "pixnova-ai"[^\}]+\},')
matches = tool_pattern.findall(content)
print(f"Found {len(matches)} pixnova entries - removing all")
content = tool_pattern.sub('', content)

# Add one entry to ai-image-generator
tool_line1 = '\n      { id: "pixnova-ai", name: "Pixnova AI", description: "Pixnova AI is a creative AI image and video generation platform producing high-quality artwork and multimedia content from text descriptions", url: "https://pixnova.ai", upvotes: 2800, verified: false, rating: 4.2, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-image-generator", addedDate: "2026-04-01" },'

# Add another entry to ai-video-generator  
tool_line2 = '\n      { id: "pixnova-ai-video", name: "Pixnova AI", description: "Pixnova AI creates AI-generated videos from text descriptions with multiple art styles and high-quality output", url: "https://pixnova.ai", upvotes: 2800, verified: false, rating: 4.2, icon: "🖼️", category: "video-animation", subcategory: "ai-video-generator", addedDate: "2026-04-01" },'

content = content.replace('"ai-image-generator": [', '"ai-image-generator": [' + tool_line1, 1)
content = content.replace('"ai-video-generator": [', '"ai-video-generator": [' + tool_line2, 1)

open('data/toolsData.ts', 'w').write(content)
print("Done! Pixnova now in ai-image-generator and ai-video-generator")
