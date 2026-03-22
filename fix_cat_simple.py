old = '''export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryInfo = (categoriesData as any)[category];
  const bySub = (toolsData as any)[category] as Record<string, Tool[]> | undefined;
  const tools: Tool[] = [];
  if (bySub) {
    Object.values(bySub).forEach((arr) => {
      if (Array.isArray(arr)) tools.push(...arr.filter(Boolean));
    });
    tools.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  }
  const displayTitle = categoryInfo?.title || category.replace(/-/g, " ");'''

new = '''export default async function CategoryPage({ params, searchParams }: { params: Promise<{ category: string }>; searchParams: Promise<{ sub?: string }> }) {
  const { category } = await params;
  const { sub } = await searchParams;
  const categoryInfo = (categoriesData as any)[category];
  const bySub = (toolsData as any)[category] as Record<string, Tool[]> | undefined;
  const tools: Tool[] = [];
  if (bySub) {
    if (sub && bySub[sub]) {
      tools.push(...bySub[sub].filter(Boolean));
    } else {
      Object.values(bySub).forEach((arr) => {
        if (Array.isArray(arr)) tools.push(...arr.filter(Boolean));
      });
    }
    tools.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  }
  const displayTitle = categoryInfo?.title || category.replace(/-/g, " ");'''

content = open('app/category/[category]/page.tsx').read()
if old in content:
    content = content.replace(old, new)
    open('app/category/[category]/page.tsx', 'w').write(content)
    print('Fixed!')
else:
    print('Pattern not found - showing current function start:')
    idx = content.find('export default')
    print(content[idx:idx+300])
