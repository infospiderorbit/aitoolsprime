import re
content = open("data/toolsData.ts").read()
batch_ids = ["mybabes-ai","promptchan-ai","kindroid-ai","nomi-ai","polybuzz-ai","herahaven","nastia-ai","uncensored-com","nsfwlover","romanticai","funfun-ai","kupid-ai","flipped-chat","muah-ai","secret-desires-ai","rubii-ai","infatuated-ai","dreamgf-ai","craveu-ai","flave-ai","nectar-ai","pephop-ai2","lustgf-ai","onlychar-ai","ai-girlfriend-alice","girlfriendly-ai","gening-ai","ai-allure","chatsweetie","aicupid","erogen-ai"]
count = 0
for tid in batch_ids:
    old = "id: \"" + tid + "\""
    new = "id: \"" + tid + "\", addedDate: \"2026-03-31\""
    if old in content:
        content = content.replace(old, new, 1)
        count += 1
open("data/toolsData.ts", "w").write(content)
print("Updated", count, "tools")
