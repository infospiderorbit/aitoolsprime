content = open('app/layout.tsx').read()

# Add Script import
content = content.replace(
    'import { Toaster } from "@/components/ui/sonner";',
    'import { Toaster } from "@/components/ui/sonner";\nimport Script from "next/script";'
)

# Add analytics before </body>
content = content.replace(
    '        <Toaster />',
    '''        <Toaster />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PYD1XWW48Z" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PYD1XWW48Z');
          `}
        </Script>'''
)

open('app/layout.tsx', 'w').write(content)
print('Done!')
