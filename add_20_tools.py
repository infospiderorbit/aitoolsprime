import re

content_ts = open('data/toolsData.ts').read()
content_pi = open('data/toolsProductInfo.ts').read()

# Tool entries for toolsData.ts
tools = [
    ("spicychat-ai", "SpicyChat AI", "chatbots-virtual-companions", "ai-characters", "SpicyChat AI is an uncensored AI chatbot platform with over 850000 community-created characters for creative roleplay, adult conversations and personalized companion experiences", "https://spicychat.ai", 4200, 4.5, "🌶️"),
    ("pephop-ai", "PepHop AI", "chatbots-virtual-companions", "ai-characters", "PepHop AI is a popular character chat platform with thousands of anime, fictional and custom AI companions supporting both SFW and NSFW interaction modes", "https://pephop.ai", 3800, 4.4, "🎭"),
    ("joyland-ai", "Joyland AI", "chatbots-virtual-companions", "ai-characters", "Joyland AI is an immersive AI character chat platform for roleplay and creative storytelling with customizable anime and fictional companions", "https://www.joyland.ai", 3600, 4.3, "🎪"),
    ("lunchbreak-ai", "Lunchbreak AI", "office-productivity", "ai-assistant", "Lunchbreak AI is a quick productivity AI tool designed for short focused work sessions helping users accomplish tasks efficiently during breaks", "https://lunchbreak.ai", 2800, 4.2, "☕"),
    ("vheer-ai", "Vheer AI", "image-generation-editing", "text-to-image", "Vheer AI is an advanced AI image generation platform creating high-quality realistic and artistic images from text prompts with multiple style options", "https://vheer.com", 3100, 4.3, "🎨"),
    ("khui-ai", "Khui AI", "chatbots-virtual-companions", "ai-companion", "Khui AI is an AI companion platform offering personalized conversation and emotional support with customizable personality settings", "https://www.khuiai.com/en", 2600, 4.1, "💭"),
    ("dreamina-ai", "Dreamina AI", "image-generation-editing", "text-to-image", "Dreamina AI by CapCut is a powerful AI image and video generation platform creating stunning visuals from text descriptions with professional quality output", "https://dreamina.capcut.com", 4100, 4.6, "✨"),
    ("celebify-ai", "Celebify AI", "image-generation-editing", "ai-face-generator", "Celebify AI is an AI face and image generation tool that creates celebrity-style photorealistic portraits and custom character images", "https://www.celebifyai.net", 2900, 4.2, "⭐"),
    ("createporn", "CreatePorn", "image-generation-editing", "nsfw-generator", "CreatePorn is an adult AI image generation platform for creating explicit NSFW content with full customization and no content restrictions", "https://www.createporn.com", 3200, 4.1, "🔞"),
    ("motionmuse-ai", "MotionMuse AI", "video-animation", "ai-animation", "MotionMuse AI is an AI-powered animation platform that generates smooth animated videos and motion graphics from text prompts and images", "https://motionmuse.ai", 2700, 4.2, "🎬"),
    ("pica-ai", "Pica AI", "image-generation-editing", "image-editing", "Pica AI is an AI photo editing and enhancement platform offering face swapping, background removal, image restoration and creative photo effects", "https://www.pica-ai.com", 3300, 4.4, "📸"),
    ("agnes-ai", "Agnes AI", "office-productivity", "ai-assistant", "Agnes AI is an intelligent AI assistant platform helping users with research, writing, and task automation through conversational AI interactions", "https://agnes-ai.com", 2500, 4.1, "🤖"),
    ("2short-ai", "2short AI", "video-animation", "video-editing", "2short AI is an AI-powered video repurposing tool that automatically converts long YouTube videos into engaging short clips optimized for social media", "https://2short.ai", 3400, 4.5, "✂️"),
    ("pixnova-ai", "Pixnova AI", "image-generation-editing", "text-to-image", "Pixnova AI is a creative AI image generation platform producing high-quality artwork, illustrations and photos from text descriptions with multiple art styles", "https://pixnova.ai", 2800, 4.2, "🖼️"),
    ("learning-studio-ai", "Learning Studio AI", "education-translation", "ai-course-creator", "Learning Studio AI is an AI-powered course creation platform that automatically generates educational content, quizzes and interactive lessons from any topic", "https://learningstudioai.com", 3100, 4.4, "📚"),
    ("sakura-ai", "Sakura AI", "chatbots-virtual-companions", "ai-companion", "Sakura AI is an anime-inspired AI companion platform featuring voice interaction and immersive character conversations for deep personal connections", "https://www.sakura.fm", 3500, 4.5, "🌸"),
    ("doctrina-ai", "Doctrina AI", "education-translation", "ai-study-tool", "Doctrina AI is an AI education platform helping students with exam preparation, essay writing, note summarization and interactive learning through AI assistance", "https://doctrina.ai", 3200, 4.4, "🎓"),
    ("beart-ai", "BeArt AI", "image-generation-editing", "image-editing", "BeArt AI is an AI-powered portrait and photo enhancement platform specializing in face beautification, art style transfers and professional photo editing", "https://beart.ai", 2900, 4.3, "🎭"),
    ("manus-ai", "Manus AI", "chatbots-virtual-companions", "ai-agents", "Manus AI is an autonomous AI agent platform acquired by Meta that independently executes complex multi-step tasks including research, coding, web browsing and document creation without human intervention", "https://manus.im", 4500, 4.7, "🤖"),
    ("unlucid-ai", "Unlucid AI", "image-generation-editing", "text-to-image", "Unlucid AI is a creative AI image generation platform producing surreal dreamlike and artistic visuals from text prompts with unique style capabilities", "https://unlucid.ai", 2600, 4.1, "🌙"),
]

# Add to toolsData.ts
tb = ""
for t in tools:
    tb += '\n      { id: "' + t[0] + '", name: "' + t[1] + '", description: "' + t[4] + '", url: "' + t[5] + '", upvotes: ' + str(t[6]) + ', verified: false, rating: ' + str(t[7]) + ', icon: "' + t[8] + '", category: "' + t[2] + '", subcategory: "' + t[3] + '", addedDate: "2026-04-01" },'

# Add to first subcategory of each category that contains the tool
for t in tools:
    cat = t[2]
    subcat = t[3]
    pattern = '    "' + subcat + '": ['
    if pattern in content_ts:
        content_ts = content_ts.replace(pattern, pattern + tb.split('\n')[tools.index(t)+1] if False else pattern)

# Better approach - add to correct subcategory
for t in tools:
    subcat = t[3]
    pattern = '    "' + subcat + '": ['
    tool_line = '\n      { id: "' + t[0] + '", name: "' + t[1] + '", description: "' + t[4] + '", url: "' + t[5] + '", upvotes: ' + str(t[6]) + ', verified: false, rating: ' + str(t[7]) + ', icon: "' + t[8] + '", category: "' + t[2] + '", subcategory: "' + t[3] + '", addedDate: "2026-04-01" },'
    if pattern in content_ts:
        content_ts = content_ts.replace(pattern, pattern + tool_line, 1)
        print(f"Added {t[1]} to {t[3]}")
    else:
        print(f"WARNING: subcategory {t[3]} not found for {t[1]}")

open('data/toolsData.ts', 'w').write(content_ts)
print(f"\nDone! Added {len(tools)} tools to toolsData.ts")
