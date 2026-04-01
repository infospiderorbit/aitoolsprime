content = open('data/toolsProductInfo.ts').read()

info = '''
  "ai-hentai-generator": {
    whatIs: "AI Hentai Generator is an advanced adult anime and manga-style art creation platform powered by artificial intelligence. The platform allows users to generate high-quality anime illustrations from text prompts with detailed control over character appearance, art style, poses and scenarios. Designed for fans of anime and manga aesthetics, the tool uses sophisticated AI image generation models trained on anime art styles to produce detailed and visually consistent results. The platform features an intuitive text-to-image interface with advanced prompt controls making it accessible for both beginners and experienced digital artists.",
    features: [
      "Text to Image Generation: Create detailed anime illustrations from text descriptions",
      "Advanced Prompt Controls: Fine-tune prompts for precise control over character design and style",
      "Multiple Art Styles: Generate in various anime and manga visual styles",
      "Character Customization: Control character appearance, outfits, expressions and poses",
      "High Resolution Output: Generate high-quality images suitable for personal use",
      "Fast Generation: Quick image rendering with AI-powered processing",
      "Style Variety: Wide range of anime aesthetic options from classic to modern styles",
      "Easy Interface: Simple and intuitive platform requiring no technical expertise"
    ],
    howToUse: {
      title: "How to Use AI Hentai Generator",
      description: "Get started creating anime art with AI in a few simple steps",
      steps: [
        {
          title: "Access the Platform",
          description: "Visit the AI Hentai Generator platform and create an account to access the image generation tools. Free credits are available to get started immediately."
        },
        {
          title: "Write Your Prompt",
          description: "Describe the anime character or scene you want to create using detailed text prompts. Include style references, character appearance details, outfits, expressions and scene setting for the best results."
        },
        {
          title: "Generate and Download",
          description: "Submit your prompt and the AI will generate your anime illustration. Review the result, refine your prompt if needed, and download your finished artwork."
        }
      ]
    },
    coreFeatures: [
      {
        title: "AI Image Generation",
        description: "Advanced AI model specifically trained on anime and manga art styles for high-quality stylized illustration output"
      },
      {
        title: "Text to Image",
        description: "Transform detailed text descriptions into fully realized anime illustrations with consistent visual style and character design"
      },
      {
        title: "Style Control",
        description: "Choose from multiple anime aesthetic styles ranging from classic manga to modern digital anime art with distinct visual characteristics"
      },
      {
        title: "Character Design",
        description: "Detailed control over character appearance including hair style, eye color, outfit, expression and body proportions for personalized creations"
      },
      {
        title: "High Quality Output",
        description: "Generates high-resolution anime illustrations suitable for personal use, wallpapers and creative projects"
      },
      {
        title: "Fast Processing",
        description: "AI-powered generation delivers results quickly allowing for rapid iteration and refinement of your anime artwork"
      }
    ],
    useCases: [
      {
        title: "Anime Art Creation",
        description: "Artists and anime enthusiasts create custom anime characters and scenes that match their creative vision without requiring traditional drawing skills"
      },
      {
        title: "Character Design",
        description: "Writers and game designers use the platform to quickly visualize original anime-style characters for their stories and projects"
      },
      {
        title: "Personal Artwork",
        description: "Users generate personalized anime illustrations for use as profile pictures, wallpapers and personal digital art collections"
      },
      {
        title: "Creative Exploration",
        description: "Experiment with different anime art styles and character designs to explore creative concepts and artistic directions"
      }
    ]
  },'''

content = content.replace(
    'export const toolsProductInfoData: { [key: string]: any } = {',
    'export const toolsProductInfoData: { [key: string]: any } = {' + info
)
open('data/toolsProductInfo.ts', 'w').write(content)
print('Done!')
