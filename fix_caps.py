content = open('app/category/[category]/page.tsx').read()
content = content.replace('sub.replace(/-/g, " ")', 'sub.split("-").map((w)=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ")')
open('app/category/[category]/page.tsx', 'w').write(content)
print('Done:', content.count('toUpperCase'))
