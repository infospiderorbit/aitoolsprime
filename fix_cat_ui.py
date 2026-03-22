content = open('app/category/[category]/page.tsx').read()

old = '''        <h1 className="text-3xl font-bold mb-2">{displayTitle}</h1>
        <p className="text-muted-foreground mb-10">Explore {tools.length} AI tools</p>'''

new = '''        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={"/category/" + category}>{displayTitle}</Link>
          {sub && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium">{sub.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
            </>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-2">
          {sub ? sub.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()) : displayTitle}
        </h1>
        <p className="text-muted-foreground mb-10">Explore {tools.length} AI tools{sub ? " in " + displayTitle : ""}</p>'''

content = content.replace(old, new)
open('app/category/[category]/page.tsx', 'w').write(content)
print('Done!' if old in open('app/category/[category]/page.tsx').read() == False else 'Check failed')
