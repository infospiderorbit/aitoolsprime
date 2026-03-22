import csv
import re
from collections import defaultdict

# Load existing subcategories from toolsData.ts
content = open("data/toolsData.ts").read()

# Find all existing subcategory keys per category
cat_subcats = defaultdict(list)
for m in re.finditer(r'"([a-z-]+)":\s*\{([^}]*?)\}', content, re.DOTALL):
    pass

# Simpler: find all "subcat-key": [ patterns
all_subcats = re.findall(r'"([a-z][a-z0-9-]+)":\s*\[', content)
print(f"Found {len(all_subcats)} subcategory keys")

# Map category to its subcategories
category_to_subcats = {
    "image-generation-editing": ["ai-age-progression", "text-to-image", "image-editing"],
    "video-animation": ["text-to-video", "video-editing", "ai-avatar-video"],
    "writing-editing": ["ai-writer", "seo-writing", "summarizer"],
    "coding-development": ["code-assistant", "code-editor", "no-code"],
    "marketing-advertising": ["ad-creative", "email-marketing", "seo"],
    "office-productivity": ["ai-agent", "automation", "presentations"],
    "business-management": ["hr-tools", "finance-tools", "customer-service"],
    "education-translation": ["translation", "research-tool", "online-learning"],
    "health-wellness": ["mental-health", "medical-ai", "wellness"],
    "art-creative-design": ["3d-design", "logo-design", "avatar-design"],
    "music-audio": ["music-generation", "voice-generation", "audio-editing"],
    "voice-generation-conversion": ["text-to-speech", "transcription", "voice-cloning"],
    "research-data-analysis": ["data-science", "academic-research", "data-analytics"],
    "chatbots-virtual-companions": ["ai-assistant", "ai-agents", "companion-ai"],
}

# Load new tools from CSV
new_tools = []
with open("aitoolsinc_tools2.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        new_tools.append(row)

# Filter only genuinely new ones
with open("new_aitoolsinc_tools.txt") as f:
    new_names = set(line.strip() for line in f if line.strip())

new_tools = [t for t in new_tools if t["name"] in new_names]
print(f"Tools to inject: {len(new_tools)}")

# Group by category
by_cat = defaultdict(list)
for t in new_tools:
    by_cat[t["category"]].append(t)

injected = 0
for category, tools in by_cat.items():
    # Find the first existing subcategory for this category
    cat_idx = content.find(f'"{category}": {{')
    if cat_idx == -1:
        print(f"Category not found: {category}")
        continue
    
    # Find first [ 
    first_bracket = content.find("[", cat_idx)
    if first_bracket == -1:
        continue
    
    # Build tools block
    tools_block = ""
    for t in tools:
        name = t["name"].replace('"', "'").strip()
        desc = t["description"].replace('"', "'").strip()[:150]
        if not desc:
            desc = f"AI tool for {name}"
        tool_id = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:50]
        tools_block += f'\n      {{ id: "{tool_id}", name: "{name}", description: "{desc}", url: "{t["website"]}", upvotes: 50, verified: false, rating: 4.0, icon: "🤖", category: "{category}", subcategory: "other" }},'
    
    # Find a good subcategory to add to - use last subcategory of the category
    # Find the category end
    next_cat_patterns = [f'"business-research"', f'"office-productivity"', f'"video-animation"', f'"writing-editing"', f'"coding-development"', f'"daily-life"', f'"legal-finance"', f'"social-media"', f'"health-wellness"', f'"education-translation"', f'"research-data-analysis"', f'"other"', f'"music-audio"', f'"voice-generation-conversion"', f'"image-generation-editing"', f'"art-creative-design"', f'"marketing-advertising"', f'"business-management"', f'"chatbots-virtual-companions"', f'"ai-detection-anti-detection"']
    
    # Find end of this category - look for closing }
    # Find all ]: patterns after first bracket to find last subcategory end
    search_from = first_bracket
    last_subcat_end = first_bracket
    
    # Find where to insert a new "other-tools" subcategory
    # Look for the pattern ],\n  } which closes the category
    cat_section_end = -1
    pos = first_bracket
    depth = 0
    for i in range(pos, min(pos + 500000, len(content))):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                last_subcat_end = i
        elif content[i:i+4] == '\n  "' and depth == 0 and i > pos + 100:
            cat_section_end = i
            break
    
    if cat_section_end == -1:
        cat_section_end = last_subcat_end + 2
    
    # Add new subcategory before cat_section_end
    new_subcat = f'\n    "other-tools": [{tools_block}\n    ],'
    content = content[:cat_section_end] + new_subcat + content[cat_section_end:]
    injected += len(tools)
    print(f"Added {len(tools)} tools to {category}/other-tools")

open("data/toolsData.ts", "w").write(content)
print(f"\nDone! {injected} tools injected properly!")
