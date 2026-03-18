import requests
from bs4 import BeautifulSoup
import csv
import time

CATEGORIES = [
    ("image-generation-editing", "https://www.aixploria.com/en/category/image-ai-en/"),
    ("video-animation", "https://www.aixploria.com/en/category/video-generators/"),
    ("writing-editing", "https://www.aixploria.com/en/category/writing-web-seo/"),
    ("coding-development", "https://www.aixploria.com/en/category/assistant-code-en/"),
    ("marketing-advertising", "https://www.aixploria.com/en/category/marketing-ai/"),
    ("office-productivity", "https://www.aixploria.com/en/category/productivity-en/"),
    ("chatbots-virtual-companions", "https://www.aixploria.com/en/category/chatbot-ai/"),
    ("music-audio", "https://www.aixploria.com/en/category/music/"),
    ("voice-generation-conversion", "https://www.aixploria.com/en/category/audio-editing/"),
    ("education-translation", "https://www.aixploria.com/en/category/education-en/"),
    ("social-media", "https://www.aixploria.com/en/category/social-assistants-en/"),
    ("health-wellness", "https://www.aixploria.com/en/category/healthcare/"),
    ("art-creative-design", "https://www.aixploria.com/en/category/art-en/"),
    ("research-data-analysis", "https://www.aixploria.com/en/category/research-science-en/"),
    ("business-management", "https://www.aixploria.com/en/category/business-study/"),
]

HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

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
                
                # Get description from parent element
                parent = item.find_parent()
                desc = ""
                if parent:
                    desc_elem = parent.find_next("p")
                    if desc_elem:
                        desc = desc_elem.get_text(strip=True)[:200]
                
                # Get pricing
                pricing = "Free"
                img = item.find_next("img", {"src": lambda s: s and "links-ai" in str(s)})
                if img:
                    pricing = img.get("title", "Free")
                
                tools.append({
                    "name": text,
                    "category": category_key,
                    "description": desc,
                    "website": "",
                    "pricing": pricing,
                    "source_url": href
                })
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
    
    with open("aixploria_tools.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["name", "category", "description", "website", "pricing", "source_url"])
        writer.writeheader()
        writer.writerows(all_tools)
    
    print(f"\n✅ Done! {len(all_tools)} tools saved to aixploria_tools.csv")

if __name__ == "__main__":
    main()
