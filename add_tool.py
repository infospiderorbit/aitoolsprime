content = open('data/toolsData.ts').read()
entry = '\n      { id: \"mybabes-ai\", name: \"MyBabes AI\", description: \"Advanced AI companion platform with video generation, image creation and deep roleplay\", url: \"https://mybabes.ai\", upvotes: 3200, verified: True, rating: 4.5, icon: \"💝\", category: \"chatbots-virtual-companions\", subcategory: \"ai-girlfriend\" },'
content = content.replace('    \"ai-girlfriend\": [', '    \"ai-girlfriend\": [' + entry)
open('data/toolsData.ts', 'w').write(content)
print('Done!')
