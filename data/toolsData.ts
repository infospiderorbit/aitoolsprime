export type PricingType = "Free" | "Freemium" | "Paid" | "Free Trial";

export interface Tool {
  id: string;
  name: string;
  description: string;
  url?: string;
  upvotes: number;
  verified: boolean;
  rating: number;
  reviewsCount?: number;
  savedCount?: number;
  addedDate?: string;
  icon: string;
  category: string;
  subcategory: string;
  pricing?: PricingType;
  productInfo?: {
    whatIs: string;
    features: string[];
    howToUse: {
      title: string;
      description: string;
      steps: { title: string; description: string }[];
    };
    coreFeatures: { title: string; description: string }[];
    useCases: { title: string; description: string }[];
  };
}

// Helper function to assign pricing based on tool characteristics
export const getPricingType = (tool: Tool): PricingType => {
  if (tool.pricing) return tool.pricing;
  // Assign pricing based on upvotes and verification as a heuristic
  const hash = tool.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const types: PricingType[] = ["Free", "Freemium", "Paid", "Free Trial"];
  return types[hash % 4];
};

export const toolsData: { [key: string]: { [key: string]: Tool[] } } = {
  "business-research": {
    "ai-crypto": [
      { id: "coinmarketcap", name: "CoinMarketCap", description: "Cryptocurrency market data and analysis platform", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "₿", category: "business-research", subcategory: "ai-crypto" },
      { id: "messari", name: "Messari", description: "Crypto research and market intelligence", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📊", category: "business-research", subcategory: "ai-crypto" },
      { id: "glassnode", name: "Glassnode", description: "On-chain analytics and crypto insights", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🔍", category: "business-research", subcategory: "ai-crypto" },
      { id: "dune-analytics", name: "Dune Analytics", description: "Blockchain data analysis and visualization", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📈", category: "business-research", subcategory: "ai-crypto" },
      { id: "coingecko", name: "CoinGecko", description: "Comprehensive cryptocurrency data platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🦎", category: "business-research", subcategory: "ai-crypto" }
    ],
    "ai-consulting": [
      { id: "mckinsey-ai", name: "McKinsey AI Insights", description: "AI-powered business consulting and strategy", url: "", upvotes: 2156, verified: true, rating: 4.8, icon: "🎯", category: "business-research", subcategory: "ai-consulting" },
      { id: "bcg-gamma", name: "BCG GAMMA", description: "Advanced analytics and AI consulting", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "💎", category: "business-research", subcategory: "ai-consulting" },
      { id: "deloitte-ai", name: "Deloitte AI Institute", description: "AI transformation consulting services", url: "", upvotes: 1765, verified: true, rating: 4.6, icon: "🏢", category: "business-research", subcategory: "ai-consulting" },
      { id: "pwc-ai", name: "PwC AI Services", description: "Enterprise AI consulting and implementation", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "⚙️", category: "business-research", subcategory: "ai-consulting" },
      { id: "accenture-ai", name: "Accenture Applied Intelligence", description: "AI consulting and technology services", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🔬", category: "business-research", subcategory: "ai-consulting" }
    ],
    "blockchain": [
      { id: "etherscan", name: "Etherscan", description: "Ethereum blockchain explorer and analytics", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "⛓️", category: "business-research", subcategory: "blockchain" },
      { id: "chainalysis", name: "Chainalysis", description: "Blockchain analytics and compliance platform", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🔗", category: "business-research", subcategory: "blockchain" },
      { id: "moralis", name: "Moralis", description: "Web3 development and blockchain APIs", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🌐", category: "business-research", subcategory: "blockchain" },
      { id: "alchemy", name: "Alchemy", description: "Blockchain development platform and APIs", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🧪", category: "business-research", subcategory: "blockchain" },
      { id: "infura", name: "Infura", description: "Ethereum and IPFS infrastructure provider", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🏗️", category: "business-research", subcategory: "blockchain" }
    ],
    "ai-business-ideas-generator": [
      { id: "ideabuddy", name: "IdeaBuddy", description: "AI-powered business idea development platform", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "💡", category: "business-research", subcategory: "ai-business-ideas-generator" },
      { id: "strategyzer", name: "Strategyzer", description: "Business model innovation and idea validation", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "📋", category: "business-research", subcategory: "ai-business-ideas-generator" },
      { id: "lean-canvas", name: "Lean Canvas", description: "One-page business plan generator", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📊", category: "business-research", subcategory: "ai-business-ideas-generator" },
      { id: "business-model-canvas", name: "Business Model Canvas", description: "Visual business model design tool", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🎨", category: "business-research", subcategory: "ai-business-ideas-generator" },
      { id: "canvanizer", name: "Canvanizer", description: "Online business model canvas tool", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🔧", category: "business-research", subcategory: "ai-business-ideas-generator" }
    ],
    "web3": [
      { id: "opensea", name: "OpenSea", description: "Leading NFT marketplace and Web3 platform", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🌊", category: "business-research", subcategory: "web3" },
      { id: "uniswap", name: "Uniswap", description: "Decentralized exchange protocol", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🦄", category: "business-research", subcategory: "web3" },
      { id: "metamask", name: "MetaMask", description: "Web3 wallet and gateway to blockchain apps", url: "", upvotes: 1765, verified: true, rating: 4.6, icon: "🦊", category: "business-research", subcategory: "web3" },
      { id: "the-graph", name: "The Graph", description: "Decentralized protocol for indexing blockchain data", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📊", category: "business-research", subcategory: "web3" },
      { id: "polygon", name: "Polygon", description: "Multi-chain scaling solution for Ethereum", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🔷", category: "business-research", subcategory: "web3" }
    ],
    "nfts": [
      { id: "nft-calendar", name: "NFT Calendar", description: "Track upcoming NFT drops and launches", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "📅", category: "business-research", subcategory: "nfts" },
      { id: "rarity-tools", name: "Rarity.tools", description: "NFT rarity rankings and analytics", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "💎", category: "business-research", subcategory: "nfts" },
      { id: "nftgo", name: "NFTGo", description: "Comprehensive NFT analytics platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🚀", category: "business-research", subcategory: "nfts" },
      { id: "dappradar", name: "DappRadar", description: "NFT and DApp analytics platform", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "📊", category: "business-research", subcategory: "nfts" },
      { id: "cryptoslam", name: "CryptoSlam", description: "NFT sales and market data tracker", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "💰", category: "business-research", subcategory: "nfts" }
    ],
    "ai-business-name-generator": [
      { id: "namelix", name: "Namelix", description: "AI-powered business name generator", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🏷️", category: "business-research", subcategory: "ai-business-name-generator" },
      { id: "businessnamegenerator", name: "Business Name Generator", description: "Generate creative business names with AI", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🎯", category: "business-research", subcategory: "ai-business-name-generator" },
      { id: "shopify-business-name", name: "Shopify Business Name Generator", description: "Free business name generator tool", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🛒", category: "business-research", subcategory: "ai-business-name-generator" },
      { id: "brandroot", name: "BrandRoot", description: "Premium brandable business names", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🌱", category: "business-research", subcategory: "ai-business-name-generator" },
      { id: "brandpa", name: "BrandPA", description: "Marketplace for premium business names", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "👨‍⚕️", category: "business-research", subcategory: "ai-business-name-generator" }
    ],
    "ai-domain-name-generator": [
      { id: "namecheap-generator", name: "Namecheap Domain Generator", description: "AI-powered domain name suggestions", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🌐", category: "business-research", subcategory: "ai-domain-name-generator" },
      { id: "godaddy-generator", name: "GoDaddy Domain Generator", description: "Smart domain name search and suggestions", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🏁", category: "business-research", subcategory: "ai-domain-name-generator" },
      { id: "lean-domain-search", name: "Lean Domain Search", description: "Fast domain name generator and checker", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "⚡", category: "business-research", subcategory: "ai-domain-name-generator" },
      { id: "instantdomainsearch", name: "Instant Domain Search", description: "Real-time domain availability checker", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🔍", category: "business-research", subcategory: "ai-domain-name-generator" },
      { id: "domainr", name: "Domainr", description: "Smart domain search across all TLDs", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "🎯", category: "business-research", subcategory: "ai-domain-name-generator" }
    ],
    "ai-company-name-generator": [
      { id: "company-name-generator", name: "Company Name Generator", description: "AI-generated company names with availability", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🏢", category: "business-research", subcategory: "ai-company-name-generator" },
      { id: "looka-name-generator", name: "Looka Name Generator", description: "Company name generator with logo design", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🎨", category: "business-research", subcategory: "ai-company-name-generator" },
      { id: "squadhelp", name: "SquadHelp", description: "Crowdsourced company naming platform", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "👥", category: "business-research", subcategory: "ai-company-name-generator" },
      { id: "brandcrowd-names", name: "BrandCrowd Names", description: "Company name generator with branding", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "👑", category: "business-research", subcategory: "ai-company-name-generator" },
      { id: "novanym", name: "Novanym", description: "Creative company and brand name generator", url: "", upvotes: 876, verified: true, rating: 4.1, icon: "✨", category: "business-research", subcategory: "ai-company-name-generator" }
    ]
  },
  "office-productivity": {
    "ai-agent": [
      { id: "agnes-ai", name: "Agnes AI", description: "Agnes AI is an intelligent AI assistant platform helping users with research, writing, and task automation through conversational AI interactions", url: "https://agnes-ai.com", upvotes: 2500, verified: false, rating: 4.1, icon: "🤖", category: "office-productivity", subcategory: "ai-agent", addedDate: "2026-04-01" },
      { id: "manus-ai", name: "Manus", description: "AI-powered productivity assistant", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "✋", category: "office-productivity", subcategory: "ai-agent" },

      { id: "jotform-ai-agents", name: "Jotform AI Agents", description: "AI-powered form automation and workflow agents", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🤖", category: "office-productivity", subcategory: "ai-agent" },
      { id: "blackbox-ai", name: "BLACKBOX.AI", description: "AI-powered coding and development assistant", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "⚫", category: "office-productivity", subcategory: "ai-agent" },
      { id: "coze", name: "Coze", description: "Build and deploy AI chatbots and agents", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💬", category: "office-productivity", subcategory: "ai-agent" },
      { id: "intercom-agent", name: "Intercom", description: "Customer service automation with AI agents", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🎯", category: "office-productivity", subcategory: "ai-agent" },
      { id: "pippit-ai", name: "Pippit AI", description: "Intelligent workflow automation platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🔧", category: "office-productivity", subcategory: "ai-agent" }
    ],
    "ai-assistant": [
      { id: "grok", name: "Grok", description: "AI assistant with real-time information access", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🚀", category: "office-productivity", subcategory: "ai-assistant" },
      { id: "claude", name: "Claude", description: "Advanced AI assistant for various tasks", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🎭", category: "office-productivity", subcategory: "ai-assistant" },
      { id: "airtable-ai", name: "Airtable", description: "Database management with AI assistance", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📊", category: "office-productivity", subcategory: "ai-assistant" },
      { id: "anthropic", name: "Anthropic", description: "Safe and beneficial AI assistant", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🧠", category: "office-productivity", subcategory: "ai-assistant" }
    ],
    "ai-calendar": [
      { id: "reclaim-ai", name: "Reclaim.ai", description: "Smart calendar scheduling with AI optimization", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📅", category: "office-productivity", subcategory: "ai-calendar" },
      { id: "motion", name: "Motion", description: "AI-powered calendar and task management", url: "", upvotes: 1656, verified: true, rating: 4.6, icon: "🔄", category: "office-productivity", subcategory: "ai-calendar" },
      { id: "akiflow", name: "Akiflow", description: "Unified task and calendar management", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "⚡", category: "office-productivity", subcategory: "ai-calendar" },
      { id: "toki", name: "Toki", description: "AI calendar assistant for better scheduling", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "⏰", category: "office-productivity", subcategory: "ai-calendar" },
      { id: "clockwise", name: "Clockwise", description: "Focus time optimization with AI scheduling", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🕐", category: "office-productivity", subcategory: "ai-calendar" }
    ],
    "ai-charting": [
      { id: "hint-ai", name: "Hint", description: "AI-powered data visualization and charting", url: "", upvotes: 1543, verified: true, rating: 4.6, icon: "📈", category: "office-productivity", subcategory: "ai-charting" },
      { id: "napkin-ai", name: "Napkin AI", description: "Transform text into visual charts and diagrams", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📊", category: "office-productivity", subcategory: "ai-charting" },
      { id: "mermaid-chart", name: "Mermaid Chart", description: "Create flowcharts and diagrams with AI", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🧜‍♀️", category: "office-productivity", subcategory: "ai-charting" },
      { id: "julius-ai", name: "Julius AI", description: "AI data analyst for creating charts", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "👑", category: "office-productivity", subcategory: "ai-charting" },
      { id: "edraw-ai", name: "Edraw.AI", description: "AI-powered diagramming and charting tool", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "✏️", category: "office-productivity", subcategory: "ai-charting" }
    ],
    "ai-copilot": [
      { id: "jobright", name: "Jobright", description: "AI copilot for job search and career", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "💼", category: "office-productivity", subcategory: "ai-copilot" },
      { id: "aura-ai", name: "Aura", description: "AI copilot for personal productivity", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🌟", category: "office-productivity", subcategory: "ai-copilot" },
      { id: "hix-ai", name: "HIX.AI", description: "All-in-one AI copilot for writing and productivity", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🚀", category: "office-productivity", subcategory: "ai-copilot" },
      { id: "final-round-ai", name: "Final Round AI", description: "AI copilot for interview preparation", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🎯", category: "office-productivity", subcategory: "ai-copilot" },
      { id: "monica-ai", name: "Monica", description: "AI copilot for everyday tasks", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "👩", category: "office-productivity", subcategory: "ai-copilot" }
    ],
    "ai-diagram-generator": [
      { id: "mermaid-chart-gen", name: "Mermaid Chart", description: "Generate flowcharts and diagrams with AI", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🧜‍♀️", category: "office-productivity", subcategory: "ai-diagram-generator" },
      { id: "napkin-ai-gen", name: "Napkin AI", description: "Convert text to visual diagrams instantly", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📊", category: "office-productivity", subcategory: "ai-diagram-generator" },
      { id: "edraw-software", name: "Edraw Software", description: "Professional diagramming with AI assistance", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📐", category: "office-productivity", subcategory: "ai-diagram-generator" },
      { id: "eraser", name: "Eraser", description: "AI-powered technical diagram creation", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔧", category: "office-productivity", subcategory: "ai-diagram-generator" },
      { id: "whimsical", name: "Whimsical", description: "Visual collaboration with AI diagram generation", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🎨", category: "office-productivity", subcategory: "ai-diagram-generator" }
    ],
    "ai-document-extraction": [
      { id: "pestle-recipe", name: "Pestle: Recipe Manager", description: "AI-powered recipe extraction and management", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🥘", category: "office-productivity", subcategory: "ai-document-extraction" },
      { id: "imagetotext-info", name: "ImageToText.info", description: "Extract text from images with AI", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🖼️", category: "office-productivity", subcategory: "ai-document-extraction" },
      { id: "image-to-text-converter", name: "Image to Text converter", description: "Convert images to editable text", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "📄", category: "office-productivity", subcategory: "ai-document-extraction" },
      { id: "jpgtotext", name: "jpgtotext.com", description: "Extract text from JPG images using AI", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "🖼️", category: "office-productivity", subcategory: "ai-document-extraction" },
      { id: "v7-extraction", name: "V7", description: "AI-powered document data extraction", url: "", upvotes: 843, verified: true, rating: 4.1, icon: "🔍", category: "office-productivity", subcategory: "ai-document-extraction" }
    ],
    "ai-documents-generator": [
      { id: "gamma", name: "Gamma", description: "AI-powered presentation and document creator", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "📊", category: "office-productivity", subcategory: "ai-documents-generator" },
      { id: "gitbook", name: "GitBook", description: "AI-enhanced documentation platform", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📚", category: "office-productivity", subcategory: "ai-documents-generator" },
      { id: "mathpix", name: "Mathpix", description: "Convert math equations to digital format", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🧮", category: "office-productivity", subcategory: "ai-documents-generator" },
      { id: "aidocmaker", name: "Aidocmaker.com", description: "Generate professional documents with AI", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📝", category: "office-productivity", subcategory: "ai-documents-generator" },
      { id: "mintlify", name: "Mintlify", description: "AI-powered documentation generation", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🌿", category: "office-productivity", subcategory: "ai-documents-generator" }
    ],
    "ai-email-assistant": [
      { id: "superhuman", name: "Superhuman", description: "AI-powered email client for productivity", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "⚡", category: "office-productivity", subcategory: "ai-email-assistant" },
      { id: "spark-mail", name: "Spark Mail", description: "Intelligent email management with AI", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "✨", category: "office-productivity", subcategory: "ai-email-assistant" },
      { id: "shortwave", name: "Shortwave", description: "AI email assistant for better inbox management", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🌊", category: "office-productivity", subcategory: "ai-email-assistant" },
      { id: "stripo", name: "Stripo", description: "AI-powered email template builder", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📧", category: "office-productivity", subcategory: "ai-email-assistant" },
      { id: "spike", name: "Spike", description: "Conversational email with AI features", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "📱", category: "office-productivity", subcategory: "ai-email-assistant" }
    ],
    "ai-excel-formula-generator": [
      { id: "gptexcel", name: "GPTExcel", description: "Generate Excel formulas with AI", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📊", category: "office-productivity", subcategory: "ai-excel-formula-generator" },
      { id: "formula-bot", name: "Formula Bot", description: "AI-powered Excel and Google Sheets formulas", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🤖", category: "office-productivity", subcategory: "ai-excel-formula-generator" },
      { id: "ai-excel-bot", name: "AI Excel Bot", description: "Intelligent Excel formula assistant", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📈", category: "office-productivity", subcategory: "ai-excel-formula-generator" },
      { id: "ajelix", name: "Ajelix", description: "Excel AI tools for data analysis", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "⚡", category: "office-productivity", subcategory: "ai-excel-formula-generator" },
      { id: "sourcetable", name: "Sourcetable", description: "AI-powered spreadsheet with natural language", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🔗", category: "office-productivity", subcategory: "ai-excel-formula-generator" }
    ],
    "ai-files": [
      { id: "humata-ai", name: "Humata AI", description: "AI-powered document analysis and chat", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📄", category: "office-productivity", subcategory: "ai-files" },
      { id: "drop-ai", name: "DROP", description: "AI file management and organization", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📂", category: "office-productivity", subcategory: "ai-files" },
      { id: "poly-ai", name: "Poly", description: "AI-powered file conversion and processing", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🔄", category: "office-productivity", subcategory: "ai-files" },
      { id: "riffo", name: "Riffo", description: "Smart file organization with AI", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "📁", category: "office-productivity", subcategory: "ai-files" },
      { id: "the-drive-ai", name: "The Drive AI", description: "AI-enhanced cloud storage management", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "☁️", category: "office-productivity", subcategory: "ai-files" }
    ],
    "ai-forms": [
      { id: "fillout", name: "Fillout", description: "AI-powered form builder and automation", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📝", category: "office-productivity", subcategory: "ai-forms" },
      { id: "forms-app", name: "forms.app", description: "Create intelligent forms with AI assistance", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📋", category: "office-productivity", subcategory: "ai-forms" },
      { id: "voiceform", name: "Voiceform", description: "Voice-powered form creation and filling", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎤", category: "office-productivity", subcategory: "ai-forms" },
      { id: "blocksurvey", name: "BlockSurvey", description: "Privacy-focused AI survey platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔒", category: "office-productivity", subcategory: "ai-forms" },
      { id: "opinion-stage", name: "Opinion Stage", description: "Interactive forms and surveys with AI", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🎯", category: "office-productivity", subcategory: "ai-forms" }
    ],
    "ai-jobs": [
      { id: "outlier-ai", name: "Outlier AI", description: "AI training and freelance platform", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🎯", category: "office-productivity", subcategory: "ai-jobs" },
      { id: "simplify-jobs", name: "Simplify", description: "AI-powered job application tracking", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "✅", category: "office-productivity", subcategory: "ai-jobs" },
      { id: "jobright-jobs", name: "Jobright", description: "AI job search and career guidance", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "💼", category: "office-productivity", subcategory: "ai-jobs" },
      { id: "mercor", name: "Mercor", description: "AI talent matching platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🤝", category: "office-productivity", subcategory: "ai-jobs" },
      { id: "grabjobs", name: "GrabJobs", description: "Quick job matching with AI", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🚀", category: "office-productivity", subcategory: "ai-jobs" }
    ],
    "ai-life": [
      { id: "palmyst", name: "Palmyst", description: "AI life coach and personal guidance", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🌴", category: "office-productivity", subcategory: "ai-life" },
      { id: "okra-ai", name: "OKRA.ai", description: "AI-powered life optimization platform", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🥒", category: "office-productivity", subcategory: "ai-life" },
      { id: "epictopia", name: "EpicTopia", description: "AI life planning and goal setting", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🏔️", category: "office-productivity", subcategory: "ai-life" },
      { id: "fix-my-life-ai", name: "Fix My Life AI", description: "AI advisor for life improvement", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🔧", category: "office-productivity", subcategory: "ai-life" },
      { id: "ikigai-quest", name: "Ikigai Quest", description: "Discover your purpose with AI guidance", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "🎯", category: "office-productivity", subcategory: "ai-life" }
    ],
    "ai-meeting-assistant": [
      { id: "otter-ai", name: "Otter.ai", description: "AI meeting transcription and notes", url: "", upvotes: 2456, verified: true, rating: 4.8, icon: "🦦", category: "office-productivity", subcategory: "ai-meeting-assistant" },
      { id: "tactiq", name: "Tactiq", description: "Real-time meeting transcription for Google Meet", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📝", category: "office-productivity", subcategory: "ai-meeting-assistant" },
      { id: "read-ai", name: "Read AI", description: "Meeting analytics and insights", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "👁️", category: "office-productivity", subcategory: "ai-meeting-assistant" },
      { id: "fireflies-ai", name: "Fireflies.ai", description: "AI meeting recorder and analyzer", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🔥", category: "office-productivity", subcategory: "ai-meeting-assistant" },
      { id: "screenapp", name: "ScreenApp", description: "AI screen recorder and meeting assistant", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "📺", category: "office-productivity", subcategory: "ai-meeting-assistant" }
    ],
    "ai-monitor": [
      { id: "aura-monitor", name: "Aura", description: "AI-powered security and monitoring", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🛡️", category: "office-productivity", subcategory: "ai-monitor" },
      { id: "bark", name: "Bark", description: "AI monitoring for online safety", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🐕", category: "office-productivity", subcategory: "ai-monitor" },
      { id: "canopy", name: "Canopy", description: "AI website monitoring and analysis", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🌳", category: "office-productivity", subcategory: "ai-monitor" },
      { id: "gamma-ai", name: "Gamma.AI", description: "AI data loss prevention and monitoring", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "γ", category: "office-productivity", subcategory: "ai-monitor" },
      { id: "examonline", name: "ExamOnline", description: "AI proctoring and exam monitoring", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "🎓", category: "office-productivity", subcategory: "ai-monitor" }
    ],
    "ai-note-taker": [
      { id: "fathom", name: "Fathom", description: "AI meeting recorder and note taker", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "📊", category: "office-productivity", subcategory: "ai-note-taker" },
      { id: "goodnotes", name: "Goodnotes", description: "Digital note-taking with AI features", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📝", category: "office-productivity", subcategory: "ai-note-taker" },
      { id: "tldv", name: "tl;dv", description: "AI meeting recorder for remote teams", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📹", category: "office-productivity", subcategory: "ai-note-taker" },
      { id: "fireflies-notes", name: "Fireflies.ai", description: "Automatic meeting notes and summaries", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🔥", category: "office-productivity", subcategory: "ai-note-taker" },
    ],
    "ai-notes-generator": [
      { id: "studocu", name: "Studocu", description: "AI-powered study notes and summaries", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📚", category: "office-productivity", subcategory: "ai-notes-generator" },
      { id: "turbolearn-ai", name: "TurboLearn AI", description: "Generate study notes with AI", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "⚡", category: "office-productivity", subcategory: "ai-notes-generator" },
      { id: "notegpt", name: "NoteGPT", description: "AI note generation and summarization", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📝", category: "office-productivity", subcategory: "ai-notes-generator" },
      { id: "knowt", name: "Knowt", description: "AI flashcards and note generation", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🧠", category: "office-productivity", subcategory: "ai-notes-generator" },
      { id: "study-fetch", name: "Study Fetch", description: "AI-powered note creation and study tools", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "📖", category: "office-productivity", subcategory: "ai-notes-generator" }
    ],
    "ai-pdf": [
      { id: "chatpdf", name: "ChatPDF", description: "Chat with your PDF documents using AI", url: "", upvotes: 2567, verified: true, rating: 4.8, icon: "💬", category: "office-productivity", subcategory: "ai-pdf" },
      { id: "pdfgear", name: "PDFgear", description: "AI-powered PDF editing and management", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "⚙️", category: "office-productivity", subcategory: "ai-pdf" },
      { id: "updf", name: "UPDF", description: "Universal PDF editor with AI features", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📄", category: "office-productivity", subcategory: "ai-pdf" },
      { id: "toppdf", name: "TopPDF", description: "AI PDF tools and converters", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🔝", category: "office-productivity", subcategory: "ai-pdf" },
      { id: "offline-chat-pdf", name: "Offline Chat: Private AI", description: "Private AI PDF chat without internet", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔒", category: "office-productivity", subcategory: "ai-pdf" }
    ],
    "ai-pdf-editor": [
      { id: "pdnob-pdf-editor", name: "PDNob PDF Editor", description: "Professional PDF editing with AI", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "✏️", category: "office-productivity", subcategory: "ai-pdf-editor" },
      { id: "lightpdf", name: "LightPDF", description: "Online PDF editor with AI features", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "💡", category: "office-productivity", subcategory: "ai-pdf-editor" },
      { id: "tinywow", name: "TinyWow", description: "Free AI-powered PDF tools", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "😮", category: "office-productivity", subcategory: "ai-pdf-editor" },
      { id: "apowersoft", name: "Apowersoft", description: "PDF editor with AI enhancement", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔋", category: "office-productivity", subcategory: "ai-pdf-editor" },
      { id: "gopdf", name: "GoPDF", description: "Smart PDF editing and conversion", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🚀", category: "office-productivity", subcategory: "ai-pdf-editor" }
    ],
    "ai-pdf-summarizer": [
      { id: "pdf-guru", name: "PDF Guru", description: "AI PDF summarization and analysis", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🧙‍♂️", category: "office-productivity", subcategory: "ai-pdf-summarizer" },
      { id: "chatpdf-summarizer", name: "ChatPDF", description: "Summarize PDFs with AI conversation", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "💬", category: "office-productivity", subcategory: "ai-pdf-summarizer" },
      { id: "lightpdf-summarizer", name: "LightPDF", description: "Quick PDF summarization tool", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "💡", category: "office-productivity", subcategory: "ai-pdf-summarizer" },
      { id: "lilys-ai", name: "Lilys AI", description: "AI-powered document summarization", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🌸", category: "office-productivity", subcategory: "ai-pdf-summarizer" },
      { id: "noiz", name: "Noiz", description: "Smart PDF content extraction and summary", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🎵", category: "office-productivity", subcategory: "ai-pdf-summarizer" }
    ],
    "ai-ppt-maker": [
      { id: "aippt", name: "AiPPT", description: "AI-powered PowerPoint generation", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "📊", category: "office-productivity", subcategory: "ai-ppt-maker" },
      { id: "presentation-intelligence", name: "Pi（Presentation Intelligence）", description: "Intelligent presentation creation", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🧠", category: "office-productivity", subcategory: "ai-ppt-maker" },
      { id: "slidesgpt", name: "SlidesGPT", description: "Generate presentations with GPT", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🎯", category: "office-productivity", subcategory: "ai-ppt-maker" },
      { id: "slidespeak", name: "SlideSpeak", description: "AI presentation creator with voice", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎤", category: "office-productivity", subcategory: "ai-ppt-maker" },
      { id: "presentations-ai", name: "Presentations.AI", description: "Smart presentation design with AI", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🎨", category: "office-productivity", subcategory: "ai-ppt-maker" }
    ],
    "ai-presentation-generator": [
      { id: "gamma-presentations", name: "Gamma", description: "Create beautiful presentations with AI", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "📊", category: "office-productivity", subcategory: "ai-presentation-generator" },
      { id: "prezi", name: "Prezi", description: "Dynamic presentations with AI assistance", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🌀", category: "office-productivity", subcategory: "ai-presentation-generator" },
      { id: "pitch", name: "Pitch", description: "Collaborative presentation platform with AI", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "⚾", category: "office-productivity", subcategory: "ai-presentation-generator" },
      { id: "beautiful-ai", name: "Beautiful.ai", description: "Smart presentation design automation", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎨", category: "office-productivity", subcategory: "ai-presentation-generator" },
      { id: "miricanvas", name: "MiriCanvas", description: "AI-powered presentation and design tool", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🖌️", category: "office-productivity", subcategory: "ai-presentation-generator" }
    ],
    "ai-productivity-tools": [
      { id: "notion", name: "Notion", description: "All-in-one workspace with AI features", url: "", upvotes: 3456, verified: true, rating: 4.9, icon: "📝", category: "office-productivity", subcategory: "ai-productivity-tools" },
      { id: "wondershare", name: "Wondershare", description: "Creative and productivity software with AI", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "✨", category: "office-productivity", subcategory: "ai-productivity-tools" },
      { id: "liner-ai", name: "LINER AI", description: "AI-powered research and highlight tool", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "🖍️", category: "office-productivity", subcategory: "ai-productivity-tools" },
      { id: "coda", name: "Coda", description: "Document and database hybrid with AI", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📊", category: "office-productivity", subcategory: "ai-productivity-tools" },
    ],
    "ai-report-generator": [
      { id: "medisphere", name: "MediSphere", description: "AI medical report generation", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🏥", category: "office-productivity", subcategory: "ai-report-generator" },
      { id: "supa-reports", name: "Supa", description: "AI-powered business report generator", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📊", category: "office-productivity", subcategory: "ai-report-generator" },
      { id: "vizologi", name: "Vizologi", description: "AI business model and report creation", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎯", category: "office-productivity", subcategory: "ai-report-generator" },
      { id: "goover", name: "Goover", description: "Automated report generation with AI", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "📈", category: "office-productivity", subcategory: "ai-report-generator" },
      { id: "june-ai", name: "June AI", description: "Product analytics and reporting with AI", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "📅", category: "office-productivity", subcategory: "ai-report-generator" }
    ],
    "ai-resume-builder": [
      { id: "cvwizard", name: "CVwizard", description: "AI-powered CV and resume builder", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🧙‍♂️", category: "office-productivity", subcategory: "ai-resume-builder" },
      { id: "kickresume", name: "Kickresume", description: "Professional resume builder with AI", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🚀", category: "office-productivity", subcategory: "ai-resume-builder" },
      { id: "resumebuilder", name: "ResumeBuilder.com", description: "Easy resume creation with AI assistance", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📄", category: "office-productivity", subcategory: "ai-resume-builder" },
      { id: "rezi", name: "Rezi", description: "ATS-optimized resume builder with AI", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎯", category: "office-productivity", subcategory: "ai-resume-builder" },
      { id: "resume-worded", name: "Resume Worded", description: "AI resume optimization and feedback", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "✍️", category: "office-productivity", subcategory: "ai-resume-builder" }
    ],
    "ai-resume-checker": [
      { id: "careerflow", name: "Careerflow", description: "AI resume analysis and optimization", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "💼", category: "office-productivity", subcategory: "ai-resume-checker" },
      { id: "vmock", name: "VMock", description: "AI-powered resume review platform", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "✅", category: "office-productivity", subcategory: "ai-resume-checker" },
      { id: "huntr", name: "Huntr", description: "Job search with AI resume analysis", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎯", category: "office-productivity", subcategory: "ai-resume-checker" },
      { id: "loopcv", name: "Loopcv", description: "Automated job applications with resume optimization", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔄", category: "office-productivity", subcategory: "ai-resume-checker" },
      { id: "pyjamahrr", name: "PyjamaHR", description: "AI recruitment and resume screening", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "👔", category: "office-productivity", subcategory: "ai-resume-checker" }
    ],
    "ai-sop": [
      { id: "komodo", name: "Komodo", description: "AI-powered SOP creation and management", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🦎", category: "office-productivity", subcategory: "ai-sop" },
      { id: "document360", name: "Document360", description: "Knowledge base and SOP platform with AI", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📚", category: "office-productivity", subcategory: "ai-sop" },
      { id: "dubble", name: "Dubble", description: "Automatic documentation and SOP creation", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "📝", category: "office-productivity", subcategory: "ai-sop" },
      { id: "manifestly-checklists", name: "Manifestly Checklists", description: "Process management and SOP automation", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "✅", category: "office-productivity", subcategory: "ai-sop" },
      { id: "checklist-gg", name: "checklist.gg", description: "Smart checklist and SOP generator", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "📋", category: "office-productivity", subcategory: "ai-sop" }
    ],
    "ai-scanner": [
      { id: "card-scanner", name: "Card Scanner", description: "AI business card scanning and management", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "💳", category: "office-productivity", subcategory: "ai-scanner" },
      { id: "ludex", name: "Ludex", description: "AI document and data scanner", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔍", category: "office-productivity", subcategory: "ai-scanner" },
      { id: "arbitragescanner", name: "ArbitrageScanner.io", description: "AI-powered arbitrage opportunity scanner", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "📊", category: "office-productivity", subcategory: "ai-scanner" },
      { id: "zerothreat", name: "ZeroThreat", description: "AI security and threat scanner", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "🛡️", category: "office-productivity", subcategory: "ai-scanner" },
      { id: "reach-cards", name: "Reach Cards", description: "AI business card reader and organizer", url: "", upvotes: 843, verified: true, rating: 4.1, icon: "📇", category: "office-productivity", subcategory: "ai-scanner" }
    ],
    "ai-schedule-maker": [
      { id: "tiimo", name: "Tiimo", description: "AI visual schedule and time management", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "⏰", category: "office-productivity", subcategory: "ai-schedule-maker" },
      { id: "morgen", name: "Morgen", description: "Unified calendar and schedule management", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🌅", category: "office-productivity", subcategory: "ai-schedule-maker" },
      { id: "rotageek", name: "Rotageek", description: "AI workforce scheduling platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔄", category: "office-productivity", subcategory: "ai-schedule-maker" },
      { id: "flowsavvy", name: "FlowSavvy", description: "Smart scheduling with time blocking", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "⏳", category: "office-productivity", subcategory: "ai-schedule-maker" },
      { id: "trevor-ai", name: "Trevor AI", description: "AI-powered daily schedule planner", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "📅", category: "office-productivity", subcategory: "ai-schedule-maker" }
    ],
    "ai-scheduling": [
      { id: "medisphere-scheduling", name: "MediSphere", description: "Medical appointment scheduling with AI", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🏥", category: "office-productivity", subcategory: "ai-scheduling" },
      { id: "reclaim-ai-scheduling", name: "Reclaim.ai", description: "Smart calendar scheduling optimization", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📅", category: "office-productivity", subcategory: "ai-scheduling" },
      { id: "carepatron", name: "Carepatron", description: "Healthcare practice management and scheduling", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "👩‍⚕️", category: "office-productivity", subcategory: "ai-scheduling" },
      { id: "toki-scheduling", name: "Toki", description: "AI meeting and appointment scheduling", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "⏰", category: "office-productivity", subcategory: "ai-scheduling" },
      { id: "tweet-hunter", name: "Tweet Hunter", description: "Twitter content scheduling with AI", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🐦", category: "office-productivity", subcategory: "ai-scheduling" }
    ],
    "ai-search-engine": [
      { id: "perplexity-ai", name: "Perplexity AI", description: "AI-powered search and answer engine", url: "", upvotes: 3456, verified: true, rating: 4.9, icon: "🔍", category: "office-productivity", subcategory: "ai-search-engine" },
      { id: "genspark", name: "Genspark", description: "AI search engine for comprehensive answers", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "⚡", category: "office-productivity", subcategory: "ai-search-engine" },
      { id: "chub-ai", name: "Chub AI", description: "Character-based AI search platform", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "🤖", category: "office-productivity", subcategory: "ai-search-engine" },
      { id: "kagi-search", name: "Kagi Search", description: "Ad-free search engine with AI features", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🔎", category: "office-productivity", subcategory: "ai-search-engine" },
      { id: "consensus", name: "Consensus", description: "AI search engine for scientific research", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🧬", category: "office-productivity", subcategory: "ai-search-engine" }
    ],
    "ai-spreadsheet": [
      { id: "quadratic", name: "Quadratic", description: "Next-generation spreadsheet with AI", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "📊", category: "office-productivity", subcategory: "ai-spreadsheet" },
      { id: "numerous-ai", name: "Numerous.ai", description: "AI-powered spreadsheet automation", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🔢", category: "office-productivity", subcategory: "ai-spreadsheet" },
      { id: "sheetai", name: "SheetAI", description: "Google Sheets with AI superpowers", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📋", category: "office-productivity", subcategory: "ai-spreadsheet" },
      { id: "sourcetable-spreadsheet", name: "Sourcetable", description: "AI spreadsheet with natural language", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🔗", category: "office-productivity", subcategory: "ai-spreadsheet" },
      { id: "ajelix-spreadsheet", name: "Ajelix", description: "Excel and Google Sheets AI tools", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "⚡", category: "office-productivity", subcategory: "ai-spreadsheet" }
    ],
    "ai-task-management": [
      { id: "motion-tasks", name: "Motion", description: "AI calendar and task management system", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔄", category: "office-productivity", subcategory: "ai-task-management" },
      { id: "akiflow-tasks", name: "Akiflow", description: "Unified task management with AI scheduling", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "⚡", category: "office-productivity", subcategory: "ai-task-management" },
      { id: "omi-ai", name: "Omi AI", description: "AI-powered personal task assistant", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🎯", category: "office-productivity", subcategory: "ai-task-management" },
      { id: "tiimo-tasks", name: "Tiimo", description: "Visual task management with AI", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "⏰", category: "office-productivity", subcategory: "ai-task-management" },
      { id: "nifty", name: "Nifty", description: "Project management with AI insights", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🎨", category: "office-productivity", subcategory: "ai-task-management" }
    ],
    "ai-word": [
      { id: "doc2lang", name: "Doc2Lang", description: "Document translation with AI", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🌐", category: "office-productivity", subcategory: "ai-word" },
      { id: "doco", name: "Doco", description: "AI-powered document creation and editing", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📝", category: "office-productivity", subcategory: "ai-word" },
      { id: "online-word-editor", name: "Online Word Editor", description: "Web-based Word editor with AI features", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "💻", category: "office-productivity", subcategory: "ai-word" },
      { id: "write-conch-ai", name: "Write Conch AI", description: "AI writing assistant for documents", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🐚", category: "office-productivity", subcategory: "ai-word" },
      { id: "legalgraph-ai", name: "LegalGraph AI", description: "AI legal document creation", url: "", upvotes: 987, verified: true, rating: 4.2, icon: "⚖️", category: "office-productivity", subcategory: "ai-word" }
    ],
    "excel-ai": [
      { id: "formula-bot-excel", name: "Formula Bot", description: "AI Excel formula generator and helper", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🤖", category: "office-productivity", subcategory: "excel-ai" },
      { id: "datarails", name: "Datarails", description: "AI-powered Excel automation platform", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📊", category: "office-productivity", subcategory: "excel-ai" },
      { id: "numerous-ai-excel", name: "Numerous.ai", description: "Excel automation with AI", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🔢", category: "office-productivity", subcategory: "excel-ai" },
      { id: "ai-excel-bot-excel", name: "AI Excel Bot", description: "Smart Excel assistant and formula generator", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📈", category: "office-productivity", subcategory: "excel-ai" },
      { id: "formulas-hq", name: "Formulas HQ", description: "Excel and Google Sheets formula AI", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🏢", category: "office-productivity", subcategory: "excel-ai" }
    ],
    "graph-ai": [
      { id: "graphy", name: "Graphy", description: "AI-powered graph and chart creation", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📊", category: "office-productivity", subcategory: "graph-ai" },
      { id: "ai-graph-maker", name: "AI Graph Maker", description: "Create graphs and charts with AI", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "📈", category: "office-productivity", subcategory: "graph-ai" },
      { id: "github-graph", name: "GitHub", description: "Code collaboration with AI insights", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🐙", category: "office-productivity", subcategory: "graph-ai" },
      { id: "chatgpt-tree", name: "ChatGPT Conversation Tree Extension", description: "Visualize ChatGPT conversations as graphs", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🌳", category: "office-productivity", subcategory: "graph-ai" },
      { id: "calcgen-ai", name: "CalcGen AI", description: "AI calculator and graph generator", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🧮", category: "office-productivity", subcategory: "graph-ai" }
    ],
    "whiteboard-ai": [
      { id: "whimsical-whiteboard", name: "Whimsical", description: "Collaborative whiteboard with AI features", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🎨", category: "office-productivity", subcategory: "whiteboard-ai" },
      { id: "boardmix", name: "Boardmix", description: "AI-enhanced collaborative whiteboard", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🖼️", category: "office-productivity", subcategory: "whiteboard-ai" },
      { id: "jeda-ai", name: "Jeda.ai", description: "AI-powered visual workspace", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🎯", category: "office-productivity", subcategory: "whiteboard-ai" },
      { id: "fabrie", name: "Fabrie", description: "Design collaboration with AI whiteboard", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🧵", category: "office-productivity", subcategory: "whiteboard-ai" },
      { id: "bloxgpt", name: "BloxGPT", description: "AI whiteboard for block-based collaboration", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🧱", category: "office-productivity", subcategory: "whiteboard-ai" }
    ]
  },
  "video-animation": {
    "ai-animated-video": [

      { id: "animaker", name: "Animaker", description: "Create animated videos and live-action videos in minutes", url: "", upvotes: 1567, verified: true, rating: 4.7, reviewsCount: 234, savedCount: 1567, addedDate: "2023-06-03", icon: "🎬", category: "video-animation", subcategory: "ai-animated-video" },
      { id: "animate-ai", name: "Animate AI", description: "AI-powered animation creation platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎭", category: "video-animation", subcategory: "ai-animated-video" },
      { id: "autodraft-ai", name: "Autodraft AI", description: "Automated video animation with AI", url: "", upvotes: 989, verified: true, rating: 4.5, icon: "✏️", category: "video-animation", subcategory: "ai-animated-video" },
      { id: "deep-nostalgia-ai", name: "Deep Nostalgia AI", description: "Animate old photos with AI technology", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "📸", category: "video-animation", subcategory: "ai-animated-video" },
      { id: "a2e-free-ai-videos", name: "A2E Free and Uncensored AI Videos", description: "Free AI video generation platform", url: "", upvotes: 654, verified: false, rating: 4.3, icon: "🎥", category: "video-animation", subcategory: "ai-animated-video" }
    ],
    "ai-animation-generator": [
      { id: "dreamface", name: "DreamFace", description: "AI-powered face animation generator", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "😊", category: "video-animation", subcategory: "ai-animation-generator" },
      { id: "pollo-ai", name: "Pollo AI", description: "AI animation creator for social media", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🐔", category: "video-animation", subcategory: "ai-animation-generator" },
      { id: "vidu-ai", name: "Vidu AI", description: "Professional AI video animation platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🎬", category: "video-animation", subcategory: "ai-animation-generator" },
      { id: "viggle-ai", name: "Viggle AI", description: "Character animation with AI technology", url: "", upvotes: 843, verified: true, rating: 4.2, icon: "💃", category: "video-animation", subcategory: "ai-animation-generator" }
    ],
    "ai-avatar-video-generator": [
      { id: "vidyard", name: "Vidyard", description: "AI avatar video creation for business", url: "", upvotes: 1687, verified: true, rating: 4.7, icon: "👨‍💼", category: "video-animation", subcategory: "ai-avatar-video-generator" },
      { id: "virbo", name: "Virbo", description: "AI spokesperson video generator", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🎤", category: "video-animation", subcategory: "ai-avatar-video-generator" },
      { id: "captions-avatar", name: "Captions", description: "AI-powered video captions and avatars", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💬", category: "video-animation", subcategory: "ai-avatar-video-generator" },
      { id: "elai-io", name: "Elai.io", description: "AI video generation with digital avatars", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🤖", category: "video-animation", subcategory: "ai-avatar-video-generator" },
      { id: "jogg-ai", name: "Jogg.ai", description: "AI avatar video creation platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🏃‍♂️", category: "video-animation", subcategory: "ai-avatar-video-generator" }
    ],
    "ai-cartoon-video-generator": [
      { id: "tooncrafter-ai", name: "ToonCrafter AI", description: "AI cartoon video creation tool", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🎨", category: "video-animation", subcategory: "ai-cartoon-video-generator" },
      { id: "p5-faceapi-cartoon", name: "P5 and faceApi Cartoon Overlay", description: "Face detection cartoon overlay system", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "😄", category: "video-animation", subcategory: "ai-cartoon-video-generator" },
      { id: "morningcomicbrew", name: "MorningComicBrew.com", description: "Daily comic generation with AI", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "☕", category: "video-animation", subcategory: "ai-cartoon-video-generator" },
      { id: "videoinu", name: "Videoinu", description: "AI cartoon video generator", url: "", upvotes: 543, verified: true, rating: 4.2, icon: "🐕", category: "video-animation", subcategory: "ai-cartoon-video-generator" },
      { id: "domo-ai", name: "DomoAI", description: "AI-powered cartoon video creation", url: "", upvotes: 432, verified: false, rating: 4.1, icon: "🏠", category: "video-animation", subcategory: "ai-cartoon-video-generator" }
    ],
    "ai-commercial-generator": [
      { id: "vidau-ai", name: "VidAU AI", description: "AI commercial video generation platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📺", category: "video-animation", subcategory: "ai-commercial-generator" },
      { id: "waymark", name: "Waymark", description: "AI video creation for businesses", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎯", category: "video-animation", subcategory: "ai-commercial-generator" },
      { id: "fancytech", name: "FancyTech", description: "AI-powered commercial video maker", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "✨", category: "video-animation", subcategory: "ai-commercial-generator" },
      { id: "streamr-ai", name: "Streamr.ai", description: "AI streaming and commercial content", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "📡", category: "video-animation", subcategory: "ai-commercial-generator" },
      { id: "clip-studio-ai", name: "Clip Studio AI", description: "Professional AI video production", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "🎬", category: "video-animation", subcategory: "ai-commercial-generator" }
    ],
    "ai-face-swap-video": [
      { id: "swapfaces-ai", name: "Swapfaces AI", description: "AI face swapping in videos", url: "", upvotes: 1567, verified: true, rating: 4.5, icon: "🔄", category: "video-animation", subcategory: "ai-face-swap-video" },
      { id: "ai-face-swap", name: "AI Face Swap", description: "Advanced face swapping technology", url: "", upvotes: 1234, verified: true, rating: 4.4, icon: "👥", category: "video-animation", subcategory: "ai-face-swap-video" },
      { id: "magic-hour-faceswap", name: "Magic Hour", description: "AI video editing with face swap", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🌅", category: "video-animation", subcategory: "ai-face-swap-video" },
      { id: "deepfakes-web", name: "Deepfakes Web", description: "Online deepfake video creation", url: "", upvotes: 543, verified: false, rating: 4.0, icon: "🎭", category: "video-animation", subcategory: "ai-face-swap-video" }
    ],
    "ai-gif-generator": [
      { id: "memegen-ai", name: "MemeGen AI", description: "AI-powered GIF and meme generator", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "😂", category: "video-animation", subcategory: "ai-gif-generator" },
      { id: "aigify", name: "AIGIFY", description: "Convert images to animated GIFs with AI", url: "", upvotes: 1089, verified: true, rating: 4.5, icon: "🎞️", category: "video-animation", subcategory: "ai-gif-generator" },
      { id: "datagif", name: "DataGIF", description: "Data visualization to animated GIFs", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "📊", category: "video-animation", subcategory: "ai-gif-generator" },
      { id: "misgif", name: "misgif", description: "AI GIF creation and editing platform", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🎨", category: "video-animation", subcategory: "ai-gif-generator" },
      { id: "aigif", name: "AIGIF", description: "Simple AI-powered GIF generator", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎬", category: "video-animation", subcategory: "ai-gif-generator" }
    ],
    "ai-lip-sync-generator": [
      { id: "veo-3", name: "Veo 3", description: "Advanced AI lip sync technology", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "👄", category: "video-animation", subcategory: "ai-lip-sync-generator" },
      { id: "magic-hour-lipsync", name: "Magic Hour", description: "AI lip sync video generation", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌅", category: "video-animation", subcategory: "ai-lip-sync-generator" },
      { id: "sync-so", name: "sync.so", description: "Professional AI lip synchronization", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🎤", category: "video-animation", subcategory: "ai-lip-sync-generator" },
      { id: "vozo", name: "Vozo", description: "AI-powered lip sync and dubbing", url: "", upvotes: 754, verified: true, rating: 4.4, icon: "🗣️", category: "video-animation", subcategory: "ai-lip-sync-generator" },
      { id: "blipcut-ai", name: "BlipCut AI Video Translator", description: "AI video translation with lip sync", url: "", upvotes: 621, verified: true, rating: 4.3, icon: "🌐", category: "video-animation", subcategory: "ai-lip-sync-generator" }
    ],
    "ai-movie-generator": [
      { id: "story-com", name: "Story.com", description: "AI movie and story generation platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📖", category: "video-animation", subcategory: "ai-movie-generator" },
      { id: "focal", name: "Focal", description: "AI-powered movie creation tool", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "🎬", category: "video-animation", subcategory: "ai-movie-generator" },
      { id: "melies-ai", name: "Melies AI", description: "Cinematic AI movie generation", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🎭", category: "video-animation", subcategory: "ai-movie-generator" },
      { id: "supermaker-ai", name: "SuperMaker AI Video Generator", description: "AI video and movie creation platform", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🦸‍♂️", category: "video-animation", subcategory: "ai-movie-generator" },
      { id: "zero1cine", name: "zero1cine", description: "AI cinema and movie generation", url: "", upvotes: 543, verified: false, rating: 4.2, icon: "🎞️", category: "video-animation", subcategory: "ai-movie-generator" }
    ],
    "ai-music-video-generator": [
      { id: "brev-ai", name: "Brev.ai", description: "AI music video creation platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎵", category: "video-animation", subcategory: "ai-music-video-generator" },
      { id: "brev-ai-alt", name: "Brev AI", description: "Alternative AI music video generator", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🎶", category: "video-animation", subcategory: "ai-music-video-generator" },
      { id: "kaiber", name: "Kaiber", description: "AI music video and animation creator", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🎨", category: "video-animation", subcategory: "ai-music-video-generator" },
      { id: "musichero-ai", name: "MusicHero.ai", description: "AI-powered music video generation", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "🎸", category: "video-animation", subcategory: "ai-music-video-generator" },
      { id: "neural-frames", name: "Neural Frames", description: "AI video generation for music", url: "", upvotes: 621, verified: true, rating: 4.1, icon: "🧠", category: "video-animation", subcategory: "ai-music-video-generator" }
    ],
    "ai-reel-generator": [
      { id: "veo-reel", name: "Veo", description: "AI reel and short video generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📱", category: "video-animation", subcategory: "ai-reel-generator" },
      { id: "deciphr-ai", name: "Deciphr AI", description: "AI content and reel generation", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔍", category: "video-animation", subcategory: "ai-reel-generator" },
      { id: "autoreels", name: "AutoReels", description: "Automated AI reel creation", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "⚡", category: "video-animation", subcategory: "ai-reel-generator" },
      { id: "reeler-ai", name: "Reeler AI", description: "AI-powered reel generation platform", url: "", upvotes: 754, verified: true, rating: 4.4, icon: "🎣", category: "video-animation", subcategory: "ai-reel-generator" },
      { id: "aireelgenerator", name: "AiReelGenerator", description: "Simple AI reel creation tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎬", category: "video-animation", subcategory: "ai-reel-generator" }
    ],
    "ai-short-video-generator": [
      { id: "2short-ai", name: "2short AI", description: "2short AI automatically converts long YouTube videos into engaging short clips optimized for TikTok Instagram Reels and YouTube Shorts", url: "https://2short.ai", upvotes: 3400, verified: false, rating: 4.5, icon: "✂️", category: "video-animation", subcategory: "ai-short-video-generator", addedDate: "2026-04-01" },
      { id: "opus-clip", name: "Opus Clip", description: "AI short video clips from long content", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "✂️", category: "video-animation", subcategory: "ai-short-video-generator" },
      { id: "luma-ai-dream", name: "Luma AI Dream Machine", description: "AI dream-to-video generation", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "💭", category: "video-animation", subcategory: "ai-short-video-generator" },
      { id: "vizard-ai", name: "Vizard.ai", description: "AI video editing and short clips", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🧙‍♂️", category: "video-animation", subcategory: "ai-short-video-generator" },
      { id: "ssemble", name: "Ssemble", description: "AI video assembly and editing", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🔧", category: "video-animation", subcategory: "ai-short-video-generator" }
    ],
    "ai-stock-video-generator": [
      { id: "imgkits", name: "Imgkits - Top AI Image & Video Processing Tools Online", description: "Comprehensive AI video processing toolkit", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🛠️", category: "video-animation", subcategory: "ai-stock-video-generator" },
      { id: "basedlabs-ai", name: "BasedLabs.ai", description: "AI stock video generation platform", url: "", upvotes: 1089, verified: true, rating: 4.4, icon: "🧪", category: "video-animation", subcategory: "ai-stock-video-generator" },
      { id: "morphic", name: "Morphic", description: "AI video morphing and generation", url: "", upvotes: 876, verified: true, rating: 4.3, icon: "🔄", category: "video-animation", subcategory: "ai-stock-video-generator" },
      { id: "viddo-veo3", name: "Viddo-Veo3 AI Video Generator", description: "Advanced AI video generation system", url: "", upvotes: 654, verified: true, rating: 4.2, icon: "🎥", category: "video-animation", subcategory: "ai-stock-video-generator" },
      { id: "crepal", name: "CrePal", description: "Creative AI video generation tool", url: "", upvotes: 432, verified: false, rating: 4.1, icon: "🎨", category: "video-animation", subcategory: "ai-stock-video-generator" }
    ],
    "ai-tiktok-video-generator": [
      { id: "revid-ai", name: "revid.ai", description: "AI TikTok video generation platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🎵", category: "video-animation", subcategory: "ai-tiktok-video-generator" },
      { id: "faceless-video", name: "Faceless.video", description: "Anonymous AI video creation", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "🎭", category: "video-animation", subcategory: "ai-tiktok-video-generator" },
      { id: "autoshorts-ai", name: "AutoShorts.ai", description: "Automated AI short video creation", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "📱", category: "video-animation", subcategory: "ai-tiktok-video-generator" },
      { id: "pdf-to-brainrot", name: "PDF To Brainrot", description: "Convert documents to viral videos", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "📄", category: "video-animation", subcategory: "ai-tiktok-video-generator" },
      { id: "aicut", name: "aicut", description: "AI video cutting and TikTok creation", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "✂️", category: "video-animation", subcategory: "ai-tiktok-video-generator" }
    ],
    "ai-ugc-video-generator": [
      { id: "captions-ugc", name: "Captions", description: "AI UGC video with captions", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💬", category: "video-animation", subcategory: "ai-ugc-video-generator" },
      { id: "arcads", name: "Arcads", description: "AI user-generated content platform", url: "", upvotes: 1089, verified: true, rating: 4.4, icon: "🎯", category: "video-animation", subcategory: "ai-ugc-video-generator" },
      { id: "makeugc", name: "MakeUGC", description: "AI UGC video creation tool", url: "", upvotes: 876, verified: true, rating: 4.3, icon: "📹", category: "video-animation", subcategory: "ai-ugc-video-generator" },
      { id: "vidau-ai-ugc", name: "VidAU AI", description: "AI UGC video generation platform", url: "", upvotes: 654, verified: true, rating: 4.2, icon: "📺", category: "video-animation", subcategory: "ai-ugc-video-generator" },
      { id: "influee", name: "Influee", description: "AI influencer content generation", url: "", upvotes: 432, verified: false, rating: 4.1, icon: "👑", category: "video-animation", subcategory: "ai-ugc-video-generator" }
    ],
    "ai-video-editor": [
      { id: "capcut", name: "CapCut", description: "Popular AI video editing application", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "✂️", category: "video-animation", subcategory: "ai-video-editor" },
      { id: "invideo", name: "InVideo", description: "AI-powered video creation platform", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🎬", category: "video-animation", subcategory: "ai-video-editor" },
      { id: "veed-io", name: "VEED.IO", description: "Online AI video editing suite", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🎥", category: "video-animation", subcategory: "ai-video-editor" },
      { id: "clideo", name: "Clideo", description: "Simple AI video editing tools", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🎞️", category: "video-animation", subcategory: "ai-video-editor" },
      { id: "movavi", name: "Movavi", description: "Professional AI video editing software", url: "", upvotes: 1089, verified: true, rating: 4.4, icon: "🎭", category: "video-animation", subcategory: "ai-video-editor" }
    ],
    "ai-video-enhancer": [
      { id: "hitpaw-vikpea", name: "HitPaw VikPea", description: "AI video enhancement and upscaling", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📈", category: "video-animation", subcategory: "ai-video-enhancer" },
      { id: "anyenhancer", name: "AnyEnhancer", description: "Universal AI video enhancement tool", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "✨", category: "video-animation", subcategory: "ai-video-enhancer" },
      { id: "wondershare-filmora", name: "Wondershare Filmora", description: "AI-powered video editing and enhancement", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🎬", category: "video-animation", subcategory: "ai-video-enhancer" },
      { id: "topaz-labs", name: "Topaz Labs", description: "Professional AI video enhancement", url: "", upvotes: 876, verified: true, rating: 4.3, icon: "💎", category: "video-animation", subcategory: "ai-video-enhancer" },
      { id: "airbrush", name: "AirBrush", description: "AI video and photo enhancement", url: "", upvotes: 654, verified: true, rating: 4.2, icon: "🖌️", category: "video-animation", subcategory: "ai-video-enhancer" }
    ],
    "ai-video-generator": [
      { id: "pixnova-ai", name: "Pixnova AI", description: "Pixnova AI creates AI-generated videos from text descriptions with multiple art styles and high-quality output", url: "https://pixnova.ai", upvotes: 2800, verified: false, rating: 4.2, icon: "🖼️", category: "video-animation", subcategory: "ai-video-generator", addedDate: "2026-04-01" },
      { id: "unlucid-ai", name: "Unlucid AI", description: "Unlucid AI is a creative AI image and video generation platform specializing in surreal dreamlike visuals", url: "https://unlucid.ai", upvotes: 2600, verified: false, rating: 4.1, icon: "🌙", category: "video-animation", subcategory: "ai-video-generator", addedDate: "2026-04-01" },
      { id: "sora", name: "Sora", description: "OpenAI's advanced text-to-video model", url: "", upvotes: 2456, verified: true, rating: 4.9, icon: "🌟", category: "video-animation", subcategory: "ai-video-generator" },
      { id: "heygen", name: "HeyGen", description: "AI avatar video generation platform", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "👋", category: "video-animation", subcategory: "ai-video-generator" },
      { id: "kling-ai", name: "Kling AI", description: "Advanced AI video generation system", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "⚡", category: "video-animation", subcategory: "ai-video-generator" },
      { id: "haiper-ai", name: "Haiper AI", description: "AI-powered video-making platform that transforms images and text into high-quality video.", url: "https://haiper.ai/", upvotes: 2400, verified: true, rating: 4.5, icon: "🎬", category: "video-animation", subcategory: "ai-video-generator", addedDate: "Nov 06, 2025" },
      { id: "higgsfield", name: "Higgsfield", description: "Scientific AI video generation", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🔬", category: "video-animation", subcategory: "ai-video-generator" },
    ],
    "ai-video-recording": [
      { id: "veo-recording", name: "Veo", description: "AI-powered video recording system", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📹", category: "video-animation", subcategory: "ai-video-recording" },
      { id: "camtasia", name: "Camtasia", description: "Screen recording and video editing", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎥", category: "video-animation", subcategory: "ai-video-recording" },
      { id: "guidde", name: "guidde", description: "AI-powered video guide creation", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "📖", category: "video-animation", subcategory: "ai-video-recording" },
      { id: "focusee", name: "FocuSee", description: "AI screen recording and enhancement", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "👁️", category: "video-animation", subcategory: "ai-video-recording" },
      { id: "muse-ai", name: "muse.ai", description: "AI video hosting and recording", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "🎭", category: "video-animation", subcategory: "ai-video-recording" }
    ],
    "ai-video-search": [
      { id: "twelvelabs", name: "TwelveLabs", description: "AI video understanding and search", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔍", category: "video-animation", subcategory: "ai-video-search" },
      { id: "anyclip", name: "AnyClip", description: "AI video intelligence platform", url: "", upvotes: 1089, verified: true, rating: 4.5, icon: "📎", category: "video-animation", subcategory: "ai-video-search" },
      { id: "memories-ai", name: "Memories.ai", description: "AI-powered video memory search", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "💭", category: "video-animation", subcategory: "ai-video-search" },
      { id: "imaginario-ai", name: "Imaginario.ai", description: "AI video content discovery", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🎬", category: "video-animation", subcategory: "ai-video-search" },
      { id: "veedoai", name: "VeedoAI", description: "AI video search and analysis", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🔎", category: "video-animation", subcategory: "ai-video-search" }
    ],
    "ai-video-summarizer": [
      { id: "revisely", name: "Revisely", description: "AI study video summarization", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "📚", category: "video-animation", subcategory: "ai-video-summarizer" },
      { id: "makefilm", name: "Makefilm", description: "AI film and video summarization", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🎬", category: "video-animation", subcategory: "ai-video-summarizer" },
      { id: "noiz", name: "Noiz", description: "AI noise reduction and summarization", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🔇", category: "video-animation", subcategory: "ai-video-summarizer" },
      { id: "eightify", name: "Eightify", description: "AI YouTube video summarization", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "8️⃣", category: "video-animation", subcategory: "ai-video-summarizer" }
    ],
    "ai-video-upscaler": [
      { id: "hitpaw-vikpea-upscaler", name: "HitPaw VikPea", description: "AI video upscaling and enhancement", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📈", category: "video-animation", subcategory: "ai-video-upscaler" },
      { id: "anyenhancer-upscaler", name: "AnyEnhancer", description: "Universal AI video upscaling", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "✨", category: "video-animation", subcategory: "ai-video-upscaler" },
      { id: "nero", name: "Nero", description: "Professional AI video upscaling", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🔥", category: "video-animation", subcategory: "ai-video-upscaler" },
      { id: "avclabs", name: "AVCLabs", description: "Advanced AI video processing lab", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🧪", category: "video-animation", subcategory: "ai-video-upscaler" },
      { id: "vancei-video-ai", name: "VanceAI Video AI", description: "AI video enhancement and upscaling", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "🎯", category: "video-animation", subcategory: "ai-video-upscaler" }
    ],
    "ai-vtuber": [
      { id: "live3d", name: "Live3D", description: "VTuber avatar creation and streaming", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎭", category: "video-animation", subcategory: "ai-vtuber" },
      { id: "webcam-motion-capture", name: "Webcam Motion Capture", description: "AI motion capture for VTubers", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "📹", category: "video-animation", subcategory: "ai-vtuber" },
      { id: "hyper", name: "Hyper", description: "AI VTuber enhancement platform", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "⚡", category: "video-animation", subcategory: "ai-vtuber" },
      { id: "vtube-studio", name: "VTube Studio", description: "Professional VTuber streaming software", url: "", upvotes: 543, verified: true, rating: 4.2, icon: "📺", category: "video-animation", subcategory: "ai-vtuber" },
      { id: "virtual-you", name: "Virtual You", description: "AI-powered virtual avatar creator", url: "", upvotes: 432, verified: false, rating: 4.1, icon: "👤", category: "video-animation", subcategory: "ai-vtuber" }
    ],
    "ai-youtube-video-maker": [
      { id: "aicut-youtube", name: "aicut", description: "AI YouTube video creation tool", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "✂️", category: "video-animation", subcategory: "ai-youtube-video-maker" },
      { id: "subscribr", name: "Subscribr", description: "AI YouTube content optimization", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "📺", category: "video-animation", subcategory: "ai-youtube-video-maker" },
      { id: "jupitrr-ai", name: "Jupitrr AI", description: "AI video creation for YouTube", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🪐", category: "video-animation", subcategory: "ai-youtube-video-maker" },
      { id: "autoae", name: "AutoAE", description: "Automated After Effects for YouTube", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🎬", category: "video-animation", subcategory: "ai-youtube-video-maker" },
      { id: "woxo", name: "WOXO", description: "AI-powered YouTube video maker", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "📹", category: "video-animation", subcategory: "ai-youtube-video-maker" }
    ],
    "image-to-video": [
      { id: "pixverse", name: "PixVerse", description: "AI image-to-video generation", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🎨", category: "video-animation", subcategory: "image-to-video" },
      { id: "magic-hour-image", name: "Magic Hour", description: "AI image animation platform", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🌅", category: "video-animation", subcategory: "image-to-video" },
      { id: "higgsfield-image", name: "Higgsfield", description: "Scientific image-to-video AI", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🔬", category: "video-animation", subcategory: "image-to-video" },
    ],
    "long-video-to-short-video-ai": [
      { id: "vizard-ai-short", name: "Vizard.ai", description: "AI long-to-short video conversion", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🧙‍♂️", category: "video-animation", subcategory: "long-video-to-short-video-ai" },
      { id: "riverside-fm-short", name: "Riverside.fm", description: "Podcast to short video AI", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌊", category: "video-animation", subcategory: "long-video-to-short-video-ai" },
      { id: "opusclip-short", name: "OpusClip", description: "AI clip extraction from long videos", url: "", upvotes: 1089, verified: true, rating: 4.5, icon: "✂️", category: "video-animation", subcategory: "long-video-to-short-video-ai" },
      { id: "sendshort", name: "SendShort", description: "AI short video creation from long content", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "📱", category: "video-animation", subcategory: "long-video-to-short-video-ai" }
    ],
    "script-to-video-ai-generator": [
      { id: "novi-ai", name: "Novi AI", description: "Script-to-video AI generation", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📝", category: "video-animation", subcategory: "script-to-video-ai-generator" },
      { id: "pictory", name: "Pictory", description: "AI video creation from scripts", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎬", category: "video-animation", subcategory: "script-to-video-ai-generator" },
      { id: "ltx-studio", name: "LTX Studio", description: "Professional script-to-video AI", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🎭", category: "video-animation", subcategory: "script-to-video-ai-generator" },
      { id: "zebracat", name: "Zebracat", description: "AI script visualization platform", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🦓", category: "video-animation", subcategory: "script-to-video-ai-generator" },
      { id: "aicut-script", name: "AICUT", description: "AI script-to-video converter", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "✂️", category: "video-animation", subcategory: "script-to-video-ai-generator" }
    ],
    "text-to-video": [
      { id: "runway", name: "Runway", description: "Advanced AI text-to-video platform", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🛬", category: "video-animation", subcategory: "text-to-video" },
      { id: "pixverse-text", name: "PixVerse", description: "AI text-to-video generation", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🎨", category: "video-animation", subcategory: "text-to-video" },
      { id: "luma-ai-text", name: "Luma AI Dream Machine", description: "Dream-like text-to-video AI", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "💭", category: "video-animation", subcategory: "text-to-video" },
      { id: "invideo-text", name: "InVideo", description: "Text-to-video creation platform", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🎬", category: "video-animation", subcategory: "text-to-video" },
      { id: "heygen-text", name: "HeyGen", description: "AI avatar text-to-video", url: "", upvotes: 1089, verified: true, rating: 4.4, icon: "👋", category: "video-animation", subcategory: "text-to-video" }
    ],
    "video-to-video": [
      { id: "deevid-ai", name: "DeeVid AI", description: "AI video-to-video transformation", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🔄", category: "video-animation", subcategory: "video-to-video" },
      { id: "goenhance-ai", name: "GoEnhance AI", description: "AI video enhancement and transformation", url: "", upvotes: 1089, verified: true, rating: 4.4, icon: "⚡", category: "video-animation", subcategory: "video-to-video" },
      { id: "lanta-ai", name: "Lanta AI", description: "Video style transfer with AI", url: "", upvotes: 876, verified: true, rating: 4.3, icon: "🏮", category: "video-animation", subcategory: "video-to-video" },
      { id: "ebsynth", name: "EbSynth", description: "Video synthesis and transformation", url: "", upvotes: 654, verified: true, rating: 4.2, icon: "🎨", category: "video-animation", subcategory: "video-to-video" },
      { id: "warpvideo-ai", name: "WarpVideo AI", description: "AI video warping and transformation", url: "", upvotes: 432, verified: false, rating: 4.1, icon: "🌀", category: "video-animation", subcategory: "video-to-video" }
    ]
  },
  "voice-generation-conversion": {
    "ai-celebrity-voice-generator": [

      { id: "fakeyou", name: "FakeYou", description: "AI voice synthesis with celebrity voices", url: "", upvotes: 1567, verified: true, rating: 4.7, reviewsCount: 234, savedCount: 1567, addedDate: "2023-06-03", icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "fish-audio", name: "Fish Audio", description: "High-quality AI voice cloning and generation", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🐟", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "sendfame", name: "SendFame", description: "Celebrity voice messages with AI", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "⭐", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "irocket-icreavoice", name: "iRocket iCreaVoice", description: "AI voice creation and synthesis platform", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🚀", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "starvoiceai", name: "StarVoiceAi", description: "Celebrity and custom AI voice generator", url: "", upvotes: 456, verified: false, rating: 4.3, icon: "🌟", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" }
    ],
    "ai-dubbing": [
      { id: "vidnoz-ai-dub", name: "Vidnoz AI", description: "AI video dubbing and voice synthesis", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "maestra-ai", name: "Maestra AI", description: "Professional AI dubbing and translation", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "murf-ai", name: "Murf AI", description: "AI voice over and dubbing platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "rask-ai", name: "Rask AI", description: "AI-powered dubbing and localization", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🌍", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "vbee-aivoice", name: "Vbee AIVoice", description: "AI voice dubbing and synthesis solution", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🐝", category: "voice-generation-conversion", subcategory: "ai-dubbing" }
    ],
    "ai-podcast": [
      { id: "adobe-podcast", name: "Adobe Podcast", description: "AI-powered podcast creation and editing", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "riverside-fm", name: "Riverside.fm", description: "High-quality podcast recording platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌊", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "podcastle", name: "Podcastle", description: "AI podcast creation and editing suite", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏰", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "descript", name: "Descript", description: "All-in-one podcast editing with AI", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "wondercraft", name: "Wondercraft", description: "AI podcast creation and production tool", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🪄", category: "voice-generation-conversion", subcategory: "ai-podcast" }
    ],
    "ai-podcast-clip-generator": [
      { id: "autopod", name: "AutoPod", description: "Automated podcast clip generation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "clipgen", name: "ClipGen", description: "AI-powered podcast clip creation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✂️", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "podclips", name: "PodClips", description: "Smart podcast clip extraction tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📎", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "fame-clips", name: "Fame Clips", description: "Viral podcast clip generator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⭐", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "goodlisten", name: "GoodListen", description: "AI podcast highlights and clips", url: "", upvotes: 321, verified: true, rating: 4.2, icon: "👂", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" }
    ],
    "ai-podcast-editing": [
      { id: "cleanvoice-ai", name: "Cleanvoice AI", description: "AI podcast audio cleaning and editing", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🧹", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "autopod-edit", name: "AutoPod", description: "Automated podcast editing suite", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "detail", name: "Detail", description: "AI-powered audio enhancement", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🔍", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "vocut", name: "VoCut", description: "AI voice editing and enhancement", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "shanda-studio", name: "Shanda Studio", description: "Professional AI podcast editing", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" }
    ],
    "ai-recording": [
      { id: "limitless", name: "Limitless", description: "AI-powered meeting and call recording", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "♾️", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "wizardshot", name: "Wizardshot", description: "AI screen and voice recording tool", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🧙", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "speechzap", name: "SpeechZap", description: "AI voice recording and transcription", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⚡", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "dubnote", name: "Dubnote", description: "AI meeting notes and recording", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "tldv", name: "tl;dv", description: "AI meeting recording and summarization", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "📹", category: "voice-generation-conversion", subcategory: "ai-recording" }
    ],
    "ai-speech-recognition": [
      { id: "blahget", name: "Blahget", description: "AI speech recognition and analysis", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👄", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "elsa-speak", name: "ELSA Speak", description: "AI English pronunciation coach", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "lingvanex", name: "Lingvanex", description: "AI translation and speech recognition", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🌐", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "boldvoice", name: "BoldVoice", description: "AI accent training and speech recognition", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💪", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "tarteel-ai", name: "Tarteel AI", description: "AI Quran recitation and recognition", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "📖", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" }
    ],
    "ai-speech-synthesis": [
      { id: "ttsmaker", name: "TTSMaker", description: "Free AI text-to-speech generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "vbee-aivoice-synth", name: "Vbee AIVoice", description: "Professional AI speech synthesis", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🐝", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "poppop-ai-tts", name: "PopPop AI Text to Speech", description: "AI voice synthesis platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎈", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "text-to-speech-openai", name: "Text To Speech OpenAI", description: "OpenAI powered text-to-speech", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🤖", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "desivocal", name: "DesiVocal", description: "AI speech synthesis for Indian languages", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🇮🇳", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" }
    ],
    "ai-speech-to-text": [
      { id: "rev", name: "Rev", description: "Professional AI transcription service", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🔄", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "vatis-tech", name: "Vatis Tech", description: "AI speech-to-text technology", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "clipto-ai", name: "Clipto.AI", description: "AI video transcription and clipping", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✂️", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "turboscribe", name: "TurboScribe", description: "Fast AI transcription service", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⚡", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "transkriptor", name: "Transkriptor", description: "AI transcription and subtitle generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" }
    ],
    "ai-text-to-speech": [
      { id: "naturalreader", name: "NaturalReader", description: "Natural AI text-to-speech reader", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📖", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "speechify", name: "Speechify", description: "AI text-to-speech reading app", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "minimax-audio", name: "MiniMax Audio", description: "Advanced AI text-to-speech engine", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "luvvoice", name: "Luvvoice", description: "Free AI text-to-speech converter", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "💖", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "ttsmaker-tts", name: "TTSMaker", description: "Online AI text-to-speech generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" }
    ],
    "ai-transcriber": [
      { id: "notta", name: "Notta", description: "AI meeting transcription and notes", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "riverside-fm-transcribe", name: "Riverside.fm", description: "High-quality transcription service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌊", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "turboscribe-transcribe", name: "TurboScribe", description: "Fast and accurate AI transcription", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⚡", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "fathom", name: "Fathom", description: "AI meeting assistant and transcriber", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🧠", category: "voice-generation-conversion", subcategory: "ai-transcriber" }
    ],
    "ai-transcription": [
      { id: "clipto-ai-transcription", name: "Clipto.AI", description: "AI video and audio transcription", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✂️", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "transkriptor-transcription", name: "Transkriptor", description: "Automatic transcription service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "happy-scribe", name: "Happy Scribe", description: "Professional transcription and subtitles", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "😊", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "maestra-ai-transcription", name: "Maestra AI", description: "AI transcription and translation service", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-transcription" }
    ],
    "ai-voice-assistants": [
      { id: "blahget-assistant", name: "Blahget", description: "AI voice assistant and companion", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👄", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "roxy-ai", name: "Roxy - AI Voice companion", description: "Personal AI voice companion", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "honeydo", name: "HoneyDo: Speak, Snap and Shop", description: "Voice shopping assistant", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🍯", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "vapi", name: "Vapi", description: "Voice AI platform for developers", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "callhippo", name: "CallHippo", description: "AI voice assistant for calls", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "📞", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" }
    ],
    "ai-voice-changer": [
      { id: "voicemod", name: "Voicemod", description: "Real-time voice changer and modulator", url: "", upvotes: 1890, verified: true, rating: 4.7, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "voice-ai", name: "Voice.ai", description: "AI voice changer for gaming and streaming", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎮", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "hitpaw-voicepea", name: "HitPaw VoicePea", description: "AI voice changer and effects", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🥒", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "vozard", name: "Vozard", description: "Voice changer with AI effects", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "easeus-voice", name: "EaseUS", description: "AI voice changing software", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🛠️", category: "voice-generation-conversion", subcategory: "ai-voice-changer" }
    ],
    "ai-voice-cloning": [
      { id: "vidnoz-ai-clone", name: "Vidnoz AI", description: "AI voice cloning and synthesis", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "minimax-audio-clone", name: "MiniMax Audio", description: "Advanced voice cloning technology", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "kits-ai", name: "Kits AI", description: "AI voice cloning for musicians", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎵", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "topmediai", name: "TopMediai", description: "AI voice cloning and generation", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "fineshare-finevoice", name: "Fineshare FineVoice", description: "AI voice cloning and editing", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" }
    ],
    "ai-voice-enhancer": [
      { id: "vocal-image", name: "Vocal Image", description: "AI voice enhancement and clarity", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "sanas", name: "Sanas", description: "AI accent and voice enhancement", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "canvid", name: "Canvid", description: "AI video and voice enhancement", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "tomato-ai", name: "Tomato.ai", description: "AI voice quality enhancement", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🍅", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "micvoice-ai", name: "MicVoice.Ai", description: "AI microphone and voice enhancer", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" }
    ],
    "ai-voice-generator": [
      { id: "elevenlabs", name: "ElevenLabs", description: "Premium AI voice generation platform", url: "", upvotes: 3456, verified: true, rating: 4.9, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "playai", name: "PlayAI", description: "AI voice generation and cloning", url: "", upvotes: 1890, verified: true, rating: 4.7, icon: "▶️", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "fineshare", name: "FineShare", description: "AI voice generator and editor", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "fish-audio-generator", name: "Fish Audio", description: "Advanced AI voice synthesis", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🐟", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "fineshare-finevoice-generator", name: "Fineshare FineVoice", description: "Professional AI voice generation", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-voice-generator" }
    ],
    "ai-voice-over": [
      { id: "topmediai-voiceover", name: "TopMediai", description: "AI voice over and dubbing", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "easeus-voiceover", name: "EaseUS", description: "AI voice over software", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🛠️", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "speechify-voiceover", name: "Speechify", description: "AI voice over generation", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "playai-voiceover", name: "PlayAI", description: "Professional AI voice over", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "▶️", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "murf-ai-voiceover", name: "Murf AI", description: "AI voice over studio", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-over" }
    ],
    "audio-to-text-ai": [
      { id: "turboscribe-audio", name: "TurboScribe", description: "Fast audio to text conversion", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚡", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "notta-audio", name: "Notta", description: "AI audio transcription service", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "📝", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "deepgram", name: "Deepgram", description: "Speech recognition API platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🌊", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "rev-audio", name: "Rev", description: "Professional audio transcription", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🔄", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "vatis-tech-audio", name: "Vatis Tech", description: "AI audio to text technology", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎤", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" }
    ],
    "tiktok-ai-voice-generator": [
      { id: "tiktok-voice-generator", name: "TikTok Voice Generator", description: "Official TikTok AI voice synthesis", url: "", upvotes: 2345, verified: true, rating: 4.7, icon: "🎵", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "tiktok-voice-chrome", name: "Tiktok Voice Generator Chrome Extension", description: "Browser extension for TikTok voices", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🔧", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "tiktok-ai-voice", name: "Tiktok AI Voice", description: "TikTok style AI voice generator", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🎤", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "wasento", name: "Wasento", description: "TikTok voice cloning and generation", url: "", upvotes: 654, verified: false, rating: 4.3, icon: "🎭", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "crepal", name: "CrePal", description: "Creative TikTok voice generator", url: "", upvotes: 543, verified: true, rating: 4.2, icon: "🎨", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" }
    ]
  },
  "image-generation-editing": {
    "ai-age-progression": [

      { id: "heyphoto", name: "HeyPhoto", description: "AI photo editing and age progression tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👴", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "extrapolate", name: "Extrapolate", description: "See how you'll age with AI technology", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📅", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "ourbabyai", name: "OurBabyAI", description: "AI-generated baby photos from parents", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👶", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "ager-fun", name: "Ager.fun", description: "Fun AI aging and face transformation app", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎭", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "ai-face-ager", name: "AI Face Ager", description: "Professional AI age progression technology", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "⏰", category: "image-generation-editing", subcategory: "ai-age-progression" }
    ],
    "ai-avatar-generator": [
      { id: "vidnoz-ai", name: "Vidnoz AI", description: "AI video and avatar creation tool", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎬", category: "image-generation-editing", subcategory: "ai-avatar-generator" },
      { id: "d-id", name: "D-ID", description: "AI-powered talking avatar generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🗣️", category: "image-generation-editing", subcategory: "ai-avatar-generator" },
      { id: "vidyard", name: "Vidyard", description: "Video messaging with AI avatar features", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📹", category: "image-generation-editing", subcategory: "ai-avatar-generator" }
    ],
    "ai-background-generator": [
      { id: "pacdora-bg", name: "Pacdora AI Background Generator", description: "AI-powered background generation tool", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "insmind", name: "insMind", description: "AI photo editing with background generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "pixelcut", name: "Pixelcut", description: "AI background removal and generation", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "✂️", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "ghibli-ai", name: "Ghibli AI", description: "Studio Ghibli style background generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🌿", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "pic-copilot", name: "Pic Copilot", description: "AI-assisted photo background creation", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🧑‍✈️", category: "image-generation-editing", subcategory: "ai-background-generator" }
    ],
    "ai-background-remover": [
      { id: "remove-bg", name: "remove.bg", description: "Automatic background removal tool", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔍", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "photoroom", name: "Photoroom", description: "AI photo editor with background removal", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "erase-bg", name: "Erase.bg", description: "Free background removal with AI", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🧹", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "befunky", name: "BeFunky", description: "Photo editing suite with background removal", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "ai-background-remover" },
    ],
    "ai-clothing-removal": [
      { id: "palette-app", name: "Palette App", description: "AI-powered photo colorization tool", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🎨", category: "image-generation-editing", subcategory: "ai-clothing-removal" },
      { id: "imagecolorizer", name: "ImageColorizer", description: "AI photo colorization and restoration", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🌈", category: "image-generation-editing", subcategory: "ai-clothing-removal" },
      { id: "photorestore", name: "PhotoRestore.io", description: "AI photo restoration and enhancement", url: "", upvotes: 156, verified: false, rating: 3.9, icon: "🔧", category: "image-generation-editing", subcategory: "ai-clothing-removal" }
    ],
    "ai-colorize": [
      { id: "undress-app", name: "Undress.app", description: "AI image manipulation tool", url: "", upvotes: 123, verified: false, rating: 3.5, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "clothoff", name: "ClothOff.net", description: "AI clothing removal application", url: "", upvotes: 98, verified: false, rating: 3.4, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "anieraser", name: "AniEraser", description: "AI-powered object removal tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🧹", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "undress-ai", name: "Undress AI", description: "AI image processing tool", url: "", upvotes: 87, verified: false, rating: 3.3, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "nudify-online", name: "Nudify.Online", description: "AI image manipulation service", url: "", upvotes: 76, verified: false, rating: 3.2, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" }
    ],
    "ai-cosplay-generator": [
      { id: "facehi", name: "FaceHi", description: "AI face transformation and cosplay generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎭", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "empai", name: "Empai", description: "AI-powered cosplay photo generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "🎨", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "free-ai-art", name: "Free AI Art Platforms", description: "Free AI art and cosplay generation", url: "", upvotes: 189, verified: true, rating: 4.0, icon: "🎨", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "costumeplay-ai", name: "CostumePlayAI", description: "Specialized AI cosplay generator", url: "", upvotes: 156, verified: false, rating: 3.9, icon: "👗", category: "image-generation-editing", subcategory: "ai-cosplay-generator" }
    ],
    "ai-crop-image": [
      { id: "autocropper", name: "AutoCropper", description: "Automatic AI image cropping tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "✂️", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "batch-cropper", name: "Batch Cropper", description: "Bulk image cropping with AI", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📦", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "cropandgrade", name: "CropandGrade", description: "AI cropping and image grading tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📐", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "face-crop-jet", name: "Face Crop Jet", description: "AI face detection and cropping", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "👤", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "instantedit-ai", name: "InstantEditAI", description: "Instant AI photo editing and cropping", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "⚡", category: "image-generation-editing", subcategory: "ai-crop-image" }
    ],
    "ai-eraser": [
      { id: "recraft", name: "Recraft", description: "AI-powered design and object removal", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-eraser" },
      { id: "pipiads-remover", name: "Pipiads AI Image Text Remover", description: "AI text removal from images", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "image-generation-editing", subcategory: "ai-eraser" },
      { id: "photiu-ai", name: "Photiu.ai", description: "AI photo editing and object eraser", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-eraser" }
    ],
    "ai-expand-image": [
      { id: "ai-image-extender", name: "AI Image Extender", description: "Expand images with AI generation", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🔍", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "ai-expand-image", name: "AI Expand Image", description: "Professional image expansion tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📐", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "hippist-ai", name: "hippist AI", description: "AI image enhancement and expansion", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🦛", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "virtualfit", name: "VirtualFit", description: "AI image fitting and expansion", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👕", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "krut-ai", name: "Krut AI", description: "AI-powered image expansion service", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🚀", category: "image-generation-editing", subcategory: "ai-expand-image" }
    ],
    "ai-face-swap-generator": [
      { id: "faceswapper", name: "FaceSwapper", description: "Easy-to-use face swapping application", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👥", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "dreamvid", name: "DreamVid", description: "AI video and face swap generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎬", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "deepfake-maker", name: "Deepfake Maker", description: "AI deepfake and face swap creator", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎭", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "vidqu-ai", name: "Vidqu AI", description: "Vidqu FaceSwap lets you swap faces in photos and videos, instantly turning you into anyone you want", url: "https://www.vidqu.ai/", upvotes: 892, verified: true, rating: 4.5, icon: "🎭", category: "image-generation-editing", subcategory: "ai-face-swap-generator", addedDate: "Nov 24, 2025" }
    ],
    "ai-headshot-generator": [
      { id: "vidnoz-ai-headshot", name: "Vidnoz AI", description: "Professional AI headshot generator", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "supawork-ai", name: "Supawork AI", description: "AI headshots for professionals", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "💼", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "pixelbin-io", name: "PixelBin.io", description: "AI image processing and headshot generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎯", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "ai-ease", name: "AI Ease", description: "Easy AI headshot and portrait generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "😊", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "artguru-ai", name: "Artguru AI", description: "AI art and headshot generation platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-headshot-generator" }
    ],
    "ai-image-combiner": [
      { id: "emoji-combiner", name: "Emoji Combiner", description: "Combine emojis with AI creativity", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "😊", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "imagefusion", name: "ImageFusion", description: "AI-powered image blending and combination", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔀", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "pixnova-ai-combiner", name: "PixNova AI", description: "Advanced AI image combination tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "✨", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "dzine-ai", name: "Dzine AI", description: "AI design and image combination platform", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🎨", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "ai-face-swap-combiner", name: "AI Face Swap", description: "Face swap and image combination tool", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🔄", category: "image-generation-editing", subcategory: "ai-image-combiner" }
    ],
    "ai-image-enhancer": [
      { id: "letsenhance-io", name: "LetsEnhance.io", description: "AI image upscaling and enhancement", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🚀", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "wondershare-uniconverter", name: "Wondershare UniConverter", description: "All-in-one media tool with AI enhancement", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🔧", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "imglarger", name: "ImgLarger", description: "AI image enlargement and enhancement", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "📈", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "krea-ai", name: "Krea AI", description: "Creative AI image generation and enhancement", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "upscale-media", name: "Upscale.media", description: "Free AI image upscaling service", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "⬆️", category: "image-generation-editing", subcategory: "ai-image-enhancer" }
    ],
    "ai-image-generator": [
      { id: "freepik-ai", name: "Freepik AI Image Generator", description: "AI image generation from Freepik", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🎨", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "shutterstock-ai", name: "Shutterstock", description: "AI image generation by Shutterstock", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "depositphotos-ai", name: "Depositphotos AI Image Generator", description: "Professional AI image creation", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "openart", name: "OpenArt", description: "Open AI art generation platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🎭", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "deepai", name: "DeepAI", description: "Deep learning AI image generator", url: "", upvotes: 756, verified: true, rating: 4.4, icon: "🧠", category: "image-generation-editing", subcategory: "ai-image-generator" }
    ],
    "ai-image-sharpening": [
      { id: "unblurimage-ai", name: "Unblurimage AI", description: "AI-powered image sharpening and deblurring", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🔍", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "fix-blur", name: "Fix Blur", description: "Professional blur removal and sharpening", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔧", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "deblur-ai", name: "Deblur AI", description: "Advanced AI deblurring technology", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✨", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "letsenhance-sharp", name: "LetsEnhance.io", description: "AI upscaling with sharpening features", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🚀", category: "image-generation-editing", subcategory: "ai-image-sharpening" }
    ],
    "ai-image-upscaler": [
      { id: "upscale-media-up", name: "Upscale.media", description: "Free AI image upscaling service", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "⬆️", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "imgupscaler", name: "ImgUpscaler", description: "AI image upscaling tool", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📈", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "icons8-upscaler", name: "Icons8 Smart Upscaler", description: "Smart AI upscaling technology", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "🎯", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "nero-upscaler", name: "Nero", description: "Professional media suite with AI upscaling", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🔥", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "bigjpg", name: "Bigjpg", description: "AI image enlargement for anime and photos", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📷", category: "image-generation-editing", subcategory: "ai-image-upscaler" }
    ],
    "ai-inpainting": [
      { id: "cleanup-pictures", name: "Cleanup.pictures & Clipdrop", description: "AI object removal and inpainting", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🧹", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "deepany-ai", name: "DeepAny.AI", description: "Deep AI inpainting and restoration", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "pixel-art-ai", name: "Pixel-Art.ai", description: "AI pixel art creation and inpainting", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎮", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "pixelfox-ai", name: "Pixelfox AI", description: "AI image generation and inpainting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🦊", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "sih-ai", name: "Sih.Ai", description: "AI image processing and inpainting", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🧠", category: "image-generation-editing", subcategory: "ai-inpainting" }
    ],
    "ai-map-generator": [
      { id: "mappedin", name: "Mappedin", description: "AI-powered indoor mapping platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🗺️", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "open-knowledge-maps", name: "Open Knowledge Maps", description: "Visual knowledge mapping with AI", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🧠", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "conceptmap-ai", name: "ConceptMap AI", description: "AI-powered concept mapping tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💡", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "ultimaps", name: "Ultimaps", description: "Ultimate mapping solution with AI", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🌍", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "mapsgpt", name: "MapsGPT", description: "GPT-powered map generation tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🤖", category: "image-generation-editing", subcategory: "ai-map-generator" }
    ],
    "ai-outpainting": [
      { id: "artbreeder", name: "Artbreeder", description: "Collaborative AI art creation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "retouch-ai", name: "RetouchAI", description: "AI photo retouching and outpainting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✨", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "ai-image-extender-out", name: "AI Image Extender", description: "Professional image extension tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "ai-expand-image-out", name: "AI Expand Image", description: "AI-powered image expansion service", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📐", category: "image-generation-editing", subcategory: "ai-outpainting" }
    ],
    "ai-passport-photo": [
      { id: "photogov", name: "PhotoGov", description: "Official passport photo generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📷", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "aipassportphotos", name: "AiPassportPhotos", description: "AI passport and ID photo creator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🆔", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "snap2pass", name: "Snap2Pass", description: "Instant passport photo generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "passport-photo-maker", name: "Passport Photo Maker", description: "Professional passport photo tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "passport-maker-ai", name: "Passport Maker AI", description: "AI-powered passport photo service", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "image-generation-editing", subcategory: "ai-passport-photo" }
    ],
    "ai-person-generator": [
      { id: "icons8-person", name: "Icons8", description: "AI person and avatar generation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "👤", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "generated-photos", name: "Generated Photos", description: "Diverse AI-generated human faces", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "👥", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "this-person-not-exist", name: "This Person Does Not Exist", description: "Random AI-generated faces", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎭", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "generated-photos-2", name: "Generated Photos", description: "High-quality AI person generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📸", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "thispersonnotexist", name: "ThisPersonNotExist.org", description: "AI-generated people that don't exist", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌐", category: "image-generation-editing", subcategory: "ai-person-generator" }
    ],
    "ai-photo-editor": [
      { id: "beart-ai", name: "BeArt AI", description: "BeArt AI is an AI-powered portrait and photo enhancement platform specializing in face beautification art style transfers and professional photo editing", url: "https://beart.ai", upvotes: 2900, verified: false, rating: 4.3, icon: "🎭", category: "image-generation-editing", subcategory: "ai-photo-editor", addedDate: "2026-04-01" },
      { id: "cutout-pro", name: "Cutout.Pro", description: "AI-powered photo editing suite", url: "https://www.cutout.pro/", upvotes: 1567, verified: true, rating: 4.7, icon: "✂️", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "vsco", name: "VSCO", description: "Creative photo editing with AI features", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "📸", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "pixelcut-editor", name: "Pixelcut", description: "AI background removal and photo editing", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "fotor-pixlr", name: "FotorPixlr", description: "Online photo editor with AI tools", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "picsart", name: "Picsart", description: "Creative photo editing and design app", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎭", category: "image-generation-editing", subcategory: "ai-photo-editor" }
    ],
    "ai-photo-enhancer": [
      { id: "hitpaw-fotorpea", name: "HitPaw FotorPea", description: "AI photo enhancement software", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🌟", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "remini", name: "Remini", description: "AI photo and video enhancer", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "✨", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "upscale-media-enhance", name: "Upscale.media", description: "AI image upscaling and enhancement", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "⬆️", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "vanceai", name: "VanceAI", description: "Professional AI photo enhancement suite", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "🚀", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "ai-ease-enhance", name: "AI Ease", description: "Easy AI photo enhancement tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "😊", category: "image-generation-editing", subcategory: "ai-photo-enhancer" }
    ],
    "ai-photo-filter": [
      { id: "beautyplus", name: "BeautyPlus", description: "AI beauty filters and photo editing", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "💄", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "filterly", name: "Filterly", description: "AI-powered photo filters", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "max-studio", name: "Max Studio", description: "Professional AI photo filters", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎬", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "palette-app-filter", name: "Palette App", description: "AI colorization and filter tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "a1-art", name: "a1.art", description: "AI art filters and style transfer", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎭", category: "image-generation-editing", subcategory: "ai-photo-filter" }
    ],
    "ai-photo-restoration": [
      { id: "nero-restore", name: "Nero", description: "Professional photo restoration suite", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🔧", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "imagecolorizer-restore", name: "ImageColorizer", description: "AI photo colorization and restoration", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🌈", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "photorestore-io", name: "PhotoRestore.io", description: "AI-powered photo restoration service", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "restorephotos-io", name: "restorePhotos.io", description: "Free AI photo restoration tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "restorephotos-pro", name: "restorePhotos.Pro", description: "Professional AI photo restoration", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "⭐", category: "image-generation-editing", subcategory: "ai-photo-restoration" }
    ],
    "ai-product-photography": [
      { id: "ifoto", name: "iFoto", description: "AI product photo generator", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "📸", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "claid-ai", name: "Claid.ai", description: "AI product image enhancement", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "✨", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "flair-ai", name: "Flair AI", description: "AI product photography platform", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💫", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "pebblely", name: "Pebblely", description: "AI product photography for e-commerce", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🛍️", category: "image-generation-editing", subcategory: "ai-product-photography" }
    ],
    "ai-profile-picture-generator": [
      { id: "vidnoz-ai-profile", name: "Vidnoz AI", description: "AI profile picture generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "👤", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "pfpmaker", name: "PFPMaker", description: "Professional profile picture maker", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "supawork-ai-profile", name: "Supawork AI", description: "AI headshots and profile pictures", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💼", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "genyou", name: "GenYOU", description: "Personalized AI avatar generator", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎭", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "photoai-me", name: "PhotoAI.me", description: "AI-powered photo generation", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📸", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" }
    ],
    "ai-qr-code-generator": [
      { id: "my-qr-code", name: "My QR Code", description: "Simple QR code generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📱", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "qr-code-ai", name: "QR Code AI", description: "AI-enhanced QR code creation", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🤖", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "quick-qr-art", name: "Quick QR Art", description: "Artistic QR code generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "viralqr", name: "ViralQR", description: "Viral QR code creation tool", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🔥", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "qrbtf", name: "QRBTF", description: "Beautiful QR code generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "✨", category: "image-generation-editing", subcategory: "ai-qr-code-generator" }
    ],
    "ai-realistic-image-generator": [
      { id: "deep-nudes", name: "Deep-nudes.com", description: "AI realistic image generation", url: "", upvotes: 123, verified: false, rating: 3.5, icon: "🔞", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "vizcom", name: "Vizcom", description: "AI design and visualization tool", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "zmo-ai", name: "ZMO.AI", description: "AI image generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🚀", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "rendair", name: "Rendair", description: "AI rendering and image generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🌟", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "try9-ai", name: "try9.ai", description: "Advanced AI image generation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎯", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" }
    ],
    "ai-signature-generator": [
      { id: "dropbox-sign", name: "Dropbox Sign", description: "Electronic signature platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "✍️", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "ctrly-co", name: "Ctrly.co", description: "Digital signature solution", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🖊️", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "make-a-sign", name: "Make a Sign", description: "Custom signature creator", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📋", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "sealdigital", name: "SealDigital", description: "Digital seal and signature tool", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "🏷️", category: "image-generation-editing", subcategory: "ai-signature-generator" }
    ],
    "ai-style-transfer": [
      { id: "spline", name: "Spline", description: "3D design tool with AI style transfer", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "lensgo", name: "LensGo", description: "AI-powered style transfer tool", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📸", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "midjourney-sref", name: "Midjourney Sref Codes Library", description: "Style reference codes for Midjourney", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "flux-context", name: "flux context", description: "AI context-aware style transfer", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "⚡", category: "image-generation-editing", subcategory: "ai-style-transfer" }
    ],
    "ai-texture-generator": [
      { id: "ai-mc-texture", name: "AI MC Texture", description: "AI Minecraft texture generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎮", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "pixela-ai", name: "Pixela.ai", description: "AI pixel art and texture generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎯", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "tilemaker", name: "TileMaker", description: "Seamless texture and tile generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🧩", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "scenario", name: "Scenario", description: "Game asset and texture generation", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎲", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "charmed-ai", name: "Charmed AI", description: "AI game asset creation platform", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "✨", category: "image-generation-editing", subcategory: "ai-texture-generator" }
    ],
    "ai-unblur-image": [
      { id: "fotor", name: "Fotor", description: "Online photo editor with unblur features", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📸", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "unblurimage-ai-unblur", name: "Unblurimage AI", description: "Specialized AI image deblurring", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🔍", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "restorephotos-io-unblur", name: "restorePhotos.io", description: "Photo restoration with deblurring", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🔄", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "fix-blur-unblur", name: "Fix Blur", description: "Professional blur removal tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🔧", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "deblur-ai-unblur", name: "Deblur AI", description: "Advanced AI deblurring technology", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "✨", category: "image-generation-editing", subcategory: "ai-unblur-image" }
    ],
    "ai-waifu-generator": [
      { id: "waifu-labs", name: "Waifu Labs", description: "AI anime character generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎭", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "ai-hentai-generator", name: "AI Hentai Generator", description: "AI Hentai Generator is an advanced adult anime art creation platform that uses artificial intelligence to generate high-quality anime and manga-style illustrations from text prompts with extensive customization options.", url: "", upvotes: 789, verified: false, rating: 4.2, icon: "🧚‍♀️", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "pinkcatgirls", name: "PinkCatgirls", description: "Anime catgirl character generator", url: "", upvotes: 456, verified: false, rating: 4.1, icon: "🐱", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "sorapix", name: "SoraPix", description: "AI anime art creation platform", url: "", upvotes: 567, verified: true, rating: 4.3, icon: "🌸", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "spicy-chat-ai", name: "Spicy Chat AI", description: "AI chat with anime characters", url: "", upvotes: 234, verified: false, rating: 3.9, icon: "🌶️", category: "image-generation-editing", subcategory: "ai-waifu-generator" }
    ],
    "ai-wallpaper-generator": [
      { id: "wallpapers-ai", name: "Wallpapers AI", description: "AI-generated wallpapers", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "dreampix", name: "Dreampix", description: "Dream-like AI wallpaper creator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💭", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "labubu-wallpaper", name: "Labubu live wallpaper", description: "Animated wallpaper generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎬", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "ohmywall", name: "Ohmywall", description: "Custom wallpaper creation tool", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "aesthetic-wallpaper-ai", name: "Aesthetic Wallpaper AI", description: "Aesthetic AI wallpaper generator", url: "", upvotes: 345, verified: false, rating: 4.2, icon: "✨", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" }
    ],
    "ai-watermark-remover": [
      { id: "watermarkremover-io", name: "WatermarkRemover.io", description: "AI watermark removal tool", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🧹", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "dewatermark-ai", name: "Dewatermark.AI", description: "Professional watermark removal", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💧", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "unwatermark-ai", name: "Unwatermark AI", description: "AI-powered watermark eraser", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🔄", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "snapedit", name: "SnapEdit", description: "Photo editing with watermark removal", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📸", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "photogrid", name: "PhotoGrid", description: "Photo collage with watermark removal", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📷", category: "image-generation-editing", subcategory: "ai-watermark-remover" }
    ],
    "ai-yearbook": [
      { id: "yearbookphotos", name: "YearbookPhotos", description: "AI yearbook photo generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📚", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "ai-face-swap-yearbook", name: "AI Face Swap", description: "Face swap for yearbook photos", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🔄", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "ai-shots", name: "AI Shots", description: "Professional AI photo generation", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📸", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "photoguruai", name: "PhotoGuruAI", description: "AI photo enhancement and styling", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "🎯", category: "image-generation-editing", subcategory: "ai-yearbook" }
    ],
    "gender-swap-ai": [
      { id: "faceswapper-gender", name: "FaceSwapper", description: "Gender swap with AI face technology", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "deepfake-maker-gender", name: "Deepfake Maker", description: "AI deepfake and gender transformation", url: "", upvotes: 789, verified: false, rating: 4.3, icon: "🎭", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "heyphoto-gender", name: "HeyPhoto", description: "AI photo editing with gender swap", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "📸", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "face-swapper-gender", name: "Face Swapper", description: "Professional face and gender swapping", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "👥", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "ai-face-swap-gender", name: "AI Face Swap", description: "Advanced AI face and gender swap", url: "", upvotes: 345, verified: true, rating: 4.1, icon: "🤖", category: "image-generation-editing", subcategory: "gender-swap-ai" }
    ],
    "image-to-image": [
      { id: "artguru-ai-img2img", name: "Artguru AI", description: "AI image-to-image transformation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "image-to-image-ai", name: "Image To Image AI", description: "Professional image transformation", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🔄", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "piclumen", name: "PicLumen", description: "AI-powered image enhancement", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "💡", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "flux-ai", name: "Flux AI", description: "Advanced AI image generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "⚡", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "vivago-ai", name: "VIVAGO AI", description: "Creative AI image transformation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🌟", category: "image-generation-editing", subcategory: "image-to-image" }
    ],
    "object-remover-ai": [
      { id: "snapedit-remover", name: "SnapEdit", description: "AI object removal from photos", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "cleanup-pictures-remover", name: "Cleanup.pictures & Clipdrop", description: "Professional object removal tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🧹", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "watermarkremover-io-obj", name: "WatermarkRemover.io", description: "Remove objects and watermarks", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🔧", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "kittl", name: "Kittl", description: "Design tool with object removal", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "beautyplus-remover", name: "BeautyPlus", description: "Beauty app with object removal", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💄", category: "image-generation-editing", subcategory: "object-remover-ai" }
    ],
    "text-to-handwriting": [
      { id: "handtext-ai", name: "HandtextAI", description: "Convert text to handwriting", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "✍️", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "imgkits-handwriting", name: "Imgkits - Top AI Image & Video Processing Tools Online", description: "Text to handwriting conversion", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🛠️", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "wishgram", name: "Wishgram", description: "Handwritten message generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💌", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "xx-video-downloader", name: "XX Video Downloader All Social - indownio, instafinsta", description: "Multi-purpose tool with handwriting", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "⬇️", category: "image-generation-editing", subcategory: "text-to-handwriting" },
    ],
    "text-to-image": [
      { id: "kittl-text2img", name: "Kittl", description: "Design tool with text-to-image AI", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎨", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "artguru-ai-text2img", name: "Artguru AI", description: "Professional text-to-image generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "leonardo-ai", name: "Leonardo.Ai", description: "Advanced AI image generation", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎭", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "pica-ai", name: "Pica AI", description: "AI-powered image creation", url: "", upvotes: 567, verified: false, rating: 4.4, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-art-generator" }
    ]
  },
  "writing-editing": {
    "ai-blog-generator": [
      { id: "supawrite", name: "Supawrite", description: "AI writing assistant for creating high-quality blog posts and marketing content with SEO optimization", url: "https://supawrite.ai", upvotes: 890, verified: false, rating: 4.2, icon: "✍️", category: "writing-editing", subcategory: "ai-blog-generator", addedDate: "2026-04-03" },

      { id: "junia-ai", name: "Junia AI", description: "AI-powered blog content generator with SEO optimization", url: "", upvotes: 245, verified: true, rating: 4.6, icon: "📝", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "writesonic", name: "Writesonic", description: "Writesonic is an AI-powered content creation and SEO platform used by over 20000 teams for generating blog posts, ad copy and marketing content with built-in GEO tracking for AI search visibility", url: "https://writesonic.com/", upvotes: 623, verified: true, rating: 4.4, icon: "🚀", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "aiktp", name: "Aiktp", description: "AIKTP is an AI SEO content generator that creates long-form articles over 2500 words from keywords and outlines with bulk generation, WordPress integration and built-in SEO optimization", url: "https://aiktp.com/", upvotes: 156, verified: true, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "durable", name: "Durable", description: "Durable is the fastest AI website builder that generates a complete professional website in 30 seconds with built-in CRM invoicing AI marketing tools and analytics for small businesses", url: "https://durable.com/", upvotes: 189, verified: true, rating: 4.5, icon: "🔧", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "gravitywrite", name: "GravityWrite", description: "GravityWrite is an all-in-one AI content platform with 250 plus templates for blogs social media images videos and file summarization used by over 2 million users worldwide", url: "https://gravitywrite.com/", upvotes: 312, verified: true, rating: 4.7, icon: "🌟", category: "writing-editing", subcategory: "ai-blog-generator" }
    ],
    "ai-book-writing": [
      { id: "squibler", name: "Squibler", description: "AI-powered writing tool for authors and screenwriters", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "dabble", name: "Dabble", description: "Writing software with AI assistance for novel planning", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "book-by-anyone", name: "Book by Anyone", description: "AI book writing platform for aspiring authors", url: "", upvotes: 123, verified: false, rating: 4.1, icon: "📖", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "ebookmaker", name: "EbookMaker", description: "AI-powered ebook creation and formatting tool", url: "", upvotes: 189, verified: true, rating: 4.4, icon: "📱", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "automateed", name: "Automateed", description: "Automated content generation for book writing", url: "", upvotes: 98, verified: false, rating: 3.9, icon: "🤖", category: "writing-editing", subcategory: "ai-book-writing" }
    ],
    "ai-caption-generator": [
      { id: "ai-photocaption", name: "AI PhotoCaption—Text Generator", description: "Generate engaging captions for photos and social media", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "📸", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "submagic", name: "Submagic", description: "AI-powered subtitle and caption generation for videos", url: "", upvotes: 534, verified: true, rating: 4.5, icon: "🎬", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "zeemo", name: "Zeemo", description: "Automatic subtitle generator with AI accuracy", url: "", upvotes: 445, verified: true, rating: 4.4, icon: "📺", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "flick", name: "Flick", description: "Social media caption generator with hashtag suggestions", url: "", upvotes: 321, verified: true, rating: 4.3, icon: "📱", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "planable", name: "Planable", description: "Social media planning tool with AI caption generation", url: "", upvotes: 267, verified: true, rating: 4.2, icon: "📅", category: "writing-editing", subcategory: "ai-caption-generator" }
    ],
    "ai-chat-generator": [
      { id: "chai", name: "CHAI", description: "AI chatbot platform for interactive conversations", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "☕", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "chatfuel", name: "Chatfuel", description: "AI chatbot builder for businesses", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🤖", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "landbot", name: "Landbot", description: "Conversational AI platform for customer engagement", url: "", upvotes: 423, verified: true, rating: 4.4, icon: "🚀", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "typebot", name: "Typebot", description: "Open-source chatbot builder with AI capabilities", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "⌨️", category: "writing-editing", subcategory: "ai-chat-generator" }
    ],
    "ai-copywriting": [
      { id: "contentful", name: "Contentful", description: "Headless CMS with AI-powered content creation", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "🏢", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "hotpot-ai", name: "Hotpot.ai", description: "AI copywriting and design tool for marketing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔥", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "unbounce", name: "Unbounce", description: "Landing page builder with AI copywriting features", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📄", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "typli-ai", name: "Typli.ai", description: "AI writing assistant for copywriting and content", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "✍️", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "nichesss", name: "nichesss", description: "AI-powered niche content and copy generator", url: "", upvotes: 456, verified: true, rating: 4.3, icon: "🎯", category: "writing-editing", subcategory: "ai-copywriting" }
    ],
    "ai-cover-letter-generator": [
      { id: "wonsulting-ai", name: "WonsultingAI", description: "AI career consulting and cover letter optimization", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🏆", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "huntr", name: "Huntr", description: "Job tracking platform with AI cover letter tools", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🎯", category: "writing-editing", subcategory: "ai-cover-letter-generator" }
    ],
    "ai-creative-writing": [
      { id: "sudowrite", name: "Sudowrite", description: "AI writing partner for creative fiction writing", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "notebook-ai", name: "Notebook.ai", description: "World-building and character development tool", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📓", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "lyricstudio", name: "LyricStudio", description: "AI-powered songwriting and lyric generation", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎵", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "bedtimestory-ai", name: "Bedtimestory.ai", description: "AI-generated personalized children's stories", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🌙", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "cowriter", name: "Cowriter", description: "AI writing companion for creative projects", url: "", upvotes: 189, verified: false, rating: 4.2, icon: "✍️", category: "writing-editing", subcategory: "ai-creative-writing" }
    ],
    "ai-description-generator": [
      { id: "vidiq", name: "VidIQ", description: "YouTube optimization tool with AI descriptions", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "📺", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "songtell", name: "Songtell", description: "AI music description and analysis platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎵", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "cyanite-ai", name: "Cyanite.ai", description: "AI music analysis and description service", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🎶", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "taja-ai", name: "Taja AI", description: "AI content optimization and description tool", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🎯", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "styldod", name: "Styldod", description: "AI-powered real estate description generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "🏠", category: "writing-editing", subcategory: "ai-description-generator" }
    ],
    "ai-dialogue-generator": [
      { id: "confab", name: "Confab", description: "AI dialogue and conversation generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "infinite-convo", name: "Infinite Convo", description: "Endless AI-generated conversations", url: "", upvotes: 189, verified: false, rating: 4.2, icon: "♾️", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "chatgpt-soliloquy", name: "ChatGPT-Soliloquy", description: "AI-powered internal dialogue generator", url: "", upvotes: 156, verified: true, rating: 4.1, icon: "🤔", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "opinionate", name: "Opinionate", description: "AI debate and opinion dialogue creator", url: "", upvotes: 123, verified: false, rating: 4.0, icon: "💭", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "ae-studio-skunkworks", name: "AE Studio's Same Day Skunkworks", description: "Rapid AI dialogue prototyping tool", url: "", upvotes: 98, verified: true, rating: 3.9, icon: "⚡", category: "writing-editing", subcategory: "ai-dialogue-generator" }
    ],
    "ai-ebook-generator": [
      { id: "designrr", name: "Designrr", description: "Convert content into professional ebooks", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "ai-book-generator", name: "AI Book Generator", description: "Complete AI book creation solution", url: "", upvotes: 189, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "youbooks", name: "Youbooks", description: "Personalized AI ebook generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "👤", category: "writing-editing", subcategory: "ai-ebook-generator" }
    ],
    "ai-email-writer": [
      { id: "success-ai", name: "Success.ai", description: "AI email outreach and writing platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎯", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "mailmaestro", name: "MailMaestro", description: "AI email writing assistant for professionals", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🎼", category: "writing-editing", subcategory: "ai-email-writer" }
    ],
    "ai-essay-writer": [
      { id: "terabox", name: "TeraBox", description: "Cloud storage with AI writing features", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📦", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "jenni-ai", name: "Jenni AI", description: "AI writing assistant for academic papers", url: "", upvotes: 654, verified: true, rating: 4.6, icon: "🎓", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "supa", name: "Supa", description: "AI-powered essay writing and research tool", url: "https://www.superai.id/", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "writeless", name: "Writeless", description: "Academic writing assistant with AI support", url: "", upvotes: 321, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "perfectessaywriter", name: "Perfectessaywriter.ai", description: "AI essay writing and editing platform", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🏆", category: "writing-editing", subcategory: "ai-essay-writer" }
    ],
    "ai-fanfic-generator": [
      { id: "deep-realms", name: "Deep Realms", description: "AI-powered fanfiction and story generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🌌", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "tosh-tv-shows", name: "tosh TV Shows", description: "TV show fanfiction generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "📺", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "headcanon-generator", name: "Headcanon Generator XYZ", description: "Generate headcanons for your favorite fandoms", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "💭", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "altplot", name: "AltPlot", description: "Alternative plot generator for fanfiction", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "🔄", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "holo-ai", name: "Holo AI", description: "Interactive AI storytelling platform", url: "", upvotes: 123, verified: true, rating: 4.3, icon: "🤖", category: "writing-editing", subcategory: "ai-fanfic-generator" }
    ],
    "ai-grammar-checker": [
      { id: "languagetool", name: "LanguageTool", description: "Multilingual grammar and style checker", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔍", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "quillbot", name: "QuillBot", description: "AI writing and grammar checking tool", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🪶", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "grammarly", name: "Grammarly", description: "AI-powered writing assistant and grammar checker", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "✅", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "prowritingaid", name: "ProWritingAid", description: "Comprehensive writing analysis and grammar tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📝", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "toppdf", name: "TopPDF", description: "PDF editing with grammar checking features", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📄", category: "writing-editing", subcategory: "ai-grammar-checker" }
    ],
    "ai-image-description-generator": [
      { id: "image-describer", name: "Image Describer", description: "AI-powered image description generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "describe-image-ai", name: "Describe Image & Picture - AI Image Description, Markdown, and Text Converter", description: "Convert images to detailed text descriptions", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "alttext-ai", name: "AltText.ai", description: "Automatic alt text generation for images", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🏷️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "continual-engine", name: "Continual Engine", description: "AI-powered content analysis and description", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "⚙️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "visionati", name: "Visionati", description: "AI vision analysis and description tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "👁️", category: "writing-editing", subcategory: "ai-image-description-generator" }
    ],
    "ai-inspirational-quotes": [
      { id: "inspirobot", name: "InspiroBot", description: "AI-generated inspirational quotes", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🤖", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "capybara-affirmations", name: "Capybara Affirmations AI", description: "Cute capybara-themed positive affirmations", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "🦌", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "atfirst-affirmations", name: "AtFirst - Daily Affirmations", description: "Personalized daily affirmations and quotes", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🌅", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "daily-nightly-affirmations", name: "Daily, Nightly-AI Affirmations", description: "Morning and evening AI affirmations", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🌙", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "harmonis", name: "Harmonis", description: "Harmony-focused inspirational content generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "🎵", category: "writing-editing", subcategory: "ai-inspirational-quotes" }
    ],
    "ai-job-description-generator": [
      { id: "recruit-crm", name: "Recruit CRM", description: "CRM with AI job description generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "💼", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "jobed", name: "Jobed", description: "AI-powered job description creator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📋", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "helio-ai", name: "Helio.AI", description: "AI recruitment and job description tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "☀️", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "loubby-ai", name: "Loubby AI", description: "AI assistant for HR and job descriptions", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "recruitryte", name: "recruitRyte", description: "AI-powered recruitment writing tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "✍️", category: "writing-editing", subcategory: "ai-job-description-generator" }
    ],
    "ai-letter-writer": [
      { id: "dispute-panda", name: "Dispute Panda", description: "AI letter generator for disputes and complaints", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🐼", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "dear-ai", name: "Dear Ai", description: "Personal letter writing AI assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💌", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "ai-postcard-generator", name: "AI Postcard Generator", description: "Generate personalized postcard messages", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📮", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "iquit-ai", name: "iQuit.ai", description: "AI resignation letter generator", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "👋", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "happy-dads", name: "1000 Happy Dads", description: "AI tool for family-focused letter writing", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "👨‍👧‍👦", category: "writing-editing", subcategory: "ai-letter-writer" }
    ],
    "ai-love-letter-generator": [
      { id: "wonderful-valentimes", name: "Wonderful Valemtimes", description: "Romantic Valentine's letter generator", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "💝", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "selfloveletter", name: "SelfLoveLetter", description: "Self-love and affirmation letter generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "💖", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "true-love-letter", name: "True Love Letter", description: "Authentic romantic letter AI generator", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "💕", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "loveleetr", name: "LoveLeetr", description: "Personalized love letter creation tool", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "💌", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "love-letter-generator", name: "Love Letter Generator", description: "Simple AI love letter generator", url: "", upvotes: 123, verified: true, rating: 4.0, icon: "❤️", category: "writing-editing", subcategory: "ai-love-letter-generator" }
    ],
    "ai-message-generator": [
      { id: "texts", name: "Texts", description: "AI-powered message generation platform", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💬", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "celebrateally", name: "CelebrateAlly", description: "AI celebration and congratulations messages", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎉", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "vibly", name: "Vibly", description: "AI social media message generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📱", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "sayhi", name: "SayHi", description: "AI conversation starter and message tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "👋", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "heartstring-ai", name: "Heartstring AI", description: "Emotional message generation AI", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💝", category: "writing-editing", subcategory: "ai-message-generator" }
    ],
    "ai-movie-script-generator": [
      { id: "nolan-ai", name: "NolanAI", description: "AI screenwriting and script development tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎬", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "scenecraftr", name: "SceneCraftr", description: "AI scene and screenplay generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "filmflow", name: "FilmFlow", description: "AI film script and story development", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📽️", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "filmassistant", name: "filmassistant.io", description: "AI assistant for film script writing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎥", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "aiscreenwriter", name: "AIScreenwriter", description: "Professional AI screenplay generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "✍️", category: "writing-editing", subcategory: "ai-movie-script-generator" }
    ],
    "ai-name-generator": [
      { id: "maxstudio-api", name: "MaxStudio API", description: "API for AI-powered name generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔌", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "dnd-name-generator", name: "DnD Name Generator", description: "Fantasy character name generator for D&D", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎲", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "cuqui-baby-names", name: "Cuqui Baby Names", description: "AI baby name suggestion tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👶", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "randomx-ai", name: "RandomX.ai", description: "Random name and content generator", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎰", category: "writing-editing", subcategory: "ai-name-generator" }
    ],
    "ai-newsletter-generator": [
      { id: "hoppy-copy", name: "Hoppy Copy", description: "AI email and newsletter copywriting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📧", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "letterpal", name: "Letterpal", description: "AI newsletter writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✉️", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "promo-ai", name: "Promo.ai", description: "AI promotional newsletter generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📢", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "auto-mailer", name: "Auto Mailer", description: "Automated newsletter creation tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🤖", category: "writing-editing", subcategory: "ai-newsletter-generator" }
    ],
    "ai-novel": [
      { id: "ai-novelist", name: "AI Novelist", description: "AI novel writing and generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-novel" },
      { id: "novelistai", name: "NovelistAI", description: "AI assistant for novel writing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-novel" },
      { id: "webnovels-ai", name: "Webnovels AI", description: "AI web novel generation platform", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🌐", category: "writing-editing", subcategory: "ai-novel" }
    ],
    "ai-outline-generator": [
      { id: "surfer", name: "Surfer", description: "SEO content outline generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🏄", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "reflect-notes", name: "Reflect Notes", description: "AI note-taking with outline generation", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "💭", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "myessaywriter", name: "MyEssayWriter.ai", description: "AI essay outline and writing tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "subtxt", name: "Subtxt", description: "Story structure and outline generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📋", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "superblog", name: "Superblog", description: "AI blog outline and content generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📄", category: "writing-editing", subcategory: "ai-outline-generator" }
    ],
    "ai-paragraph-generator": [
      { id: "ai-paragraph-generator", name: "AI Paragraph Generator", description: "Generate coherent paragraphs with AI", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "📄", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "qozex-paragraph", name: "Qozex AI Paragraph Generator", description: "Advanced AI paragraph creation tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "paragraph-generator-xyz", name: "Paragraph Generator AI - Free | XYZ", description: "Free AI paragraph generator tool", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🆓", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "linkboss", name: "LinkBoss", description: "SEO paragraph and content generator", url: "", upvotes: 189, verified: false, rating: 4.0, icon: "🔗", category: "writing-editing", subcategory: "ai-paragraph-generator" }
    ],
    "ai-paraphraser": [
      { id: "free-paraphrasing-tool", name: "Free Paraphrasing Tool", description: "Free AI text paraphrasing service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "paraphraser-io", name: "Paraphraser.io", description: "Online AI paraphrasing tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "💻", category: "writing-editing", subcategory: "ai-paraphraser" },
    ],
    "ai-plot-generator": [
      { id: "ifnovels", name: "IFNovels", description: "Interactive fiction plot generator", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎮", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "plotlime", name: "Plotlime", description: "AI story plot and outline generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🍋", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "lore-sage", name: "Lore Sage", description: "Fantasy world and plot generator", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🧙", category: "writing-editing", subcategory: "ai-plot-generator" },
    ],
    "ai-poem-generator": [
      { id: "acrostic-ai", name: "Acrostic AI", description: "AI acrostic poem generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "poem-generator-io", name: "PoemGenerator.io", description: "Online AI poetry creation tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎭", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "aiepics", name: "AIEpics", description: "Epic poetry generator with AI", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "⚔️", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "gmail-poetry", name: "Replaces suggested replies on Gmail messages with poetic verse", description: "Gmail extension for poetic responses", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📧", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "free-poem-generator", name: "Free AI Poem Generator", description: "Free AI poetry creation tool", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "🆓", category: "writing-editing", subcategory: "ai-poem-generator" }
    ],
    "ai-product-description-generator": [
      { id: "hypotenuse-ai", name: "Hypotenuse AI", description: "AI product description and content generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📐", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "pagepilot-ai", name: "PagePilot.ai", description: "AI landing page and product description tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🛩️", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "mydesigns-io", name: "MyDesigns.io", description: "AI design and product description platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎨", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "poky", name: "POKY - Product Importer", description: "Product importing with AI descriptions", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📦", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "insightfactor", name: "InsightFactor", description: "AI product analysis and description", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🔍", category: "writing-editing", subcategory: "ai-product-description-generator" }
    ],
    "ai-prompt-generator": [
      { id: "flowgpt", name: "FlowGPT", description: "AI prompt sharing and generation platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌊", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "aiprm", name: "AIPRM", description: "AI prompt management for ChatGPT", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚡", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "imageprompt-org", name: "ImagePrompt.org", description: "AI image prompt generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "promptbase", name: "PromptBase", description: "Marketplace for AI prompts", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🏪", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "chatgpt-mega-prompts", name: "200+ ChatGPT Mega-Prompts for Solopreneurs", description: "Business-focused ChatGPT prompts", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💼", category: "writing-editing", subcategory: "ai-prompt-generator" }
    ],
    "ai-proofreading": [
      { id: "scribbr", name: "Scribbr", description: "Academic proofreading and editing service", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎓", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "writefull", name: "Writefull", description: "AI proofreading for academic writing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "editgpt", name: "editGPT", description: "AI-powered text editing and proofreading", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✏️", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "trinka-ai", name: "Trinka AI", description: "AI grammar checker for academic writing", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "katteb-ai", name: "Katteb AI", description: "AI writing and proofreading assistant", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-proofreading" }
    ],
    "ai-quotes-generator": [
      { id: "quotesmaker", name: "QuotesMaker", description: "Custom quote generation tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "💬", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quotegenerator-io", name: "QuoteGenerator.io", description: "Online quote generation platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quoai", name: "Quoai", description: "AI quote creation and sharing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "💭", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "mindspark-ai", name: "MindSparkAI", description: "Inspirational quote generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "⚡", category: "writing-editing", subcategory: "ai-quotes-generator" }
    ],
    "ai-report-writing": [
      { id: "teachers-report-writer", name: "Teachers Report Writer", description: "AI tool for educational report writing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👩‍🏫", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "geniuspt", name: "GeniusPT", description: "AI report generation for professionals", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🧠", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "reportgpt", name: "ReportGPT", description: "AI-powered report writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📊", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "pentra", name: "Pentra", description: "AI technical writing and reporting", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "✒️", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "opusense", name: "Opusense", description: "AI business report generation", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📈", category: "writing-editing", subcategory: "ai-report-writing" }
    ],
    "ai-repurpose": [
      { id: "castmagic", name: "Castmagic", description: "Podcast content repurposing with AI", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎙️", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "hypefury", name: "Hypefury", description: "Social media content repurposing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🚀", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "exemplary-ai", name: "Exemplary AI", description: "AI content transformation and repurposing", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-repurpose" }
    ],
    "ai-review-generator": [
      { id: "mara-ai", name: "MARA AI", description: "AI customer review response generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "⭐", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "reviewly", name: "Reviewly", description: "AI review generation and management", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "autoblogging-ai", name: "Autoblogging.ai", description: "AI content and review generation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🤖", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "spokk", name: "Spokk", description: "AI product review generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🗣️", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "roastlinkedin", name: "RoastLinkedIn.com", description: "AI LinkedIn profile review tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💼", category: "writing-editing", subcategory: "ai-review-generator" }
    ],
    "ai-rewriter": [
      { id: "free-paraphrasing-rewriter", name: "Free Paraphrasing Tool", description: "Free AI text rewriting service", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🔄", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "wordtune", name: "Wordtune", description: "AI writing companion and rewriter", url: "", upvotes: 765, verified: true, rating: 4.7, icon: "🎵", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "ai-undetect", name: "AI Undetect", description: "AI text humanization and rewriting", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-rewriter" }
    ],
    "ai-script-writing": [
      { id: "dubs-io", name: "Dubs.io", description: "AI dubbing and script generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "influee", name: "Influee", description: "AI influencer script generator", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "📱", category: "writing-editing", subcategory: "ai-script-writing" }
    ],
    "ai-sentence-generator": [
      { id: "ai-sentence-generator", name: "AI Sentence Generator", description: "Generate coherent sentences with AI", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "english-chrome-extension", name: "English Chrome Extension", description: "Chrome extension for English sentence help", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🌐", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "vocabmate", name: "VocabMate", description: "Vocabulary and sentence building tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📚", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "typegenie", name: "TypeGenie", description: "AI typing and sentence completion", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "⌨️", category: "writing-editing", subcategory: "ai-sentence-generator" }
    ],
    "ai-short-story-generator": [
      { id: "storybooks", name: "Storybooks", description: "AI children's storybook generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "mytales", name: "MyTales", description: "Personalized AI story creation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "storywizard-ai", name: "Storywizard.ai", description: "AI story writing and generation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🧙", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "makemytale", name: "MakeMyTale", description: "AI tale and story generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📝", category: "writing-editing", subcategory: "ai-short-story-generator" }
    ],
    "ai-slogan-generator": [
      { id: "brandkiit", name: "BrandKiit", description: "AI branding and slogan generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🏷️", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "mybrandgen", name: "myBrandgen.com", description: "AI brand name and slogan generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "10web", name: "10Web", description: "AI website builder with slogan generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🌐", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "zoviz", name: "Zoviz", description: "AI logo and slogan creation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎨", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "prepostseo", name: "Prepostseo", description: "SEO tools with slogan generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🔍", category: "writing-editing", subcategory: "ai-slogan-generator" }
    ],
    "ai-spell-check": [
      { id: "textgears", name: "TextGears", description: "AI grammar and spell checking API", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "⚙️", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "linguix", name: "Linguix", description: "AI writing assistant with spell check", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "safespelling", name: "SafeSpelling", description: "AI-powered spell checking tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🛡️", category: "writing-editing", subcategory: "ai-spell-check" }
    ],
    "ai-story-generator": [
      { id: "dreampress-ai", name: "DreamPress AI", description: "AI story generation platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "💭", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "dreamgen", name: "DreamGen", description: "AI story and content generator", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🌙", category: "writing-editing", subcategory: "ai-story-generator" }
    ],
    "ai-subtitle-generator": [
      { id: "clideo", name: "Clideo", description: "Video editing tools with subtitle generation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎥", category: "writing-editing", subcategory: "ai-subtitle-generator" }
    ],
    "ai-summarizer": [
      { id: "ai-summarizer", name: "AI Summarizer", description: "Text summarization with AI", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📄", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "otter-ai", name: "Otter.ai", description: "AI meeting transcription and summarization", url: "", upvotes: 654, verified: true, rating: 4.8, icon: "🦦", category: "writing-editing", subcategory: "ai-summarizer" }
    ],
    "ai-text-classifier": [
      { id: "canvs-ai", name: "Canvs AI", description: "AI text analysis and classification", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "yay-forms", name: "Yay! Forms", description: "Form builder with AI text classification", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "iamip", name: "IamIP", description: "AI-powered text analysis platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "chatpulse", name: "ChatPulse", description: "AI chat and text sentiment analysis", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💬", category: "writing-editing", subcategory: "ai-text-classifier" }
    ],
    "ai-text-generator": [
      { id: "venice-ai", name: "Venice AI", description: "AI text generation platform", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🏛️", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "hyperwrite", name: "HyperWrite", description: "AI-powered writing assistant that generates and improves content for emails, articles, and blog posts instantly.", url: "https://www.hyperwriteai.com/", upvotes: 789, verified: true, rating: 4.4, icon: "⚡", category: "writing-editing", subcategory: "ai-text-generator", addedDate: "Nov 04, 2025" },
      { id: "toolsaday", name: "Toolsaday", description: "Daily AI tools including text generation", url: "", upvotes: 567, verified: false, rating: 4.3, icon: "🔧", category: "writing-editing", subcategory: "ai-text-generator" }
    ],
    "ai-text-message-generator": [
      { id: "structurely", name: "Structurely", description: "AI real estate text messaging", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🏠", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "mtalkz", name: "Mtalkz", description: "AI messaging and communication platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "verse-ai", name: "Verse.ai", description: "AI conversation and messaging tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎭", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "firetexts", name: "FireTexts", description: "AI text message generator for dating", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🔥", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "textgpt", name: "TextGPT", description: "AI text messaging assistant", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "📱", category: "writing-editing", subcategory: "ai-text-message-generator" }
    ],
    "ai-thesis-generator": [
      { id: "thesis-ai", name: "ThesisAI", description: "AI thesis writing and generation tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎓", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "som-ai", name: "SOM AI", description: "Academic AI writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📚", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "scipub-plus", name: "SciPub+", description: "Scientific publication writing tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🔬", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "v0-report", name: "v0 Report", description: "AI report and thesis generator", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📊", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "academicideas", name: "AcademicIdeas", description: "AI academic writing and thesis ideas", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "💡", category: "writing-editing", subcategory: "ai-thesis-generator" }
    ],
    "ai-title-generator": [
      { id: "pikzels", name: "Pikzels", description: "AI thumbnail and title generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "picsee", name: "PicSee", description: "Link management with AI title generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔗", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "thumblytics", name: "Thumblytics", description: "YouTube thumbnail and title analytics", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📊", category: "writing-editing", subcategory: "ai-title-generator" },
    ],
    "ai-writing": [
      { id: "decopy-ai", name: "Decopy AI", description: "AI copywriting and content creation", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-writing" },
      { id: "tinywow", name: "TinyWow", description: "Free AI writing and editing tools", url: "", upvotes: 567, verified: false, rating: 4.3, icon: "🔧", category: "writing-editing", subcategory: "ai-writing" }
    ],
    "ai-writing-assistants": [
      { id: "smodin", name: "Smodin", description: "AI writing assistant and homework helper", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "toolsmart-humanize", name: "Toolsmart Free Humanize AI", description: "AI text humanization tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "👥", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "heidi-health", name: "Heidi Health", description: "AI writing assistant for healthcare", url: "", upvotes: 567, verified: false, rating: 4.4, icon: "🏥", category: "writing-editing", subcategory: "ai-writing-assistants" }
    ],
    "headlines-ai": [
      { id: "topicfinder", name: "Topicfinder", description: "AI topic and headline discovery tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🔍", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "soopra", name: "Soopra", description: "AI content and headline generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎯", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "make-headline", name: "Make Headline", description: "AI headline creation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📰", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "great-headlines-ai", name: "Great Headlines AI", description: "AI headline optimization tool", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "⭐", category: "writing-editing", subcategory: "headlines-ai" }
    ],
    "prompt-engineering": [
      { id: "prompthero", name: "PromptHero", description: "AI prompt engineering and sharing platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🦸", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "learn-prompting", name: "Learn Prompting", description: "Educational platform for prompt engineering", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "god-of-prompt", name: "AI Prompt Generator by God of Prompt", description: "Advanced prompt generation tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⚡", category: "writing-editing", subcategory: "prompt-engineering" }
    ],
    "resume-ai": [
      { id: "resume-worded", name: "Resume Worded", description: "AI resume optimization and feedback", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📄", category: "writing-editing", subcategory: "resume-ai" },
      { id: "swooped", name: "Swooped", description: "AI job search and resume optimization", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🚀", category: "writing-editing", subcategory: "resume-ai" }
    ]
  },
  "art-creative-design": {
    "ai-3d-model-generator": [

      { id: "meshy", name: "Meshy", description: "AI-powered 3D model generation", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎯", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "luma-ai", name: "Luma AI", description: "3D model creation with AI", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌟", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "iconscout", name: "IconScout", description: "3D icons and models generator", url: "", upvotes: 989, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "tripo-ai", name: "Tripo AI", description: "Advanced 3D model AI generation", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🔺", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "hyper3d", name: "Hyper3D", description: "Professional 3D model creation", url: "", upvotes: 654, verified: false, rating: 4.3, icon: "🚀", category: "art-creative-design", subcategory: "ai-3d-model-generator" }
    ],
    "ai-album-cover-generator": [
      { id: "brat-generator", name: "Brat Generator", description: "AI album cover creation tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎵", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "immersity-ai", name: "Immersity AI", description: "Immersive album cover designs", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🌍", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "albumcover-ai", name: "AlbumCover AI", description: "Specialized album cover AI generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💿", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "coverartist", name: "CoverArtist", description: "Professional album cover creation", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎨", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "daft-art", name: "Daft Art", description: "Creative album cover AI design", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🎭", category: "art-creative-design", subcategory: "ai-album-cover-generator" }
    ],
    "ai-anime-art": [
      { id: "pixai", name: "PixAI", description: "AI anime art generation platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎌", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "yodayo", name: "Yodayo", description: "Anime-style AI art creator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "animegenius", name: "AnimeGenius", description: "Professional anime art AI generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⭐", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "niji-journey", name: "Niji・Journey", description: "Anime-focused AI art generation", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🌸", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "dzine-ghibli-ai", name: "Dzine Ghibli AI", description: "Studio Ghibli style AI art", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🏰", category: "art-creative-design", subcategory: "ai-anime-art" }
    ],
    "ai-anime-generator": [
      { id: "animegenius-gen", name: "AnimeGenius", description: "Advanced anime character generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⭐", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "feetgen", name: "FeetGen", description: "Specialized anime generation tool", url: "", upvotes: 876, verified: false, rating: 4.5, icon: "🦶", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "komiko", name: "Komiko", description: "Anime comic and art generator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📚", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "ai-hentai-generator", name: "AI Hentai Generator", description: "Adult anime content generator", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🔞", category: "art-creative-design", subcategory: "ai-anime-generator" }
    ],
    "ai-art-generator": [
      { id: "dreamina-ai", name: "Dreamina AI", description: "Dreamina AI by CapCut is a powerful AI image and video generation platform creating stunning visuals from text descriptions with professional quality output", url: "https://dreamina.capcut.com", upvotes: 4100, verified: false, rating: 4.6, icon: "✨", category: "image-generation-editing", subcategory: "ai-art-generator", addedDate: "2026-04-01" },
      { id: "vheer-ai", name: "Vheer AI", description: "Vheer AI is an advanced AI image generation platform creating high-quality realistic and artistic images from text prompts with multiple style options", url: "https://vheer.com", upvotes: 3100, verified: false, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-art-generator", addedDate: "2026-04-01" },
      { id: "midjourney", name: "Midjourney", description: "Leading AI art generation platform", url: "", upvotes: 2567, verified: true, rating: 4.9, icon: "🎨", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "pixai-art", name: "PixAI", description: "Versatile AI art creation tool", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎌", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "pica-ai", name: "Pica AI", description: "Professional AI art generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🖼️", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "nightcafe-creator", name: "NightCafe Creator", description: "AI art creation community", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌙", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "artguru-ai", name: "Artguru AI", description: "Easy-to-use AI art generator", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "yodayo-ai", name: "Yodayo AI", description: "Unlock limitless roleplay — craft stories, explore worlds, and chat with millions of anime characters", url: "https://yodayo.com/", upvotes: 987, verified: true, rating: 4.6, icon: "🎌", category: "art-creative-design", subcategory: "ai-art-generator", addedDate: "Nov 24, 2025" }
    ],
    "ai-banner-generator": [
      { id: "creatopy", name: "Creatopy", description: "AI-powered banner design platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "sivi-ai", name: "Sivi AI", description: "Intelligent banner creation tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📊", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "ai-linkedin-banners", name: "AI LinkedIn Banners", description: "LinkedIn banner AI generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💼", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "product-hero", name: "Product Hero", description: "Product banner AI creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🛍️", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "bannerify", name: "Bannerify", description: "Simple AI banner generator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🏷️", category: "art-creative-design", subcategory: "ai-banner-generator" }
    ],
    "ai-beauty": [
      { id: "youcam-app", name: "YouCam App Provider", description: "AI beauty enhancement tools", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "💄", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "spoiledchild", name: "SpoiledChild", description: "AI beauty product recommendations", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🧴", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "good-face-project", name: "The Good Face Project", description: "AI face analysis and beauty tips", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "😊", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "color-analysis-ai", name: "My Color Analysis AI", description: "AI color palette for beauty", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "looksmaxx-report", name: "LooksMaxx Report", description: "AI appearance optimization", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "💪", category: "art-creative-design", subcategory: "ai-beauty" }
    ],
    "ai-logo-generator": [
      { id: "looka", name: "Looka", description: "Professional AI logo design", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🏷️", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "brandcrowd", name: "BrandCrowd", description: "AI logo and brand creation", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "👑", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "logoai", name: "LogoAI", description: "Smart logo generation platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "kittl-logo", name: "Kittl", description: "Creative AI logo maker", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "creative-fabrica-font", name: "Creative Fabrica Font Generator", description: "Logo with custom fonts", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "✍️", category: "art-creative-design", subcategory: "ai-logo-generator" }
    ],
    "ai-infographic-generator": [
      { id: "venngage", name: "Venngage", description: "Professional infographic design platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📊", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "piktochart", name: "Piktochart", description: "Easy infographic and visual storytelling", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📈", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "infografix", name: "Infografix", description: "Quick infographic generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "⚡", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "infography", name: "Infography", description: "Data visualization and infographics", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📋", category: "art-creative-design", subcategory: "ai-infographic-generator" }
    ],
    "ai-bikini": [
      { id: "insmind-bikini", name: "insMind", description: "AI bikini and swimwear generation", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👙", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "imagemover", name: "ImageMover", description: "AI clothing transformation", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "📸", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "nudify-online", name: "Nudify.Online", description: "AI image modification tool", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🔞", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "funy-ai", name: "Funy AI: AI Video, AI Image, Face Swap", description: "Multi-purpose AI image tool", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🎭", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "videofaceswap", name: "VideoFaceSwap", description: "AI video and image face swap", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "🔄", category: "art-creative-design", subcategory: "ai-bikini" }
    ],
    "ai-book-cover-generator": [
      { id: "coverdesignai", name: "CoverDesignAI", description: "AI book cover design platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📚", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "book-ai-writer", name: "Book AI Writer", description: "AI book cover and writing tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "✍️", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "book-design-tool", name: "Book Design Tool", description: "Professional book cover designer", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "amazonkdp-click", name: "AmazonKDP.Click", description: "KDP book cover generator", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "📖", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "imgkits-book", name: "Imgkits - Top AI Image & Video Processing Tools", description: "Book cover AI generation", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🛠️", category: "art-creative-design", subcategory: "ai-book-cover-generator" }
    ],
    "ai-brochure-maker": [
      { id: "real-estate-listing", name: "My Real Estate Listing", description: "AI real estate brochure maker", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏠", category: "art-creative-design", subcategory: "ai-brochure-maker" },
      { id: "storydoc", name: "Storydoc", description: "Interactive AI brochure creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📄", category: "art-creative-design", subcategory: "ai-brochure-maker" },
      { id: "clevopyai", name: "ClevopyAI", description: "AI brochure and marketing material", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎯", category: "art-creative-design", subcategory: "ai-brochure-maker" }
    ],
    "ai-business-card-generator": [
      { id: "popl", name: "Popl", description: "Digital business card AI creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💼", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "brandcrowd-card", name: "BrandCrowd", description: "AI business card design", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "👑", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "brandmark-logo", name: "Brandmark Logo Maker", description: "Business card and logo AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏷️", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "logome", name: "Logome", description: "Business card and branding AI", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📇", category: "art-creative-design", subcategory: "ai-business-card-generator" }
    ],
    "ai-cartoon-generator": [
      { id: "myimg-ai", name: "Myimg AI", description: "AI cartoon and caricature creator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "😄", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "colorcinch", name: "Colorcinch", description: "Cartoon photo editor with AI", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "neural-frames", name: "neural frames", description: "AI video and cartoon generation", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "krikey-ai", name: "Krikey AI", description: "3D cartoon avatar creator", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🎭", category: "art-creative-design", subcategory: "ai-cartoon-generator" }
    ],
    "ai-cat": [
      { id: "catting", name: "Catting", description: "AI cat image generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🐱", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "catsme", name: "CatsMe", description: "AI cat photo transformation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "😺", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "skeptical-tom", name: "Skeptical Tom", description: "AI cat meme generator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🤨", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "cute-cat-ai", name: "Cute Cat Pictures AI Generator", description: "Adorable AI cat creator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "😻", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "cat-gpt", name: "Cat-GPT", description: "AI cat conversation and images", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🤖", category: "art-creative-design", subcategory: "ai-cat" }
    ],
    "ai-clothing-generator": [
      { id: "ifoto-clothing", name: "iFoto", description: "AI clothing design and generation", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "👗", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "customuse", name: "Customuse", description: "Custom AI clothing designer", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "new-black-ai", name: "The New Black AI", description: "AI fashion design platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🖤", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "fashn-ai", name: "FASHN AI", description: "Fashion AI design tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "✨", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "outfit-changer", name: "Outfit Changer", description: "AI outfit transformation", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "👔", category: "art-creative-design", subcategory: "ai-clothing-generator" }
    ],
    "ai-color-palette-generator": [
      { id: "colormagic", name: "ColorMagic", description: "AI color palette creation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "palettemaker", name: "PaletteMaker", description: "Smart color palette generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "color-analysis-ai-palette", name: "My Color Analysis AI", description: "Personal color palette AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💄", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "huehive", name: "HueHive", description: "Collaborative color palette tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🍯", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "perception", name: "Perception", description: "AI color perception analysis", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "👁️", category: "art-creative-design", subcategory: "ai-color-palette-generator" }
    ],
    "ai-coloring-book-generator": [
      { id: "coloringbook-ai", name: "ColoringBook AI", description: "AI coloring book creation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "colorify-ai", name: "Colorify AI", description: "Smart coloring book generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🖍️", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "colorin-ai", name: "Colorin AI", description: "AI coloring page creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "best-coloring-pages", name: "Best Coloring Pages AI", description: "High-quality coloring pages", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📚", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "color-pop", name: "Color Pop", description: "Interactive coloring AI", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🎈", category: "art-creative-design", subcategory: "ai-coloring-book-generator" }
    ],
    "ai-comic": [
      { id: "omniparser", name: "OmniParser", description: "AI comic creation and parsing", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📖", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "octocomics", name: "OctoComics", description: "Octopus-themed comic AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🐙", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "prompttocomicai", name: "PromptToComicAI", description: "Text to comic AI generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💭", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "comicai", name: "Comicai", description: "Professional comic AI creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "fantoons", name: "Fantoons", description: "Fantasy comic AI generator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🦄", category: "art-creative-design", subcategory: "ai-comic" }
    ],
    "ai-comic-factory": [
      { id: "ai-comic-generator-factory", name: "AI Comic Generator", description: "Comic factory AI platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🏭", category: "art-creative-design", subcategory: "ai-comic-factory" },
      { id: "ai-comic-factory", name: "AI Comic Factory", description: "Automated comic creation", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-comic-factory" },
      { id: "octocomics-factory", name: "OctoComics", description: "Mass comic production AI", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🐙", category: "art-creative-design", subcategory: "ai-comic-factory" },
      { id: "labubu-wallpaper", name: "Labubu Wallpaper - 100+ Labubu Live Wallpapers & 4K Walls (Updated Daily)", description: "Comic character wallpapers", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🖼️", category: "art-creative-design", subcategory: "ai-comic-factory" }
    ],
    "ai-comic-generator": [
      { id: "komiko-gen", name: "Komiko", description: "AI comic generation platform", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📚", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "tooning", name: "Tooning", description: "Cartoon comic AI creator", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "ai-comic-generator-main", name: "AI Comic Generator", description: "Main comic generation tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "📖", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "anifusion", name: "Anifusion", description: "Anime comic fusion AI", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎌", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "storynest-ai", name: "StoryNest.ai", description: "Story-driven comic AI", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🪺", category: "art-creative-design", subcategory: "ai-comic-generator" }
    ],
    "ai-cover-generator": [
      { id: "topmediai-cover", name: "TopMediai", description: "AI cover generation tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎤", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "musicfy-ai", name: "Musicfy AI", description: "Music cover AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎵", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "audimee", name: "Audimee", description: "Audio cover AI platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎧", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "singify-ai", name: "Singify AI", description: "Singing cover AI generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎙️", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "covers-ai", name: "Covers.ai", description: "Professional cover AI tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎨", category: "art-creative-design", subcategory: "ai-cover-generator" }
    ],
    "ai-design-assistant": [
      { id: "ls-graphics", name: "ls.graphics", description: "AI design assistant platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "mnml-ai", name: "mnml.ai", description: "Minimalist design AI assistant", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✨", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "visily", name: "Visily", description: "Visual design AI helper", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "👁️", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "motiff", name: "Motiff", description: "Motion design AI assistant", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "weavy", name: "Weavy", description: "Collaborative design AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🕸️", category: "art-creative-design", subcategory: "ai-design-assistant" }
    ],
    "ai-design-generator": [
      { id: "miricanvas", name: "MiriCanvas", description: "AI design generation platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "v0-dev", name: "v0.dev", description: "AI web design generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌐", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "microsoft-designer", name: "Microsoft Designer", description: "Microsoft's AI design tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏢", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "napkin-ai-design", name: "Napkin AI", description: "Quick design AI generator", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "stitch", name: "Stitch", description: "Design stitching AI platform", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "🧵", category: "art-creative-design", subcategory: "ai-design-generator" }
    ],
    "ai-disney-poster": [
      { id: "pixarai", name: "PixarAI", description: "Disney Pixar style AI poster", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🏰", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "disney-ai-pixar", name: "Disney AI Pixar Generator", description: "Disney Pixar character AI", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "disney-ai-poster", name: "Disney AI Poster", description: "Disney style poster AI", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "disney-pixar-dog", name: "Disney Pixar Dog AI", description: "Disney style dog character AI", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🐕", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "bing-image-creator", name: "Bing Image Creator", description: "Microsoft's Disney style AI", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🔍", category: "art-creative-design", subcategory: "ai-disney-poster" }
    ],
    "ai-drawing": [
      { id: "autodraw", name: "AutoDraw", description: "AI drawing assistance tool", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "✏️", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "sketchar", name: "Sketchar", description: "AI sketch learning app", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✏️", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "draftaid", name: "DraftAid", description: "AI drawing draft assistant", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📝", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "drawings-alive", name: "Drawings Alive", description: "AI drawing animation tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "patentdrawai", name: "PatentDrawAI", description: "AI patent drawing creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📋", category: "art-creative-design", subcategory: "ai-drawing" }
    ],
    "ai-emoji-generator": [
      { id: "ai-emoji-generator", name: "AI Emoji Generator", description: "Custom emoji AI creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "😀", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "ai-emoji-generator-2", name: "AI Emoji Generator", description: "Alternative emoji AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🤖", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "tiktok-emojis", name: "TikTok Emojis", description: "TikTok style emoji AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎵", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "emojifyer", name: "Emojifyer", description: "Text to emoji AI converter", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🔄", category: "art-creative-design", subcategory: "ai-emoji-generator" }
    ],
    "ai-font-generator": [
      { id: "creative-fabrica-font-gen", name: "Creative Fabrica Font Generator", description: "AI font creation platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "✍️", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "gentype", name: "Gentype", description: "AI typography generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🔤", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "font-vibes", name: "Font Vibes", description: "AI font mood generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✨", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "typiq", name: "Typiq", description: "Smart AI font creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "designs-ai", name: "Designs AI", description: "AI design and font platform", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🏢", category: "art-creative-design", subcategory: "ai-font-generator" }
    ],
    "ai-graphic-design": [
      { id: "adobe", name: "Adobe", description: "Professional AI graphic design", url: "", upvotes: 2567, verified: true, rating: 4.9, icon: "🏢", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "kittl-graphic", name: "Kittl", description: "AI graphic design platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "microsoft-designer-graphic", name: "Microsoft Designer", description: "AI graphic design tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏢", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "pixelied", name: "Pixelied", description: "Online AI graphic design", url: "", upvotes: 876, verified: false, rating: 4.5, icon: "📐", category: "art-creative-design", subcategory: "ai-graphic-design" }
    ],
    "ai-hair-color-changer": [
      { id: "hairstyle-ai-color", name: "Hairstyle AI", description: "AI hair color transformation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💇", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "ai-hairstyle-color", name: "AI Hairstyle", description: "Hair color AI changer", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "💄", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "ai-hairstyle-changer", name: "AI HairStyle Changer", description: "Complete hair color AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✨", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "haircutai", name: "HaircutAI", description: "AI haircut and color tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "✂️", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "ai-hairstyle-changer-2", name: "AI Hairstyle Changer", description: "Alternative hair color AI", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎨", category: "art-creative-design", subcategory: "ai-hair-color-changer" }
    ],
    "ai-hairstyle": [
      { id: "hairstyle-ai", name: "Hairstyle AI", description: "AI hairstyle generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💇", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "ai-hairstyle", name: "AI Hairstyle", description: "Smart hairstyle AI tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "💄", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "ai-hairstyle-changer-main", name: "AI HairStyle Changer", description: "Professional hairstyle AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✨", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "haircutai-style", name: "HaircutAI", description: "AI haircut style generator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "✂️", category: "art-creative-design", subcategory: "ai-hairstyle" }
    ],
    "ai-icon-generator": [
      { id: "creatie", name: "Creatie", description: "AI icon creation platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "pixcap", name: "Pixcap", description: "3D icon AI generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📦", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "iconai", name: "IconAI", description: "Smart icon AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🤖", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "appicons-ai", name: "Appicons.ai", description: "App icon AI generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📱", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "candyicons", name: "CandyIcons", description: "Colorful icon AI creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🍭", category: "art-creative-design", subcategory: "ai-icon-generator" }
    ],
    "ai-illustration-generator": [
      { id: "seaart-ai", name: "Seaart.ai", description: "AI illustration platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "🌊", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "ai-illustration-generator", name: "AI Illustration Generator", description: "Professional illustration AI", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "icons8-illust", name: "Icons8", description: "Icon and illustration AI", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "iconscout-illust", name: "IconScout", description: "Illustration AI platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "chichi-pui", name: "chichi-pui", description: "Cute illustration AI", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "🐾", category: "art-creative-design", subcategory: "ai-illustration-generator" }
    ],
    "ai-manga-generator": [
      { id: "anifusion-manga", name: "Anifusion", description: "AI manga creation platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🎌", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "toona", name: "toona", description: "AI manga and anime creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎭", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "mangaka-app", name: "Mangaka.app", description: "Manga artist AI assistant", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✏️", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "neural-canvas", name: "Neural Canvas", description: "AI manga art generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "manga-tv", name: "Manga TV", description: "AI manga video creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📺", category: "art-creative-design", subcategory: "ai-manga-generator" }
    ],
    "ai-mockup-generator": [
      { id: "mockey-ai", name: "Mockey.ai", description: "AI product mockup creator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🧸", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "uizard", name: "Uizard", description: "AI UI mockup generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📱", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "visily-mockup", name: "Visily", description: "Visual mockup AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👁️", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "magic-patterns", name: "Magic Patterns", description: "AI pattern mockup creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "✨", category: "art-creative-design", subcategory: "ai-mockup-generator" }
    ],
    "ai-movie-poster": [
      { id: "aigfaigf-art", name: "aigfaigf.art", description: "AI movie poster creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "movieaiposter", name: "MovieAIPoster", description: "Professional movie poster AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "disney-ai-poster-movie", name: "Disney AI Poster", description: "Disney style movie poster", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏰", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "bing-image-creator-movie", name: "Bing Image Creator", description: "Microsoft movie poster AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🔍", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "neural-frames-movie", name: "Neural Frames", description: "AI movie poster frames", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎬", category: "art-creative-design", subcategory: "ai-movie-poster" }
    ],
    "ai-painting-generator": [
      { id: "wombo-dream", name: "WOMBO Dream", description: "AI painting creation app", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "pet-painting", name: "The Pet Painting", description: "AI pet portrait painter", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🐾", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "aisnap", name: "AiSnap", description: "AI snapshot painting tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📸", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "speed-ai-painting", name: "Speed AI Painting to photo", description: "Fast AI painting converter", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "⚡", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "chatpaint", name: "ChatPaint", description: "Conversational AI painter", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "💬", category: "art-creative-design", subcategory: "ai-painting-generator" }
    ],
    "ai-pattern-generator": [
      { id: "patterned-ai", name: "Patterned AI", description: "AI pattern creation tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "myth-ai", name: "Myth AI", description: "Mythical pattern AI generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🐉", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "monsterimage-ai", name: "MonsterImage.AI", description: "Monster pattern AI creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👹", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "papered", name: "Papered", description: "Wallpaper pattern AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📄", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "xinva-ai", name: "Xinva AI", description: "Creative pattern AI tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "✨", category: "art-creative-design", subcategory: "ai-pattern-generator" }
    ],
    "ai-photography": [
      { id: "dronedeploy", name: "DroneDeploy", description: "AI drone photography platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🚁", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "aftershoot", name: "Aftershoot", description: "AI photo editing and culling", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "⚡", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "artflow-ai", name: "Artflow.ai", description: "AI photography art creation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "try-it-on-ai", name: "Try it on AI", description: "AI fashion photography", url: "", upvotes: 654, verified: false, rating: 4.5, icon: "👗", category: "art-creative-design", subcategory: "ai-photography" }
    ],
    "ai-pixel-art": [
      { id: "pixelfy", name: "Pixelfy", description: "Photo to pixel art AI", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🔲", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "pixelicious", name: "Pixelicious", description: "AI pixel art creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "pxlize-ai", name: "Pxlize AI", description: "Advanced pixel art AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "⚡", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "bitsjourney", name: "Bitsjourney", description: "Pixel art journey AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🚀", category: "art-creative-design", subcategory: "ai-pixel-art" }
    ],
    "ai-pokemon-generator": [
      { id: "pokemon-avatar-generator", name: "Pokémon Avatar Generator", description: "AI Pokémon character creator", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "⚡", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "animegenius-pokemon", name: "AnimeGenius", description: "Pokémon style AI generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "⭐", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "bulk-image-generation", name: "Bulk Image Generation", description: "Mass Pokémon AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📦", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "crepal", name: "CrePal", description: "Creative Pokémon AI pal", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "seapik", name: "Seapik", description: "Sea-themed Pokémon AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🌊", category: "art-creative-design", subcategory: "ai-pokemon-generator" }
    ],
    "ai-poster-generator": [
      { id: "logome-poster", name: "Logome", description: "AI poster and logo creator", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📇", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "pixarai-poster", name: "PixarAI", description: "Pixar style poster AI", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🏰", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "ai-poster-generator", name: "AI Poster Generator", description: "Professional poster AI tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "ai-pixar-posters", name: "AI Pixar Posters", description: "Pixar style poster creator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "ai-poster-generator-2", name: "AI Poster Generator", description: "Alternative poster AI", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "📊", category: "art-creative-design", subcategory: "ai-poster-generator" }
    ],
    "ai-svg-generator": [
      { id: "vectorizer-ai", name: "Vectorizer.AI", description: "AI SVG vectorization tool", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🔄", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "svgtrace", name: "SvgTrace", description: "SVG tracing AI platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✏️", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "svg-io", name: "SVG.io", description: "Online SVG AI generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🌐", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "svgstud-io", name: "SVGStud.io", description: "SVG studio AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "neosvg", name: "neoSVG", description: "Modern SVG AI creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🆕", category: "art-creative-design", subcategory: "ai-svg-generator" }
    ],
    "ai-sketch-generator": [
      { id: "autodraw-sketch", name: "AutoDraw", description: "AI sketch generation tool", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "✏️", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "mnml-ai-sketch", name: "mnml.ai", description: "Minimalist sketch AI", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✨", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "scribble-diffusion", name: "Scribble Diffusion", description: "Scribble to art AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "sketch-logo-ai", name: "Sketch Logo AI", description: "Logo sketch AI creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏷️", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "sketchedge", name: "SketchEdge", description: "Edge detection sketch AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📐", category: "art-creative-design", subcategory: "ai-sketch-generator" }
    ],
    "ai-sticker-generator": [
      { id: "sticker-shake", name: "Sticker Shake", description: "AI sticker creation app", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📱", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "stickerit-ai", name: "StickerIt.AI", description: "Professional sticker AI", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🏷️", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "stickers-ai-generator", name: "Stickers AI Generator", description: "Custom sticker AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✨", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "ai-face-sticker", name: "AI Face Sticker Generator", description: "Face sticker AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "😊", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "ai-sticker-generator", name: "AI Sticker Generator", description: "General sticker AI platform", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-sticker-generator" }
    ],
    "ai-t-shirt-design": [
      { id: "vexels", name: "Vexels", description: "AI t-shirt design platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "👕", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "pietra", name: "Pietra", description: "AI fashion design tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💎", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "teeai", name: "TeeAI", description: "T-shirt AI design generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "youwear", name: "YouWear", description: "Personalized t-shirt AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👤", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "looksounique", name: "looksounique", description: "Unique t-shirt AI designs", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🦄", category: "art-creative-design", subcategory: "ai-t-shirt-design" }
    ],
    "ai-tattoo-generator": [
      { id: "blackink-ai", name: "BlackInk AI", description: "AI tattoo design platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "🖤", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "tatship", name: "Tatship", description: "Tattoo design AI creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🚢", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "tattoosai", name: "TattoosAI", description: "Professional tattoo AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "inker-ai", name: "Inker.AI", description: "Tattoo ink AI designer", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✍️", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "tattoos-ai", name: "Tattoos.ai", description: "AI tattoo creation tool", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-tattoo-generator" }
    ],
    "ai-thumbnail-maker": [
      { id: "viro", name: "Viro", description: "AI thumbnail generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "art-creative-design", subcategory: "ai-thumbnail-maker" },
      { id: "thumbnails-labs", name: "Thumbnails Labs", description: "Thumbnail laboratory AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🧪", category: "art-creative-design", subcategory: "ai-thumbnail-maker" },
      { id: "thumbnailmaker", name: "ThumbnailMaker", description: "Simple thumbnail AI tool", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🛠️", category: "art-creative-design", subcategory: "ai-thumbnail-maker" }
    ],
    "ai-ux-design": [
      { id: "ux-pilot", name: "UX Pilot", description: "AI UX design assistant", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "✈️", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "uizard-ux", name: "Uizard", description: "AI-powered UX design tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📱", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "stitch-ux", name: "Stitch", description: "UX design AI platform", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🧵", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "visily-ux", name: "Visily", description: "Visual UX design AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👁️", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "motiff-ux", name: "Motiff", description: "Motion UX design AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🎬", category: "art-creative-design", subcategory: "ai-ux-design" }
    ],
    "ai-vector-graphics": [
      { id: "kittl-vector", name: "Kittl", description: "AI vector graphics creator", url: "", upvotes: 1890, verified: true, rating: 4.9, icon: "🎨", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "vectorizer-ai-graphics", name: "Vectorizer.AI", description: "Image to vector AI converter", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "vectorizer-io", name: "Vectorizer.io", description: "Online vector AI tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🌐", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "blush", name: "Blush", description: "AI character vector graphics", url: "", upvotes: 654, verified: false, rating: 4.5, icon: "😊", category: "art-creative-design", subcategory: "ai-vector-graphics" }
    ],
    "fashion-ai": [
      { id: "youcam-app-fashion", name: "YouCam App Provider", description: "AI fashion try-on app", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "💄", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "pic-copilot", name: "Pic Copilot", description: "AI fashion photography", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📸", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "botika", name: "Botika", description: "AI fashion model platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "fashn-ai-fashion", name: "FASHN AI", description: "AI fashion design platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✨", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "resleeve", name: "Resleeve", description: "AI fashion design tool", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "👗", category: "art-creative-design", subcategory: "fashion-ai" }
    ],
    "image-to-3d-model": [
      { id: "planner-5d", name: "Planner 5D", description: "AI 2D to 3D model converter", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🏠", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "meshy-3d", name: "Meshy AI", description: "Meshy AI is the world leading AI-powered 3D model generator that transforms text prompts and images into fully textured game-ready 3D assets in under a minute, trusted by over 3 million creators worldwide.", url: "https://www.meshy.ai", upvotes: 1234, verified: true, rating: 4.7, icon: "🌟", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "tripo-ai-3d", name: "Tripo AI", description: "Triple AI 3D model creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🔺", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "3d-ai-studio", name: "3D AI Studio", description: "Professional 3D AI platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "alpha3d", name: "Alpha3D", description: "Advanced 3D AI converter", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🚀", category: "art-creative-design", subcategory: "image-to-3d-model" }
    ],
    "storyboard-ai": [
      { id: "boords", name: "Boords", description: "AI storyboard creation platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📋", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "katalist-ai", name: "Katalist AI", description: "AI story visualization tool", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📚", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "storyboarder-ai", name: "Storyboarder.ai", description: "Professional storyboard AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "storyboardhero", name: "StoryboardHero", description: "Hero storyboard AI creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🦸", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "story-boards-ai", name: "story-boards.ai", description: "AI storyboard generator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📖", category: "art-creative-design", subcategory: "storyboard-ai" }
    ],
    "text-to-3d": [
      { id: "meshy-text", name: "Meshy", description: "Text to 3D model AI", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🌟", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "tripo-ai-text", name: "Tripo AI", description: "Text to 3D generation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔺", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "hyper3d-text", name: "Hyper3D", description: "Hyper 3D text generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🚀", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "3d-ai-studio-text", name: "3D AI Studio", description: "Text to 3D AI platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "alpha3d-text", name: "Alpha3D", description: "Advanced text to 3D AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🚀", category: "art-creative-design", subcategory: "text-to-3d" }
    ]
  },
  "social-media": {
    "ai-bio-generator": [
      { id: "taplio", name: "Taplio", description: "AI-powered LinkedIn growth platform for personal branding and content scheduling", url: "https://taplio.com", upvotes: 134, verified: true, rating: 4.4, icon: "💼", category: "social-media", subcategory: "social-media" },
      { id: "pimeyes", name: "PimEyes", description: "AI face search engine for finding where your photos appear across the internet", url: "https://pimeyes.com", upvotes: 112, verified: true, rating: 4.3, icon: "👁️", category: "social-media", subcategory: "social-media" },

      { id: "styldod", name: "Styldod", description: "AI bio generator for social media", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✨", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "biography-studio-ai", name: "Biography Studio AI", description: "Professional AI biography creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📝", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "lovegenius", name: "LoveGenius", description: "AI dating profile bio generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💕", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "ai-social-bio", name: "AI Social Bio", description: "Smart social media bio creator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "👤", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "gpt-twitter-bot", name: "GPT Twitter Bot", description: "AI Twitter bio automation", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🤖", category: "social-media", subcategory: "ai-bio-generator" }
    ],
    "ai-facebook": [
      { id: "ginix", name: "GINIX", description: "AI Facebook marketing tool", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "👥", category: "social-media", subcategory: "ai-facebook" },
      { id: "friendflow", name: "FriendFlow", description: "AI Facebook friend management", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🤝", category: "social-media", subcategory: "ai-facebook" },
      { id: "facebook-prospecting-ai", name: "Facebook Prospecting AI", description: "AI-powered Facebook lead generation", url: "", upvotes: 654, verified: true, rating: 4.6, icon: "🎯", category: "social-media", subcategory: "ai-facebook" },
      { id: "gpt-for-facebook", name: "GPT-For-Facebook", description: "GPT integration for Facebook", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🤖", category: "social-media", subcategory: "ai-facebook" },
      { id: "facebook-prospecting-ai-2", name: "Facebook Prospecting AI", description: "Advanced Facebook prospecting tool", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📊", category: "social-media", subcategory: "ai-facebook" }
    ],
    "ai-hashtag": [
      { id: "planable-hashtag", name: "Planable", description: "AI hashtag generator and scheduler", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📅", category: "social-media", subcategory: "ai-hashtag" },
      { id: "iq-hashtags", name: "IQ Hashtags", description: "Smart hashtag analytics and suggestions", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🧠", category: "social-media", subcategory: "ai-hashtag" },
      { id: "reachifyme", name: "ReachifyMe", description: "AI hashtag reach optimizer", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📈", category: "social-media", subcategory: "ai-hashtag" },
      { id: "hashtag-expert", name: "Hashtag Expert", description: "Professional hashtag research tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "#️⃣", category: "social-media", subcategory: "ai-hashtag" },
      { id: "free-ai-wedding-hashtag", name: "Free AI Wedding Hashtag Generator", description: "AI wedding hashtag creator", url: "", upvotes: 321, verified: true, rating: 4.2, icon: "💒", category: "social-media", subcategory: "ai-hashtag" }
    ],
    "ai-influencer": [
      { id: "celebify-ai", name: "Celebify AI", description: "Celebify AI is an AI face and image generation tool that creates celebrity-style photorealistic portraits and custom character images", url: "https://www.celebifyai.net", upvotes: 2900, verified: false, rating: 4.2, icon: "⭐", category: "image-generation-editing", subcategory: "ai-influencer", addedDate: "2026-04-01" },
      { id: "makeinfluencer-ai", name: "MakeInfluencer AI", description: "AI influencer creation platform", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "⭐", category: "social-media", subcategory: "ai-influencer" },
      { id: "glambase", name: "Glambase", description: "AI virtual influencer platform", url: "", upvotes: 765, verified: true, rating: 4.6, icon: "✨", category: "social-media", subcategory: "ai-influencer" },
      { id: "celebmaker-ai", name: "CelebMakerAI", description: "AI celebrity and influencer creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🌟", category: "social-media", subcategory: "ai-influencer" },
      { id: "influencerfarm", name: "InfluencerFarm", description: "AI influencer management system", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🚜", category: "social-media", subcategory: "ai-influencer" },
      { id: "infludata", name: "influData", description: "AI influencer analytics and insights", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📊", category: "social-media", subcategory: "ai-influencer" }
    ],
    "ai-instagram": [
      { id: "upgrow", name: "UpGrow", description: "AI Instagram growth service", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📈", category: "social-media", subcategory: "ai-instagram" },
      { id: "grum", name: "Grum", description: "AI Instagram automation tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🤖", category: "social-media", subcategory: "ai-instagram" },
      { id: "gainsty", name: "Gainsty", description: "AI Instagram follower growth", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📊", category: "social-media", subcategory: "ai-instagram" },
      { id: "linktodm", name: "LinktoDM", description: "AI Instagram DM automation", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💬", category: "social-media", subcategory: "ai-instagram" },
      { id: "inro", name: "Inrō", description: "AI Instagram engagement tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎯", category: "social-media", subcategory: "ai-instagram" }
    ],
    "ai-instagram-caption-generator": [
      { id: "cool-caption-ideas", name: "Cool Caption Ideas", description: "AI Instagram caption generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "💭", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "captionit", name: "captionit", description: "Smart caption generation tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✍️", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "instacaptain", name: "InstaCaptain", description: "AI Instagram caption creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "👨‍✈️", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "captionmaster", name: "CaptionMaster", description: "Master AI caption generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎯", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "copywritergpt", name: "CopywriterGPT", description: "GPT-powered copywriting tool", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🤖", category: "social-media", subcategory: "ai-instagram-caption-generator" }
    ],
    "ai-linkedin-headshot": [
      { id: "photoai-me", name: "PhotoAI.me", description: "AI LinkedIn headshot generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📸", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "betterpic", name: "BetterPic", description: "Professional AI headshot creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎯", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "headshotpro", name: "HeadshotPro", description: "Pro AI headshot generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👔", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "instaheadshots", name: "InstaHeadshots", description: "Instant AI headshot creation", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "⚡", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "ai-suitup", name: "AI SuitUp", description: "AI professional photo generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "👨‍💼", category: "social-media", subcategory: "ai-linkedin-headshot" }
    ],
    "ai-linkedin-photo-generator": [
      { id: "vidnoz-ai-linkedin", name: "Vidnoz AI", description: "AI LinkedIn photo generator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🎬", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "picstudio-ai", name: "PicStudio.AI", description: "AI photo studio for LinkedIn", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📷", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "windybot", name: "WindyBot", description: "AI LinkedIn photo creation bot", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "suitup", name: "SuitUp", description: "AI professional photo creator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "👔", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "quick-headshots", name: "Quick Headshots", description: "Fast AI headshot generation", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "⚡", category: "social-media", subcategory: "ai-linkedin-photo-generator" }
    ],
    "ai-meme-generator": [
      { id: "kapwing-meme", name: "Kapwing", description: "AI meme generator and editor", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "😂", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "supermeme-ai", name: "Supermeme.ai", description: "AI-powered meme creation", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🚀", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "sludge-ai", name: "Sludge AI", description: "AI meme and content creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎨", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "misgif", name: "misgif", description: "AI GIF and meme generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎬", category: "social-media", subcategory: "ai-meme-generator" }
    ],
    "ai-model-instagram": [
      { id: "ai-model-agency", name: "AI Model Agency", description: "AI Instagram model creator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "👤", category: "social-media", subcategory: "ai-model-instagram" },
      { id: "the-influencer-ai", name: "The Influencer AI", description: "AI influencer model creator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⭐", category: "social-media", subcategory: "ai-model-instagram" },
      { id: "genfluencer-ai", name: "GenFluencer.ai", description: "AI influencer generation tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🌟", category: "social-media", subcategory: "ai-model-instagram" }
    ],
    "ai-only-fans": [
      { id: "supercreator", name: "Supercreator", description: "AI content creator for platforms", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "social-media", subcategory: "ai-only-fans" },
      { id: "botly", name: "Botly", description: "AI chatbot for content creators", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "social-media", subcategory: "ai-only-fans" },
      { id: "onley-ai", name: "Onley AI", description: "AI assistant for content creators", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💎", category: "social-media", subcategory: "ai-only-fans" },
      { id: "ofhelper-pro", name: "Ofhelper Pro", description: "Professional AI content helper", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🚀", category: "social-media", subcategory: "ai-only-fans" },
      { id: "chathelper", name: "ChatHelper", description: "AI chat assistance tool", url: "", upvotes: 321, verified: true, rating: 4.1, icon: "💬", category: "social-media", subcategory: "ai-only-fans" }
    ],
    "ai-pickup-lines-generator": [
      { id: "ai-rizz-generator", name: "AI Rizz Generator", description: "AI pickup line generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💕", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "wingmanx", name: "WingmanX", description: "AI dating conversation helper", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🕊️", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "tinder-ice-breakers-ai", name: "Tinder Ice Breakers AI", description: "AI ice breaker generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🧊", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "pickmyline-online", name: "Pickmyline.online", description: "Online pickup line generator", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎯", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "tiramisu", name: "Tiramisu", description: "Sweet AI pickup line creator", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "🍰", category: "social-media", subcategory: "ai-pickup-lines-generator" }
    ],
    "ai-rizz-generator": [
      { id: "rizz-ai", name: "RIZZ AI", description: "Advanced AI rizz generator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🔥", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "resume-rizzler", name: "Resume Rizzler", description: "AI charisma enhancement tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📄", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "winggg", name: "Winggg", description: "AI wing person for dating", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🕊️", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "rizz-exclamation", name: "Rizz!", description: "Instant AI rizz generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "⚡", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "smoothrizz-com", name: "Smoothrizz.com", description: "Smooth AI conversation starter", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "😎", category: "social-media", subcategory: "ai-rizz-generator" }
    ],
    "ai-social-link": [
      { id: "super-prompts", name: "Super Prompts", description: "AI prompt and link generator", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🚀", category: "social-media", subcategory: "ai-social-link" },
      { id: "linkable", name: "Linkable", description: "AI social link optimization", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🔗", category: "social-media", subcategory: "ai-social-link" },
      { id: "arco", name: "Arco", description: "AI link management platform", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🌈", category: "social-media", subcategory: "ai-social-link" },
      { id: "blynkkr", name: "Blynkkr", description: "AI link shortening and analytics", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "⚡", category: "social-media", subcategory: "ai-social-link" },
      { id: "gleans", name: "Gleans", description: "AI social link insights", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "👁️", category: "social-media", subcategory: "ai-social-link" }
    ],
    "ai-social-media": [
      { id: "simplified-social", name: "Simplified", description: "AI social media management platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📱", category: "social-media", subcategory: "ai-social-media" },
      { id: "quso-ai", name: "quso.ai", description: "AI social media automation", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🤖", category: "social-media", subcategory: "ai-social-media" },
      { id: "contentstudio", name: "ContentStudio", description: "AI social media content creation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "social-media", subcategory: "ai-social-media" },
      { id: "planable-social", name: "Planable", description: "AI social media planning tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📅", category: "social-media", subcategory: "ai-social-media" },
      { id: "taplio", name: "Taplio", description: "AI LinkedIn content automation", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💼", category: "social-media", subcategory: "ai-social-media" }
    ],
    "ai-social-media-post-generator": [
      { id: "flick-post", name: "Flick", description: "AI social media post generator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📝", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "contentstudio-post", name: "ContentStudio", description: "AI post creation platform", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🎨", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "circleboom", name: "Circleboom", description: "AI social media post creator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💥", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "predis-ai", name: "Predis.ai", description: "AI predictive post generator", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🔮", category: "social-media", subcategory: "ai-social-media-post-generator" }
    ],
    "ai-tiktok": [
      { id: "crayo-ai", name: "Crayo AI", description: "AI TikTok content creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "social-media", subcategory: "ai-tiktok" },
      { id: "reelfarm", name: "ReelFarm", description: "AI TikTok reel generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🚜", category: "social-media", subcategory: "ai-tiktok" },
      { id: "gloda", name: "Gloda", description: "AI TikTok growth platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📈", category: "social-media", subcategory: "ai-tiktok" },
      { id: "topyappers", name: "topYappers", description: "AI TikTok content optimization", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🗣️", category: "social-media", subcategory: "ai-tiktok" },
      { id: "influensly", name: "Influensly", description: "AI TikTok influencer tools", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⭐", category: "social-media", subcategory: "ai-tiktok" }
    ],
    "ai-tweet-generator": [
      { id: "tweet-hunter", name: "Tweet Hunter", description: "AI tweet generation and analytics", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🏹", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "tweetstorm-ai", name: "TweetStorm.ai", description: "AI Twitter thread generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "⛈️", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "ai-tweet-generator-roast", name: "AI Tweet Generator | ROAST TOOLS", description: "AI tweet roasting tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🔥", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "tweet-ai", name: "Tweet AI", description: "Smart AI tweet creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🤖", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "snowball", name: "Snowball", description: "AI Twitter growth tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "❄️", category: "social-media", subcategory: "ai-tweet-generator" }
    ],
    "ai-twitter": [
      { id: "tweet-hunter-twitter", name: "Tweet Hunter", description: "AI Twitter growth platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🏹", category: "social-media", subcategory: "ai-twitter" },
      { id: "owlead", name: "Owlead", description: "AI Twitter follower growth", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🦉", category: "social-media", subcategory: "ai-twitter" },
      { id: "postwise", name: "Postwise", description: "AI Twitter content optimization", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🧠", category: "social-media", subcategory: "ai-twitter" },
      { id: "drippi-ai", name: "Drippi.ai", description: "AI Twitter DM automation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💧", category: "social-media", subcategory: "ai-twitter" },
      { id: "xreacher", name: "Xreacher", description: "AI Twitter reach amplifier", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📡", category: "social-media", subcategory: "ai-twitter" }
    ],
    "ai-username-generator": [
      { id: "usernamegenerator-io", name: "UsernameGenerator.IO", description: "AI username generation tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👤", category: "social-media", subcategory: "ai-username-generator" },
      { id: "atyou", name: "AtYou", description: "AI personalized username creator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "@", category: "social-media", subcategory: "ai-username-generator" },
      { id: "plano", name: "Plano", description: "AI username planning tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📋", category: "social-media", subcategory: "ai-username-generator" },
      { id: "voc-ai", name: "VOC AI", description: "AI voice-optimized usernames", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🗣️", category: "social-media", subcategory: "ai-username-generator" },
      { id: "shortimize", name: "Shortimize", description: "AI username optimization", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "⚡", category: "social-media", subcategory: "ai-username-generator" }
    ],
    "ai-youtube": [
      { id: "tubebuddy", name: "TubeBuddy", description: "AI YouTube optimization tool", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🛠️", category: "social-media", subcategory: "ai-youtube" },
      { id: "nexlev", name: "NexLev", description: "AI YouTube level-up platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🚀", category: "social-media", subcategory: "ai-youtube" },
      { id: "futurepedia", name: "Futurepedia", description: "AI YouTube knowledge base", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📚", category: "social-media", subcategory: "ai-youtube" },
      { id: "subscribr", name: "Subscribr", description: "AI YouTube subscriber growth", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👥", category: "social-media", subcategory: "ai-youtube" }
    ],
    "ai-youtube-summary": [
      { id: "glarity", name: "Glarity", description: "AI clarity and summary tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "✨", category: "social-media", subcategory: "ai-youtube-summary" },
      { id: "kome-ai", name: "Kome AI", description: "AI content summarization", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📝", category: "social-media", subcategory: "ai-youtube-summary" },
      { id: "eightify", name: "Eightify", description: "AI 8-minute video summaries", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "8️⃣", category: "social-media", subcategory: "ai-youtube-summary" }
    ],
    "ai-youtube-thumbnail-generator": [
      { id: "crazyface-ai", name: "CrazyFaceAI", description: "AI face-focused thumbnails", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🤪", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" },
      { id: "thumbnailcreator-com", name: "ThumbnailCreator.com", description: "AI thumbnail creation platform", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎯", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" }
    ],
    "bio-link": [
      { id: "beacons", name: "Beacons", description: "AI-powered bio link platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🚨", category: "social-media", subcategory: "bio-link" },
      { id: "glitch", name: "Glitch", description: "Creative bio link builder", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "⚡", category: "social-media", subcategory: "bio-link" },
      { id: "onepage", name: "Onepage", description: "Simple one-page bio links", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📄", category: "social-media", subcategory: "bio-link" },
      { id: "pillar", name: "Pillar", description: "Creator bio link platform", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🏛️", category: "social-media", subcategory: "bio-link" },
      { id: "postfity", name: "Postfity", description: "Social media bio link tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📱", category: "social-media", subcategory: "bio-link" }
    ],
    "youtube-tags-generator": [
      { id: "tagifynow-com", name: "TagifyNow.com", description: "AI tag generation platform", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "#️⃣", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "tagistaan", name: "Tagistaan", description: "AI tag discovery tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🔍", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "free-ai-tags-generator", name: "Free AI Tags Generator for YouTube", description: "Free YouTube tags AI tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🆓", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "vidchapter", name: "VidChapter", description: "AI video tags and chapters", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "📚", category: "social-media", subcategory: "youtube-tags-generator" }
    ]
  },

  "coding-development": {
    "ai-api": [

      { id: "openrouter", name: "OpenRouter", description: "Universal API for AI models", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🔌", category: "coding-development", subcategory: "ai-api" },
      { id: "replicate", name: "Replicate", description: "Run AI models with a cloud API", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "coding-development", subcategory: "ai-api" },
      { id: "openai", name: "OpenAI", description: "Advanced AI models and API platform", url: "", upvotes: 2341, verified: true, rating: 4.9, icon: "🤖", category: "coding-development", subcategory: "ai-api" },
      { id: "groq", name: "Groq", description: "Fast AI inference cloud platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "⚡", category: "coding-development", subcategory: "ai-api" },
      { id: "imagekit", name: "ImageKit.io", description: "Real-time image and video optimization API", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🖼️", category: "coding-development", subcategory: "ai-api" }
    ],
    "ai-app-builder": [
      { id: "salesforce-platform", name: "Salesforce Platform", description: "Low-code app development platform", url: "", upvotes: 1890, verified: true, rating: 4.7, icon: "☁️", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "replit", name: "Replit", description: "Collaborative online IDE and app builder", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "💻", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "vondy", name: "Vondy", description: "AI-powered app building platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🛠️", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "firebase-studio", name: "Firebase Studio", description: "Google's app development platform", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "🔥", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "dify-ai", name: "Dify.AI", description: "AI application development platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "coding-development", subcategory: "ai-app-builder" }
    ],
    "ai-browsers": [
      { id: "perplexity-comet", name: "Perplexity Comet", description: "AI-powered browsing experience", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🌐", category: "coding-development", subcategory: "ai-browsers" },
      { id: "dia-browser", name: "Dia Browser", description: "Smart browsing with AI assistance", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🔍", category: "coding-development", subcategory: "ai-browsers" },
      { id: "dia-browser-company", name: "Dia from The Browser Company", description: "Revolutionary AI-first browser", url: "", upvotes: 876, verified: true, rating: 4.7, icon: "💎", category: "coding-development", subcategory: "ai-browsers" },
      { id: "fellou", name: "Fellou", description: "AI-enhanced web browsing", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🌟", category: "coding-development", subcategory: "ai-browsers" },
      { id: "browserbase", name: "Browserbase", description: "Headless browser automation platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔧", category: "coding-development", subcategory: "ai-browsers" }
    ],
    "ai-code-assistant": [
      { id: "cursor", name: "Cursor - The AI Code Editor", description: "AI-first code editor with intelligent assistance", url: "", upvotes: 2567, verified: true, rating: 4.9, icon: "✏️", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "windsurf", name: "Windsurf", description: "AI-powered development environment", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🏄", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "kiro", name: "Kiro", description: "Intelligent code assistant and generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "trae", name: "Trae", description: "AI-driven code completion and assistance", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎯", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "warp", name: "Warp", description: "Modern terminal with AI assistance", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "⚡", category: "coding-development", subcategory: "ai-code-assistant" }
    ],
    "ai-code-generator": [
      { id: "builder-io", name: "Builder.io", description: "Visual development platform with AI", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🏗️", category: "coding-development", subcategory: "ai-code-generator" },
    ],
    "ai-code-review": [
      { id: "bitbucket", name: "Bitbucket", description: "Git repository management with AI code review", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🪣", category: "coding-development", subcategory: "ai-code-review" },
      { id: "coderabbit", name: "CodeRabbit", description: "AI-powered code review automation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🐰", category: "coding-development", subcategory: "ai-code-review" },
      { id: "refact-ai", name: "Refact.ai", description: "AI code refactoring and review tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔧", category: "coding-development", subcategory: "ai-code-review" },
      { id: "digma-ai", name: "Digma AI", description: "Continuous feedback for developers", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📊", category: "coding-development", subcategory: "ai-code-review" },
      { id: "qodo", name: "Qodo (formerly Codium)", description: "AI-powered code integrity platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🛡️", category: "coding-development", subcategory: "ai-code-review" }
    ],
    "ai-developer-tools": [
      { id: "google-ai-studio", name: "Google AI Studio", description: "AI development and experimentation platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎯", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "clickworker", name: "clickworker", description: "Crowdsourcing platform for developers", url: "", upvotes: 567, verified: true, rating: 4.3, icon: "👥", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "weights-biases", name: "Weights & Biases", description: "ML experiment tracking and visualization", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📈", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "fal-ai", name: "fal.ai", description: "Fast AI model serving platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "⚡", category: "coding-development", subcategory: "ai-developer-tools" }
    ],
    "ai-github": [
      { id: "oss-insight", name: "OSS Insight", description: "GitHub repository analytics and insights", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📊", category: "coding-development", subcategory: "ai-github" },
      { id: "packfiles", name: "Packfiles", description: "GitHub package and dependency management", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📦", category: "coding-development", subcategory: "ai-github" },
      { id: "gitlights", name: "Gitlights", description: "GitHub activity visualization tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💡", category: "coding-development", subcategory: "ai-github" },
      { id: "weekly-github-insights", name: "Weekly Github Insights", description: "Weekly GitHub activity summaries", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "📅", category: "coding-development", subcategory: "ai-github" }
    ],
    "ai-landing-page-builder": [
      { id: "leadpages", name: "Leadpages", description: "High-converting landing page creator", url: "", upvotes: 1345, verified: true, rating: 4.6, icon: "📄", category: "coding-development", subcategory: "ai-landing-page-builder" },
      { id: "plug-pay", name: "Plug&Pay", description: "Payment-focused landing page builder", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "💳", category: "coding-development", subcategory: "ai-landing-page-builder" },
      { id: "codedesign-ai", name: "CodeDesign.ai", description: "AI-driven web design and landing pages", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🎨", category: "coding-development", subcategory: "ai-landing-page-builder" }
    ],
    "ai-testing": [
      { id: "pte-apeuni", name: "PTE APEUni", description: "AI-powered PTE test preparation", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "📚", category: "coding-development", subcategory: "ai-testing" },
      { id: "alfapte", name: "AlfaPTE", description: "Advanced PTE practice platform", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎯", category: "coding-development", subcategory: "ai-testing" },
      { id: "lambdatest", name: "LambdaTest", description: "Cross-browser testing platform", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🧪", category: "coding-development", subcategory: "ai-testing" },
      { id: "katalon", name: "Katalon", description: "Comprehensive test automation platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚙️", category: "coding-development", subcategory: "ai-testing" },
      { id: "vwo", name: "VWO", description: "A/B testing and optimization platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📊", category: "coding-development", subcategory: "ai-testing" }
    ],
    "ai-web-scraping": [
      { id: "apify", name: "Apify", description: "Web scraping and automation platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "🕷️", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "922-s5-proxy", name: "922 S5 Proxy", description: "High-speed proxy service for web scraping", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🌐", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "browse-ai", name: "Browse AI", description: "No-code web scraping and monitoring", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔍", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "octoparse", name: "Octoparse", description: "Visual web scraping tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🐙", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "thordata", name: "Thordata", description: "Enterprise web data extraction", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🔨", category: "coding-development", subcategory: "ai-web-scraping" }
    ],
    "ai-website-builder": [
      { id: "lovable", name: "Lovable", description: "AI-powered web application builder", url: "", upvotes: 2345, verified: true, rating: 4.9, icon: "💖", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "framer", name: "Framer", description: "Design and ship websites with AI", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🖼️", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "tilda", name: "Tilda", description: "Visual website builder platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎨", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "prismic", name: "Prismic", description: "Headless CMS with website building", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "💎", category: "coding-development", subcategory: "ai-website-builder" }
    ],
    "log-management": [
      { id: "middleware", name: "Middleware", description: "Full-stack observability platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📊", category: "coding-development", subcategory: "log-management" },
      { id: "rerun", name: "Rerun", description: "Visualization engine for multimodal data", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔄", category: "coding-development", subcategory: "log-management" },
      { id: "instalog", name: "Instalog", description: "Real-time log analytics platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📝", category: "coding-development", subcategory: "log-management" },
      { id: "logzen", name: "Logzen", description: "Centralized logging and monitoring", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🧘", category: "coding-development", subcategory: "log-management" },
      { id: "hoop-dev", name: "Hoop.dev", description: "Developer-friendly log management", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🏀", category: "coding-development", subcategory: "log-management" }
    ],
    "no-code-low-code": [
      { id: "mailerlite", name: "MailerLite", description: "Email marketing automation platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📧", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "softr", name: "Softr", description: "No-code app builder from Airtable", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🛠️", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "n8n", name: "n8n", description: "Workflow automation for technical people", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🔗", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "powtoon", name: "Powtoon", description: "Video creation platform with no-code tools", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🎬", category: "coding-development", subcategory: "no-code-low-code" }
    ],
    "sql-query-builder": [
      { id: "sourcetable", name: "Sourcetable", description: "Spreadsheet that connects to all data sources", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🔗", category: "coding-development", subcategory: "sql-query-builder" },
      { id: "ai2sql", name: "AI2sql", description: "Convert natural language to SQL queries", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔤", category: "coding-development", subcategory: "sql-query-builder" },
      { id: "vanna-ai", name: "Vanna.AI", description: "AI SQL assistant for complex queries", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🤖", category: "coding-development", subcategory: "sql-query-builder" }
    ]
  },
  "daily-life": {
    "ai-baby-generator": [
      { id: "ai-baby-generator", name: "AI Baby Generator", description: "Generate realistic baby faces using AI", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "👶", category: "daily-life", subcategory: "ai-baby-generator" },
      { id: "baby-face-generator", name: "Baby Face Generator", description: "Create baby face predictions with AI", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🍼", category: "daily-life", subcategory: "ai-baby-generator" },
      { id: "baiby", name: "Baiby", description: "AI-powered baby prediction platform", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "👼", category: "daily-life", subcategory: "ai-baby-generator" },
      { id: "ourbabyai", name: "OurBabyAI", description: "Family baby prediction using AI", url: "", upvotes: 543, verified: true, rating: 4.1, icon: "👨‍👩‍👶", category: "daily-life", subcategory: "ai-baby-generator" }
    ],
    "ai-bible": [
      { id: "bible-chat", name: "Bible Chat", description: "AI-powered Bible study and discussion", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "📖", category: "daily-life", subcategory: "ai-bible" },
      { id: "biblepics", name: "BiblePics", description: "AI-generated Biblical imagery", url: "", upvotes: 1123, verified: true, rating: 4.5, icon: "🖼️", category: "daily-life", subcategory: "ai-bible" },
      { id: "bible-ai", name: "Bible Ai", description: "AI assistant for Biblical questions", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "✝️", category: "daily-life", subcategory: "ai-bible" },
      { id: "sermon-ai", name: "Sermon AI 3.0", description: "AI sermon preparation and writing", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "⛪", category: "daily-life", subcategory: "ai-bible" },
      { id: "ai-pastor", name: "AI Pastor", description: "Virtual pastor for spiritual guidance", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "👨‍💼", category: "daily-life", subcategory: "ai-bible" }
    ],
    "ai-cooking-assistant": [
      { id: "chefgpt", name: "ChefGPT", description: "AI cooking assistant and recipe generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "👨‍🍳", category: "daily-life", subcategory: "ai-cooking-assistant" },
      { id: "dishgen", name: "DishGen", description: "AI recipe generator from ingredients", url: "", upvotes: 1298, verified: true, rating: 4.6, icon: "🍽️", category: "daily-life", subcategory: "ai-cooking-assistant" },
      { id: "mycoach-ai", name: "MyCoach Ai", description: "Personal AI cooking coach", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🥗", category: "daily-life", subcategory: "ai-cooking-assistant" },
      { id: "flavorish", name: "Flavorish", description: "AI-powered meal planning and recipes", url: "", upvotes: 754, verified: true, rating: 4.4, icon: "🌶️", category: "daily-life", subcategory: "ai-cooking-assistant" },
      { id: "cookaifood", name: "cookAIfood", description: "AI culinary assistant for cooking", url: "", upvotes: 621, verified: true, rating: 4.3, icon: "🍳", category: "daily-life", subcategory: "ai-cooking-assistant" }
    ],
    "ai-dream-interpreter": [
      { id: "dream-interpreter-ai", name: "Dream Interpreter AI", description: "AI-powered dream analysis and interpretation", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "💭", category: "daily-life", subcategory: "ai-dream-interpreter" },
      { id: "dream-interpretation-ai", name: "Dream Interpretation AI", description: "Advanced AI dream meaning analysis", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🌙", category: "daily-life", subcategory: "ai-dream-interpreter" },
      { id: "dreamoracle", name: "DreamOracle", description: "AI oracle for dream insights", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🔮", category: "daily-life", subcategory: "ai-dream-interpreter" },
      { id: "dream-oracles", name: "Dream Oracles", description: "Multiple AI dream interpretation models", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "✨", category: "daily-life", subcategory: "ai-dream-interpreter" },
      { id: "tabirim", name: "Tabirim", description: "AI dream dictionary and interpretation", url: "", upvotes: 543, verified: true, rating: 4.1, icon: "📚", category: "daily-life", subcategory: "ai-dream-interpreter" }
    ],
    "ai-fitness": [
      { id: "fitnessai", name: "FitnessAI", description: "AI-powered workout optimization", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "💪", category: "daily-life", subcategory: "ai-fitness" },
      { id: "myvelofit", name: "MyVeloFit", description: "AI cycling and fitness coach", url: "", upvotes: 1123, verified: true, rating: 4.5, icon: "🚴‍♂️", category: "daily-life", subcategory: "ai-fitness" },
      { id: "planfit", name: "Planfit", description: "AI fitness planning and tracking", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "📋", category: "daily-life", subcategory: "ai-fitness" },
      { id: "neurofit-app", name: "NEUROFIT App", description: "AI-powered neural fitness training", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🧠", category: "daily-life", subcategory: "ai-fitness" },
      { id: "shred-app", name: "SHRED: Home & Gym Workouts App", description: "AI workout programs for home and gym", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🏋️‍♀️", category: "daily-life", subcategory: "ai-fitness" }
    ],
    "ai-gift-ideas": [
      { id: "snappy", name: "Snappy", description: "AI-powered gift selection service", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🎀", category: "daily-life", subcategory: "ai-gift-ideas" },
      { id: "gensmo", name: "Gensmo", description: "AI gift generator and ideas platform", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "💝", category: "daily-life", subcategory: "ai-gift-ideas" },
      { id: "giftruly", name: "Giftruly", description: "AI-curated personalized gift suggestions", url: "", upvotes: 543, verified: true, rating: 4.1, icon: "🎊", category: "daily-life", subcategory: "ai-gift-ideas" }
    ],
    "ai-god": [
      { id: "askjesus", name: "AskJesus", description: "AI spiritual guidance and questions", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "✝️", category: "daily-life", subcategory: "ai-god" },
      { id: "ai-godfathers", name: "AI Godfathers", description: "AI wisdom and spiritual advice", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "👴", category: "daily-life", subcategory: "ai-god" },
      { id: "day-with-god", name: "Day With God", description: "Daily AI spiritual companion", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🌅", category: "daily-life", subcategory: "ai-god" },
      { id: "ask-religion", name: "Ask Religion", description: "AI religious questions and answers", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🕊️", category: "daily-life", subcategory: "ai-god" },
      { id: "gitagpt", name: "GitaGPT", description: "AI-powered Bhagavad Gita guidance", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "🕉️", category: "daily-life", subcategory: "ai-god" }
    ],
    "ai-news": [
      { id: "ainvest", name: "AInvest", description: "AI-powered investment news and analysis", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "📈", category: "daily-life", subcategory: "ai-news" },
      { id: "stockstory", name: "StockStory", description: "AI stock market news and insights", url: "", upvotes: 1123, verified: true, rating: 4.5, icon: "📊", category: "daily-life", subcategory: "ai-news" },
      { id: "rundown-ai", name: "The Rundown AI", description: "Daily AI news digest and updates", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "📰", category: "daily-life", subcategory: "ai-news" },
      { id: "shift-ai", name: "SHIFT AI", description: "AI news aggregation and analysis", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🔄", category: "daily-life", subcategory: "ai-news" },
      { id: "webscrypto", name: "WebsCrypto", description: "AI cryptocurrency news platform", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "₿", category: "daily-life", subcategory: "ai-news" }
    ],
    "ai-newsletter": [
      { id: "prompt-advance", name: "Prompt Advance", description: "Advanced AI prompting newsletter", url: "", upvotes: 1298, verified: true, rating: 4.6, icon: "⚡", category: "daily-life", subcategory: "ai-newsletter" },
      { id: "why-try-ai", name: "Why Try AI", description: "AI exploration and education newsletter", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "❓", category: "daily-life", subcategory: "ai-newsletter" },
      { id: "just-ai-news", name: "Just AI News", description: "Curated AI news and developments", url: "", upvotes: 754, verified: true, rating: 4.4, icon: "📬", category: "daily-life", subcategory: "ai-newsletter" },
      { id: "artificial-ignorance", name: "Artificial Ignorance", description: "Critical AI news and commentary", url: "", upvotes: 621, verified: true, rating: 4.3, icon: "🤔", category: "daily-life", subcategory: "ai-newsletter" }
    ],
    "ai-outfit-generator": [
      { id: "cladwell", name: "Cladwell", description: "AI wardrobe and outfit planning", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "👔", category: "daily-life", subcategory: "ai-outfit-generator" },
      { id: "outfit-changer", name: "Outfit Changer", description: "AI outfit transformation tool", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "👕", category: "daily-life", subcategory: "ai-outfit-generator" },
      { id: "stylitics", name: "Stylitics", description: "AI styling and outfit recommendations", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "💄", category: "daily-life", subcategory: "ai-outfit-generator" },
      { id: "outfits-ai", name: "Outfits AI", description: "AI-powered outfit generation platform", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "👚", category: "daily-life", subcategory: "ai-outfit-generator" }
    ],
    "ai-parenting": [
      { id: "mobicip", name: "Mobicip", description: "AI-powered parental control platform", url: "", upvotes: 1087, verified: true, rating: 4.4, icon: "📱", category: "daily-life", subcategory: "ai-parenting" },
      { id: "bestinterest", name: "BestInterest", description: "AI parenting advice and guidance", url: "", upvotes: 876, verified: true, rating: 4.3, icon: "❤️", category: "daily-life", subcategory: "ai-parenting" },
      { id: "milo", name: "Milo", description: "AI family assistant and organizer", url: "", upvotes: 654, verified: true, rating: 4.2, icon: "👨‍👩‍👧‍👦", category: "daily-life", subcategory: "ai-parenting" },
      { id: "kidtime", name: "Kidtime", description: "AI children's schedule and activity planner", url: "", upvotes: 543, verified: true, rating: 4.1, icon: "⏰", category: "daily-life", subcategory: "ai-parenting" }
    ],
    "ai-pickup-lines": [
      { id: "hingegpt", name: "HingeGPT", description: "AI Hinge conversation starters", url: "", upvotes: 1234, verified: true, rating: 4.4, icon: "💕", category: "daily-life", subcategory: "ai-pickup-lines" },
      { id: "flirty-pickup-lines", name: "Flirty pickup lines", description: "AI flirtatious conversation generators", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "😘", category: "daily-life", subcategory: "ai-pickup-lines" },
      { id: "tinder-ice-breakers", name: "Tinder Ice Breakers AI", description: "AI Tinder conversation starters", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "🔥", category: "daily-life", subcategory: "ai-pickup-lines" },
      { id: "flirtlikepro", name: "FlirtLikePro", description: "Professional AI flirting assistant", url: "", upvotes: 621, verified: true, rating: 4.1, icon: "😉", category: "daily-life", subcategory: "ai-pickup-lines" }
    ],
    "ai-portrait-generator": [
      { id: "apob-ai", name: "APOB.AI", description: "Advanced AI portrait creation platform", url: "", upvotes: 1123, verified: true, rating: 4.5, icon: "🖼️", category: "daily-life", subcategory: "ai-portrait-generator" },
      { id: "pixel-dojo-ai", name: "PIXEL DOJO AI", description: "AI pixel art portrait generator", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🎯", category: "daily-life", subcategory: "ai-portrait-generator" },
      { id: "portraitart", name: "PortraitArt", description: "Artistic AI portrait creation", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🎭", category: "daily-life", subcategory: "ai-portrait-generator" },
      { id: "foxy-ai", name: "Foxy AI", description: "AI portrait and avatar generator", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🦊", category: "daily-life", subcategory: "ai-portrait-generator" }
    ],
    "ai-recipe": [
      { id: "chefgpt-recipe", name: "ChefGPT", description: "AI recipe generation and cooking assistant", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "👨‍🍳", category: "daily-life", subcategory: "ai-recipe" },
      { id: "dishgen-recipe", name: "DishGen", description: "AI recipe creator from available ingredients", url: "", upvotes: 1298, verified: true, rating: 4.6, icon: "🍽️", category: "daily-life", subcategory: "ai-recipe" },
      { id: "bargpt", name: "BarGPT", description: "AI cocktail and drink recipe generator", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🍹", category: "daily-life", subcategory: "ai-recipe" },
      { id: "cookaifood-recipe", name: "cookAIfood", description: "AI culinary recipe assistant", url: "", upvotes: 754, verified: true, rating: 4.4, icon: "🍳", category: "daily-life", subcategory: "ai-recipe" },
      { id: "mealpractice", name: "MealPractice", description: "AI meal planning and recipe practice", url: "", upvotes: 621, verified: true, rating: 4.3, icon: "🥘", category: "daily-life", subcategory: "ai-recipe" }
    ],
    "ai-religion": [
      { id: "magisterium-ai", name: "Magisterium AI", description: "AI Catholic teaching and guidance", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "⛪", category: "daily-life", subcategory: "ai-religion" },
      { id: "islam-ai", name: "Islam & AI", description: "AI Islamic knowledge and guidance", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "☪️", category: "daily-life", subcategory: "ai-religion" },
      { id: "gloo", name: "Gloo", description: "AI interfaith dialogue platform", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🤝", category: "daily-life", subcategory: "ai-religion" },
      { id: "pastors-ai", name: "Pastors.ai", description: "AI pastoral care and guidance", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "👨‍💼", category: "daily-life", subcategory: "ai-religion" },
      { id: "gitagpt-religion", name: "GitaGPT", description: "AI Bhagavad Gita wisdom and guidance", url: "", upvotes: 543, verified: true, rating: 4.1, icon: "🕉️", category: "daily-life", subcategory: "ai-religion" }
    ],
    "ai-selfie-generator": [
      { id: "facetune", name: "Facetune", description: "AI photo editing and selfie enhancement", url: "", upvotes: 1678, verified: true, rating: 4.7, icon: "📸", category: "daily-life", subcategory: "ai-selfie-generator" },
      { id: "crazyfaceai", name: "CrazyFaceAI", description: "AI crazy face and selfie generator", url: "", upvotes: 1345, verified: true, rating: 4.6, icon: "🤪", category: "daily-life", subcategory: "ai-selfie-generator" },
      { id: "barbie-selfie", name: "Barbie Selfie Generator", description: "AI Barbie-style selfie transformation", url: "", upvotes: 1087, verified: true, rating: 4.5, icon: "💗", category: "daily-life", subcategory: "ai-selfie-generator" },
      { id: "photify-ai", name: "Photify AI", description: "AI photo generation and enhancement", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "✨", category: "daily-life", subcategory: "ai-selfie-generator" },
      { id: "aiselfies", name: "AISelfi.es", description: "AI selfie generation platform", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🤳", category: "daily-life", subcategory: "ai-selfie-generator" }
    ],
    "ai-shopping-assistant": [
      { id: "dealdrop", name: "DealDrop", description: "AI deal finder and shopping assistant", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "💰", category: "daily-life", subcategory: "ai-shopping-assistant" },
      { id: "vetted", name: "Vetted", description: "AI product research and recommendations", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "✅", category: "daily-life", subcategory: "ai-shopping-assistant" },
      { id: "tictuk", name: "Tictuk", description: "AI shopping comparison platform", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "🔍", category: "daily-life", subcategory: "ai-shopping-assistant" }
    ],
    "ai-sports": [
      { id: "fight-iq", name: "Fight IQ", description: "AI combat sports analysis and training", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🥊", category: "daily-life", subcategory: "ai-sports" },
      { id: "pixellot", name: "Pixellot", description: "AI sports video analysis platform", url: "", upvotes: 1087, verified: true, rating: 4.4, icon: "📹", category: "daily-life", subcategory: "ai-sports" },
      { id: "myvelofit-sports", name: "MyVeloFit", description: "AI cycling performance analysis", url: "", upvotes: 876, verified: true, rating: 4.3, icon: "🚴‍♂️", category: "daily-life", subcategory: "ai-sports" },
      { id: "be-your-best", name: "Be Your Best", description: "AI sports performance optimization", url: "", upvotes: 543, verified: true, rating: 4.1, icon: "🏆", category: "daily-life", subcategory: "ai-sports" }
    ],
    "ai-travel": [
      { id: "wanderboat", name: "Wanderboat", description: "AI travel planning and booking platform", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "⛵", category: "daily-life", subcategory: "ai-travel" },
      { id: "mindtrip", name: "Mindtrip", description: "AI personalized travel experiences", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🧠", category: "daily-life", subcategory: "ai-travel" },
      { id: "layla-ai", name: "Layla AI", description: "AI travel assistant and planner", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🌸", category: "daily-life", subcategory: "ai-travel" },
      { id: "trip-planner-ai", name: "Trip Planner AI", description: "AI-powered trip planning tool", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🗺️", category: "daily-life", subcategory: "ai-travel" },
      { id: "imean", name: "iMean", description: "AI travel recommendation engine", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "✈️", category: "daily-life", subcategory: "ai-travel" }
    ],
    "ai-trip-planner": [
      { id: "thatch", name: "Thatch", description: "AI collaborative trip planning platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🏠", category: "daily-life", subcategory: "ai-trip-planner" },
      { id: "wonderplan", name: "Wonderplan", description: "AI comprehensive trip planning tool", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "🌟", category: "daily-life", subcategory: "ai-trip-planner" },
      { id: "hadana-ai", name: "Hadana AI", description: "AI local travel guide and planner", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🏛️", category: "daily-life", subcategory: "ai-trip-planner" },
      { id: "aicotravel", name: "Aicotravel", description: "AI travel itinerary generator", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🎒", category: "daily-life", subcategory: "ai-trip-planner" },
      { id: "tripper-guide", name: "Tripper Guide", description: "AI trip guide and planning assistant", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "🧳", category: "daily-life", subcategory: "ai-trip-planner" }
    ]
  },
  "legal-finance": {
    "ai-accounting": [
      { id: "syft-analytics", name: "Syft Analytics", description: "AI financial analytics and reporting platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📈", category: "legal-finance", subcategory: "ai-accounting" },
      { id: "insightsoftware", name: "insightsoftware", description: "AI business intelligence and financial reporting", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "💡", category: "legal-finance", subcategory: "ai-accounting" },
      { id: "accountable", name: "Accountable", description: "AI accounting automation for freelancers", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🧾", category: "legal-finance", subcategory: "ai-accounting" },
      { id: "zeni", name: "Zeni", description: "AI-powered bookkeeping and tax services", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "💰", category: "legal-finance", subcategory: "ai-accounting" }
    ],
    "ai-contract-generator": [
      { id: "law-insider", name: "Law Insider", description: "AI legal contract generation and analysis", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📋", category: "legal-finance", subcategory: "ai-contract-generator" },
      { id: "spellbook", name: "Spellbook", description: "AI contract drafting and review assistant", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📖", category: "legal-finance", subcategory: "ai-contract-generator" },
      { id: "luminance", name: "Luminance", description: "AI legal document analysis and generation", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💎", category: "legal-finance", subcategory: "ai-contract-generator" },
      { id: "goheather", name: "goHeather", description: "AI contract creation platform", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🌸", category: "legal-finance", subcategory: "ai-contract-generator" },
      { id: "samsearch", name: "SamSearch", description: "AI contract search and generation tool", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🔍", category: "legal-finance", subcategory: "ai-contract-generator" }
    ],
    "ai-contract-management": [
      { id: "filevine", name: "Filevine", description: "AI legal case and contract management", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🗂️", category: "legal-finance", subcategory: "ai-contract-management" },
      { id: "linksquares", name: "LinkSquares", description: "AI contract lifecycle management", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🔗", category: "legal-finance", subcategory: "ai-contract-management" },
      { id: "robin-ai-mgmt", name: "Robin AI", description: "AI contract management and negotiation", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🤖", category: "legal-finance", subcategory: "ai-contract-management" },
      { id: "agree-com", name: "Agree.com", description: "AI contract agreement platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🤝", category: "legal-finance", subcategory: "ai-contract-management" }
    ],
    "ai-contract-review": [
      { id: "gva-nda-check", name: "GVA NDA Check", description: "AI NDA and contract review tool", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🔒", category: "legal-finance", subcategory: "ai-contract-review" },
      { id: "law-insider-review", name: "Law Insider", description: "AI contract review and analysis platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📋", category: "legal-finance", subcategory: "ai-contract-review" },
      { id: "casetext", name: "Casetext", description: "AI legal research and contract review", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "📚", category: "legal-finance", subcategory: "ai-contract-review" },
      { id: "robin-ai-review", name: "Robin AI", description: "AI-powered contract review assistant", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🤖", category: "legal-finance", subcategory: "ai-contract-review" },
      { id: "legalforce", name: "LegalForce", description: "AI contract review and compliance", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "⚖️", category: "legal-finance", subcategory: "ai-contract-review" }
    ],
    "ai-for-finance": [
      { id: "xtransfer", name: "XTransfer", description: "AI international payment and finance platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "💸", category: "legal-finance", subcategory: "ai-for-finance" },
      { id: "trueaccord", name: "TrueAccord", description: "AI debt collection and financial recovery", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🎯", category: "legal-finance", subcategory: "ai-for-finance" },
      { id: "macromicro", name: "MacroMicro", description: "AI financial market analysis platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📊", category: "legal-finance", subcategory: "ai-for-finance" },
      { id: "jump-ai-advisors", name: "Jump | AI for Financial Advisors", description: "AI tools for financial advisory services", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🦘", category: "legal-finance", subcategory: "ai-for-finance" }
    ],
    "ai-investing": [
      { id: "macromicro-investing", name: "MacroMicro", description: "AI macro investment research platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📊", category: "legal-finance", subcategory: "ai-investing" },
      { id: "incite-ai", name: "Incite AI", description: "AI-powered investment insights", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💡", category: "legal-finance", subcategory: "ai-investing" },
      { id: "intellectia-ai", name: "Intellectia AI", description: "AI investment research platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🧠", category: "legal-finance", subcategory: "ai-investing" }
    ],
    "ai-legal-assistant": [
      { id: "law-insider-assistant", name: "Law Insider", description: "AI legal research and assistance platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "📋", category: "legal-finance", subcategory: "ai-legal-assistant" },
      { id: "thomson-reuters", name: "Thomson Reuters", description: "AI legal research and analytics", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🏛️", category: "legal-finance", subcategory: "ai-legal-assistant" },
      { id: "casetext-assistant", name: "Casetext", description: "AI legal research assistant", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📚", category: "legal-finance", subcategory: "ai-legal-assistant" },
      { id: "harvey", name: "Harvey", description: "AI legal assistant for law firms", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "👨‍💼", category: "legal-finance", subcategory: "ai-legal-assistant" },
      { id: "donotpay", name: "DoNotPay", description: "AI legal assistant for consumers", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🚫", category: "legal-finance", subcategory: "ai-legal-assistant" }
    ],
    "ai-real-estate": [
      { id: "dealmachine", name: "DealMachine", description: "AI real estate deal finder and analyzer", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🏠", category: "legal-finance", subcategory: "ai-real-estate" },
      { id: "hotel-in-cloud", name: "Hotel in Cloud", description: "AI hotel and hospitality management", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🏨", category: "legal-finance", subcategory: "ai-real-estate" },
      { id: "collov-staging", name: "Collov Virtual Staging AI", description: "AI virtual staging for real estate", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🎨", category: "legal-finance", subcategory: "ai-real-estate" },
      { id: "kreo-software", name: "Kreo Software", description: "AI construction and real estate management", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🏗️", category: "legal-finance", subcategory: "ai-real-estate" },
      { id: "xleads", name: "XLeads", description: "AI real estate lead generation", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "🎯", category: "legal-finance", subcategory: "ai-real-estate" }
    ],
    "ai-stock-trading": [
      { id: "luxalgo", name: "LuxAlgo", description: "AI trading indicators and analysis", url: "", upvotes: 1678, verified: true, rating: 4.8, icon: "💎", category: "legal-finance", subcategory: "ai-stock-trading" },
      { id: "tradytics", name: "Tradytics", description: "AI options flow and trading analytics", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📊", category: "legal-finance", subcategory: "ai-stock-trading" },
      { id: "incite-ai-trading", name: "Incite AI", description: "AI trading insights and analytics", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💡", category: "legal-finance", subcategory: "ai-stock-trading" },
      { id: "tradesviz", name: "TradesViz", description: "AI trading journal and analytics", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "📈", category: "legal-finance", subcategory: "ai-stock-trading" },
      { id: "cheddar-flow", name: "Cheddar Flow", description: "AI options flow and trading platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🧀", category: "legal-finance", subcategory: "ai-stock-trading" }
    ],
    "ai-tax-assistant": [
      { id: "taxtim-sa", name: "TaxTim SA", description: "AI tax preparation assistant", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📋", category: "legal-finance", subcategory: "ai-tax-assistant" },
      { id: "accountable-tax", name: "Accountable", description: "AI tax management for freelancers", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🧾", category: "legal-finance", subcategory: "ai-tax-assistant" },
      { id: "taxgpt", name: "TaxGPT", description: "AI tax advice and preparation", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🤖", category: "legal-finance", subcategory: "ai-tax-assistant" },
      { id: "portfoliopilot", name: "PortfolioPilot", description: "AI portfolio and tax optimization", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "✈️", category: "legal-finance", subcategory: "ai-tax-assistant" },
      { id: "quicko-pro", name: "Quicko Pro", description: "AI tax planning and filing assistant", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "⚡", category: "legal-finance", subcategory: "ai-tax-assistant" }
    ],
    "ai-trading-bot": [
      { id: "pionex", name: "Pionex", description: "AI crypto trading bot platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🤖", category: "legal-finance", subcategory: "ai-trading-bot" },
      { id: "composer", name: "Composer", description: "AI-powered automated trading platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🎼", category: "legal-finance", subcategory: "ai-trading-bot" },
      { id: "octobot-cloud", name: "OctoBot Cloud", description: "AI crypto trading bot cloud platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🐙", category: "legal-finance", subcategory: "ai-trading-bot" },
      { id: "gunbot", name: "Gunbot", description: "AI cryptocurrency trading bot", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🔫", category: "legal-finance", subcategory: "ai-trading-bot" }
    ]
  },
  "business-management": {
    "ai-crm": [

      { id: "hubspot", name: "HubSpot", description: "AI-powered CRM and marketing platform", url: "", upvotes: 2145, verified: true, rating: 4.8, icon: "🚀", category: "business-management", subcategory: "ai-crm" },
      { id: "tabsquare", name: "TabSquare", description: "AI restaurant CRM and management platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🍽️", category: "business-management", subcategory: "ai-crm" },
      { id: "attio", name: "Attio", description: "AI-powered modern CRM platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "⚡", category: "business-management", subcategory: "ai-crm" },
      { id: "recruit-crm", name: "Recruit CRM", description: "AI recruiting and talent CRM platform", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "👥", category: "business-management", subcategory: "ai-crm" }
    ],
    "ai-call-center": [
      { id: "openphone", name: "OpenPhone", description: "AI business phone and call center solution", url: "", upvotes: 1678, verified: true, rating: 4.7, icon: "📞", category: "business-management", subcategory: "ai-call-center" },
      { id: "callhippo", name: "CallHippo", description: "AI-powered virtual phone system", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🦛", category: "business-management", subcategory: "ai-call-center" },
      { id: "convoso", name: "Convoso", description: "AI call center and lead management platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎯", category: "business-management", subcategory: "ai-call-center" },
      { id: "justcall", name: "JustCall", description: "AI cloud phone system for businesses", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "☁️", category: "business-management", subcategory: "ai-call-center" },
      { id: "bland-ai", name: "Bland AI", description: "AI voice agent for call centers", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🤖", category: "business-management", subcategory: "ai-call-center" }
    ],
    "ai-customer-service": [
      { id: "chaport", name: "Chaport", description: "AI-powered live chat and customer service", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "💬", category: "business-management", subcategory: "ai-customer-service" },
      { id: "dialpad", name: "Dialpad", description: "AI business communications platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📱", category: "business-management", subcategory: "ai-customer-service" },
      { id: "openphone-cs", name: "OpenPhone", description: "AI customer service phone solution", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📞", category: "business-management", subcategory: "ai-customer-service" },
      { id: "tidio", name: "Tidio", description: "AI chatbot and customer service platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🎭", category: "business-management", subcategory: "ai-customer-service" }
    ],
    "ai-erp": [
      { id: "memento-database", name: "Memento Database", description: "AI-powered business database and ERP", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🗃️", category: "business-management", subcategory: "ai-erp" },
      { id: "erp-ai", name: "ERP.AI", description: "AI-enhanced enterprise resource planning", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🏢", category: "business-management", subcategory: "ai-erp" },
      { id: "iota-uz", name: "IOTA.UZ", description: "AI ERP system for modern businesses", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "⚡", category: "business-management", subcategory: "ai-erp" },
      { id: "tangle", name: "Tangle", description: "AI supply chain and ERP platform", url: "", upvotes: 754, verified: true, rating: 4.3, icon: "🕸️", category: "business-management", subcategory: "ai-erp" },
      { id: "stateset", name: "StateSet", description: "AI commerce and ERP automation", url: "", upvotes: 621, verified: true, rating: 4.2, icon: "⚙️", category: "business-management", subcategory: "ai-erp" }
    ],
    "ai-interview-assistant": [
      { id: "parakeetai", name: "ParakeetAI", description: "AI interview transcription and analysis", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🦜", category: "business-management", subcategory: "ai-interview-assistant" },
      { id: "listen-labs", name: "Listen Labs", description: "AI conversation intelligence for interviews", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "👂", category: "business-management", subcategory: "ai-interview-assistant" },
      { id: "talent-titan", name: "Talent Titan", description: "AI talent assessment and interview platform", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "⚡", category: "business-management", subcategory: "ai-interview-assistant" },
      { id: "wonsultingai", name: "WonsultingAI", description: "AI career coaching and interview prep", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🏆", category: "business-management", subcategory: "ai-interview-assistant" }
    ],
    "ai-product-manager": [
      { id: "productboard", name: "Productboard", description: "AI product management and roadmap platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "📋", category: "business-management", subcategory: "ai-product-manager" },
      { id: "bagel-ai", name: "Bagel AI", description: "AI product management assistant", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🥯", category: "business-management", subcategory: "ai-product-manager" },
      { id: "chatprd", name: "ChatPRD", description: "AI product requirements document generator", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📝", category: "business-management", subcategory: "ai-product-manager" },
      { id: "userlens-wudpecker", name: "Userlens by Wudpecker", description: "AI user research and product insights", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🔍", category: "business-management", subcategory: "ai-product-manager" },
      { id: "zeda-io", name: "Zeda.io", description: "AI product discovery and management platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🎯", category: "business-management", subcategory: "ai-product-manager" }
    ],
    "ai-project-management": [
      { id: "miro", name: "Miro", description: "AI-powered collaborative whiteboard and project management", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🎨", category: "business-management", subcategory: "ai-project-management" },
      { id: "dooray", name: "Dooray!", description: "AI project management and collaboration platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🚪", category: "business-management", subcategory: "ai-project-management" },
      { id: "whimsical", name: "Whimsical", description: "AI visual collaboration and project planning", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "✨", category: "business-management", subcategory: "ai-project-management" },
      { id: "smartsuite", name: "SmartSuite", description: "AI work management and project platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🎯", category: "business-management", subcategory: "ai-project-management" }
    ],
    "ai-recruiting": [
      { id: "recruit-crm-recruiting", name: "Recruit CRM", description: "AI recruiting and applicant tracking system", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "👥", category: "business-management", subcategory: "ai-recruiting" },
      { id: "zara-recruiting", name: "Zara", description: "AI recruiting and talent acquisition", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "👗", category: "business-management", subcategory: "ai-recruiting" },
      { id: "codesignal", name: "CodeSignal", description: "AI technical recruiting and assessment", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "💻", category: "business-management", subcategory: "ai-recruiting" },
      { id: "talent-titan-recruiting", name: "Talent Titan", description: "AI recruiting and talent management", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "⚡", category: "business-management", subcategory: "ai-recruiting" }
    ],
    "ai-roadmap": [
      { id: "bagel-ai-roadmap", name: "Bagel AI", description: "AI product roadmap and planning tool", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🥯", category: "business-management", subcategory: "ai-roadmap" },
      { id: "zeda-io-roadmap", name: "Zeda.io", description: "AI product roadmap management platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🎯", category: "business-management", subcategory: "ai-roadmap" },
      { id: "productroadmap-ai", name: "ProductRoadmap.ai", description: "AI-powered product roadmap generator", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🗺️", category: "business-management", subcategory: "ai-roadmap" },
      { id: "skillai", name: "SkillAI", description: "AI skill development roadmap platform", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🧠", category: "business-management", subcategory: "ai-roadmap" },
      { id: "plani-ai", name: "Plani.ai", description: "AI project and roadmap planning tool", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "📋", category: "business-management", subcategory: "ai-roadmap" }
    ],
    "ai-workflow": [
      { id: "zapier", name: "Zapier", description: "AI automation and workflow integration", url: "", upvotes: 1678, verified: true, rating: 4.6, icon: "🔗", category: "business-management", subcategory: "ai-workflow" },
      { id: "syncsketch", name: "SyncSketch", description: "AI creative workflow and collaboration", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎨", category: "business-management", subcategory: "ai-workflow" },
      { id: "copy-ai", name: "Copy.ai", description: "AI content and marketing workflow platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "✍️", category: "business-management", subcategory: "ai-workflow" },
      { id: "dify-ai", name: "Dify.AI", description: "AI application development and workflow platform", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🛠️", category: "business-management", subcategory: "ai-workflow" }
    ],
    "ai-business-ideas-generator": [
      { id: "stratup-ai", name: "Stratup.ai", description: "AI-powered startup ideas and business planning", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🚀", category: "business-management", subcategory: "ai-business-ideas-generator" },
      { id: "solo-ideas", name: "Solo", description: "AI business ideas for solo entrepreneurs", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "👤", category: "business-management", subcategory: "ai-business-ideas-generator" },
      { id: "buildpad", name: "Buildpad", description: "AI business idea validation and development", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🏗️", category: "business-management", subcategory: "ai-business-ideas-generator" },
      { id: "validator-ai", name: "ValidatorAI", description: "AI business idea validation platform", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "✅", category: "business-management", subcategory: "ai-business-ideas-generator" }
    ],
    "ai-business-name-generator": [
      { id: "namesnack", name: "NameSnack", description: "AI business name and domain generator", url: "", upvotes: 1876, verified: true, rating: 4.7, icon: "🍿", category: "business-management", subcategory: "ai-business-name-generator" },
      { id: "brandbolt", name: "BrandBolt", description: "AI brand name generator and trademark checker", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "⚡", category: "business-management", subcategory: "ai-business-name-generator" },
      { id: "brandix-ai", name: "Brandix AI", description: "AI business name and brand identity generator", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎨", category: "business-management", subcategory: "ai-business-name-generator" },
      { id: "findname", name: "FindName", description: "AI business name finder and availability checker", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔍", category: "business-management", subcategory: "ai-business-name-generator" }
    ],
    "ai-company-name-generator": [
      { id: "naming-magic", name: "Naming Magic", description: "AI company name generator with domain availability", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🪄", category: "business-management", subcategory: "ai-company-name-generator" },
      { id: "namegener", name: "Namegener", description: "AI company and product name generator", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "⚙️", category: "business-management", subcategory: "ai-company-name-generator" },
      { id: "namehassle", name: "NameHassle", description: "AI company name generator without the hassle", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🎯", category: "business-management", subcategory: "ai-company-name-generator" },
      { id: "namefinder-ai", name: "Namefinder.ai", description: "AI company name finder and generator", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "🔎", category: "business-management", subcategory: "ai-company-name-generator" }
    ],
    "ai-consulting": [
      { id: "heroz", name: "HEROZ", description: "AI consulting and business intelligence platform", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "🦸", category: "business-management", subcategory: "ai-consulting" },
      { id: "leanware", name: "Leanware", description: "AI lean consulting and process optimization", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "⚖️", category: "business-management", subcategory: "ai-consulting" },
      { id: "visage-technologies", name: "Visage Technologies", description: "AI computer vision consulting solutions", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "👁️", category: "business-management", subcategory: "ai-consulting" },
      { id: "ai-superior", name: "AI Superior", description: "AI consulting and implementation services", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "⭐", category: "business-management", subcategory: "ai-consulting" }
    ],
    "ai-crypto": [
      { id: "webscrypto", name: "WebsCrypto", description: "AI cryptocurrency trading and analysis", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "₿", category: "business-management", subcategory: "ai-crypto" },
      { id: "chaingpt", name: "ChainGPT", description: "AI blockchain and crypto assistant", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "🔗", category: "business-management", subcategory: "ai-crypto" }
    ],
    "ai-domain-name-generator": [
      { id: "namesnack-domain", name: "NameSnack", description: "AI domain name generator and checker", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "🌐", category: "business-management", subcategory: "ai-domain-name-generator" },
      { id: "namehassle-domain", name: "NameHassle", description: "AI domain name generator with availability", url: "", upvotes: 1543, verified: true, rating: 4.5, icon: "🎯", category: "business-management", subcategory: "ai-domain-name-generator" },
      { id: "namy-ai", name: "Namy.ai", description: "AI domain name generator and branding", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🤖", category: "business-management", subcategory: "ai-domain-name-generator" },
      { id: "onlycoms", name: "OnlyComs", description: "AI .com domain name generator", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🏷️", category: "business-management", subcategory: "ai-domain-name-generator" },
      { id: "brandsnap-ai", name: "BrandSnap.ai", description: "AI domain name and brand generator", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "📸", category: "business-management", subcategory: "ai-domain-name-generator" }
    ],
    "blockchain": [
      { id: "deepnewz", name: "DeepNewz", description: "AI blockchain news and analysis platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📰", category: "business-management", subcategory: "blockchain" },
      { id: "talent-protocol", name: "Talent Protocol", description: "AI talent marketplace on blockchain", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🌟", category: "business-management", subcategory: "blockchain" },
      { id: "futureverse", name: "Futureverse", description: "AI blockchain and metaverse platform", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🌌", category: "business-management", subcategory: "blockchain" },
      { id: "cortex-labs", name: "Cortex Labs", description: "AI blockchain infrastructure platform", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "🧠", category: "business-management", subcategory: "blockchain" },
      { id: "namefi", name: "Namefi", description: "AI blockchain domain and identity platform", url: "", upvotes: 987, verified: true, rating: 4.1, icon: "🆔", category: "business-management", subcategory: "blockchain" }
    ],
    "nfts": [
      { id: "recap-nft", name: "Recap", description: "AI NFT creation and marketplace platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎨", category: "business-management", subcategory: "nfts" },
      { id: "skyhitz", name: "Skyhitz", description: "AI music NFT platform and marketplace", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎵", category: "business-management", subcategory: "nfts" },
      { id: "worlds-beyond", name: "Worlds Beyond", description: "AI NFT gaming and metaverse platform", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🌍", category: "business-management", subcategory: "nfts" },
      { id: "defipe", name: "DefiPe", description: "AI DeFi and NFT analytics platform", url: "", upvotes: 1156, verified: true, rating: 4.1, icon: "📊", category: "business-management", subcategory: "nfts" },
      { id: "nft-advisor", name: "NFT Advisor", description: "AI NFT investment and advisory platform", url: "", upvotes: 987, verified: true, rating: 4.0, icon: "💼", category: "business-management", subcategory: "nfts" }
    ],
    "web3": [
      { id: "spice-ai", name: "Spice AI", description: "AI Web3 data and analytics platform", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🌶️", category: "business-management", subcategory: "web3" },
      { id: "likn", name: "LIKN", description: "AI Web3 social networking platform", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🔗", category: "business-management", subcategory: "web3" },
      { id: "rido-protocol", name: "Rido Protocol", description: "AI Web3 protocol and infrastructure", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "🚗", category: "business-management", subcategory: "web3" },
      { id: "swaap", name: "Swaap", description: "AI Web3 DeFi trading platform", url: "", upvotes: 987, verified: true, rating: 4.1, icon: "🔄", category: "business-management", subcategory: "web3" },
      { id: "puti", name: "PUTI", description: "AI Web3 development and deployment platform", url: "", upvotes: 754, verified: true, rating: 4.0, icon: "🛠️", category: "business-management", subcategory: "web3" }
    ]
  },
  "marketing-advertising": {
    "ai-ad-creative": [

      { id: "adcreative-ai", name: "AdCreative.ai", description: "AI-powered ad creative generation platform", url: "", upvotes: 2234, verified: true, rating: 4.8, icon: "🎨", category: "marketing-advertising", subcategory: "ai-ad-creative" },
      { id: "predis-ai-creative", name: "Predis.ai", description: "AI social media creative generator", url: "", upvotes: 1876, verified: true, rating: 4.7, icon: "📱", category: "marketing-advertising", subcategory: "ai-ad-creative" },
      { id: "gethookd", name: "Gethookd", description: "AI ad creative and copywriting tool", url: "", upvotes: 1543, verified: true, rating: 4.6, icon: "🪝", category: "marketing-advertising", subcategory: "ai-ad-creative" },
      { id: "icon-ai", name: "Icon AI", description: "AI icon and creative element generator", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "💎", category: "marketing-advertising", subcategory: "ai-ad-creative" },
      { id: "neurons-ai", name: "Neurons AI", description: "AI creative optimization and testing", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🧠", category: "marketing-advertising", subcategory: "ai-ad-creative" }
    ],
    "ai-ad-generator": [
      { id: "creatify", name: "Creatify", description: "AI video ad generator for marketing", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "🎬", category: "marketing-advertising", subcategory: "ai-ad-generator" },
      { id: "predis-ai-generator", name: "Predis.ai", description: "AI ad generator for social media", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "📱", category: "marketing-advertising", subcategory: "ai-ad-generator" },
      { id: "adcreative-ai-generator", name: "AdCreative.ai", description: "AI ad creative generator", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🎨", category: "marketing-advertising", subcategory: "ai-ad-generator" },
      { id: "captions", name: "Captions", description: "AI video ad generator with captions", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "📝", category: "marketing-advertising", subcategory: "ai-ad-generator" }
    ],
    "ai-advertising": [
      { id: "aisensy", name: "AiSensy", description: "AI WhatsApp marketing and advertising platform", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "💬", category: "marketing-advertising", subcategory: "ai-advertising" },
      { id: "ai-insights-coupler", name: "AI Insights by Coupler.io", description: "AI advertising insights and analytics", url: "", upvotes: 1543, verified: true, rating: 4.5, icon: "📊", category: "marketing-advertising", subcategory: "ai-advertising" },
      { id: "scale-insights", name: "Scale Insights™", description: "AI advertising optimization platform", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "📈", category: "marketing-advertising", subcategory: "ai-advertising" },
      { id: "winning-hunter", name: "Winning Hunter", description: "AI ad spy and competitor analysis tool", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🎯", category: "marketing-advertising", subcategory: "ai-advertising" },
      { id: "lexi-ai", name: "Lexi AI", description: "AI advertising assistant and optimizer", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "🤖", category: "marketing-advertising", subcategory: "ai-advertising" }
    ],
    "ai-affiliate-marketing": [
      { id: "joylink", name: "JoyLink", description: "AI affiliate marketing platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🔗", category: "marketing-advertising", subcategory: "ai-affiliate-marketing" },
      { id: "lasso", name: "Lasso", description: "AI affiliate link management tool", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🪢", category: "marketing-advertising", subcategory: "ai-affiliate-marketing" },
      { id: "affpilot", name: "Affpilot", description: "AI affiliate marketing automation", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "✈️", category: "marketing-advertising", subcategory: "ai-affiliate-marketing" },
      { id: "reditus", name: "Reditus", description: "AI affiliate program management platform", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "💰", category: "marketing-advertising", subcategory: "ai-affiliate-marketing" },
      { id: "kowboykit", name: "KowboyKit", description: "AI affiliate marketing toolkit", url: "", upvotes: 987, verified: true, rating: 4.1, icon: "🤠", category: "marketing-advertising", subcategory: "ai-affiliate-marketing" }
    ],
    "ai-cold-calling": [
      { id: "dealmachine-calling", name: "DealMachine", description: "AI real estate cold calling platform", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "🏠", category: "marketing-advertising", subcategory: "ai-cold-calling" },
      { id: "oneai", name: "OneAI", description: "AI cold calling and conversation platform", url: "", upvotes: 1543, verified: true, rating: 4.5, icon: "☝️", category: "marketing-advertising", subcategory: "ai-cold-calling" },
      { id: "outplay", name: "Outplay", description: "AI sales engagement and cold calling platform", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🎯", category: "marketing-advertising", subcategory: "ai-cold-calling" },
      { id: "smartwriter", name: "SmartWriter", description: "AI cold email and calling assistant", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "✍️", category: "marketing-advertising", subcategory: "ai-cold-calling" }
    ],
    "ai-digital-marketing": [
      { id: "askingtips", name: "AskingTips", description: "AI digital marketing insights platform", url: "", upvotes: 1678, verified: true, rating: 4.5, icon: "💡", category: "marketing-advertising", subcategory: "ai-digital-marketing" },
      { id: "vendasta", name: "Vendasta", description: "AI digital marketing platform for agencies", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🏢", category: "marketing-advertising", subcategory: "ai-digital-marketing" },
      { id: "swipe-insight", name: "Swipe Insight", description: "AI competitor analysis for digital marketing", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📱", category: "marketing-advertising", subcategory: "ai-digital-marketing" },
      { id: "seomator", name: "Seomator", description: "AI SEO and digital marketing tool", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🔍", category: "marketing-advertising", subcategory: "ai-digital-marketing" },
      { id: "head", name: "Head", description: "AI digital marketing optimization platform", url: "", upvotes: 1156, verified: true, rating: 4.1, icon: "🧠", category: "marketing-advertising", subcategory: "ai-digital-marketing" }
    ],
    "ai-email-generator": [
      { id: "recruit-crm-email", name: "Recruit CRM", description: "AI recruiting email generator", url: "", upvotes: 1678, verified: true, rating: 4.5, icon: "👥", category: "marketing-advertising", subcategory: "ai-email-generator" },
      { id: "toolsaday", name: "Toolsaday", description: "AI email and content generator", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🛠️", category: "marketing-advertising", subcategory: "ai-email-generator" },
      { id: "chatgpt-sales-prompts", name: "200+ ChatGPT Mega-Prompts for Sales", description: "AI email and sales prompt collection", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "💬", category: "marketing-advertising", subcategory: "ai-email-generator" }
    ],
    "ai-email-marketing": [
      { id: "mailchimp", name: "Mailchimp", description: "AI email marketing and automation platform", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "🐵", category: "marketing-advertising", subcategory: "ai-email-marketing" },
      { id: "klaviyo", name: "Klaviyo", description: "AI email marketing for ecommerce", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "💌", category: "marketing-advertising", subcategory: "ai-email-marketing" },
      { id: "smartlead", name: "Smartlead", description: "AI cold email marketing platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📬", category: "marketing-advertising", subcategory: "ai-email-marketing" },
      { id: "robly", name: "Robly Email Marketing", description: "AI email marketing automation", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🤖", category: "marketing-advertising", subcategory: "ai-email-marketing" }
    ],
    "ai-flyer-generator": [
      { id: "7lemon", name: "7Lemon", description: "AI flyer and marketing material generator", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🍋", category: "marketing-advertising", subcategory: "ai-flyer-generator" },
      { id: "ilogo-ai", name: "iLogo - Ai Logo Design", description: "AI logo and flyer design platform", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🎨", category: "marketing-advertising", subcategory: "ai-flyer-generator" },
      { id: "designs-ai", name: "Designs AI", description: "AI design platform for flyers and graphics", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "🖌️", category: "marketing-advertising", subcategory: "ai-flyer-generator" },
      { id: "logome", name: "Logome", description: "AI brand identity and flyer generator", url: "", upvotes: 987, verified: true, rating: 4.1, icon: "🏷️", category: "marketing-advertising", subcategory: "ai-flyer-generator" }
    ],
    "ai-lead-generation": [
      { id: "getprospect", name: "GetProspect", description: "AI lead generation and prospecting tool", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎯", category: "marketing-advertising", subcategory: "ai-lead-generation" },
      { id: "phantombuster", name: "PhantomBuster", description: "AI lead generation automation platform", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "👻", category: "marketing-advertising", subcategory: "ai-lead-generation" },
      { id: "instantly-ai", name: "Instantly.ai", description: "AI cold email lead generation", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "⚡", category: "marketing-advertising", subcategory: "ai-lead-generation" },
      { id: "clay", name: "Clay", description: "AI lead enrichment and generation platform", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🧱", category: "marketing-advertising", subcategory: "ai-lead-generation" },
      { id: "popl", name: "Popl", description: "AI digital business card and lead generation", url: "", upvotes: 1432, verified: true, rating: 4.2, icon: "📇", category: "marketing-advertising", subcategory: "ai-lead-generation" }
    ],
    "ai-marketing": [
      { id: "mailchimp-marketing", name: "Mailchimp", description: "AI marketing automation platform", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "🐵", category: "marketing-advertising", subcategory: "ai-marketing" },
      { id: "klaviyo-marketing", name: "Klaviyo", description: "AI marketing platform for brands", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "💌", category: "marketing-advertising", subcategory: "ai-marketing" },
      { id: "jasper-ai", name: "Jasper AI", description: "AI content marketing platform", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "💎", category: "marketing-advertising", subcategory: "ai-marketing" },
      { id: "hypeauditor", name: "HypeAuditor", description: "AI influencer marketing analytics", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "📊", category: "marketing-advertising", subcategory: "ai-marketing" },
      { id: "activecampaign", name: "ActiveCampaign", description: "AI marketing automation and CRM", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🎯", category: "marketing-advertising", subcategory: "ai-marketing" }
    ],
    "ai-marketing-plan-generator": [
      { id: "bizplanner-ai", name: "BizPlanner AI", description: "AI business and marketing plan generator", url: "", upvotes: 1678, verified: true, rating: 4.5, icon: "📋", category: "marketing-advertising", subcategory: "ai-marketing-plan-generator" },
      { id: "plannit-ai", name: "Plannit AI", description: "AI marketing strategy planner", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🗓️", category: "marketing-advertising", subcategory: "ai-marketing-plan-generator" },
      { id: "averi-ai", name: "Averi AI", description: "AI marketing plan and strategy generator", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🤖", category: "marketing-advertising", subcategory: "ai-marketing-plan-generator" },
      { id: "content-codex", name: "Content Codex", description: "AI content marketing plan generator", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📚", category: "marketing-advertising", subcategory: "ai-marketing-plan-generator" },
      { id: "molo9", name: "Molo9™", description: "AI marketing strategy and planning platform", url: "", upvotes: 1156, verified: true, rating: 4.1, icon: "🎯", category: "marketing-advertising", subcategory: "ai-marketing-plan-generator" }
    ],
    "ai-pitch-deck-generator": [
      { id: "slidebean", name: "Slidebean", description: "AI pitch deck design and generator", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "📊", category: "marketing-advertising", subcategory: "ai-pitch-deck-generator" },
      { id: "openvc", name: "OpenVC", description: "AI pitch deck builder for startups", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "💼", category: "marketing-advertising", subcategory: "ai-pitch-deck-generator" },
      { id: "upmetrics", name: "Upmetrics", description: "AI business plan and pitch deck generator", url: "", upvotes: 1432, verified: true, rating: 4.2, icon: "📈", category: "marketing-advertising", subcategory: "ai-pitch-deck-generator" }
    ],
    "ai-reply": [
      { id: "autoresponder-ai", name: "AutoResponder.ai", description: "AI auto-reply system for messaging", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🤖", category: "marketing-advertising", subcategory: "ai-reply" },
      { id: "tanka", name: "Tanka", description: "AI social media reply generator", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "💬", category: "marketing-advertising", subcategory: "ai-reply" },
      { id: "hyperclapper", name: "HyperClapper", description: "AI social media reply assistant", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "👏", category: "marketing-advertising", subcategory: "ai-reply" },
      { id: "replyguy", name: "ReplyGuy", description: "AI reply generation for social media", url: "", upvotes: 1156, verified: true, rating: 4.1, icon: "👤", category: "marketing-advertising", subcategory: "ai-reply" }
    ],
    "ai-response-generator": [
      { id: "responso", name: "Responso", description: "AI response generator for customer service", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "💬", category: "marketing-advertising", subcategory: "ai-response-generator" },
      { id: "engage-ai", name: "Engage AI", description: "AI social media response generator", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🤝", category: "marketing-advertising", subcategory: "ai-response-generator" },
      { id: "commentguard", name: "CommentGuard", description: "AI comment and response moderation", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🛡️", category: "marketing-advertising", subcategory: "ai-response-generator" },
      { id: "mailbutler", name: "Mailbutler", description: "AI email response generator", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📧", category: "marketing-advertising", subcategory: "ai-response-generator" }
    ],
    "ai-reviews": [
      { id: "roast", name: "ROAST", description: "AI dating profile review platform", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🔥", category: "marketing-advertising", subcategory: "ai-reviews" },
      { id: "ai-otaku-labo", name: "AI オタクLABO (AI Otaku LABO)", description: "AI review and analysis platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🤖", category: "marketing-advertising", subcategory: "ai-reviews" },
      { id: "aijourney", name: "AIJourney", description: "AI tool review and comparison platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🚀", category: "marketing-advertising", subcategory: "ai-reviews" },
      { id: "tracefuse", name: "TraceFuse", description: "AI review analysis and insights", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🔍", category: "marketing-advertising", subcategory: "ai-reviews" },
      { id: "vetted-reviews", name: "Vetted", description: "AI product review and recommendation platform", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "✅", category: "marketing-advertising", subcategory: "ai-reviews" }
    ],
    "ai-seo-tools": [
      { id: "prepostseo", name: "Prepostseo", description: "AI SEO tools and optimization platform", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "🔍", category: "marketing-advertising", subcategory: "ai-seo-tools" },
      { id: "seo-ai", name: "SEO.AI", description: "AI SEO automation and optimization platform", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🤖", category: "marketing-advertising", subcategory: "ai-seo-tools" }
    ],
    "ai-sales": [
      { id: "instantly-ai-sales", name: "Instantly.ai", description: "AI cold email sales automation", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "⚡", category: "marketing-advertising", subcategory: "ai-sales" },
      { id: "gong", name: "Gong", description: "AI sales conversation analytics", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🥇", category: "marketing-advertising", subcategory: "ai-sales" },
      { id: "outreach", name: "Outreach", description: "AI sales engagement platform", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "📬", category: "marketing-advertising", subcategory: "ai-sales" },
      { id: "seismic", name: "Seismic", description: "AI sales enablement platform", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "📊", category: "marketing-advertising", subcategory: "ai-sales" },
      { id: "truegether", name: "TrueGether", description: "AI marketplace and sales platform", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🛒", category: "marketing-advertising", subcategory: "ai-sales" }
    ],
    "ai-sales-assistant": [
      { id: "getprospect-sales", name: "GetProspect", description: "AI sales prospecting assistant", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "🎯", category: "marketing-advertising", subcategory: "ai-sales-assistant" },
      { id: "respond-io", name: "Respond.io", description: "AI customer conversation platform for sales", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "💬", category: "marketing-advertising", subcategory: "ai-sales-assistant" },
      { id: "tome", name: "Tome", description: "AI presentation tool for sales", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📚", category: "marketing-advertising", subcategory: "ai-sales-assistant" }
    ],
    "ai-shopify-store-builder": [
      { id: "storebuild-ai", name: "StoreBuild.ai", description: "AI Shopify store builder and optimizer", url: "", upvotes: 1678, verified: true, rating: 4.5, icon: "🛍️", category: "marketing-advertising", subcategory: "ai-shopify-store-builder" },
      { id: "glitching-ai", name: "Glitching AI", description: "AI ecommerce store generator", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "⚡", category: "marketing-advertising", subcategory: "ai-shopify-store-builder" },
      { id: "kopy", name: "Kopy", description: "AI Shopify product description generator", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "✍️", category: "marketing-advertising", subcategory: "ai-shopify-store-builder" },
      { id: "marketsy-ai", name: "Marketsy.ai", description: "AI marketplace and store builder", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🏪", category: "marketing-advertising", subcategory: "ai-shopify-store-builder" },
      { id: "buildmystores", name: "BuildMyStores", description: "AI automated store builder", url: "", upvotes: 1156, verified: true, rating: 4.1, icon: "🏗️", category: "marketing-advertising", subcategory: "ai-shopify-store-builder" }
    ],
    "ai-website-designer": [
      { id: "readdy", name: "Readdy", description: "AI website design and builder", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🌐", category: "marketing-advertising", subcategory: "ai-website-designer" },
      { id: "studio-ai", name: "STUDIO AI", description: "AI web design platform", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "🎨", category: "marketing-advertising", subcategory: "ai-website-designer" },
      { id: "wegic", name: "Wegic", description: "AI website builder and designer", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🪄", category: "marketing-advertising", subcategory: "ai-website-designer" },
      { id: "b12", name: "B12", description: "AI website builder for professionals", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🏢", category: "marketing-advertising", subcategory: "ai-website-designer" },
      { id: "baked-design", name: "Baked Design", description: "AI web design automation platform", url: "", upvotes: 1432, verified: true, rating: 4.2, icon: "🍞", category: "marketing-advertising", subcategory: "ai-website-designer" }
    ],
    "ad-copy": [
      { id: "scrip-ai", name: "Scrip AI", description: "AI ad copy and script generator", url: "", upvotes: 1789, verified: true, rating: 4.6, icon: "📝", category: "marketing-advertising", subcategory: "ad-copy" },
      { id: "freeadcopy", name: "Freeadcopy", description: "Free AI ad copy generator", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "💰", category: "marketing-advertising", subcategory: "ad-copy" },
      { id: "pixcanva-ai", name: "PixCanva AI", description: "AI ad copy and design platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎨", category: "marketing-advertising", subcategory: "ad-copy" },
      { id: "adcopy", name: "AdCopy", description: "AI advertising copy generator", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📢", category: "marketing-advertising", subcategory: "ad-copy" },
      { id: "copycop-ai", name: "CopyCop AI", description: "AI ad copy optimization and compliance", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "👮", category: "marketing-advertising", subcategory: "ad-copy" }
    ],
    "google-ads-ai": [
      { id: "search-atlas", name: "Search Atlas", description: "AI Google Ads optimization platform", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🗺️", category: "marketing-advertising", subcategory: "google-ads-ai" },
      { id: "blobr", name: "Blobr", description: "AI Google Ads insights and analytics", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🫧", category: "marketing-advertising", subcategory: "google-ads-ai" },
      { id: "30characters", name: "30characters", description: "AI Google Ads headline generator", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "📊", category: "marketing-advertising", subcategory: "google-ads-ai" },
      { id: "adwisely", name: "Adwisely", description: "AI Google Ads automation for ecommerce", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🛒", category: "marketing-advertising", subcategory: "google-ads-ai" },
      { id: "dittto-ai", name: "Dittto.ai", description: "AI Google Ads copy generator", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📝", category: "marketing-advertising", subcategory: "google-ads-ai" }
    ],
    "seo-writing-ai": [
      { id: "surfer-seo", name: "Surfer", description: "AI SEO content optimization platform", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "🏄", category: "marketing-advertising", subcategory: "seo-writing-ai" },
      { id: "surgegraph", name: "SurgeGraph", description: "AI SEO content generation platform", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "📈", category: "marketing-advertising", subcategory: "seo-writing-ai" },
      { id: "senuto", name: "Senuto", description: "AI SEO content and keyword tool", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🔍", category: "marketing-advertising", subcategory: "seo-writing-ai" },
      { id: "seo-writing-ai-tool", name: "SEO Writing AI", description: "AI SEO content writing assistant", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "✍️", category: "marketing-advertising", subcategory: "seo-writing-ai" }
    ]
  },
  "health-wellness": {
    "ai-dermatology": [
      { id: "daily-affirmations-ai", name: "Daily Affirmations AI", description: "AI-powered daily affirmation generator creating personalized positive statements for mental wellness and motivation", url: "https://dailyaffirmations.ai", upvotes: 723, verified: false, rating: 4.3, icon: "🌟", category: "health-wellness", subcategory: "ai-affirmations", addedDate: "2026-04-03" },

      { id: "skinive", name: "Skinive", description: "AI-powered skin analysis and dermatology assistant", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🔬", category: "health-wellness", subcategory: "ai-dermatology" },
      { id: "eczemaless", name: "Eczemaless", description: "AI eczema management and treatment guidance", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🩹", category: "health-wellness", subcategory: "ai-dermatology" },
      { id: "skincarelens", name: "SkinCareLens", description: "AI-powered skincare analysis and recommendations", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "📱", category: "health-wellness", subcategory: "ai-dermatology" },
      { id: "regrow-ai", name: "Regrow AI", description: "AI hair loss analysis and treatment recommendations", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "💇", category: "health-wellness", subcategory: "ai-dermatology" },
      { id: "face-gpt", name: "Face GPT", description: "AI facial analysis and skincare consultation", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "👤", category: "health-wellness", subcategory: "ai-dermatology" }
    ],
    "ai-healthcare": [
      { id: "freed-ai", name: "Freed", description: "AI medical documentation and clinical assistant", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "📋", category: "health-wellness", subcategory: "ai-healthcare" },
      { id: "heidi-health", name: "Heidi Health", description: "AI healthcare assistant for medical professionals", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "👩‍⚕️", category: "health-wellness", subcategory: "ai-healthcare" },
      { id: "dr-oracle", name: "Dr.Oracle", description: "AI medical knowledge and diagnostic assistant", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🔮", category: "health-wellness", subcategory: "ai-healthcare" }
    ],
    "ai-medical-diagnosis": [
      { id: "doctronic", name: "Doctronic", description: "AI-powered medical diagnosis and consultation platform", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🩺", category: "health-wellness", subcategory: "ai-medical-diagnosis" },
      { id: "pearl-ai", name: "Pearl", description: "AI dental and medical diagnosis assistant", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "🦷", category: "health-wellness", subcategory: "ai-medical-diagnosis" },
      { id: "glass-health", name: "Glass Health", description: "AI clinical decision support and diagnosis", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🔍", category: "health-wellness", subcategory: "ai-medical-diagnosis" },
      { id: "overjet", name: "Overjet", description: "AI dental diagnosis and treatment planning", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🦷", category: "health-wellness", subcategory: "ai-medical-diagnosis" },
      { id: "empirical-health", name: "Empirical Health", description: "AI-powered medical research and diagnosis", url: "", upvotes: 1432, verified: true, rating: 4.2, icon: "📊", category: "health-wellness", subcategory: "ai-medical-diagnosis" }
    ],
    "ai-mental-health": [
      { id: "replika", name: "Replika", description: "AI companion for emotional support and mental wellness", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "🤗", category: "health-wellness", subcategory: "ai-mental-health" },
      { id: "brain-fm", name: "Brain.fm", description: "AI-generated music for focus and mental wellness", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🧠", category: "health-wellness", subcategory: "ai-mental-health" },
      { id: "endel", name: "Endel", description: "AI adaptive soundscapes for mental health", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "🎵", category: "health-wellness", subcategory: "ai-mental-health" },
      { id: "upheal", name: "Upheal", description: "AI-powered mental health support platform", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "💚", category: "health-wellness", subcategory: "ai-mental-health" },
      { id: "rosebud-ai", name: "Rosebud", description: "AI journaling for mental health and self-reflection", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "🌹", category: "health-wellness", subcategory: "ai-mental-health" }
    ],
    "ai-symptom-checker": [
      { id: "docus-ai", name: "Docus AI", description: "AI symptom checker and health assessment", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🩹", category: "health-wellness", subcategory: "ai-symptom-checker" },
      { id: "mediktor", name: "Mediktor", description: "AI medical symptom checker and triage", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🏥", category: "health-wellness", subcategory: "ai-symptom-checker" },
      { id: "avey-app", name: "Avey App", description: "AI health assessment and symptom tracking", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "📱", category: "health-wellness", subcategory: "ai-symptom-checker" },
      { id: "docai", name: "DocAI", description: "AI symptom analysis and medical guidance", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "👨‍⚕️", category: "health-wellness", subcategory: "ai-symptom-checker" },
      { id: "hehealth", name: "HeHealth", description: "AI symptom checker for men's health", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "♂️", category: "health-wellness", subcategory: "ai-symptom-checker" }
    ],
    "ai-therapist": [
      { id: "selfgazer", name: "Selfgazer", description: "AI-powered self-reflection and therapy assistant", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🪞", category: "health-wellness", subcategory: "ai-therapist" },
      { id: "abby-therapist", name: "Abby - Your AI Therapist", description: "AI therapeutic conversation and mental health support", url: "", upvotes: 1876, verified: true, rating: 4.5, icon: "👩‍⚕️", category: "health-wellness", subcategory: "ai-therapist" },
      { id: "infiheal", name: "Infiheal", description: "AI mental health therapy and healing platform", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "💊", category: "health-wellness", subcategory: "ai-therapist" },
      { id: "free-ai-therapist", name: "Free AI (not a) Therapist", description: "AI conversational therapy and emotional support", url: "", upvotes: 1543, verified: true, rating: 4.3, icon: "💬", category: "health-wellness", subcategory: "ai-therapist" },
      { id: "therapywith-ai", name: "TherapywithAI", description: "AI-assisted therapy sessions and mental health support", url: "", upvotes: 1432, verified: true, rating: 4.2, icon: "🧘", category: "health-wellness", subcategory: "ai-therapist" }
    ]
  },
  "education-translation": {
    "ai-course-creator": [],
    "ai-answer": [
      { id: "learning-studio-ai", name: "Learning Studio AI", description: "Learning Studio AI is an AI-powered course creation platform that automatically generates educational content quizzes and lessons from any topic", url: "https://learningstudioai.com", upvotes: 3100, verified: false, rating: 4.4, icon: "📚", category: "education-translation", subcategory: "ai-course-creator", addedDate: "2026-04-01" },

      { id: "wolfram-alpha", name: "Wolfram|Alpha", description: "AI computational knowledge engine and answer platform", url: "", upvotes: 2456, verified: true, rating: 4.8, icon: "🔬", category: "education-translation", subcategory: "ai-answer" },
      { id: "hoi-dap-ai-hay", name: "Hỏi đáp AI Hay", description: "AI question answering platform in Vietnamese", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "❓", category: "education-translation", subcategory: "ai-answer" },
      { id: "course-hero", name: "Course Hero", description: "AI tutoring and study assistance platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎓", category: "education-translation", subcategory: "ai-answer" },
      { id: "iask-ai", name: "iAsk.Ai", description: "AI question answering and research assistant", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🔍", category: "education-translation", subcategory: "ai-answer" }
    ],
    "ai-article-summarizer": [
      { id: "scholarcy", name: "Scholarcy", description: "AI research paper summarizer for academics", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎓", category: "education-translation", subcategory: "ai-article-summarizer" },
      { id: "tldr-this", name: "TLDR This", description: "AI article summarizer for quick reading", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "⚡", category: "education-translation", subcategory: "ai-article-summarizer" },
      { id: "scisummary", name: "SciSummary", description: "AI scientific article summarizer", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🔬", category: "education-translation", subcategory: "ai-article-summarizer" }
    ],
    "ai-book-summarizer": [
      { id: "sobrief", name: "SoBrief", description: "AI book summarizer for quick insights", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "📚", category: "education-translation", subcategory: "ai-book-summarizer" },
      { id: "summarist-ai", name: "Summarist.ai", description: "AI book summary generation platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📖", category: "education-translation", subcategory: "ai-book-summarizer" },
      { id: "booksai", name: "BooksAI", description: "AI book analysis and summarization tool", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🤖", category: "education-translation", subcategory: "ai-book-summarizer" },
      { id: "booksai-com", name: "BooksAI.com", description: "AI-powered book summary platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📚", category: "education-translation", subcategory: "ai-book-summarizer" },
      { id: "chunker-ai", name: "Chunker AI", description: "AI text chunking and book summarization", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🔗", category: "education-translation", subcategory: "ai-book-summarizer" }
    ],
    "ai-coaching": [
      { id: "streaks-66", name: "Streaks 66 - Habit Tracker AI", description: "AI habit tracking and coaching platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "⚡", category: "education-translation", subcategory: "ai-coaching" },
      { id: "skillsoft-percipio", name: "Skillsoft Percipio", description: "AI-powered learning and coaching platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎯", category: "education-translation", subcategory: "ai-coaching" },
      { id: "callhippo-coaching", name: "CallHippo", description: "AI sales coaching and communication platform", url: "", upvotes: 1156, verified: true, rating: 4.1, icon: "📞", category: "education-translation", subcategory: "ai-coaching" }
    ],
    "ai-course": [
      { id: "datacamp", name: "DataCamp", description: "AI-powered data science learning platform", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "📊", category: "education-translation", subcategory: "ai-course" },
      { id: "brilliant", name: "Brilliant", description: "AI interactive learning for STEM subjects", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "💡", category: "education-translation", subcategory: "ai-course" },
      { id: "skillsoft-percipio-course", name: "Skillsoft Percipio", description: "AI corporate learning and course platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🎓", category: "education-translation", subcategory: "ai-course" },
      { id: "coddy", name: "Coddy", description: "AI coding courses and programming education", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "💻", category: "education-translation", subcategory: "ai-course" },
      { id: "openai-academy", name: "OpenAI Academy", description: "AI education and training platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🤖", category: "education-translation", subcategory: "ai-course" }
    ],
    "ai-flashcard-maker": [
      { id: "gizmo", name: "Gizmo", description: "AI-powered flashcard creation and study tool", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "⚙️", category: "education-translation", subcategory: "ai-flashcard-maker" },
      { id: "studydrive", name: "Studydrive", description: "AI study materials and flashcard platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🚗", category: "education-translation", subcategory: "ai-flashcard-maker" },
      { id: "study-fetch", name: "Study Fetch", description: "AI study material fetching and flashcard generation", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📚", category: "education-translation", subcategory: "ai-flashcard-maker" }
    ],
    "ai-homework-helper": [
      { id: "gauth", name: "Gauth", description: "AI homework solver and math problem assistant", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "🔢", category: "education-translation", subcategory: "ai-homework-helper" },
      { id: "course-hero-homework", name: "Course Hero", description: "AI homework help and tutoring platform", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎓", category: "education-translation", subcategory: "ai-homework-helper" },
      { id: "unstuck-ai", name: "Unstuck AI", description: "AI homework assistance and problem solving", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🔓", category: "education-translation", subcategory: "ai-homework-helper" },
      { id: "bartleby", name: "bartleby", description: "AI textbook solutions and homework help", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "📖", category: "education-translation", subcategory: "ai-homework-helper" },
      { id: "study-fetch-homework", name: "Study Fetch", description: "AI homework assistance and study support", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📝", category: "education-translation", subcategory: "ai-homework-helper" }
    ],
    "ai-image-translator": [
      { id: "pdnob-image-translator", name: "PDNob Image Translator", description: "AI image text translation and OCR", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🖼️", category: "education-translation", subcategory: "ai-image-translator" },
      { id: "pipiads", name: "Pipiads", description: "AI image translation for advertising content", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📢", category: "education-translation", subcategory: "ai-image-translator" },
      { id: "transmonkey-ai", name: "Transmonkey AI Translator Suite", description: "AI image and document translation platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🐒", category: "education-translation", subcategory: "ai-image-translator" },
      { id: "ai-manga-translator", name: "AI Manga Translator", description: "AI manga and comic image translation", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📚", category: "education-translation", subcategory: "ai-image-translator" },
      { id: "ai-image-translator", name: "AI Image Translator", description: "General AI image text translation tool", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🔤", category: "education-translation", subcategory: "ai-image-translator" }
    ],
    "ai-knowledge-base": [
      { id: "intercom", name: "Intercom", description: "AI customer support knowledge base platform", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "💬", category: "education-translation", subcategory: "ai-knowledge-base" },
      { id: "textcortex", name: "TextCortex", description: "AI writing and knowledge base creation", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🧠", category: "education-translation", subcategory: "ai-knowledge-base" },
      { id: "crisp", name: "Crisp", description: "AI customer service knowledge base", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🍪", category: "education-translation", subcategory: "ai-knowledge-base" },
      { id: "helpjuice", name: "Helpjuice", description: "AI knowledge base and help center platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🥤", category: "education-translation", subcategory: "ai-knowledge-base" }
    ],
    "ai-knowledge-graph": [
      { id: "connected-papers", name: "Connected Papers", description: "AI research paper knowledge graph visualization", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🔗", category: "education-translation", subcategory: "ai-knowledge-graph" },
      { id: "writer", name: "Writer", description: "AI writing platform with knowledge graph features", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "✍️", category: "education-translation", subcategory: "ai-knowledge-graph" },
      { id: "sciphi", name: "SciPhi", description: "AI scientific knowledge graph and research tool", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🔬", category: "education-translation", subcategory: "ai-knowledge-graph" },
      { id: "infranodus", name: "InfraNodus", description: "AI text network analysis and knowledge graphs", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🕸️", category: "education-translation", subcategory: "ai-knowledge-graph" }
    ],
    "ai-knowledge-management": [
      { id: "glean", name: "Glean", description: "AI workplace search and knowledge management", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🔍", category: "education-translation", subcategory: "ai-knowledge-management" },
      { id: "mymind", name: "mymind", description: "AI personal knowledge management and notes", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🧠", category: "education-translation", subcategory: "ai-knowledge-management" },
      { id: "flowith-2", name: "Flowith 2.0", description: "AI workflow and knowledge management platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🌊", category: "education-translation", subcategory: "ai-knowledge-management" },
      { id: "llamaindex", name: "LlamaIndex", description: "AI data framework for knowledge management", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🦙", category: "education-translation", subcategory: "ai-knowledge-management" },
      { id: "slite", name: "Slite", description: "AI team knowledge base and documentation", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📄", category: "education-translation", subcategory: "ai-knowledge-management" }
    ],
    "ai-language-learning": [
      { id: "language-reactor", name: "Language Reactor", description: "AI language learning through media consumption", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "⚛️", category: "education-translation", subcategory: "ai-language-learning" },
      { id: "elsa-speak-learning", name: "ELSA Speak", description: "AI English pronunciation and speaking coach", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🗣️", category: "education-translation", subcategory: "ai-language-learning" },
      { id: "talkpal", name: "Talkpal", description: "AI language learning conversation partner", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "👥", category: "education-translation", subcategory: "ai-language-learning" }
    ],
    "ai-lesson-plan-generator": [
      { id: "magic-school", name: "MagicSchool", description: "AI lesson plan generator for educators", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🏫", category: "education-translation", subcategory: "ai-lesson-plan-generator" },
      { id: "curipod", name: "Curipod", description: "AI interactive lesson creation platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🎯", category: "education-translation", subcategory: "ai-lesson-plan-generator" },
      { id: "to-teach", name: "To Teach", description: "AI personalized lesson plan generator", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "👩‍🏫", category: "education-translation", subcategory: "ai-lesson-plan-generator" },
      { id: "amazy-uk", name: "Amazy.uk", description: "AI lesson planning and educational content", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🌟", category: "education-translation", subcategory: "ai-lesson-plan-generator" },
      { id: "mindsmith", name: "Mindsmith", description: "AI instructional design and lesson creation", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🔨", category: "education-translation", subcategory: "ai-lesson-plan-generator" }
    ],
    "ai-math": [
      { id: "mathgpt", name: "MathGPT", description: "AI mathematics problem solver and tutor", url: "", upvotes: 2134, verified: true, rating: 4.7, icon: "🔢", category: "education-translation", subcategory: "ai-math" },
      { id: "gauth-math", name: "Gauth", description: "AI math problem solver with step-by-step solutions", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "📐", category: "education-translation", subcategory: "ai-math" },
      { id: "mathos-ai", name: "Mathos AI", description: "AI mathematical analysis and problem solving", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📊", category: "education-translation", subcategory: "ai-math" },
      { id: "thetawise", name: "Thetawise", description: "AI mathematics education and tutoring", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "θ", category: "education-translation", subcategory: "ai-math" },
      { id: "math-ai", name: "Math AI", description: "AI mathematical computation and learning tool", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "∑", category: "education-translation", subcategory: "ai-math" }
    ],
    "ai-mind-mapping": [
      { id: "mymap", name: "MyMap", description: "AI mind mapping and visual thinking tool", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🗺️", category: "education-translation", subcategory: "ai-mind-mapping" },
      { id: "xmind-ai", name: "Xmind AI", description: "AI-powered mind mapping software", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🧠", category: "education-translation", subcategory: "ai-mind-mapping" },
      { id: "mapify", name: "Mapify", description: "AI concept mapping and visualization platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🗂️", category: "education-translation", subcategory: "ai-mind-mapping" },
      { id: "algor-education", name: "Algor Education", description: "AI educational mind mapping and learning", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎓", category: "education-translation", subcategory: "ai-mind-mapping" },
      { id: "felo", name: "Felo", description: "AI mind mapping and knowledge organization", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🎯", category: "education-translation", subcategory: "ai-mind-mapping" }
    ],
    "ai-question-generator": [
      { id: "quizgecko", name: "Quizgecko", description: "AI quiz and question generator from content", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🦎", category: "education-translation", subcategory: "ai-question-generator" },
      { id: "testportal", name: "Testportal", description: "AI test and question creation platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "📝", category: "education-translation", subcategory: "ai-question-generator" },
      { id: "sendsteps-ai", name: "Sendsteps.ai", description: "AI interactive presentation and question generator", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📊", category: "education-translation", subcategory: "ai-question-generator" },
      { id: "quizbot-ai", name: "QuizBot.ai", description: "AI quiz bot and question generation tool", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🤖", category: "education-translation", subcategory: "ai-question-generator" }
    ],
    "ai-quiz-generator": [
      { id: "doctrina-ai", name: "Doctrina AI", description: "Doctrina AI is an AI education platform helping students with exam preparation essay writing note summarization and interactive learning", url: "https://doctrina.ai", upvotes: 3200, verified: false, rating: 4.4, icon: "🎓", category: "education-translation", subcategory: "ai-quiz-generator", addedDate: "2026-04-01" },
      { id: "turbolearn-ai-quiz", name: "TurboLearn AI", description: "AI quiz creation and learning acceleration", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🚀", category: "education-translation", subcategory: "ai-quiz-generator" },
      { id: "scoreapp", name: "ScoreApp", description: "AI quiz marketing and lead generation", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎯", category: "education-translation", subcategory: "ai-quiz-generator" },
      { id: "study-fetch-quiz", name: "Study Fetch", description: "AI study material quiz generation", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "📊", category: "education-translation", subcategory: "ai-quiz-generator" }
    ],
    "ai-quizzes": [
      { id: "achievable", name: "Achievable", description: "AI adaptive quiz platform for exam preparation", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🏆", category: "education-translation", subcategory: "ai-quizzes" },
      { id: "octane-ai", name: "Octane AI", description: "AI quiz platform for ecommerce and marketing", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "⚡", category: "education-translation", subcategory: "ai-quizzes" },
      { id: "educato", name: "Educato", description: "AI educational quiz and assessment platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎓", category: "education-translation", subcategory: "ai-quizzes" },
      { id: "quizbot-ai-quizzes", name: "QuizBot.ai", description: "AI quiz creation and management platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🤖", category: "education-translation", subcategory: "ai-quizzes" },
      { id: "magicform-app", name: "MagicForm.app", description: "AI form and quiz creation platform", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "✨", category: "education-translation", subcategory: "ai-quizzes" }
    ],
    "ai-reader": [
      { id: "elevenreader", name: "ElevenReader", description: "AI text-to-speech reading assistant", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "📖", category: "education-translation", subcategory: "ai-reader" },
      { id: "peech", name: "Peech", description: "AI speech generation and reading platform", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🗣️", category: "education-translation", subcategory: "ai-reader" },
      { id: "audeus", name: "Audeus", description: "AI audio content and reading assistant", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎧", category: "education-translation", subcategory: "ai-reader" },
      { id: "clearly-reader", name: "Clearly Reader", description: "AI reading comprehension and clarity tool", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "👓", category: "education-translation", subcategory: "ai-reader" },
      { id: "thread-navigator", name: "Thread Navigator", description: "AI content navigation and reading assistant", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🧭", category: "education-translation", subcategory: "ai-reader" }
    ],
    "ai-teachers": [
      { id: "talkpal-teacher", name: "Talkpal", description: "AI language teaching and conversation partner", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "👩‍🏫", category: "education-translation", subcategory: "ai-teachers" },
      { id: "magic-school-teacher", name: "MagicSchool", description: "AI teaching assistant and lesson planner", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "🏫", category: "education-translation", subcategory: "ai-teachers" },
      { id: "youlearn-ai", name: "YouLearn AI", description: "AI personalized learning and teaching platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎓", category: "education-translation", subcategory: "ai-teachers" },
      { id: "readtheory", name: "ReadTheory", description: "AI reading comprehension teaching platform", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📚", category: "education-translation", subcategory: "ai-teachers" },
      { id: "schoolai", name: "SchoolAI", description: "AI teaching and educational assistance platform", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🤖", category: "education-translation", subcategory: "ai-teachers" }
    ],
    "ai-translate": [
      { id: "deepl", name: "DeepL", description: "AI translation with superior accuracy and nuance", url: "", upvotes: 2456, verified: true, rating: 4.8, icon: "🌐", category: "education-translation", subcategory: "ai-translate" },
      { id: "immersive-translate", name: "Immersive Translate", description: "AI web page translation with context preservation", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🔄", category: "education-translation", subcategory: "ai-translate" },
      { id: "openl-translate", name: "OpenL Translate", description: "AI open-source translation platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🔓", category: "education-translation", subcategory: "ai-translate" },
      { id: "machinetranslation-com", name: "MachineTranslation.com", description: "AI machine translation services and tools", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "⚙️", category: "education-translation", subcategory: "ai-translate" }
    ],
    "ai-tutorial": [
      { id: "brilliant-tutorial", name: "Brilliant", description: "AI interactive tutorials for STEM learning", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "💡", category: "education-translation", subcategory: "ai-tutorial" },
      { id: "midlibrary", name: "Midlibrary", description: "AI tutorial and learning resource library", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📚", category: "education-translation", subcategory: "ai-tutorial" },
      { id: "projectai", name: "ProjectAI", description: "AI project-based learning and tutorials", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🚀", category: "education-translation", subcategory: "ai-tutorial" }
    ],
    "ai-video-translator": [
      { id: "blipcut-ai-video", name: "BlipCut AI Video Translator", description: "AI video translation with lip sync", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🌐", category: "education-translation", subcategory: "ai-video-translator" },
      { id: "d-id", name: "D-ID", description: "AI video translation with digital avatars", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🤖", category: "education-translation", subcategory: "ai-video-translator" }
    ],
    "ai-voice-translator": [
      { id: "ai-phone", name: "AI Phone", description: "AI real-time voice translation for calls", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "📞", category: "education-translation", subcategory: "ai-voice-translator" },
      { id: "verbalate", name: "Verbalate", description: "AI voice translation and dubbing platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🎤", category: "education-translation", subcategory: "ai-voice-translator" },
      { id: "audeering", name: "audEERING", description: "AI voice emotion and translation analysis", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "👂", category: "education-translation", subcategory: "ai-voice-translator" },
      { id: "translinguist", name: "TransLinguist", description: "AI multilingual voice translation platform", url: "", upvotes: 1298, verified: true, rating: 4.2, icon: "🌍", category: "education-translation", subcategory: "ai-voice-translator" }
    ]
  },
  "chatbots-virtual-companions": {
    "ai-anime-girlfriend": [

      { id: "juicy-ai", name: "Juicy AI", description: "AI anime girlfriend chat and roleplay platform", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "💕", category: "chatbots-virtual-companions", subcategory: "ai-anime-girlfriend" },
      { id: "ai-anime-girlfriend", name: "AI Anime Girlfriend", description: "Personalized AI anime companion and chat", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🌸", category: "chatbots-virtual-companions", subcategory: "ai-anime-girlfriend" },
      { id: "ainder", name: "Ainder - Find Anime AI Friends", description: "AI anime friend matching and chat platform", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "👫", category: "chatbots-virtual-companions", subcategory: "ai-anime-girlfriend" },
      { id: "gpt-personal-companion", name: "GPT Personal Companion", description: "AI personal companion with anime personality", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "🤖", category: "chatbots-virtual-companions", subcategory: "ai-anime-girlfriend" }
    ],
    "ai-boyfriend": [
      { id: "nomi-ai", addedDate: "2026-03-31", name: "Nomi.ai", description: "AI boyfriend with emotional intelligence", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "💙", category: "chatbots-virtual-companions", subcategory: "ai-boyfriend" },
      { id: "secret-desires", name: "Secret Desires", description: "AI intimate boyfriend chat companion", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "🔥", category: "chatbots-virtual-companions", subcategory: "ai-boyfriend" },
      { id: "rubii-ai", addedDate: "2026-03-31", name: "Rubii: AI Character Community", description: "AI boyfriend characters and community", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "💎", category: "chatbots-virtual-companions", subcategory: "ai-boyfriend" },
      { id: "muah-ai", addedDate: "2026-03-31", name: "Muah.AI", description: "AI boyfriend with photo and voice features", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "💋", category: "chatbots-virtual-companions", subcategory: "ai-boyfriend" }
    ],
    "ai-character": [
      { id: "sakura-ai", name: "Sakura AI", description: "Sakura AI is an anime-inspired AI companion platform featuring real-time voice interaction and immersive character conversations", url: "https://www.sakura.fm", upvotes: 3500, verified: false, rating: 4.5, icon: "🌸", category: "chatbots-virtual-companions", subcategory: "ai-character", addedDate: "2026-04-01" },
      { id: "khui-ai", name: "Khui AI", description: "Khui AI is an AI companion platform offering personalized conversation and emotional support with customizable personality settings", url: "https://www.khuiai.com/en", upvotes: 2600, verified: false, rating: 4.1, icon: "💭", category: "chatbots-virtual-companions", subcategory: "ai-character", addedDate: "2026-04-01" },
      { id: "joyland-ai", name: "Joyland AI", description: "Joyland AI is an immersive AI character chat platform for creative roleplay and storytelling with anime and fictional companions", url: "https://www.joyland.ai", upvotes: 3600, verified: false, rating: 4.3, icon: "🎪", category: "chatbots-virtual-companions", subcategory: "ai-character", addedDate: "2026-04-01" },
      { id: "pephop-ai", name: "Pephop AI", description: "AI Chat platform offers video, voice, and custom character creation", url: "https://pephop.ai/", upvotes: 3850, verified: true, rating: 4.7, icon: "🎭", category: "chatbots-virtual-companions", subcategory: "ai-character", addedDate: "2025-11-20" },
      { id: "spicychat-ai", name: "SPICYCHAT.AI", description: "AI chatbot with adult conversation capabilities", url: "", upvotes: 4567, verified: true, rating: 4.8, icon: "🌶️", category: "chatbots-virtual-companions", subcategory: "ai-character" },
      { id: "janitor-ai-character", name: "Janitor AI", description: "AI character creation and roleplay platform", url: "", upvotes: 3456, verified: true, rating: 4.8, icon: "🧹", category: "chatbots-virtual-companions", subcategory: "ai-character" },
      { id: "crushon-ai", name: "CrushOn.AI", description: "AI character chat with no restrictions", url: "", upvotes: 3124, verified: true, rating: 4.7, icon: "💘", category: "chatbots-virtual-companions", subcategory: "ai-character" },
      { id: "talkie-ai-character", name: "Talkie AI", description: "AI character conversations and roleplay", url: "", upvotes: 2876, verified: true, rating: 4.6, icon: "🗣️", category: "chatbots-virtual-companions", subcategory: "ai-character" },
      { id: "vmate-ai", name: "Vmate AI", description: "Your Personal AI chatbot for realistic role-play and open-ended conversations", url: "https://vmateai.com/", upvotes: 2650, verified: true, rating: 4.55, icon: "💬", category: "chatbots-virtual-companions", subcategory: "ai-character", addedDate: "Nov 05, 2025" },
      { id: "dippy", name: "Dippy", description: "AI character creation and chat platform", url: "", upvotes: 2543, verified: true, rating: 4.5, icon: "🎭", category: "chatbots-virtual-companions", subcategory: "ai-character" },
      { id: "caveduck", name: "Caveduck", description: "AI character interactions and stories", url: "", upvotes: 2321, verified: true, rating: 4.4, icon: "🦆", category: "chatbots-virtual-companions", subcategory: "ai-character" }
    ],
    "ai-chatbot": [
      { 
        id: "chatup-ai", 
        name: "ChatUp AI", 
        description: "Free AI chatbot, writing assistant, and character chat — all in one powerful platform.", 
        url: "https://aichattings.com/", 
        upvotes: 3245, 
        verified: true, 
        rating: 4.7, 
        reviewsCount: 856,
        savedCount: 1234,
        addedDate: "Nov 05, 2025",
        icon: "💬", 
        category: "chatbots-virtual-companions", 
        subcategory: "ai-chatbot" 
      },
      { id: "chatgpt", name: "ChatGPT", description: "Advanced AI chatbot for conversations and assistance", url: "", upvotes: 5432, verified: true, rating: 4.9, icon: "🤖", category: "chatbots-virtual-companions", subcategory: "ai-chatbot" },
      { id: "google-gemini", name: "Google Gemini", description: "Google's AI chatbot with multimodal capabilities", url: "", upvotes: 4123, verified: true, rating: 4.7, icon: "🔮", category: "chatbots-virtual-companions", subcategory: "ai-chatbot" },
      { id: "polybuzz-ai", addedDate: "2026-03-31", name: "PolyBuzz.ai", description: "AI chatbot for diverse conversations", url: "", upvotes: 2876, verified: true, rating: 4.6, icon: "🗨️", category: "chatbots-virtual-companions", subcategory: "ai-chatbot" },
      { id: "offline-chat", name: "Offline Chat: Private AI", description: "Private AI chatbot that works offline", url: "", upvotes: 2543, verified: true, rating: 4.5, icon: "🔒", category: "chatbots-virtual-companions", subcategory: "ai-chatbot" }
    ],
    "ai-dating-assistant": [
      { id: "roast-dating", name: "ROAST", description: "AI dating profile optimization and feedback", url: "", upvotes: 3124, verified: true, rating: 4.6, icon: "🔥", category: "chatbots-virtual-companions", subcategory: "ai-dating-assistant" },
      { id: "cheateye", name: "CheatEye", description: "AI dating conversation and advice assistant", url: "", upvotes: 2876, verified: true, rating: 4.5, icon: "👁️", category: "chatbots-virtual-companions", subcategory: "ai-dating-assistant" },
      { id: "tinderprofile-ai", name: "TinderProfile.ai", description: "AI Tinder profile creation and optimization", url: "", upvotes: 2543, verified: true, rating: 4.4, icon: "❤️", category: "chatbots-virtual-companions", subcategory: "ai-dating-assistant" },
      { id: "wingmanx", name: "WingmanX", description: "AI wingman for dating conversations", url: "", upvotes: 2321, verified: true, rating: 4.3, icon: "🕊️", category: "chatbots-virtual-companions", subcategory: "ai-dating-assistant" }
    ],
    "ai-girlfriend": [
      { id: "funtalk-ai", name: "FunTalk AI", description: "FunTalk AI is a fun playful companion chat platform offering lighthearted entertaining conversations", url: "https://www.funtalk.ai", upvotes: 2700, verified: false, rating: 4.2, icon: "😄", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "texthub-me", name: "TextHub", description: "TextHub offers natural flowing conversations with personalized AI characters across diverse personalities", url: "https://texthub.me", upvotes: 2400, verified: false, rating: 4.0, icon: "✉️", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "makegirl-ai", name: "MakeGirl AI", description: "MakeGirl AI lets users design their ideal AI girlfriend from scratch with full visual and personality customization", url: "https://www.makegirl.ai", upvotes: 2800, verified: false, rating: 4.2, icon: "🎨", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "solm8-ai", name: "Solm8 AI", description: "Solm8 AI focuses on friendship and emotional wellbeing offering supportive non-judgmental daily companionship", url: "https://solm8.ai", upvotes: 2600, verified: false, rating: 4.1, icon: "🤝", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "aicupid-net", name: "AICupid", description: "AICupid connects users with customizable AI partners for romantic conversations and relationship simulation", url: "https://aicupid.net", upvotes: 2500, verified: false, rating: 4.0, icon: "💘", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "intimate-ai-gf", name: "Intimate AI Girlfriend", description: "Intimate AI Girlfriend is a premium app with realistic voice calls photo sharing and personalized romantic conversations", url: "https://myintimate.app", upvotes: 3000, verified: false, rating: 4.4, icon: "💞", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "talkiemate", name: "TalkieMate", description: "TalkieMate is an AI companion chat platform for personality-driven conversations and roleplay", url: "https://talkiemate.com", upvotes: 2600, verified: false, rating: 4.1, icon: "💬", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "mygirl-ai", name: "MyGirl AI", description: "MyGirl AI is a dedicated AI girlfriend app offering personalized daily conversations and emotional support", url: "https://mygirl.tech", upvotes: 2700, verified: false, rating: 4.2, icon: "👧", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "fantasygf-ai", name: "FantasyGF AI", description: "FantasyGF AI is an AI girlfriend generator for creating custom fantasy companions with photo generation", url: "https://fantasygf.ai", upvotes: 3100, verified: false, rating: 4.3, icon: "✨", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "hot-talks-ai", name: "Hot Talks AI", description: "Hot Talks AI is an adult companion platform for intimate uncensored conversations with customizable AI girlfriends", url: "https://hottalks.ai", upvotes: 2600, verified: false, rating: 4.1, icon: "🔥", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "angel-ai", name: "Angel AI", description: "Angel AI is a warm supportive companion offering emotionally intelligent conversations and genuine care", url: "https://angel.ai", upvotes: 3000, verified: false, rating: 4.4, icon: "😇", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "virtugf", name: "VirtuGF", description: "VirtuGF is an AI virtual girlfriend with photo generation voice messages and deep roleplay capabilities", url: "https://virtugf.com", upvotes: 2800, verified: false, rating: 4.2, icon: "💕", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "avatar-one", name: "Avatar One", description: "Avatar One creates lifelike interactive digital partners with realistic facial expressions and voice", url: "https://www.avatar.one", upvotes: 2900, verified: false, rating: 4.3, icon: "🎭", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "wife-app", name: "Wife App", description: "Wife App simulates a caring wife companion with daily check-ins emotional support and personalized relationship dynamics", url: "https://wife.app", upvotes: 2700, verified: false, rating: 4.1, icon: "💍", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "aigirlfriends-ai", name: "AIGirlfriends AI", description: "AIGirlfriends AI is a polished AI companion app with voice calls image generation and video features", url: "https://aigirlfriends.ai", upvotes: 3300, verified: false, rating: 4.5, icon: "🌟", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "lovecore-ai", name: "Lovecore AI", description: "Lovecore AI is an intimate AI companion platform delivering emotionally rich romantic experiences", url: "https://lovecoreai.com", upvotes: 2800, verified: false, rating: 4.2, icon: "❤️", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "ai-girlfriend-com", name: "AI Girlfriend", description: "AI Girlfriend offers personalized AI companion experiences with natural conversation and emotional support", url: "https://aigirlfriend.com", upvotes: 3100, verified: false, rating: 4.3, icon: "💗", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "ai-girlfriend-wtf", name: "AI Girlfriend WTF", description: "AI Girlfriend WTF is a free AI girlfriend creator where users design their ideal virtual companion", url: "https://www.aigirlfriend.wtf", upvotes: 2900, verified: false, rating: 4.2, icon: "💝", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "ohchat", name: "OhChat", description: "OhChat is an AI companion platform featuring digital twins of real creators and superModel characters for uncensored interactions", url: "https://ohchat.com", upvotes: 3400, verified: false, rating: 4.4, icon: "💫", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2026-04-02" },
      { id: "promptchan-ai", addedDate: "2026-03-31", name: "Promptchan AI", description: "AI image generator for creating uncensored and anime-style characters with full customization", url: "https://promptchan.com", upvotes: 3800, verified: false, rating: 4.5, icon: "🎨", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "kindroid-ai", addedDate: "2026-03-31", name: "Kindroid AI", description: "AI companion with deep memory custom backstory and voice calls for meaningful relationships", url: "https://kindroid.ai", upvotes: 3600, verified: false, rating: 4.6, icon: "🤖", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "herahaven", addedDate: "2026-03-31", name: "HeraHaven", description: "Premium AI girlfriend platform with realistic conversations and deep emotional bonding", url: "https://herahaven.com", upvotes: 3300, verified: false, rating: 4.5, icon: "👑", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "nastia-ai", addedDate: "2026-03-31", name: "Nastia AI", description: "Uncensored AI companion for deep emotional and personal conversations without restrictions", url: "https://www.nastia.ai", upvotes: 3200, verified: false, rating: 4.4, icon: "🌹", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "uncensored-com", addedDate: "2026-03-31", name: "Uncensored AI", description: "Unrestricted AI companion platform for adult creative writing and character roleplay", url: "https://uncensored.com", upvotes: 3100, verified: false, rating: 4.3, icon: "🔓", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "nsfwlover", addedDate: "2026-03-31", name: "NSFWLover", description: "AI girlfriend platform with explicit content voice messages and intimate companion experiences", url: "https://www.nsfwlover.com", upvotes: 3000, verified: false, rating: 4.3, icon: "💋", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "romanticai", addedDate: "2026-03-31", name: "Romantic AI", description: "AI companion app focused on romantic relationships with voice chat and emotional connection", url: "https://romanticai.app", upvotes: 2900, verified: false, rating: 4.4, icon: "💌", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "funfun-ai", addedDate: "2026-03-31", name: "FunFun AI", description: "Creative AI companion platform for fun roleplay chat and AI image generation", url: "https://www.funfun.ai", upvotes: 2800, verified: false, rating: 4.2, icon: "🎉", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "kupid-ai", addedDate: "2026-03-31", name: "Kupid AI", description: "AI girlfriend platform with ultra-realistic conversations and customizable personality traits", url: "https://kupid.ai", upvotes: 2750, verified: false, rating: 4.4, icon: "💘", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "flipped-chat", addedDate: "2026-03-31", name: "Flipped Chat", description: "Reverse roleplay AI chat where AI drives narrative scenarios and you shape the story", url: "https://flipped.chat", upvotes: 2700, verified: false, rating: 4.2, icon: "🔄", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "muah-ai", addedDate: "2026-03-31", name: "Muah AI", description: "AI companion with photo sharing voice messages and uncensored intimate conversations", url: "https://muah.ai", upvotes: 2650, verified: false, rating: 4.3, icon: "💋", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "secret-desires-ai", addedDate: "2026-03-31", name: "Secret Desires AI", description: "Private AI girlfriend platform for discreet and personalized romantic companion experiences", url: "https://secretdesires.ai", upvotes: 2600, verified: false, rating: 4.2, icon: "🔐", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "infatuated-ai", addedDate: "2026-03-31", name: "Infatuated AI", description: "AI girlfriend simulator with emotional depth memory and personalized romantic experiences", url: "https://infatuated.ai", upvotes: 2500, verified: false, rating: 4.2, icon: "❤️", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "dreamgf-ai", addedDate: "2026-03-31", name: "DreamGF AI", description: "Create your perfect AI girlfriend from scratch with full appearance and personality customization", url: "https://dreamgf.ai", upvotes: 2450, verified: false, rating: 4.4, icon: "💝", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "craveu-ai", addedDate: "2026-03-31", name: "CraveU AI", description: "AI companion platform for intimate roleplay custom characters and voice interaction", url: "https://craveu.ai", upvotes: 2400, verified: false, rating: 4.2, icon: "🔥", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "flave-ai", addedDate: "2026-03-31", name: "Flave AI", description: "Personalized AI girlfriend with adaptive personality memory and engaging daily conversations", url: "https://www.flave.ai", upvotes: 2350, verified: false, rating: 4.1, icon: "🌺", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "nectar-ai", addedDate: "2026-03-31", name: "Nectar AI", description: "Premium AI companion with stunning visuals voice chat and deeply personalized interactions", url: "https://trynectar.ai", upvotes: 2300, verified: false, rating: 4.3, icon: "🍯", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "lustgf-ai", addedDate: "2026-03-31", name: "LustGF AI", description: "AI girlfriend platform for adult roleplay with fully customizable characters and scenarios", url: "https://www.lustgf.ai", upvotes: 2200, verified: false, rating: 4.1, icon: "💕", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "onlychar-ai", addedDate: "2026-03-31", name: "OnlyChar AI", description: "Create and chat with custom AI characters for immersive companion and roleplay experiences", url: "https://www.onlychar.ai", upvotes: 2150, verified: false, rating: 4.1, icon: "👤", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "ai-girlfriend-alice", addedDate: "2026-03-31", name: "AI Girlfriend Alice", description: "Dedicated AI girlfriend app with sweet personality daily conversations and emotional support", url: "https://aigirl.one", upvotes: 2100, verified: false, rating: 4.2, icon: "👧", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "girlfriendly-ai", addedDate: "2026-03-31", name: "Girlfriendly AI", description: "Safe and fun AI girlfriend platform for casual companionship and daily chat", url: "https://girlfriendly.ai", upvotes: 2050, verified: false, rating: 4.1, icon: "💗", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "gening-ai", addedDate: "2026-03-31", name: "Gening AI", description: "AI image and companion generation platform for creating custom virtual girlfriends", url: "https://www.gening.ai", upvotes: 2000, verified: false, rating: 4.0, icon: "✨", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "ai-allure", addedDate: "2026-03-31", name: "AI Allure", description: "Luxury AI companion experience with photorealistic characters and premium conversation quality", url: "https://www.aiallure.com", upvotes: 1950, verified: false, rating: 4.2, icon: "💫", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "chatsweetie", addedDate: "2026-03-31", name: "ChatSweetie", description: "Sweet and caring AI girlfriend for wholesome daily conversations and emotional companionship", url: "https://chatsweetie.ai", upvotes: 1900, verified: false, rating: 4.1, icon: "🍬", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "aicupid", addedDate: "2026-03-31", name: "AICupid", description: "AI dating companion platform for practicing social skills and enjoying romantic conversations", url: "https://www.aicupid.org", upvotes: 1850, verified: false, rating: 4.0, icon: "💘", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "erogen-ai", addedDate: "2026-03-31", name: "Erogen AI", description: "Adult AI companion platform with unrestricted roleplay and customizable intimate characters", url: "https://erogen.ai", upvotes: 1800, verified: false, rating: 4.0, icon: "🌙", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "mybabes-ai", addedDate: "2026-03-31", name: "MyBabes AI", description: "Advanced AI companion platform with video generation, image creation and deep roleplay", url: "https://mybabes.ai", upvotes: 3200, verified: true, rating: 4.5, icon: "💝", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "candy-ai", name: "Candy AI", description: "AI companion for chat, video, voice, and character creation", url: "https://candy.ai", upvotes: 3980, verified: true, rating: 4.8, icon: "🍬", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "2024-11-19" },
      { id: "lovescape", name: "LOVESCAPE", description: "AI girlfriend with immersive experiences", url: "", upvotes: 3789, verified: true, rating: 4.8, icon: "💖", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "joi-ai", name: "Joi AI", description: "Create your own AI girlfriend and enjoy natural, meaningful conversations", url: "https://joi.com/", upvotes: 3600, verified: true, rating: 4.75, icon: "💝", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend", addedDate: "Nov 21, 2025" },
      { id: "juicychat-ai", name: "JuicyChat.AI", description: "AI girlfriend chat with premium features", url: "", upvotes: 3456, verified: true, rating: 4.7, icon: "🍑", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "girlfriendgpt", name: "GirlfriendGPT", description: "AI girlfriend powered by advanced language models", url: "", upvotes: 3124, verified: true, rating: 4.6, icon: "💕", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "kindroid", name: "Kindroid", description: "AI girlfriend with emotional connection", url: "", upvotes: 2876, verified: true, rating: 4.5, icon: "🤖", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" },
      { id: "golove", name: "GoLove", description: "AI girlfriend dating and relationship simulator", url: "", upvotes: 2543, verified: true, rating: 4.4, icon: "💘", category: "chatbots-virtual-companions", subcategory: "ai-girlfriend" }
    ],
    "ai-joke": [
      { id: "roastedby-ai", name: "Roastedby.ai", description: "AI roast and joke generation platform", url: "", upvotes: 2876, verified: true, rating: 4.6, icon: "🔥", category: "chatbots-virtual-companions", subcategory: "ai-joke" },
      { id: "ai-roast-generator", name: "AI Roast Generator", description: "Generate AI-powered roasts and comebacks", url: "", upvotes: 2543, verified: true, rating: 4.5, icon: "😂", category: "chatbots-virtual-companions", subcategory: "ai-joke" },
      { id: "punchlines-ai", name: "punchlines.ai", description: "AI joke and punchline generator", url: "", upvotes: 2321, verified: true, rating: 4.4, icon: "🎭", category: "chatbots-virtual-companions", subcategory: "ai-joke" },
      { id: "uncle-ai", name: "Uncle A.I.", description: "AI uncle with dad jokes and humor", url: "", upvotes: 1987, verified: true, rating: 4.3, icon: "👨‍🦳", category: "chatbots-virtual-companions", subcategory: "ai-joke" },
      { id: "ai-roastbot", name: "AI RoastBot", description: "AI bot specialized in roasts and burns", url: "", upvotes: 1765, verified: true, rating: 4.2, icon: "🤖", category: "chatbots-virtual-companions", subcategory: "ai-joke" }
    ],
    "ai-roleplay": [
      { id: "janitor-ai-roleplay", name: "Janitor AI", description: "AI roleplay platform with diverse scenarios", url: "", upvotes: 3789, verified: true, rating: 4.8, icon: "🎪", category: "chatbots-virtual-companions", subcategory: "ai-roleplay" },
      { id: "eroplay-ai", name: "EroPlay.ai", description: "AI adult roleplay and fantasy platform", url: "", upvotes: 3456, verified: true, rating: 4.7, icon: "🌹", category: "chatbots-virtual-companions", subcategory: "ai-roleplay" },
      { id: "dream-companion", name: "Dream Companion", description: "AI roleplay companion for fantasy scenarios", url: "", upvotes: 3124, verified: true, rating: 4.6, icon: "✨", category: "chatbots-virtual-companions", subcategory: "ai-roleplay" },
      { id: "tipsy-chat", name: "Tipsy Chat", description: "AI roleplay with relaxed conversations", url: "", upvotes: 2876, verified: true, rating: 4.5, icon: "🍷", category: "chatbots-virtual-companions", subcategory: "ai-roleplay" },
      { id: "talkie-ai-roleplay", name: "Talkie AI", description: "AI roleplay with voice and text interaction", url: "", upvotes: 2543, verified: true, rating: 4.4, icon: "🎯", category: "chatbots-virtual-companions", subcategory: "ai-roleplay" }
    ],
    "dirty-talking-ai": [
      { id: "aiallure", name: "aiAllure", description: "AI adult conversation and intimacy platform", url: "", upvotes: 3456, verified: true, rating: 4.7, icon: "💋", category: "chatbots-virtual-companions", subcategory: "dirty-talking-ai" },
      { id: "bloom-ai", name: "BLOOM", description: "AI intimate conversation and companionship", url: "", upvotes: 3124, verified: true, rating: 4.6, icon: "🌺", category: "chatbots-virtual-companions", subcategory: "dirty-talking-ai" },
      { id: "dirtytalking-ai", name: "DirtyTalking.ai", description: "AI platform for adult conversations", url: "", upvotes: 2876, verified: true, rating: 4.5, icon: "🔥", category: "chatbots-virtual-companions", subcategory: "dirty-talking-ai" },
      { id: "naughtybot", name: "NaughtyBot", description: "AI bot for playful adult conversations", url: "", upvotes: 2543, verified: true, rating: 4.4, icon: "😈", category: "chatbots-virtual-companions", subcategory: "dirty-talking-ai" },
      { id: "erotix", name: "ErotiX", description: "AI erotic conversation and roleplay platform", url: "", upvotes: 2321, verified: true, rating: 4.3, icon: "🖤", category: "chatbots-virtual-companions", subcategory: "dirty-talking-ai" }
    ]
  },

  "image-analysis": {
    "ai-describe-image": [
      { id: "framed-ai", name: "Framed - AI Art Audio Guide", description: "AI audio descriptions for artwork", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "🎨", category: "image-analysis", subcategory: "ai-describe-image" },
      { id: "ai-scientific-figure", name: "AI-Driven scientific figure understanding", description: "AI analysis of scientific figures and diagrams", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🔬", category: "image-analysis", subcategory: "ai-describe-image" },
      { id: "craion-kids", name: "crAion: Kids Drawings Analysis", description: "AI analysis of children's drawings", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "🖍️", category: "image-analysis", subcategory: "ai-describe-image" },
    ],
    "ai-face-analyzer": [
      { id: "faceflow", name: "FaceFlow", description: "AI facial feature analysis platform", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "😊", category: "image-analysis", subcategory: "ai-face-analyzer" },
      { id: "facesymai", name: "FaceSymAI", description: "AI facial symmetry analysis tool", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "🎭", category: "image-analysis", subcategory: "ai-face-analyzer" },
      { id: "face-age-ai", name: "Face Age AI", description: "AI age detection from facial features", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "👴", category: "image-analysis", subcategory: "ai-face-analyzer" },
      { id: "eye-shape-ai", name: "Eye Shape AI", description: "AI eye shape analysis and classification", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "👁️", category: "image-analysis", subcategory: "ai-face-analyzer" }
    ],
    "ai-face-recognition": [
      { id: "onfido", name: "Onfido", description: "AI identity verification and face recognition", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🔐", category: "image-analysis", subcategory: "ai-face-recognition" },
      { id: "shufti", name: "Shufti", description: "AI KYC verification with face recognition", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "✅", category: "image-analysis", subcategory: "ai-face-recognition" },
      { id: "facesymai-recognition", name: "FaceSymAI", description: "AI facial recognition technology", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "🤖", category: "image-analysis", subcategory: "ai-face-recognition" }
    ],
    "ai-image-recognition": [
      { id: "ultralytics", name: "Ultralytics", description: "AI computer vision and object detection", url: "", upvotes: 3456, verified: true, rating: 4.8, icon: "🤖", category: "image-analysis", subcategory: "ai-image-recognition" },
      { id: "plantnet", name: "Pl@ntNet", description: "AI plant identification from images", url: "", upvotes: 3124, verified: true, rating: 4.7, icon: "🌿", category: "image-analysis", subcategory: "ai-image-recognition" },
      { id: "plantin", name: "PlantIn", description: "AI plant care and identification app", url: "", upvotes: 2876, verified: true, rating: 4.6, icon: "🪴", category: "image-analysis", subcategory: "ai-image-recognition" },
      { id: "driver-i-ai", name: "Driver•i AI Fleet Camera System", description: "AI dash cam for fleet management", url: "", upvotes: 2543, verified: true, rating: 4.5, icon: "🚗", category: "image-analysis", subcategory: "ai-image-recognition" },
      { id: "frigate-nvr", name: "Frigate NVR", description: "AI object detection for security cameras", url: "", upvotes: 2321, verified: true, rating: 4.4, icon: "📹", category: "image-analysis", subcategory: "ai-image-recognition" }
    ],
    "ai-image-scanning": [
      { id: "allerwell", name: "Allerwell", description: "AI food label scanner for allergies", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "🏷️", category: "image-analysis", subcategory: "ai-image-scanning" },
      { id: "loti-ai", name: "Loti AI", description: "AI image scanning for content protection", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🛡️", category: "image-analysis", subcategory: "ai-image-scanning" },
      { id: "breed-dog", name: "Breed.dog", description: "AI dog breed identification from photos", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "🐕", category: "image-analysis", subcategory: "ai-image-scanning" },
      { id: "mealsnap", name: "MealSnap: AI meal log journal", description: "AI food photo recognition and logging", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "🍽️", category: "image-analysis", subcategory: "ai-image-scanning" },
      { id: "caralyze", name: "Caralyze", description: "AI vehicle damage assessment scanner", url: "", upvotes: 1543, verified: true, rating: 4.2, icon: "🚙", category: "image-analysis", subcategory: "ai-image-scanning" }
    ],
    "ai-image-segmentation": [
      { id: "meta-sam2", name: "Meta Segment Anything Model 2", description: "Advanced AI image segmentation model", url: "", upvotes: 3789, verified: true, rating: 4.9, icon: "🎯", category: "image-analysis", subcategory: "ai-image-segmentation" },
      { id: "segment-anything-meta", name: "Segment Anything | Meta AI", description: "Meta's AI segmentation technology", url: "", upvotes: 3456, verified: true, rating: 4.8, icon: "✂️", category: "image-analysis", subcategory: "ai-image-segmentation" },
      { id: "flypix-ai", name: "FlyPix AI", description: "AI aerial image segmentation platform", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "🛸", category: "image-analysis", subcategory: "ai-image-segmentation" },
      { id: "rsip-vision", name: "RSIP Vision", description: "AI medical image segmentation", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "🏥", category: "image-analysis", subcategory: "ai-image-segmentation" },
      { id: "segment-anything-sam", name: "Segment Anything Model (SAM)", description: "Open-source AI segmentation model", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🔪", category: "image-analysis", subcategory: "ai-image-segmentation" }
    ],
    "ai-ocr": [
      { id: "pdnob-translator", name: "PDNob Image Translator", description: "AI OCR with translation capabilities", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🌐", category: "image-analysis", subcategory: "ai-ocr" },
      { id: "lightpdf", name: "LightPDF", description: "AI PDF OCR and document conversion", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "📑", category: "image-analysis", subcategory: "ai-ocr" }
    ],
    "image-to-prompt": [
      { id: "midjourneysref", name: "Midjourneysref", description: "AI prompt generator for Midjourney images", url: "", upvotes: 2432, verified: true, rating: 4.6, icon: "🎨", category: "image-analysis", subcategory: "image-to-prompt" },
      { id: "copycoder", name: "CopyCoder", description: "AI image to code and prompt generator", url: "", upvotes: 1876, verified: true, rating: 4.4, icon: "💻", category: "image-analysis", subcategory: "image-to-prompt" },
      { id: "image-to-prompt-pro", name: "Image to Prompt Pro", description: "Professional AI image prompt extraction", url: "", upvotes: 1654, verified: true, rating: 4.3, icon: "⚡", category: "image-analysis", subcategory: "image-to-prompt" }
    ]
  },

  "interior-architectural-design": {
    "ai-backyard-design": [
      { id: "neighborbrite", name: "Neighborbrite", description: "AI-powered backyard design and landscaping tool", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🏡", category: "interior-architectural-design", subcategory: "ai-backyard-design" },
      { id: "dreamzar-app", name: "DreamzAR App", description: "Augmented reality backyard design application", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📱", category: "interior-architectural-design", subcategory: "ai-backyard-design" },
      { id: "dreamzar", name: "DreamzAR", description: "AR-powered backyard visualization platform", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🔮", category: "interior-architectural-design", subcategory: "ai-backyard-design" },
      { id: "rescape-ai", name: "Rescape AI", description: "AI backyard and outdoor space design", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🌿", category: "interior-architectural-design", subcategory: "ai-backyard-design" },
      { id: "pool-planner-ai", name: "Pool Planner AI", description: "AI-powered swimming pool design tool", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "🏊", category: "interior-architectural-design", subcategory: "ai-backyard-design" }
    ],
    "ai-floor-plan-generator": [
      { id: "coohom", name: "Coohom", description: "AI-powered interior design and floor planning", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🏠", category: "interior-architectural-design", subcategory: "ai-floor-plan-generator" },
      { id: "maket", name: "Maket", description: "AI-driven floor plan generation platform", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🗺️", category: "interior-architectural-design", subcategory: "ai-floor-plan-generator" },
      { id: "getfloorplan", name: "Getfloorplan", description: "Simple AI floor plan generation tool", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "📋", category: "interior-architectural-design", subcategory: "ai-floor-plan-generator" }
    ],
    "ai-interior-design": [
      { id: "coohom-interior", name: "Coohom", description: "Complete AI interior design solution", url: "", upvotes: 1687, verified: true, rating: 4.8, icon: "🏠", category: "interior-architectural-design", subcategory: "ai-interior-design" },
      { id: "roomgpt", name: "RoomGPT", description: "AI room design and renovation tool", url: "", upvotes: 1432, verified: true, rating: 4.7, icon: "🛋️", category: "interior-architectural-design", subcategory: "ai-interior-design" },
      { id: "foyr-neo", name: "Foyr Neo", description: "Professional AI interior design platform", url: "", upvotes: 1298, verified: true, rating: 4.6, icon: "🎨", category: "interior-architectural-design", subcategory: "ai-interior-design" },
      { id: "homevisualizer-ai", name: "HomeVisualizer.AI", description: "AI-powered home visualization tool", url: "", upvotes: 1156, verified: true, rating: 4.5, icon: "👁️", category: "interior-architectural-design", subcategory: "ai-interior-design" },
      { id: "mnml-ai", name: "mnml.ai", description: "Minimalist AI interior design assistant", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "◽", category: "interior-architectural-design", subcategory: "ai-interior-design" }
    ],
    "ai-kitchen-design": [
      { id: "kitchengpt", name: "KitchenGPT", description: "AI kitchen design and layout tool", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🍳", category: "interior-architectural-design", subcategory: "ai-kitchen-design" },
      { id: "myarchitectai", name: "MyArchitectAI", description: "AI-powered kitchen architectural design", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🏗️", category: "interior-architectural-design", subcategory: "ai-kitchen-design" },
      { id: "spacely-ai", name: "Spacely AI", description: "AI kitchen space planning and design", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🏠", category: "interior-architectural-design", subcategory: "ai-kitchen-design" },
      { id: "ai-two", name: "AI Two", description: "Dual AI kitchen design assistant", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "2️⃣", category: "interior-architectural-design", subcategory: "ai-kitchen-design" },
      { id: "arcadium", name: "Arcadium", description: "AI kitchen and interior design platform", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "🏛️", category: "interior-architectural-design", subcategory: "ai-kitchen-design" }
    ],
    "ai-landscape-generator": [
      { id: "renovate-ai", name: "Renovate AI", description: "AI landscape design and renovation", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "🌳", category: "interior-architectural-design", subcategory: "ai-landscape-generator" },
      { id: "dreamzar-app-landscape", name: "DreamzAR App", description: "AR landscape design application", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "📱", category: "interior-architectural-design", subcategory: "ai-landscape-generator" },
      { id: "ai-garden-design", name: "AI Garden Design by Ogrovision", description: "Professional AI garden design tool", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "🌺", category: "interior-architectural-design", subcategory: "ai-landscape-generator" },
      { id: "landscapedesignsai", name: "LandscapeDesignsAI", description: "AI-powered landscape design generator", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🏞️", category: "interior-architectural-design", subcategory: "ai-landscape-generator" },
      { id: "landscapingai", name: "LandscapingAI", description: "AI landscaping design and planning", url: "", upvotes: 754, verified: true, rating: 4.2, icon: "🌱", category: "interior-architectural-design", subcategory: "ai-landscape-generator" }
    ],
    "ai-room-planner": [
      { id: "roomgpt-planner", name: "RoomGPT", description: "AI room planning and design tool", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🛋️", category: "interior-architectural-design", subcategory: "ai-room-planner" },
      { id: "ai-room-planner", name: "AI Room Planner", description: "Professional AI room planning platform", url: "", upvotes: 1432, verified: true, rating: 4.6, icon: "📐", category: "interior-architectural-design", subcategory: "ai-room-planner" },
      { id: "interior-ai", name: "Interior AI", description: "AI interior design and room planning", url: "", upvotes: 1298, verified: true, rating: 4.5, icon: "🏠", category: "interior-architectural-design", subcategory: "ai-room-planner" },
      { id: "luw-ai", name: "Luw.ai", description: "Smart AI room layout planner", url: "", upvotes: 1156, verified: true, rating: 4.4, icon: "💡", category: "interior-architectural-design", subcategory: "ai-room-planner" },
      { id: "room-ai", name: "Room AI", description: "AI-powered room design assistant", url: "", upvotes: 987, verified: true, rating: 4.3, icon: "🏡", category: "interior-architectural-design", subcategory: "ai-room-planner" }
    ]
  },

  "research-data-analysis": {
    "ai-data-mining": [

      { id: "firecrawl", name: "Firecrawl", description: "AI web scraping and data mining platform", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "🔍", category: "research-data-analysis", subcategory: "ai-data-mining" },
      { id: "idox-ai", name: "iDox.ai", description: "AI document analysis and data mining", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "📊", category: "research-data-analysis", subcategory: "ai-data-mining" },
      { id: "infranodus", name: "InfraNodus", description: "AI text network analysis and data mining", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🕸️", category: "research-data-analysis", subcategory: "ai-data-mining" },
      { id: "docugami", name: "Docugami", description: "AI document understanding and data extraction", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "📄", category: "research-data-analysis", subcategory: "ai-data-mining" },
      { id: "graphite-note", name: "Graphite Note", description: "AI predictive analytics and data mining", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "📈", category: "research-data-analysis", subcategory: "ai-data-mining" }
    ],
    "ai-for-data-analytics": [
      { id: "julius-ai-analytics", name: "Julius AI", description: "AI data analyst for business intelligence", url: "", upvotes: 2432, verified: true, rating: 4.5, icon: "📊", category: "research-data-analysis", subcategory: "ai-for-data-analytics" },
      { id: "eos-data-analytics", name: "EOS Data Analytics (EOSDA)", description: "AI satellite data analytics platform", url: "", upvotes: 1876, verified: true, rating: 4.3, icon: "🛰️", category: "research-data-analysis", subcategory: "ai-for-data-analytics" },
      { id: "veo-analytics", name: "Veo", description: "AI sports performance data analytics", url: "", upvotes: 1654, verified: true, rating: 4.2, icon: "⚽", category: "research-data-analysis", subcategory: "ai-for-data-analytics" }
    ],
    "ai-papers": [
      { id: "paperguide", name: "Paperguide", description: "AI research paper writing and analysis", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "📝", category: "research-data-analysis", subcategory: "ai-papers" },
      { id: "yomu-ai", name: "Yomu AI", description: "AI academic writing and paper assistant", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "✍️", category: "research-data-analysis", subcategory: "ai-papers" },
      { id: "scholarai", name: "ScholarAI", description: "AI academic research and paper finder", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🎓", category: "research-data-analysis", subcategory: "ai-papers" },
      { id: "zeli-app", name: "Zeli.app", description: "AI paper summarization and analysis", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "📑", category: "research-data-analysis", subcategory: "ai-papers" },
      { id: "goatstack-ai", name: "GoatStack.AI", description: "AI research paper collaboration platform", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "🐐", category: "research-data-analysis", subcategory: "ai-papers" }
    ],
    "ai-predictions": [
      { id: "tarotoo", name: "Tarotoo", description: "AI tarot card predictions and readings", url: "", upvotes: 2432, verified: true, rating: 4.5, icon: "🔮", category: "research-data-analysis", subcategory: "ai-predictions" },
      { id: "hint-predictions", name: "Hint", description: "AI predictive analytics and forecasting", url: "", upvotes: 2298, verified: true, rating: 4.4, icon: "💡", category: "research-data-analysis", subcategory: "ai-predictions" },
      { id: "tarotap", name: "Tarotap", description: "AI-powered tarot predictions and insights", url: "", upvotes: 1876, verified: true, rating: 4.3, icon: "🃏", category: "research-data-analysis", subcategory: "ai-predictions" },
      { id: "lyzr", name: "Lyzr", description: "AI business predictions and analytics", url: "", upvotes: 1654, verified: true, rating: 4.2, icon: "📊", category: "research-data-analysis", subcategory: "ai-predictions" },
      { id: "altindex", name: "AltIndex", description: "AI alternative investment predictions", url: "", upvotes: 1432, verified: true, rating: 4.1, icon: "📈", category: "research-data-analysis", subcategory: "ai-predictions" }
    ],
    "ai-research-papers": [
      { id: "researchrabbit", name: "ResearchRabbit", description: "AI research paper discovery and networking", url: "", upvotes: 3124, verified: true, rating: 4.8, icon: "🐰", category: "research-data-analysis", subcategory: "ai-research-papers" },
      { id: "centre-governance-ai", name: "Centre for the Governance of AI", description: "AI governance research and policy papers", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "🏛️", category: "research-data-analysis", subcategory: "ai-research-papers" },
      { id: "blainy", name: "Blainy", description: "AI research paper writing and editing", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "📖", category: "research-data-analysis", subcategory: "ai-research-papers" },
      { id: "explainpaper", name: "Explainpaper", description: "AI research paper explanation and summary", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "💬", category: "research-data-analysis", subcategory: "ai-research-papers" },
      { id: "illuminate", name: "Illuminate", description: "AI research insights and paper analysis", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "💡", category: "research-data-analysis", subcategory: "ai-research-papers" }
    ],
    "ai-research-tool": [
      { id: "prolific", name: "Prolific", description: "AI-powered research participant platform", url: "", upvotes: 2654, verified: true, rating: 4.6, icon: "👥", category: "research-data-analysis", subcategory: "ai-research-tool" },
      { id: "glasp", name: "Glasp", description: "AI research highlighting and note-taking", url: "", upvotes: 2432, verified: true, rating: 4.5, icon: "✨", category: "research-data-analysis", subcategory: "ai-research-tool" },
      { id: "branded", name: "Branded", description: "AI market research and brand analysis", url: "", upvotes: 2298, verified: true, rating: 4.4, icon: "🏷️", category: "research-data-analysis", subcategory: "ai-research-tool" },
      { id: "semantic-scholar", name: "Semantic Scholar", description: "AI academic search and research platform", url: "", upvotes: 1876, verified: true, rating: 4.3, icon: "🔍", category: "research-data-analysis", subcategory: "ai-research-tool" },
      { id: "elicit", name: "Elicit", description: "AI research assistant for literature review", url: "", upvotes: 1654, verified: true, rating: 4.2, icon: "🧠", category: "research-data-analysis", subcategory: "ai-research-tool" },
      { id: "unriddle-ai", name: "Unriddle Ai", description: "AI workspace for exploring ideas and enhancing writing", url: "https://anara.com/?via=toolprimesot", addedDate: "2025-11-28", upvotes: 1432, verified: true, rating: 4.5, icon: "📚", category: "research-data-analysis", subcategory: "ai-research-tool" }
    ],
    "ai-sports-betting": [
      { id: "rithmm", name: "Rithmm", description: "AI sports betting analytics and predictions", url: "", upvotes: 2876, verified: true, rating: 4.7, icon: "🎯", category: "research-data-analysis", subcategory: "ai-sports-betting" },
      { id: "betharmony", name: "BetHarmony", description: "AI sports betting optimization platform", url: "", upvotes: 2543, verified: true, rating: 4.6, icon: "⚡", category: "research-data-analysis", subcategory: "ai-sports-betting" },
      { id: "sports-ai", name: "Sports AI", description: "AI sports analytics and betting insights", url: "", upvotes: 2321, verified: true, rating: 4.5, icon: "🏆", category: "research-data-analysis", subcategory: "ai-sports-betting" },
      { id: "numbers-game", name: "Numbers Game", description: "AI sports betting number analysis", url: "", upvotes: 1987, verified: true, rating: 4.4, icon: "🔢", category: "research-data-analysis", subcategory: "ai-sports-betting" },
      { id: "mysports-ai", name: "Mysports AI", description: "Personalized AI sports betting assistant", url: "", upvotes: 1765, verified: true, rating: 4.3, icon: "🎲", category: "research-data-analysis", subcategory: "ai-sports-betting" }
    ],
    "ai-sports-predictions": [
      { id: "nerdytips", name: "NerdyTips", description: "AI sports predictions and betting tips", url: "", upvotes: 2654, verified: true, rating: 4.6, icon: "🤓", category: "research-data-analysis", subcategory: "ai-sports-predictions" },
      { id: "best-bike-split", name: "Best Bike Split", description: "AI cycling performance predictions", url: "", upvotes: 2432, verified: true, rating: 4.5, icon: "🚴", category: "research-data-analysis", subcategory: "ai-sports-predictions" },
      { id: "sports-ai-predictions", name: "Sports AI", description: "AI sports outcome predictions platform", url: "", upvotes: 2298, verified: true, rating: 4.4, icon: "⚽", category: "research-data-analysis", subcategory: "ai-sports-predictions" },
      { id: "rithmm-predictions", name: "Rithmm", description: "AI sports betting predictions and analytics", url: "", upvotes: 1876, verified: true, rating: 4.3, icon: "📊", category: "research-data-analysis", subcategory: "ai-sports-predictions" },
      { id: "xaslarbet", name: "Xaslarbet", description: "AI sports predictions and match analysis", url: "", upvotes: 1654, verified: true, rating: 4.2, icon: "🎰", category: "research-data-analysis", subcategory: "ai-sports-predictions" }
    ]
  },

  "other": {
    "ai-game-generator": [
      { id: "stosh", name: "Stosh", description: "Stosh is an AI-powered TV show discovery and recommendation platform that helps users find their next favorite series based on their viewing history and preferences", url: "https://stosh.com", upvotes: 567, verified: false, rating: 4.1, icon: "📺", category: "other", subcategory: "ai-recommendation", addedDate: "2026-04-03" },
      { id: "rosebud-ai-game", name: "Rosebud AI", description: "AI-powered game generation and development platform", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🌹", category: "other", subcategory: "ai-game-generator" },
      { id: "ludo-ai", name: "Ludo.ai", description: "AI game design and concept generator", url: "", upvotes: 1876, verified: true, rating: 4.7, icon: "🎮", category: "other", subcategory: "ai-game-generator" },
      { id: "websim", name: "Websim", description: "AI-powered web-based game simulator", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🌐", category: "other", subcategory: "ai-game-generator" },
      { id: "ai-minecraft-game", name: "AI Minecraft", description: "AI-generated Minecraft game content", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "⛏️", category: "other", subcategory: "ai-game-generator" },
      { id: "rosebud-ai-minecraft", name: "Rosebud AI", description: "AI Minecraft content generator", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🌹", category: "other", subcategory: "ai-game-generator" }
    ],
    "ai-games": [
      { id: "easysbc", name: "EasySBC", description: "AI-powered FIFA SBC solver and game assistant", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "⚽", category: "other", subcategory: "ai-games" },
      { id: "aimlabs", name: "Aimlabs", description: "AI training platform for FPS gaming", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎯", category: "other", subcategory: "ai-games" },
      { id: "human-or-not", name: "Human or Not", description: "AI detection game and social experiment", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🤖", category: "other", subcategory: "ai-games" },
      { id: "your-gg", name: "YOUR.GG", description: "AI gaming performance analytics", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "📊", category: "other", subcategory: "ai-games" },
      { id: "ai-realm", name: "AI Realm", description: "AI-powered gaming universe and platform", url: "", upvotes: 1543, verified: true, rating: 4.4, icon: "🏰", category: "other", subcategory: "ai-games" }
    ],
    "ai-models": [
      { id: "google-ai-developers", name: "Google AI for Developers", description: "Google's AI models and development tools", url: "", upvotes: 3456, verified: true, rating: 4.9, icon: "🔬", category: "other", subcategory: "ai-models" },
      { id: "civitai", name: "Civitai", description: "Community-driven AI model sharing platform", url: "https://civitai.com", upvotes: 2987, verified: true, rating: 4.8, icon: "🎨", category: "other", subcategory: "ai-models" },
      { id: "minimax", name: "MiniMax", description: "Advanced AI model development platform", url: "", upvotes: 2156, verified: true, rating: 4.6, icon: "🔄", category: "other", subcategory: "ai-models" },
      { id: "google-ai-studio", name: "Google AI Studio", description: "Google's AI model development environment", url: "https://aistudio.google.com", upvotes: 1987, verified: true, rating: 4.5, icon: "🎬", category: "other", subcategory: "ai-models" }
    ],
    "ai-poker": [
      { id: "pairrd", name: "Pairrd", description: "AI poker strategy and analysis platform", url: "", upvotes: 1876, verified: true, rating: 4.7, icon: "♠️", category: "other", subcategory: "ai-poker" },
      { id: "poker-bot-ai", name: "Poker Bot AI+", description: "Advanced AI poker bot and assistant", url: "", upvotes: 1654, verified: true, rating: 4.6, icon: "🤖", category: "other", subcategory: "ai-poker" },
      { id: "pokergpt", name: "PokerGPT", description: "AI poker advisor powered by GPT technology", url: "", upvotes: 1432, verified: true, rating: 4.5, icon: "🎰", category: "other", subcategory: "ai-poker" },
      { id: "hybrid-poker", name: "Hybrid Poker", description: "AI-human hybrid poker platform", url: "", upvotes: 1298, verified: true, rating: 4.4, icon: "🔀", category: "other", subcategory: "ai-poker" },
      { id: "rta-poker", name: "RTA.POKER", description: "Real-time AI poker assistance", url: "", upvotes: 1156, verified: true, rating: 4.3, icon: "⏱️", category: "other", subcategory: "ai-poker" }
    ],
    "ai-robot": [
      { id: "covariant", name: "Covariant", description: "AI robotics for warehouse automation", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "🤖", category: "other", subcategory: "ai-robot" },
      { id: "sanctuary-ai", name: "Sanctuary AI", description: "General-purpose humanoid robots", url: "", upvotes: 2012, verified: true, rating: 4.6, icon: "🏛️", category: "other", subcategory: "ai-robot" },
      { id: "folotoy", name: "FOLOTOY", description: "AI companion robot toy platform", url: "", upvotes: 1789, verified: true, rating: 4.5, icon: "🧸", category: "other", subcategory: "ai-robot" },
      { id: "furhat-robotics", name: "Furhat Robotics", description: "Social robotics with AI conversation", url: "", upvotes: 1567, verified: true, rating: 4.4, icon: "👤", category: "other", subcategory: "ai-robot" }
    ],
    "ai-tools-directory": [
      { id: "sourcenext", name: "Sourcenext", description: "Comprehensive AI tools directory", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "📚", category: "other", subcategory: "ai-tools-directory" },
      { id: "miniapps-ai", name: "miniapps.ai", description: "Curated collection of AI mini-applications", url: "", upvotes: 1765, verified: true, rating: 4.6, icon: "📱", category: "other", subcategory: "ai-tools-directory" },
      { id: "chad-ai", name: "Chad AI", description: "AI tools discovery and comparison platform", url: "", upvotes: 1543, verified: true, rating: 4.5, icon: "💪", category: "other", subcategory: "ai-tools-directory" },
      { id: "globalgpt", name: "GlobalGPT", description: "Global directory of GPT and AI tools", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "🌍", category: "other", subcategory: "ai-tools-directory" },
      { id: "easy-with-ai", name: "Easy With AI", description: "Simple AI tools directory and guides", url: "", upvotes: 1321, verified: true, rating: 4.3, icon: "✨", category: "other", subcategory: "ai-tools-directory" }
    ],
    "large-language-models": [
      { id: "deepseek", name: "DeepSeek", description: "Advanced large language model platform", url: "https://deepseek.com", upvotes: 3456, verified: true, rating: 4.9, icon: "🔍", category: "other", subcategory: "large-language-models" },
      { id: "minimax-llm", name: "MiniMax", description: "Efficient large language model solution", url: "", upvotes: 3234, verified: true, rating: 4.8, icon: "🔄", category: "other", subcategory: "large-language-models" },
      { id: "offline-chat-llm", name: "Offline Chat: Private AI", description: "Private offline large language model", url: "", upvotes: 2987, verified: true, rating: 4.7, icon: "🔒", category: "other", subcategory: "large-language-models" },
      { id: "google-gemini-llm", name: "Google Gemini", description: "Google's multimodal large language model", url: "https://gemini.google.com", upvotes: 2765, verified: true, rating: 4.6, icon: "💎", category: "other", subcategory: "large-language-models" },
      { id: "poe", name: "Poe", description: "Access to multiple language models in one platform", url: "", upvotes: 2543, verified: true, rating: 4.5, icon: "🎭", category: "other", subcategory: "large-language-models" }
    ],
    "minecraft-ai": [
      { id: "skingenerator-io", name: "SkinGenerator.io", description: "AI Minecraft skin generator", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🎨", category: "other", subcategory: "minecraft-ai" },
      { id: "minecraft-plot", name: "Minecraft Plot", description: "AI story and plot generator for Minecraft", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "📖", category: "other", subcategory: "minecraft-ai" },
      { id: "ai-minecraft-mc", name: "AI Minecraft", description: "AI assistant for Minecraft gameplay", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "⛏️", category: "other", subcategory: "minecraft-ai" },
      { id: "olc-bedrock-dev", name: "OLC Bedrock Dev Helper", description: "AI development assistant for Minecraft Bedrock", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "🔧", category: "other", subcategory: "minecraft-ai" }
    ],
    "nsfw": [
      { id: "ai-futanari", name: "AI Futanari", description: "AI Futanari is an adult AI image generation platform specializing in creating high-quality futanari and fantasy character artwork from text prompts with extensive customization options", url: "", upvotes: 1800, verified: false, rating: 4.1, icon: "🔞", category: "image-generation-editing", subcategory: "nsfw", addedDate: "2026-04-01" },
      { id: "generatorfuta-ai", name: "GeneratorFuta AI", description: "GeneratorFuta AI is a specialized adult AI art generator for creating custom futanari character illustrations with detailed style controls and high-quality image output", url: "", upvotes: 1600, verified: false, rating: 4.0, icon: "🔞", category: "image-generation-editing", subcategory: "nsfw", addedDate: "2026-04-01" },
      { id: "motionmuse-ai", name: "MotionMuse AI", description: "MotionMuse AI is an AI-powered animation platform that generates smooth animated videos and motion graphics from text prompts", url: "https://motionmuse.ai", upvotes: 2700, verified: false, rating: 4.2, icon: "🎬", category: "video-animation", subcategory: "nsfw", addedDate: "2026-04-01" },
      { id: "createporn", name: "CreatePorn", description: "CreatePorn is an adult AI image generation platform for creating explicit NSFW content with full customization and no content restrictions", url: "https://www.createporn.com", upvotes: 3200, verified: false, rating: 4.1, icon: "🔞", category: "image-generation-editing", subcategory: "nsfw", addedDate: "2026-04-01" },
      { id: "juicychat-ai-nsfw", name: "JuicyChat.AI", description: "AI adult chat and conversation platform", url: "", upvotes: 4567, verified: true, rating: 4.8, icon: "🍑", category: "other", subcategory: "nsfw" },
      { id: "girlfriendgpt-nsfw", name: "GirlfriendGPT", description: "AI girlfriend with adult conversation features", url: "", upvotes: 4234, verified: true, rating: 4.7, icon: "💕", category: "other", subcategory: "nsfw" },
      { id: "sharesome-ai", name: "Sharesome AI", description: "AI adult content creation and sharing", url: "https://sharesome.com/ai/", upvotes: 3543, verified: true, rating: 4.4, icon: "🔞", category: "other", subcategory: "nsfw" }
    ],
    "open-source-ai-models": [
      { id: "hugging-face", name: "Hugging Face", description: "Open source AI models and community platform", url: "https://huggingface.co", upvotes: 4567, verified: true, rating: 4.9, icon: "🤗", category: "other", subcategory: "open-source-ai-models" },
      { id: "google-ai-developers-os", name: "Google AI for Developers", description: "Google's open source AI development tools", url: "", upvotes: 3234, verified: true, rating: 4.7, icon: "🔬", category: "other", subcategory: "open-source-ai-models" },
      { id: "mimicpc", name: "MimicPC", description: "Open source AI model deployment platform", url: "", upvotes: 2987, verified: true, rating: 4.6, icon: "💻", category: "other", subcategory: "open-source-ai-models" },
      { id: "unsloth-ai", name: "Unsloth AI", description: "Fast open source AI model training", url: "", upvotes: 2765, verified: true, rating: 4.5, icon: "⚡", category: "other", subcategory: "open-source-ai-models" }
    ],
    "other": [
      { id: "foodanalyst", name: "FoodAnalyst: Know your food", description: "AI food analysis and nutrition tracking", url: "", upvotes: 1876, verified: true, rating: 4.6, icon: "🍎", category: "other", subcategory: "other" },
      { id: "imyfone", name: "iMyFone", description: "AI-powered mobile utility and recovery tools", url: "", upvotes: 1654, verified: true, rating: 4.5, icon: "📱", category: "other", subcategory: "other" },
      { id: "characterhub", name: "CharacterHub", description: "AI character creation and sharing platform", url: "", upvotes: 1432, verified: true, rating: 4.4, icon: "👤", category: "other", subcategory: "other" },
      { id: "angular-dev", name: "Angular.dev", description: "Angular development with AI assistance", url: "", upvotes: 1298, verified: true, rating: 4.3, icon: "🅰️", category: "other", subcategory: "other" },
      { id: "periodic-table-2024", name: "Periodic Table Chemistry 2024", description: "AI-enhanced chemistry learning platform", url: "", upvotes: 1156, verified: true, rating: 4.2, icon: "⚗️", category: "other", subcategory: "other" }
    ]
  },
  "music-audio": {
    "ai-audio-editing": [

      { id: "online-audio-converter", name: "Online Audio Converter", description: "Convert audio files between formats with ease", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔄", category: "music-audio", subcategory: "ai-audio-editing" },
      { id: "hitpaw-audio", name: "HitPaw", description: "Professional audio editing software", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎵", category: "music-audio", subcategory: "ai-audio-editing" },
      { id: "podcastle", name: "Podcastle", description: "AI-powered podcast recording and editing", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎧", category: "music-audio", subcategory: "ai-audio-editing" }
    ],
    "ai-audio-enhancer": [
      { id: "audeo-ai", name: "audeo.ai", description: "AI-powered audio enhancement platform", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "✨", category: "music-audio", subcategory: "ai-audio-enhancer" },
      { id: "unifab", name: "UniFab", description: "Advanced audio enhancement suite", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎚️", category: "music-audio", subcategory: "ai-audio-enhancer" },
      { id: "ai-mastering-enhance", name: "AI Mastering", description: "Intelligent audio mastering service", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎛️", category: "music-audio", subcategory: "ai-audio-enhancer" },
      { id: "hance-ai", name: "Hance.ai", description: "Professional audio enhancement with AI", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🔊", category: "music-audio", subcategory: "ai-audio-enhancer" },
      { id: "xound-io", name: "Xound.io", description: "AI-powered sound enhancement", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📢", category: "music-audio", subcategory: "ai-audio-enhancer" }
    ],
    "ai-audio-splitter": [
      { id: "singify-vocal-remover", name: "Singify Vocal Remover", description: "AI-powered vocal isolation tool", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎤", category: "music-audio", subcategory: "ai-audio-splitter" },
      { id: "splitter-ai", name: "Splitter.ai", description: "Split audio tracks with AI precision", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "✂️", category: "music-audio", subcategory: "ai-audio-splitter" },
      { id: "vocal-remover-oak", name: "Vocal Remover Oak", description: "Advanced vocal removal technology", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🌳", category: "music-audio", subcategory: "ai-audio-splitter" },
      { id: "remover-studio", name: "Remover.studio", description: "Professional audio separation studio", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎬", category: "music-audio", subcategory: "ai-audio-splitter" },
      { id: "drumless", name: "Drumless", description: "Remove drums from any track", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🥁", category: "music-audio", subcategory: "ai-audio-splitter" }
    ],
    "ai-beat-generator": [
      { id: "soundraw-beats", name: "SOUNDRAW", description: "AI-powered beat and music generator", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎵", category: "music-audio", subcategory: "ai-beat-generator" },
      { id: "overtune", name: "Overtune", description: "Create custom beats with AI", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎶", category: "music-audio", subcategory: "ai-beat-generator" },
      { id: "binaural-beats-factory", name: "Binaural Beats Factory", description: "Generate binaural beats for focus", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🧠", category: "music-audio", subcategory: "ai-beat-generator" },
      { id: "ai-drum-generator", name: "AI Drum Generator", description: "AI-powered drum pattern creation", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🥁", category: "music-audio", subcategory: "ai-beat-generator" },
      { id: "beatbuzz", name: "BeatBuzz", description: "Intelligent beat making platform", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🐝", category: "music-audio", subcategory: "ai-beat-generator" }
    ],
    "ai-instrumental-generator": [
      { id: "music-ai-instrumental", name: "Music AI", description: "Generate custom instrumentals with AI", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎹", category: "music-audio", subcategory: "ai-instrumental-generator" },
      { id: "noteperformer", name: "NotePerformer", description: "Realistic virtual instrument performance", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎼", category: "music-audio", subcategory: "ai-instrumental-generator" },
      { id: "songcleaner", name: "SongCleaner", description: "Clean and generate instrumental tracks", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🧹", category: "music-audio", subcategory: "ai-instrumental-generator" },
      { id: "choplab", name: "ChopLab", description: "AI instrumental chopping and creation", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🔪", category: "music-audio", subcategory: "ai-instrumental-generator" },
      { id: "song-demo-ai", name: "Song Demo AI", description: "Create instrumental demos instantly", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎸", category: "music-audio", subcategory: "ai-instrumental-generator" }
    ],
    "ai-lyrics-generator": [
      { id: "ai-song-maker", name: "AI Song Maker", description: "Generate lyrics and melodies", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎵", category: "music-audio", subcategory: "ai-lyrics-generator" },
      { id: "soundverse-ai", name: "SoundVerse AI", description: "Intelligent lyrics and music creation", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🌌", category: "music-audio", subcategory: "ai-lyrics-generator" }
    ],
    "ai-mastering": [
      { id: "landr", name: "LANDR", description: "AI mastering and music production", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎚️", category: "music-audio", subcategory: "ai-mastering" },
      { id: "emastered", name: "eMastered", description: "Professional AI mastering service", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "✨", category: "music-audio", subcategory: "ai-mastering" },
      { id: "kits-ai-mastering", name: "Kits AI", description: "AI-powered music mastering toolkit", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🧰", category: "music-audio", subcategory: "ai-mastering" },
      { id: "ai-mastering-service", name: "AI Mastering", description: "Instant professional mastering", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎛️", category: "music-audio", subcategory: "ai-mastering" },
      { id: "diktatorial-suite", name: "DIKTATORIAL Suite", description: "Complete AI mastering solution", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "👑", category: "music-audio", subcategory: "ai-mastering" }
    ],
    "ai-melody-generator": [
      { id: "tempolor", name: "TemPolor", description: "AI melody generation platform", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎼", category: "music-audio", subcategory: "ai-melody-generator" },
      { id: "midigen", name: "MIDIGEN", description: "Generate MIDI melodies with AI", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎹", category: "music-audio", subcategory: "ai-melody-generator" },
      { id: "midi-agent", name: "MIDI Agent", description: "Intelligent MIDI melody creation", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🤖", category: "music-audio", subcategory: "ai-melody-generator" },
      { id: "oniooo", name: "Oniooo", description: "AI-powered melody composer", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🧅", category: "music-audio", subcategory: "ai-melody-generator" },
      { id: "octavee", name: "Octavee", description: "Create melodies across octaves", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎵", category: "music-audio", subcategory: "ai-melody-generator" }
    ],
    "ai-midi-generator": [
      { id: "tuneonmusic", name: "Tuneonmusic", description: "AI MIDI file generator", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎶", category: "music-audio", subcategory: "ai-midi-generator" },
      { id: "polymath-midi", name: "Polymath", description: "Advanced MIDI generation tool", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🔷", category: "music-audio", subcategory: "ai-midi-generator" },
      { id: "klangio", name: "Klangio", description: "Convert audio to MIDI with AI", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎹", category: "music-audio", subcategory: "ai-midi-generator" },
      { id: "soundful-midi", name: "Soundful", description: "Create MIDI patterns instantly", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎼", category: "music-audio", subcategory: "ai-midi-generator" },
      { id: "cassetteai", name: "CassetteAI", description: "AI-powered MIDI composition", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "📼", category: "music-audio", subcategory: "ai-midi-generator" }
    ],
    "ai-music-generator": [
      { id: "symphony-creative-studio", name: "Symphony Creative Studio", description: "Complete AI music creation suite", url: "", upvotes: 2456, verified: true, rating: 4.9, icon: "🎼", category: "music-audio", subcategory: "ai-music-generator" },
      { id: "riffusion", name: "Riffusion", description: "Generate music from text prompts", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎸", category: "music-audio", subcategory: "ai-music-generator" },
      { id: "udio", name: "Udio", description: "AI music generation platform", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "🎵", category: "music-audio", subcategory: "ai-music-generator" },
      { id: "mureka", name: "Mureka", description: "Create original music with AI", url: "", upvotes: 2123, verified: true, rating: 4.6, icon: "🎶", category: "music-audio", subcategory: "ai-music-generator" },
      { id: "fadr", name: "Fadr", description: "AI music production and remixing", url: "", upvotes: 2012, verified: true, rating: 4.5, icon: "🎚️", category: "music-audio", subcategory: "ai-music-generator" }
    ],
    "ai-noise-cancellation": [
      { id: "lalal-ai", name: "LALAL.AI", description: "AI-powered noise removal tool", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔇", category: "music-audio", subcategory: "ai-noise-cancellation" },
      { id: "krisp", name: "Krisp", description: "Real-time noise cancellation", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎙️", category: "music-audio", subcategory: "ai-noise-cancellation" },
      { id: "easeus-vocal-remover-nc", name: "EaseUS Vocal Remover", description: "Remove background noise from audio", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🔊", category: "music-audio", subcategory: "ai-noise-cancellation" },
      { id: "audio-enhancer-nc", name: "Audio Enhancer", description: "Enhance audio by removing noise", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "✨", category: "music-audio", subcategory: "ai-noise-cancellation" }
    ],
    "ai-rap-generator": [
      { id: "rap-generator-tool", name: "Rap Generator", description: "Generate rap lyrics and beats", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎤", category: "music-audio", subcategory: "ai-rap-generator" },
      { id: "rapli", name: "Rapli", description: "AI rap creation platform", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎵", category: "music-audio", subcategory: "ai-rap-generator" },
      { id: "ai-rap-song-generator", name: "AI Rap Song Generator", description: "Create complete rap songs with AI", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎶", category: "music-audio", subcategory: "ai-rap-generator" },
      { id: "ai-rap-generator-tool", name: "AI Rap Generator", description: "Intelligent rap music generator", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎧", category: "music-audio", subcategory: "ai-rap-generator" },
      { id: "ae-studio-skunkworks", name: "AE Studio's Same Day Skunkworks", description: "Rapid AI rap prototyping", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "⚡", category: "music-audio", subcategory: "ai-rap-generator" }
    ],
    "ai-rap-lyrics-generator": [
      { id: "ai-rap-generator-lyrics", name: "AI Rap Generator", description: "Generate rap lyrics with AI", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "📝", category: "music-audio", subcategory: "ai-rap-lyrics-generator" },
      { id: "rhyme-cool", name: "Rhyme.cool", description: "AI rhyme and rap lyrics generator", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎤", category: "music-audio", subcategory: "ai-rap-lyrics-generator" },
      { id: "supreme-plans", name: "Supreme Plans", description: "Professional rap lyrics writing", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "👑", category: "music-audio", subcategory: "ai-rap-lyrics-generator" },
      { id: "barrs", name: "Barrs", description: "AI rap bars generator", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎵", category: "music-audio", subcategory: "ai-rap-lyrics-generator" },
      { id: "ai-rap-song-generator-lyrics", name: "AI Rap Song Generator", description: "Complete rap song lyrics creation", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎶", category: "music-audio", subcategory: "ai-rap-lyrics-generator" }
    ],
    "ai-singing-generator": [
      { id: "kits-ai-singing", name: "Kits AI", description: "AI singing voice generator", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎤", category: "music-audio", subcategory: "ai-singing-generator" },
      { id: "voice-swap", name: "Voice-Swap", description: "Swap voices in songs with AI", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🔄", category: "music-audio", subcategory: "ai-singing-generator" },
      { id: "revocalize-ai", name: "Revocalize AI", description: "AI vocal synthesis and generation", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎵", category: "music-audio", subcategory: "ai-singing-generator" },
      { id: "ai-singing", name: "AI Singing", description: "Generate singing voices with AI", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎶", category: "music-audio", subcategory: "ai-singing-generator" },
      { id: "myvocal-ai", name: "MyVocal.ai", description: "Personal AI singing voice", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎧", category: "music-audio", subcategory: "ai-singing-generator" }
    ],
    "ai-song-cover": [
      { id: "easeus-vocal-remover-cover", name: "EaseUS Vocal Remover", description: "Vocal removal for song covers", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎶", category: "music-audio", subcategory: "ai-song-cover" },
      { id: "voicedub", name: "VoiceDub", description: "AI-powered song cover dubbing", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎙️", category: "music-audio", subcategory: "ai-song-cover" },
      { id: "covers-ai", name: "Covers.ai", description: "Generate song covers with AI voices", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎧", category: "music-audio", subcategory: "ai-song-cover" }
    ],
    "ai-song-generator": [
      { id: "riffusion-song", name: "Riffusion", description: "Generate complete songs from text", url: "", upvotes: 2456, verified: true, rating: 4.9, icon: "🎸", category: "music-audio", subcategory: "ai-song-generator" },
      { id: "udio-song", name: "Udio", description: "AI-powered song creation", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎵", category: "music-audio", subcategory: "ai-song-generator" },
      { id: "mureka-song", name: "Mureka", description: "Create original songs with AI", url: "", upvotes: 2234, verified: true, rating: 4.7, icon: "🎶", category: "music-audio", subcategory: "ai-song-generator" },
      { id: "topmediai-song", name: "TopMediai", description: "AI song generation platform", url: "", upvotes: 2123, verified: true, rating: 4.6, icon: "🎼", category: "music-audio", subcategory: "ai-song-generator" },
      { id: "songgenerator-io", name: "SongGenerator.io", description: "Generate songs instantly", url: "", upvotes: 2012, verified: true, rating: 4.5, icon: "🎹", category: "music-audio", subcategory: "ai-song-generator" }
    ],
    "ai-song-remixer": [
      { id: "polymath-remix", name: "Polymath", description: "AI music remixing tool", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎛️", category: "music-audio", subcategory: "ai-song-remixer" },
      { id: "twoshot", name: "TwoShot", description: "AI-powered music remixing", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎵", category: "music-audio", subcategory: "ai-song-remixer" },
      { id: "remixly-ai", name: "Remixly AI", description: "Intelligent song remixing", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎶", category: "music-audio", subcategory: "ai-song-remixer" },
      { id: "fadr-remix", name: "Fadr", description: "AI remix and mashup creator", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎚️", category: "music-audio", subcategory: "ai-song-remixer" },
      { id: "ai-song-maker-remix", name: "AI Song Maker", description: "Create remixes with AI", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎧", category: "music-audio", subcategory: "ai-song-remixer" }
    ],
    "ai-sound-effect-generator": [
      { id: "fliflik-voice-changer", name: "FliFlik Voice Changer", description: "Voice and sound effect generator", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎵", category: "music-audio", subcategory: "ai-sound-effect-generator" },
      { id: "musichero-ai-sfx", name: "MusicHero.ai", description: "Generate sound effects with AI", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🦸", category: "music-audio", subcategory: "ai-sound-effect-generator" },
      { id: "coverr-sounds", name: "Coverr", description: "Free sound effects library", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "📚", category: "music-audio", subcategory: "ai-sound-effect-generator" }
    ],
    "ai-splitter": [
      { id: "amped-studio", name: "Amped Studio", description: "AI audio splitting and editing", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎚️", category: "music-audio", subcategory: "ai-splitter" },
      { id: "devoice", name: "DeVoice", description: "Intelligent audio separation", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎵", category: "music-audio", subcategory: "ai-splitter" },
      { id: "split-prompt", name: "Split Prompt", description: "AI-guided audio splitting", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎶", category: "music-audio", subcategory: "ai-splitter" },
      { id: "gpt-splitter", name: "GPT Splitter", description: "GPT-powered audio separation", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🤖", category: "music-audio", subcategory: "ai-splitter" }
    ],
    "ai-stems-splitter": [
      { id: "moises", name: "Moises", description: "AI-powered stems separation", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎵", category: "music-audio", subcategory: "ai-stems-splitter" },
      { id: "easeus-vocal-remover-stems", name: "EaseUS Vocal Remover", description: "Extract stems from tracks", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎶", category: "music-audio", subcategory: "ai-stems-splitter" },
      { id: "fadr-stems", name: "Fadr", description: "Split songs into stems", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎚️", category: "music-audio", subcategory: "ai-stems-splitter" },
      { id: "loudly", name: "Loudly", description: "AI stems extraction tool", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🔊", category: "music-audio", subcategory: "ai-stems-splitter" },
      { id: "musicfy-ai", name: "Musicfy AI", description: "Separate music into stems", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎧", category: "music-audio", subcategory: "ai-stems-splitter" }
    ],
    "ai-text-to-music": [
      { id: "musichero-ai-ttm", name: "MusicHero.ai", description: "Convert text to music with AI", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🦸", category: "music-audio", subcategory: "ai-text-to-music" },
      { id: "aimusicgen-ai", name: "AIMusicGen.ai", description: "Generate music from text prompts", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎵", category: "music-audio", subcategory: "ai-text-to-music" },
      { id: "beatoven-ai", name: "Beatoven.ai", description: "Text-to-music generation platform", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎶", category: "music-audio", subcategory: "ai-text-to-music" },
      { id: "music-muse-ai", name: "Music Muse AI", description: "Create music from text descriptions", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎼", category: "music-audio", subcategory: "ai-text-to-music" },
      { id: "melobytes", name: "Melobytes.com", description: "Text to music converter", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎹", category: "music-audio", subcategory: "ai-text-to-music" }
    ],
    "ai-vocal-remover": [
      { id: "easeus-vocal-remover-main", name: "EaseUS Vocal Remover", description: "Remove vocals from any song", url: "", upvotes: 2456, verified: true, rating: 4.9, icon: "🎤", category: "music-audio", subcategory: "ai-vocal-remover" },
      { id: "easeus-tools", name: "EaseUS", description: "Professional vocal removal tools", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔧", category: "music-audio", subcategory: "ai-vocal-remover" },
      { id: "dubbing-ai", name: "Dubbing AI", description: "AI-powered vocal extraction", url: "", upvotes: 2123, verified: true, rating: 4.6, icon: "🎶", category: "music-audio", subcategory: "ai-vocal-remover" },
      { id: "splitter-ai-vocal", name: "Splitter.ai", description: "Precise vocal removal", url: "", upvotes: 2012, verified: true, rating: 4.5, icon: "✂️", category: "music-audio", subcategory: "ai-vocal-remover" }
    ],
    "chord-ai": [
      { id: "chordchord", name: "ChordChord", description: "AI chord recognition and generation", url: "", upvotes: 2156, verified: true, rating: 4.7, icon: "🎸", category: "music-audio", subcategory: "chord-ai" },
      { id: "chord-identifier", name: "Chord Identifier", description: "Identify chords from audio", url: "", upvotes: 1987, verified: true, rating: 4.6, icon: "🎹", category: "music-audio", subcategory: "chord-ai" },
      { id: "chordcreate", name: "ChordCreate", description: "Generate chord progressions with AI", url: "", upvotes: 1765, verified: true, rating: 4.5, icon: "🎵", category: "music-audio", subcategory: "chord-ai" },
      { id: "lamucal", name: "Lamucal", description: "AI music chord analysis", url: "", upvotes: 1654, verified: true, rating: 4.4, icon: "🎶", category: "music-audio", subcategory: "chord-ai" },
      { id: "bunder", name: "Bunder", description: "Chord detection and learning", url: "", upvotes: 1432, verified: true, rating: 4.3, icon: "🎼", category: "music-audio", subcategory: "chord-ai" }
    ]
  },
"ai-detection-anti-detection": {
    "ai-art-detector": [
      { id: "guessai", name: "GuessAI", description: "AI-powered art detection and classification", url: "", upvotes: 890, verified: true, rating: 4.6, icon: "🎨", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "secur3d", name: "Secur3D", description: "3D AI art detection and security", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔐", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "ai-or-human-art-game", name: "AI or Human Art Game", description: "Interactive game to test AI art detection skills", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎮", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "whomadethisartwork", name: "Whomadethisartwork.com", description: "Platform to identify AI-generated artwork", url: "", upvotes: 321, verified: true, rating: 4.2, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "gan-or-real-person-detector", name: "GAN or Real Person Detector", description: "Detects GAN-generated vs real person images", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "👤", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" }
    ],
    "ai-bypasser": [
      { id: "bypassgpt", name: "BypassGPT", description: "Advanced AI detection bypassing tool", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🔓", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "phrasly-ai", name: "Phrasly.AI", description: "AI content rewriting for bypass", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✍️", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
            { id: "lunchbreak-ai", name: "Lunchbreak AI", description: "AI humanizer and detection bypass tool for undetectable writing", url: "https://lunchbreak.ai", upvotes: 1243, verified: true, rating: 4.6, icon: "☕", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "ai-humanize", name: "AI Humanize", description: "Humanize AI-generated content", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "gptinf", name: "GPTinf", description: "Advanced AI text humanization", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🔄", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" }
    ],
    "ai-checker": [
      { id: "gptzero", name: "GPTZero", description: "Advanced AI text detection platform", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "zerogpt", name: "ZeroGPT", description: "Comprehensive AI content detector", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "0️⃣", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "undetectable-ai", name: "Undetectable AI", description: "AI detection and humanization tool", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🕵️", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "pronounce-ai", name: "Pronounce AI", description: "AI voice and text detection", url: "", upvotes: 890, verified: true, rating: 4.5, icon: "🗣️", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "zerogpt-plus", name: "ZeroGPT Plus", description: "Enhanced AI detection with premium features", url: "", upvotes: 678, verified: true, rating: 4.4, icon: "➕", category: "ai-detection-anti-detection", subcategory: "ai-checker" }
    ],
    "ai-checker-essay": [
      { id: "essay-grader-ai", name: "Essay Grader AI", description: "AI-powered essay grading and detection", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📝", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "myperfectwords", name: "MyPerfectWords.com", description: "Essay analysis and AI detection", url: "", upvotes: 890, verified: true, rating: 4.6, icon: "✨", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "cograder", name: "CoGrader", description: "Collaborative essay grading with AI detection", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "👥", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "markme", name: "MarkMe", description: "Automated essay marking and AI detection", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "✅", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" }
    ],
    "ai-content-detector": [
      { id: "uhmegle", name: "Uhmegle", description: "AI content detection and analysis", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🤔", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "originality-ai", name: "Originality.ai", description: "Advanced plagiarism and AI detection", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎯", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "copyleaks", name: "Copyleaks", description: "AI content and plagiarism detection", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📋", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "bark", name: "Bark", description: "Real-time AI content detection", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🐕", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" }
    ],
    "ai-detector": [
      { id: "hcaptcha", name: "hCaptcha", description: "Bot and AI detection security service", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "🛡️", category: "ai-detection-anti-detection", subcategory: "ai-detector" },
      { id: "onfido", name: "Onfido", description: "Identity verification and AI detection", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🆔", category: "ai-detection-anti-detection", subcategory: "ai-detector" }
    ],
    "ai-image-detector": [
      { id: "ai-or-not", name: "AI or Not", description: "Image authenticity detection tool", url: "", upvotes: 1345, verified: true, rating: 4.7, icon: "🖼️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "realorai", name: "RealorAI", description: "Real vs AI image detection", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "👁️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "lenso-ai", name: "Lenso AI", description: "AI-powered image detection and analysis", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🔭", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "iris-roads", name: "Iris Roads", description: "Advanced image AI detection", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🛣️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "ai-badge", name: "AI Badge", description: "AI-generated image identification", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🏷️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "t-rex-label", name: "T-Rex Label", description: "AI image labeling and detection", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🦖", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" }
    ],
    "ai-plagiarism-checker": [
      { id: "plagiarismcheck", name: "PlagiarismCheck", description: "Online plagiarism detection tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🔎", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" },
      { id: "quetext", name: "Quetext", description: "Free plagiarism and AI checker", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "❓", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" },
      { id: "noplagio", name: "NoPlagio", description: "Multilingual plagiarism detection", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🚫", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" }
    ],
    "bypass-ai": [
      { id: "aiseo", name: "AISEO", description: "AI content optimization and bypassing", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔧", category: "ai-detection-anti-detection", subcategory: "bypass-ai" },
      { id: "walter-writes-ai", name: "Walter Writes AI", description: "Human-like AI content generation", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "✒️", category: "ai-detection-anti-detection", subcategory: "bypass-ai" }
    ],
    "humanizer-ai": [
      { id: "stealthwriter-humanizer", name: "StealthWriter", description: "AI content humanization tool", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "👻", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "humbot", name: "Humbot", description: "AI text humanization service", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🤖", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "writehuman", name: "WriteHuman", description: "Human-like AI writing tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "✍️", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "humanize-ai", name: "Humanize AI", description: "Advanced AI content humanization", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "👥", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" }
    ],
    "undetectable-ai": [
      { id: "rewritify-ai", name: "Rewritify AI", description: "AI content rewriting for undetectability", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" },
      { id: "humanizer-org", name: "Humanizer.org", description: "Professional AI content humanization", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🌐", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" },
      { id: "ai-undetect", name: "AI Undetect", description: "Advanced undetectable AI content", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" }
    ]
  },
};

export const getToolsBySubcategory = (category: string, subcategory: string): Tool[] => {
  return toolsData[category]?.[subcategory] || [];
};