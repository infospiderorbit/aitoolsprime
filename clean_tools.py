import csv
import re

JUNK = [
    "sign up", "bonus", "newsletter", "we may earn", "contact", "about",
    "advertise", "media kit", "ai conferences", "ai glossary", "explore ai jobs",
    "best ai youtube", "top 100", "gpts list", "hubspot", "feature your tool",
    "tutorials", "disclosure", "cookie", "privacy", "terms", "login",
    "4.0/5", "4.1/5", "4.2/5", "4.3/5", "4.4/5", "4.5/5", "4.6/5", "4.7/5",
    "4.8/5", "4.9/5", "5.0/5", "3.0/5", "3.5/5", "«", "»"
]

def is_junk(name):
    name_lower = name.lower()
    for j in JUNK:
        if j in name_lower:
            return True
    if len(name) < 3:
        return True
    if name.startswith("«") or name.startswith("»"):
        return True
    return False

cleaned = []
seen = set()

with open("aixploria_tools.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = row["name"].strip()
        if is_junk(name):
            continue
        # Clean up description — remove rating strings
        desc = row["description"].strip()
        desc = re.sub(r'^\d+\.\d+/5$', '', desc).strip()
        if name not in seen:
            seen.add(name)
            row["description"] = desc
            cleaned.append(row)

with open("aixploria_tools_clean.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "category", "description", "website", "pricing", "source_url"])
    writer.writeheader()
    writer.writerows(cleaned)

print(f"✅ Cleaned! {len(cleaned)} tools saved to aixploria_tools_clean.csv")
