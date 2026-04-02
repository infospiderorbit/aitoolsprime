content = open('data/toolsProductInfo.ts').read()

info = '''
  "cutout-pro": {
    whatIs: "Cutout Pro is an AI-powered visual content generation platform founded in 2018 and serving over 25000 businesses worldwide. The platform specializes in automated background removal for both photos and videos — its standout differentiator being video background removal without a green screen, a feature rare among competitors. Beyond background removal, Cutout Pro offers a comprehensive suite of AI tools including photo enhancement, upscaling, AI art generation, passport photo creation, e-commerce product staging, cartoon effects, and a developer API. The platform integrates multiple AI models including Flux, Imagen 4.0, Seedream and GPT Image, and is accessible on web, iOS, Android, Mac and Windows.",
    features: [
      "AI Background Removal: One-click automatic background removal from photos with 85-92% accuracy on complex edges",
      "Video Background Removal: Remove backgrounds from HD video footage frame by frame without a green screen",
      "Photo Enhancer and Upscaler: Automatically improve photo quality, resolution and detail using AI",
      "AI Art Generator: Create original AI artwork and visuals from text prompts using multiple AI models",
      "E-commerce Tools: AI virtual models, product staging, auto design and e-commerce product posters",
      "Passport Photo Maker: Create compliant passport and ID photos for most countries automatically",
      "Batch Processing: Process multiple images simultaneously reducing per-image handling time to under 30 seconds",
      "Developer API: Integrate background removal and editing features into custom applications and workflows",
      "Object Eraser: Remove unwanted objects from photos seamlessly with AI",
      "Cartoon and Portrait Effects: Cartoonizer, anime enhancer, AI hairstyle changer and photo effects"
    ],
    howToUse: {
      title: "How to Use Cutout Pro",
      description: "Get started with Cutout Pro in a few simple steps",
      steps: [
        {
          title: "Upload Your Image or Video",
          description: "Visit cutout.pro and upload your image by drag and drop, URL paste or file selection. For video background removal, upload your video file directly. No software installation required as everything runs in the browser."
        },
        {
          title: "Select Your Tool",
          description: "Choose from background removal, photo enhancement, AI art generation, e-commerce tools or any other available feature. For background removal the AI processes your image in 2 to 5 seconds automatically detecting the subject."
        },
        {
          title: "Download or Integrate",
          description: "Download your processed image or video with transparent background or choose a replacement background. For high-volume workflows use the batch processing feature or integrate via the developer API into your own application."
        }
      ]
    },
    coreFeatures: [
      {
        title: "AI Background Removal",
        description: "Multi-layer semantic segmentation model that identifies image content at a conceptual level rather than just detecting edges, producing clean results on complex subjects including hair, fur and transparent objects"
      },
      {
        title: "Video Background Removal",
        description: "Unique capability to process HD video footage and remove backgrounds frame by frame without requiring a green screen, making it ideal for content creators and talking-head video workflows"
      },
      {
        title: "E-commerce Suite",
        description: "Comprehensive set of AI tools for online sellers including virtual models, product staging, auto design and e-commerce poster generation to create professional product visuals at scale"
      },
      {
        title: "Batch Processing",
        description: "Process large volumes of images simultaneously reducing handling time from 2 to 5 minutes per image to under 30 seconds, making it efficient for e-commerce teams with large product catalogs"
      },
      {
        title: "Multi-Model AI Generation",
        description: "Integrates multiple leading AI models including Flux, Imagen 4.0, Seedream and GPT Image for diverse image generation and editing capabilities under one platform"
      },
      {
        title: "Developer API",
        description: "Lightweight API allowing developers to integrate background removal, photo enhancement and other AI features into custom applications with plans starting at $49.99 per month"
      }
    ],
    useCases: [
      {
        title: "E-commerce Product Photography",
        description: "Online sellers use Cutout Pro to quickly remove backgrounds from product images creating professional white or transparent background visuals for marketplaces like Amazon and Shopify at scale"
      },
      {
        title: "Content Creation Without Green Screen",
        description: "Video creators and social media managers remove backgrounds from recorded footage without needing a green screen setup, saving time and production costs"
      },
      {
        title: "Graphic Design Workflows",
        description: "Designers isolate subjects from images quickly for compositing, manipulate elements and create visual compositions without spending time on manual selection in Photoshop"
      },
      {
        title: "Passport and ID Photos",
        description: "Businesses and individuals create compliant passport, visa and ID photos that meet official requirements for most countries automatically without a professional photographer"
      },
      {
        title: "Developer Integration",
        description: "Developers integrate Cutout Pro APIs into e-commerce platforms, photography apps and content management systems to automate visual processing at scale"
      }
    ]
  },'''

content = content.replace(
    'export const toolsProductInfoData: { [key: string]: any } = {',
    'export const toolsProductInfoData: { [key: string]: any } = {' + info
)
open('data/toolsProductInfo.ts', 'w').write(content)
print('Done! Cutout Pro rich content added!')
