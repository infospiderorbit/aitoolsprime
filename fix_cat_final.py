content = open('app/category/[category]/page.tsx').read()

# Remove old Back to Home link
content = content.replace('''        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <div className="flex items-center''', '''        <div className="flex items-center''')

# Fix capitalization - replace capitalize with proper title case
content = content.replace(
    '{sub ? sub.replace(/-/g, " ") : displayTitle}',
    '{sub ? sub.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : displayTitle}'
)
content = content.replace(
    'className="text-foreground font-medium capitalize">{sub.replace(/-/g, " ")}',
    'className="text-foreground font-medium">{sub.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}'
)

open('app/category/[category]/page.tsx', 'w').write(content)
print('Done!')
