content = open('data/toolsProductInfo.ts').read()

info = '''
  "meshy-3d": {
    whatIs: "Meshy AI is the world leading AI-powered 3D model generator trusted by over 3 million creators including game developers, VFX artists, 3D printing enthusiasts and XR professionals. The platform transforms text prompts and images into fully textured, riggable 3D assets in under a minute. Powered by Meshy 6 released in January 2026, it delivers refined geometry, sharper hard surfaces, Low Poly Mode for game engines, and multi-color 3D printing support. With over 30 million 3D assets generated and recognition from Andreessen Horowitz as the only 3D tool in their most popular AI tools for game developers list, Meshy has become the go-to platform for rapid 3D asset creation worldwide.",
    features: [
      "Text to 3D: Generate fully textured 3D models from simple text descriptions in under a minute",
      "Image to 3D: Convert photos or concept art into detailed 3D models with precise shape matching",
      "AI Texture Generator: Create PBR textures for any 3D model using text prompts or reference images",
      "Automatic Rigging: Rig humanoid characters automatically with animation-ready bone structures",
      "3D to Video: Generate cinematic AI video clips from your 3D models and scenes",
      "Low Poly Mode: Export optimized game-ready assets for Unity and Unreal Engine",
      "Multi-Color 3D Printing: Automatic texture simplification for FDM 3D printers in 3MF format",
      "Bulk Generation: Process 50+ 3D model and texture tasks simultaneously",
      "Multiple Export Formats: Support for OBJ, FBX, USDZ, GLB, STL, BLEND and 3MF formats",
      "API Integration: Full API access for integrating 3D generation into custom workflows"
    ],
    howToUse: {
      title: "How to Use Meshy AI",
      description: "Get started creating 3D models with Meshy AI in a few simple steps",
      steps: [
        {
          title: "Create Your Account",
          description: "Sign up at meshy.ai and start with 200 free credits per month. No software installation required as Meshy runs entirely in your browser. Use the AI Prompt Helper to structure your prompts effectively by including subject, style, material, color and intended use."
        },
        {
          title: "Generate Your 3D Model",
          description: "Choose Text to 3D or Image to 3D mode. For text prompts describe your model in detail such as low-poly medieval tavern chair, worn wood, iron rivets, game-ready, PBR. For image input upload a photo or concept art and Meshy will generate a matching 3D model. Preview renders appear in seconds and full textured models take one to two minutes."
        },
        {
          title: "Refine and Export",
          description: "Use the AI Texture Generator to apply or modify textures with text prompts. Adjust polygon count from 1k to 300k triangles for your target platform. Apply automatic rigging for character animations, then export in your preferred format for use in Blender, Unity, Unreal Engine or 3D printing software."
        }
      ]
    },
    coreFeatures: [
      {
        title: "Text to 3D Generation",
        description: "Describe any object in text and Meshy generates a fully textured 3D model complete with PBR maps including Normal, Roughness and Metallic channels in under a minute"
      },
      {
        title: "Image to 3D Conversion",
        description: "Upload a single image or multiple views and Meshy reconstructs an accurate 3D model matching the shape proportions and details of the reference with improved alignment in Meshy 6"
      },
      {
        title: "AI Texture Generator",
        description: "Apply professional PBR textures to any 3D model using text prompts or reference images. Supports style transfers such as converting realistic models to ink-wash or cartoon aesthetics"
      },
      {
        title: "Automatic Rigging and Animation",
        description: "Automatically rig humanoid characters with proper bone structures and access 500 plus premade animations including walk cycles, idles and action sequences for immediate use"
      },
      {
        title: "Low Poly Mode",
        description: "New in Meshy 6, generates clean optimized low-polygon wireframes for real-time game engines eliminating manual retopology work and producing export-ready assets for Unity and Unreal"
      },
      {
        title: "Multi-Format Export",
        description: "Export 3D assets in industry-standard formats including OBJ, FBX, USDZ, GLB, STL, BLEND and 3MF ensuring compatibility with all major 3D software and game engines"
      }
    ],
    useCases: [
      {
        title: "Game Development",
        description: "Game developers use Meshy to rapidly generate props, environment assets and character basemeshes for prototyping reducing pre-production timelines significantly. Assets export directly to Unity and Unreal Engine"
      },
      {
        title: "3D Printing",
        description: "3D printing enthusiasts generate unique custom designs from text descriptions and use the multi-color printing feature to create color-separated models ready for FDM printers"
      },
      {
        title: "Concept Art and Prototyping",
        description: "Artists and designers use Meshy to quickly visualize 3D concepts from 2D sketches or reference images accelerating the creative iteration process before final production"
      },
      {
        title: "XR and Metaverse Content",
        description: "XR developers create 3D assets for augmented reality, virtual reality and metaverse experiences using Meshy to populate virtual environments rapidly with diverse objects"
      },
      {
        title: "Film and Animation",
        description: "VFX artists use Meshy to generate background assets and environment pieces quickly allowing studios to focus manual effort on hero assets requiring the highest quality"
      }
    ]
  },'''

content = content.replace(
    'export const toolsProductInfoData: { [key: string]: any } = {',
    'export const toolsProductInfoData: { [key: string]: any } = {' + info
)
open('data/toolsProductInfo.ts', 'w').write(content)
print('Done! Meshy AI rich content added!')
