content_ts = open('data/toolsData.ts').read()
content_pi = open('data/toolsProductInfo.ts').read()

# Add to toolsData.ts
tool1 = '\n      { id: "ai-futanari", name: "AI Futanari", description: "AI Futanari is an adult AI image generation platform specializing in creating high-quality futanari and fantasy character artwork from text prompts with extensive customization options", url: "", upvotes: 1800, verified: false, rating: 4.1, icon: "🔞", category: "image-generation-editing", subcategory: "nsfw", addedDate: "2026-04-01" },'
tool2 = '\n      { id: "generatorfuta-ai", name: "GeneratorFuta AI", description: "GeneratorFuta AI is a specialized adult AI art generator for creating custom futanari character illustrations with detailed style controls and high-quality image output", url: "", upvotes: 1600, verified: false, rating: 4.0, icon: "🔞", category: "image-generation-editing", subcategory: "nsfw", addedDate: "2026-04-01" },'

content_ts = content_ts.replace('"nsfw": [', '"nsfw": [' + tool1 + tool2, 1)
open('data/toolsData.ts', 'w').write(content_ts)
print("Added 2 tools to toolsData.ts")

# Add rich content to toolsProductInfo.ts
info = '''
  "ai-futanari": {
    whatIs: "AI Futanari is an advanced adult AI image generation platform dedicated to creating high-quality futanari and fantasy character artwork. The platform uses sophisticated AI image generation models to produce detailed character illustrations from text prompts, offering extensive customization over character appearance, art style, pose and scene settings. Designed for adult content creators and fans of the genre, AI Futanari delivers consistent high-quality outputs with a focus on artistic detail and creative freedom.",
    features: [
      "Text to Image Generation: Create detailed futanari character artwork from text descriptions",
      "Extensive Customization: Control character appearance, style, pose and scene details",
      "Multiple Art Styles: Anime, realistic, fantasy and artistic generation modes",
      "High Resolution Output: Professional quality image generation",
      "Fast Processing: Quick image rendering for rapid creative iteration",
      "Private Gallery: Secure personal gallery for your generated artwork",
      "No Watermarks: Clean image output without watermarks",
      "Adult Content Focus: Specialized for futanari and fantasy adult character art"
    ],
    howToUse: {
      title: "How to Use AI Futanari",
      description: "Get started creating AI artwork in a few simple steps",
      steps: [
        { title: "Create Your Account", description: "Sign up and verify your age to access the adult content generation platform and its full suite of image creation tools." },
        { title: "Write Your Prompt", description: "Describe the character and scene you want to create using detailed text prompts. Include art style, character appearance, pose and scene settings for best results." },
        { title: "Generate and Download", description: "Submit your prompt and the AI generates your artwork. Review the result, refine your prompt if needed, and download your finished image." }
      ]
    },
    coreFeatures: [
      { title: "Specialized AI Model", description: "AI model specifically trained for futanari and fantasy character art delivering consistent high-quality stylized outputs" },
      { title: "Style Control", description: "Choose from anime, realistic and artistic styles to match your preferred aesthetic for each creation" },
      { title: "Character Detail", description: "Fine-grained control over character features, proportions and design elements for precise creative expression" },
      { title: "Private Platform", description: "Secure private platform protecting all user content and generated artwork with strong privacy measures" }
    ],
    useCases: [
      { title: "Adult Art Creation", description: "Artists and enthusiasts creating custom futanari character artwork in their preferred style" },
      { title: "Character Design", description: "Creators designing original fantasy characters with unique appearance combinations" },
      { title: "Personal Collection", description: "Users building personal galleries of custom AI-generated adult artwork" }
    ]
  },
  "generatorfuta-ai": {
    whatIs: "GeneratorFuta AI is a specialized adult AI art generation platform focused exclusively on creating custom futanari character illustrations. The platform combines advanced AI image generation technology with an intuitive interface designed specifically for this art genre. Users can produce high-quality character artwork with detailed style controls covering anatomy, art style, color palette and scene composition.",
    features: [
      "Futanari Specialist: Dedicated AI model optimized for futanari character generation",
      "Detailed Style Controls: Fine-grained control over art style and character details",
      "Multiple Generation Modes: Various artistic approaches from anime to realistic",
      "High Quality Output: Detailed high-resolution image generation",
      "Custom Palettes: Control color schemes and visual aesthetics",
      "Scene Composition: Set backgrounds, lighting and scene elements",
      "Fast Generation: Quick results for efficient creative workflow",
      "Secure Platform: Private and encrypted user environment"
    ],
    howToUse: {
      title: "How to Use GeneratorFuta AI",
      description: "Get started creating specialized AI artwork in a few simple steps",
      steps: [
        { title: "Access the Platform", description: "Sign up at GeneratorFuta AI with age verification to access the specialized adult image generation tools." },
        { title: "Configure Your Generation", description: "Use the detailed prompt and style controls to specify your character design, art style, color palette and scene composition." },
        { title: "Generate and Save", description: "Generate your artwork, review the results and save your favorites to your private gallery." }
      ]
    },
    coreFeatures: [
      { title: "Dedicated AI Model", description: "Purpose-built AI generation model optimized specifically for futanari character art with superior quality in this genre" },
      { title: "Advanced Style Controls", description: "Comprehensive style configuration options covering anatomy preferences, art style, color and composition" },
      { title: "Quality Output", description: "High-resolution image generation producing detailed artwork suitable for personal collections and creative projects" },
      { title: "Privacy Protection", description: "Encrypted private platform ensuring all user activity and generated content remains completely confidential" }
    ],
    useCases: [
      { title: "Specialized Art Creation", description: "Enthusiasts and artists creating high-quality futanari character artwork with precise style control" },
      { title: "Creative Exploration", description: "Users exploring different artistic styles and character designs within the futanari art genre" },
      { title: "Personal Artwork", description: "Building personal collections of custom AI-generated character artwork in a private secure environment" }
    ]
  },'''

content_pi = content_pi.replace(
    'export const toolsProductInfoData: { [key: string]: any } = {',
    'export const toolsProductInfoData: { [key: string]: any } = {' + info
)
open('data/toolsProductInfo.ts', 'w').write(content_pi)
print("Added rich content for both tools")
