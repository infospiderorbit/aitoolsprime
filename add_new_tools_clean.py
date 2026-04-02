content = open('data/toolsData.ts').read()

new_tools = [
    ("joyland-ai", "Joyland AI", "chatbots-virtual-companions", "ai-characters", "Joyland AI is an immersive AI character chat platform for creative roleplay and storytelling with anime and fictional companions", "https://www.joyland.ai", 3600, 4.3, "🎪"),
    ("khui-ai", "Khui AI", "chatbots-virtual-companions", "ai-companion", "Khui AI is an AI companion platform offering personalized conversation and emotional support with customizable personality settings", "https://www.khuiai.com/en", 2600, 4.1, "💭"),
    ("celebify-ai", "Celebify AI", "image-generation-editing", "ai-face-generator", "Celebify AI is an AI face and image generation tool that creates celebrity-style photorealistic portraits and custom character images", "https://www.celebifyai.net", 2900, 4.2, "⭐"),
    ("createporn", "CreatePorn", "image-generation-editing", "nsfw-generator", "CreatePorn is an adult AI image generation platform for creating explicit NSFW content with full customization and no content restrictions", "https://www.createporn.com", 3200, 4.1, "🔞"),
    ("motionmuse-ai", "MotionMuse AI", "video-animation", "ai-animation", "MotionMuse AI is an AI-powered animation platform that generates smooth animated videos and motion graphics from text prompts", "https://motionmuse.ai", 2700, 4.2, "🎬"),
    ("2short-ai", "2short AI", "video-animation", "video-editing", "2short AI automatically converts long YouTube videos into engaging short clips optimized for TikTok Instagram Reels and YouTube Shorts", "https://2short.ai", 3400, 4.5, "✂️"),
    ("learning-studio-ai", "Learning Studio AI", "education-translation", "ai-course-creator", "Learning Studio AI is an AI-powered course creation platform that automatically generates educational content quizzes and lessons from any topic", "https://learningstudioai.com", 3100, 4.4, "📚"),
    ("sakura-ai", "Sakura AI", "chatbots-virtual-companions", "ai-companion", "Sakura AI is an anime-inspired AI companion platform featuring real-time voice interaction and immersive character conversations", "https://www.sakura.fm", 3500, 4.5, "🌸"),
    ("doctrina-ai", "Doctrina AI", "education-translation", "ai-study-tool", "Doctrina AI is an AI education platform helping students with exam preparation essay writing note summarization and interactive learning", "https://doctrina.ai", 3200, 4.4, "🎓"),
    ("beart-ai", "BeArt AI", "image-generation-editing", "image-editing", "BeArt AI is an AI-powered portrait and photo enhancement platform specializing in face beautification art style transfers and professional photo editing", "https://beart.ai", 2900, 4.3, "🎭"),
]

added = 0
for t in new_tools:
    tool_id, name, category, subcategory, desc, url, upvotes, rating, icon = t
    if 'id: "' + tool_id + '"' in content:
        print(f"SKIP {name} - already exists")
        continue
    pattern = '    "' + subcategory + '": ['
    if pattern not in content:
        # Try first subcategory of category
        cat_idx = content.find('"' + category + '": {')
        if cat_idx != -1:
            bracket = content.find('[', cat_idx)
            tool_line = '\n      { id: "' + tool_id + '", name: "' + name + '", description: "' + desc + '", url: "' + url + '", upvotes: ' + str(upvotes) + ', verified: false, rating: ' + str(rating) + ', icon: "' + icon + '", category: "' + category + '", subcategory: "' + subcategory + '", addedDate: "2026-04-01" },'
            content = content[:bracket+1] + tool_line + content[bracket+1:]
            print(f"Added {name} to {category} first bucket")
            added += 1
    else:
        tool_line = '\n      { id: "' + tool_id + '", name: "' + name + '", description: "' + desc + '", url: "' + url + '", upvotes: ' + str(upvotes) + ', verified: false, rating: ' + str(rating) + ', icon: "' + icon + '", category: "' + category + '", subcategory: "' + subcategory + '", addedDate: "2026-04-01" },'
        content = content.replace(pattern, pattern + tool_line, 1)
        print(f"Added {name} to {subcategory}")
        added += 1

open('data/toolsData.ts', 'w').write(content)
print(f"\nDone! Added {added} new tools")
