content_ts = open('data/toolsData.ts').read()
content_pi = open('data/toolsProductInfo.ts').read()
tools = [
    ("promptchan-ai","Promptchan AI","AI image generator for creating uncensored and anime-style characters with full customization","https://promptchan.com",3800,4.5,"🎨"),
    ("kindroid-ai","Kindroid AI","AI companion with deep memory custom backstory and voice calls for meaningful relationships","https://kindroid.ai",3600,4.6,"🤖"),
    ("nomi-ai","Nomi AI","Emotionally intelligent AI companion that grows with you through persistent memory","https://nomi.ai",3500,4.6,"🌟"),
    ("polybuzz-ai","PolyBuzz","Free AI character chat platform with thousands of anime and fictional AI companions","https://www.polybuzz.ai",3400,4.4,"💬"),
    ("herahaven","HeraHaven","Premium AI girlfriend platform with realistic conversations and deep emotional bonding","https://herahaven.com",3300,4.5,"👑"),
    ("nastia-ai","Nastia AI","Uncensored AI companion for deep emotional and personal conversations without restrictions","https://www.nastia.ai",3200,4.4,"🌹"),
    ("uncensored-com","Uncensored AI","Unrestricted AI companion platform for adult creative writing and character roleplay","https://uncensored.com",3100,4.3,"🔓"),
    ("nsfwlover","NSFWLover","AI girlfriend platform with explicit content voice messages and intimate companion experiences","https://www.nsfwlover.com",3000,4.3,"💋"),
    ("romanticai","Romantic AI","AI companion app focused on romantic relationships with voice chat and emotional connection","https://romanticai.app",2900,4.4,"💌"),
    ("funfun-ai","FunFun AI","Creative AI companion platform for fun roleplay chat and AI image generation","https://www.funfun.ai",2800,4.2,"🎉"),
    ("kupid-ai","Kupid AI","AI girlfriend platform with ultra-realistic conversations and customizable personality traits","https://kupid.ai",2750,4.4,"💘"),
    ("flipped-chat","Flipped Chat","Reverse roleplay AI chat where AI drives narrative scenarios and you shape the story","https://flipped.chat",2700,4.2,"🔄"),
    ("muah-ai","Muah AI","AI companion with photo sharing voice messages and uncensored intimate conversations","https://muah.ai",2650,4.3,"💋"),
    ("secret-desires-ai","Secret Desires AI","Private AI girlfriend platform for discreet and personalized romantic companion experiences","https://secretdesires.ai",2600,4.2,"🔐"),
    ("rubii-ai","Rubii AI","AI companion platform with anime-style characters and deep conversational roleplay","https://rubii.ai",2550,4.1,"💎"),
    ("infatuated-ai","Infatuated AI","AI girlfriend simulator with emotional depth memory and personalized romantic experiences","https://infatuated.ai",2500,4.2,"❤️"),
    ("dreamgf-ai","DreamGF AI","Create your perfect AI girlfriend from scratch with full appearance and personality customization","https://dreamgf.ai",2450,4.4,"💝"),
    ("craveu-ai","CraveU AI","AI companion platform for intimate roleplay custom characters and voice interaction","https://craveu.ai",2400,4.2,"🔥"),
    ("flave-ai","Flave AI","Personalized AI girlfriend with adaptive personality memory and engaging daily conversations","https://www.flave.ai",2350,4.1,"🌺"),
    ("nectar-ai","Nectar AI","Premium AI companion with stunning visuals voice chat and deeply personalized interactions","https://trynectar.ai",2300,4.3,"🍯"),
    ("pephop-ai2","PepHop AI","AI character chat platform with thousands of anime fictional and custom AI companions","https://pephop.ai",2250,4.4,"🎭"),
    ("lustgf-ai","LustGF AI","AI girlfriend platform for adult roleplay with fully customizable characters and scenarios","https://www.lustgf.ai",2200,4.1,"💕"),
    ("onlychar-ai","OnlyChar AI","Create and chat with custom AI characters for immersive companion and roleplay experiences","https://www.onlychar.ai",2150,4.1,"👤"),
    ("ai-girlfriend-alice","AI Girlfriend Alice","Dedicated AI girlfriend app with sweet personality daily conversations and emotional support","https://aigirl.one",2100,4.2,"👧"),
    ("girlfriendly-ai","Girlfriendly AI","Safe and fun AI girlfriend platform for casual companionship and daily chat","https://girlfriendly.ai",2050,4.1,"💗"),
    ("gening-ai","Gening AI","AI image and companion generation platform for creating custom virtual girlfriends","https://www.gening.ai",2000,4.0,"✨"),
    ("ai-allure","AI Allure","Luxury AI companion experience with photorealistic characters and premium conversation quality","https://www.aiallure.com",1950,4.2,"💫"),
    ("chatsweetie","ChatSweetie","Sweet and caring AI girlfriend for wholesome daily conversations and emotional companionship","https://chatsweetie.ai",1900,4.1,"🍬"),
    ("aicupid","AICupid","AI dating companion platform for practicing social skills and enjoying romantic conversations","https://www.aicupid.org",1850,4.0,"💘"),
    ("erogen-ai","Erogen AI","Adult AI companion platform with unrestricted roleplay and customizable intimate characters","https://erogen.ai",1800,4.0,"🌙"),
]
tb = ""
for t in tools:
    tb += '\n      { id: "' + t[0] + '", name: "' + t[1] + '", description: "' + t[2] + '", url: "' + t[3] + '", upvotes: ' + str(t[4]) + ', verified: false, rating: ' + str(t[5]) + ', icon: "' + t[6] + '", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },'
content_ts = content_ts.replace('    "ai-girlfriend": [', '    "ai-girlfriend": [' + tb)
open('data/toolsData.ts', 'w').write(content_ts)
print("Added", len(tools), "tools to toolsData.ts")
