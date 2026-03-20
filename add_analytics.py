content = open('/Users/ankitraghav/aitoolsprime/app/layout.tsx').read()

analytics = """<script async src="https://www.googletagmanager.com/gtag/js?id=G-PYD1XWW48Z"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PYD1XWW48Z');
        `
      }}
    />"""

content = content.replace('<html lang="en">', '<html lang="en">\n    ' + analytics)
open('/Users/ankitraghav/aitoolsprime/app/layout.tsx', 'w').write(content)
print('Done!')
