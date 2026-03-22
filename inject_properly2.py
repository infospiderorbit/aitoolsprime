import csv, re
from collections import defaultdict

content = open("data/toolsData.ts").read()

with open("new_aitoolsinc_tools.txt") as f:
    new_names = set(line.strip() for line in f if line.strip())

new_tools = []
with open("aitoolsinc_tools2.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        if row["name"] in new_names:
            new_tools.append(row)

print("Tools:", len(new_tools))
by_cat = defaultdict(list)
for t in new_tools:
    by_cat[t["category"]].append(t)

injected = 0
content2 = content
for category, tools in by_cat.items():
    search = chr(34) + category + chr(34) + ": {"
    cat_idx = content2.find(search)
    if cat_idx == -1: continue
    search_pos = cat_idx + len(category) + 10
    next_top = re.search(chr(10) + "  " + chr(34) + "[a-z][a-z-]+" + chr(34) + ": {", content2[search_pos:])
    end_pos = search_pos + next_top.start() if next_top else content2.rfind(chr(10) + "};")
    close_cat = content2.rfind(chr(10) + "  }", cat_idx, end_pos)
    if close_cat == -1: continue
    tb = ""
    for t in tools:
        nm = t["name"].replace(chr(34), chr(39)).strip()
        dc = (t["description"].replace(chr(34), chr(39)).strip()[:150]) or "AI tool"
        tid = re.sub(r"[^a-z0-9]+", "-", nm.lower()).strip("-")[:50]
        tb += chr(10) + "      { id: " + chr(34) + tid + chr(34) + ", name: " + chr(34) + nm + chr(34) + ", description: " + chr(34) + dc + chr(34) + ", url: " + chr(34) + t["website"] + chr(34) + ", upvotes: 50, verified: false, rating: 4.0, icon: " + chr(34) + "🤖" + chr(34) + ", category: " + chr(34) + category + chr(34) + ", subcategory: " + chr(34) + "other-tools" + chr(34) + " },"
    ns = chr(10) + "    " + chr(34) + "other-tools" + chr(34) + ": [" + tb + chr(10) + "    ],"
    content2 = content2[:close_cat] + ns + content2[close_cat:]
    injected += len(tools)
    print("Added", len(tools), "to", category)

open("data/toolsData.ts", "w").write(content2)
print("Done!", injected)