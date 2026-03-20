import requests
from bs4 import BeautifulSoup
import csv
import time
import re

CATEGORIES = [
    ("image-generation-editing", "https://aitools.inc/categories/ai-image-generators"),
    ("image-generation-editing", "https://aitools.inc/categories/ai-image-tools"),
    ("video-animation", "https://aitools.inc/categories/ai-video-tools"),
    ("video-animation", "https://aitools.inc/categories/ai-video-generators"),
    ("writing-editing", "https://aitools.inc/categories/ai-writing-assistants"),
    ("writing-editing", "https://aitools.inc/categories/ai-copywriting-tools"),
    ("coding-development", "https://aitools.inc/categories/ai-developer-tools"),
    ("marketing-advertising", "https://aitools.inc/categories/ai-marketing-tools"),
    ("marketing-advertising", "https://aitools.inc/categories/ai-social-media-tools"),
    ("marketing-advertising", "https://aitools.inc/categories/ai-seo-tools"),
    ("office-productivity", "https://aitools.inc/categories/ai-productivity-tools"),
    ("office-productivity", "https://aitools.inc/categories/ai-automation-tools"),
    ("business-management", "https://aitools.inc/categories/ai-business-tools"),
    ("business-management", "https://aitools.inc/categories/ai-sales-tools"),
    ("education-translation", "https://aitools.inc/categories/ai-education-tools"),
    ("health-wellness", "https://aitools.inc/categories/ai-healthcare-tools"),
    ("art-creative-design", "https://aitools.inc/categories/ai-design-tools"),
    ("art-creative-design", "https://aitools.inc/categories/ai-art-tools"),
    ("music-audio", "https://aitools.inc/categories/ai-audio-tools"),
    ("voice-generation-conversion", "https://aitools.inc/categories/ai-text-to-speech-tools"),
    ("research-data-analysis", "https://aitools.inc/categories/ai-research-tools"),
    ("chatbots-virtual-companions", "https://aitools.inc/categories/ai-chatbots"),
]

HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

def is_valid_name(name):
    if not name or len(name) < 2 or len(name) > 60:
        return False
    if name.startswith("$") or name.startswith('"'):
        return False
    if re.match(r'^[\$\d\s\.\/,]+$', name):
        return False
    if any(x in name.lower() for x in ["per mo", "per year", "free trial", "pricing", "sign up", "log in", "arrow"]):
        return False
    return True

def scrape_category(category_key, url):
    tools = []
    print(f"\n Scraping {category_key}")
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(resp.text, "html.parser")
        seen = set()
        for a in soup.find_all("a", href=True):
            href = a["href"]
            if "/tools/" not in href:
                continue
            # Get only direct text of the link, not child elements
            name = a.get_text(strip=True)
            # Clean up name - remove numbers at end like "321"
            name = re.sub(r'\s+\d+$', '', name).strip()
            if not is_valid_name(name) or name in seen:
                continue
            seen.add(name)
            desc = ""
            # Look for description in nearby p tag
            parent = a.find_parent()
            if parent:
                p = parent.find("p")
                if p:
                    desc = p.get_text(strip=True)[:200]
            full_url = "https://aitools.inc" + href if href.startswith("/") else href
            tools.append({"name": name, "category": category_key, "description": desc, "website": full_url, "pricing": "Free", "source_url": full_url})
            print(f"  + {name}")
    except Exception as e:
        print(f"  Error: {e}")
    return tools

def main():
    all_tools = []
    seen = set()
    for cat, url in CATEGORIES:
        tools = scrape_category(cat, url)
        for t in tools:
            if t["name"] not in seen:
                seen.add(t["name"])
                all_tools.append(t)
        time.sleep(2)
    with open("aitoolsinc_tools2.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["name","category","description","website","pricing","source_url"])
        writer.writeheader()
        writer.writerows(all_tools)
    print(f"\nDone! {len(all_tools)} tools saved to aitoolsinc_tools2.csv")

if __name__ == "__main__":
    main()
