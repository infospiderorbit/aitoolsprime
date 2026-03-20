content = open('app/layout.tsx').read()

old = '    <html lang="en" suppressHydrationWarning>'
new = '''    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PYD1XWW48Z"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PYD1XWW48Z');
        `}} />
      </head>'''

content = content.replace(old, new)
open('app/layout.tsx', 'w').write(content)
print('Done!')
