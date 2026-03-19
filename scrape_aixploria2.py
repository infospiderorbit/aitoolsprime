import requests
from bs4 import BeautifulSoup
import csv
import time

CATEGORIES = [
    ("image-generation-editing", "https://www.aixploria.com/en/category/image-editing/"),
    ("video-animation", "https://www.aixploria.com/en/category/video-edition/"),
    ("video-animation", "https://www.aixploria.com/en/category/text-to-video-en/"),
    ("writing-editing", "https://www.aixploria.com/en/category/ai-text-generators/"),
    ("writing-editing", "https://www.aixploria.com/en/category/ai-summarizer/"),
    ("writing-editing", "https://www.aixploria.com/en/category/storytelling-generator/"),
    ("coding-development", "https://www.aixploria.com/en/category/developer-tools/"),
    ("coding-development", "https://www.aixploria.com/en/category/no-code-en/"),
    ("coding-development", "https://www.aixploria.com/en/category/websites-ai/"),
    ("coding-development", "https://www.aixploria.com/en/category/llm-model-ai-en/"),
    ("marketing-advertising", "https://www.aixploria.com/en/category/e-commerce-en/"),
    ("marketing-advertising", "https://www.aixploria.com/en/category/seo-ai-tools/"),
    ("marketing-advertising", "https://www.aixploria.com/en/category/sales-conversion-leads/"),
    ("office-productivity", "https://www.aixploria.com/en/category/e-mail-en/"),
    ("office-productivity", "https://www.aixploria.com/en/category/files-spreadsheets/"),
    ("office-productivity", "https://www.aixploria.com/en/category/presentation-en/"),
    ("office-productivity", "https://www.aixploria.com/en/category/search-engine/"),
    ("office-productivity", "https://www.aixploria.com/en/category/automation-ai-workflows/"),
    ("chatbots-virtual-companions", "https://www.aixploria.com/en/category/life-assistants/"),
    ("chatbots-virtual-companions", "https://www.aixploria.com/en/category/best-ai-agents/"),
    ("music-audio", "https://www.aixploria.com/en/category/ai-voice-cloning/"),
    ("voice-generation-conversion", "https://www.aixploria.com/en/category/voice-reading/"),
    ("voice-generation-conversion", "https://www.aixploria.com/en/category/transcriber/"),
    ("education-translation", "https://www.aixploria.com/en/category/translation-ai/"),
    ("social-media", "https://www.aixploria.com/en/category/social-assistants-en/"),
    ("business-management", "https://www.aixploria.com/en/category/human-resources-ai/"),
    ("business-management", "https://www.aixploria.com/en/category/finance-en/"),
    ("business-management", "https://www.aixploria.com/en/category/customer-support/"),
    ("business-management", "https://www.aixploria.com/en/category/data-analytics-ai/"),
    ("art-creative-design", "https://www.aixploria.com/en/category/avatars-en/"),
    ("art-creative-design", "https://www.aixploria.com/en/category/3d-model/"),
    ("art-creative-design", "https://www.aixploria.com/en/category/best-ai-logo-generators/"),
    ("daily-life", "https://www.aixploria.com/en/category/travel/"),
    ("daily-life", "https://www.aixploria.com/en/category/fashion-en/"),
    ("daily-life", "https://www.aixploria.com/en/category/games-en/"),
    ("legal-finance", "https://www.aixploria.com/en/category/legal-assistants/"),
    ("research-data-analysis", "https://www.aixploria.com/en/category/data-analytics-ai/"),
    ("ai-detection-anti-detection", "https://www.aixploria.com/en/category/ai-detection-en/"),
]

HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

JUNK = ["sign up","bonus","newsletter","we may earn","contact","about","advertise","media kit",
        "ai conferences","ai glossary","explore ai jobs","best ai youtube","top 100","gpts list",
        "hubspot","feature your tool","tutorials","disclosure","cookie","privacy","terms","login",
        "4.0/5","4.1/5","4.2/5","4.3/5","4.4/5","4.5/5","4.6/5","4.7/5","4.8/5","4.9/5","5.0/5","3.0/5","3.5/5"]

def is_junk(name):
    name_lower = name.lower()
    for j in JUNK:
        if j in name_lower:
            return True
    if len(name) < 3 or name.startswith("«") or name.startswith("»"):
        return True
    return False

def scrape_category(category_key, url):
    tools = []
    print(f"\n📁 {category_key}: {url}")
    try:
        response = requests.get(url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(response.text, "html.parser")
        for item in soup.find_all("a", href=True):
            href = item["href"]
            text = item.get_text(strip=True)
            if (text and len(text) > 2 and
                "aixploria.com/en/" in href and
                "/category/" not in href and
                "/en/last-ai" not in href and
                "/en/free-ai" not in href and
                "/en/ai-news" not in href and
                "/ultimate-list" not in href and
                "/categories-ai" not in href and
                "/tutorials" not in href and
                "/add-ai" not in href and
                "/newsletter" not in href and
                "/about" not in href and
                href.count("/") >= 5):
                if is_junk(text):
                    continue
                desc = ""
                parent = item.find_parent()
                if parent:
                    desc_elem = parent.find_next("p")
                    if desc_elem:
                        desc = desc_elem.get_text(strip=True)[:200]
                pricing = "Free"
                img = item.find_next("img", {"src": lambda s: s and "links-ai" in str(s)})
                if img:
                    pricing = img.get("title", "Free")
                tools.append({"name": text, "category": category_key, "description": desc, "website": "", "pricing": pricing, "source_url": href})
                print(f"  ✅ {text}")
    except Exception as e:
        print(f"  ❌ Error: {e}")
    return tools

def main():
    all_tools = []
    seen = set()
    for category_key, url in CATEGORIES:
        tools = scrape_category(category_key, url)
        for t in tools:
            if t["name"] not in seen:
                seen.add(t["name"])
                all_tools.append(t)
        time.sleep(2)
    with open("aixploria_tools2.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["name","category","description","website","pricing","source_url"])
        writer.writeheader()
        writer.writerows(all_tools)
    print(f"\n✅ Done! {len(all_tools)} tools saved to aixploria_tools2.csv")

if __name__ == "__main__":
    main()
