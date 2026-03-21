export type DomainTier = 'Premium' | 'Hot' | 'New' | 'AI' | 'Std'

export type DomainCategory =
  | 'AI'
  | 'Dev'
  | 'Brand'
  | 'FinTech'
  | 'Health'
  | 'Web3'
  | 'Gaming'
  | 'Travel'
  | 'Crypto'
  | 'Green'

export interface Domain {
  id: number
  name: string
  category: DomainCategory
  tier: DomainTier
  description: string
  tags: string[]
  price: number
}

export function getDomainName(domain: Domain): string {
  return domain.name.split('.')[0]
}

export function getDomainExtension(domain: Domain): string {
  return '.' + domain.name.split('.').slice(1).join('.')
}

export const TIER_CONFIG: Record<
  DomainTier,
  { color: string; bg: string; label: string }
> = {
  Premium: { color: '#c084fc', bg: 'rgba(192, 132, 252, 0.15)', label: 'Premium' },
  Hot: { color: '#fb7185', bg: 'rgba(251, 113, 133, 0.15)', label: 'Hot' },
  New: { color: '#34d399', bg: 'rgba(52, 211, 153, 0.15)', label: 'New' },
  AI: { color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', label: 'AI' },
  Std: { color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)', label: 'Std' },
}

export const CATEGORIES: DomainCategory[] = [
  'AI', 'Dev', 'Brand', 'FinTech', 'Health', 'Web3', 'Gaming', 'Travel', 'Crypto', 'Green',
]

const domains: Domain[] = [
  // AI (12)
  { id: 1, name: 'neural.ai', category: 'AI', tier: 'Premium', description: 'The ultimate AI brand domain — short, powerful, and unforgettable.', tags: ['one-word', 'machine-learning', 'brandable'], price: 49000 },
  { id: 2, name: 'cognitiv.ai', category: 'AI', tier: 'Premium', description: 'Evokes intelligence and cognitive computing. Perfect for AI startups.', tags: ['cognitive', 'startup', 'premium'], price: 38000 },
  { id: 3, name: 'synthex.ai', category: 'AI', tier: 'AI', description: 'Synthetic intelligence meets execution. Great for AI platforms.', tags: ['synthetic', 'platform', 'tech'], price: 28500 },
  { id: 4, name: 'deepmind.io', category: 'AI', tier: 'Hot', description: 'Deep learning authority domain. Commands instant credibility.', tags: ['deep-learning', 'research', 'authority'], price: 35000 },
  { id: 5, name: 'brainwave.ai', category: 'AI', tier: 'AI', description: 'Captures the essence of neural innovation and breakthrough thinking.', tags: ['neural', 'innovation', 'creative'], price: 22000 },
  { id: 6, name: 'tensorlab.ai', category: 'AI', tier: 'AI', description: 'Technical AI brand for ML research labs and tensor computing.', tags: ['tensor', 'lab', 'research'], price: 18500 },
  { id: 7, name: 'aiforge.dev', category: 'AI', tier: 'AI', description: 'Where AI tools are built. Perfect for developer-focused AI platforms.', tags: ['developer', 'tools', 'forge'], price: 15000 },
  { id: 8, name: 'neuralnet.co', category: 'AI', tier: 'Hot', description: 'Classic neural network brand. Short, memorable, authoritative.', tags: ['neural-network', 'classic', 'brand'], price: 32000 },
  { id: 9, name: 'cortex.ai', category: 'AI', tier: 'Premium', description: 'Named after the brain\'s powerhouse. A tier-one AI domain.', tags: ['brain', 'premium', 'one-word'], price: 45000 },
  { id: 10, name: 'machineiq.ai', category: 'AI', tier: 'AI', description: 'Machine intelligence quotient — data-driven AI brand name.', tags: ['machine', 'intelligence', 'data'], price: 12000 },
  { id: 11, name: 'gptstack.ai', category: 'AI', tier: 'New', description: 'Ride the GPT wave. Ideal for AI tooling and stack platforms.', tags: ['gpt', 'stack', 'tooling'], price: 9500 },
  { id: 12, name: 'synapse.ai', category: 'AI', tier: 'Premium', description: 'The connection point of intelligence. Elegant, powerful, premium.', tags: ['connection', 'elegant', 'premium'], price: 42000 },

  // Dev (12)
  { id: 13, name: 'devstack.io', category: 'Dev', tier: 'Hot', description: 'The developer\'s toolkit domain. Build your dev empire here.', tags: ['developer', 'toolkit', 'platform'], price: 24000 },
  { id: 14, name: 'codeforge.dev', category: 'Dev', tier: 'Hot', description: 'Where code is forged into products. Strong dev brand.', tags: ['code', 'forge', 'products'], price: 19500 },
  { id: 15, name: 'stackflow.dev', category: 'Dev', tier: 'New', description: 'Modern developer workflow and stack management brand.', tags: ['workflow', 'stack', 'modern'], price: 8500 },
  { id: 16, name: 'gitpulse.dev', category: 'Dev', tier: 'New', description: 'Git-native development monitoring and analytics platform name.', tags: ['git', 'monitoring', 'analytics'], price: 7200 },
  { id: 17, name: 'deployfast.io', category: 'Dev', tier: 'Std', description: 'Speed-focused deployment platform brand. Says what it does.', tags: ['deploy', 'speed', 'ci-cd'], price: 4800 },
  { id: 18, name: 'apicraft.dev', category: 'Dev', tier: 'Std', description: 'API design and development platform. Crafted for builders.', tags: ['api', 'design', 'craft'], price: 5500 },
  { id: 19, name: 'bytecraft.dev', category: 'Dev', tier: 'Std', description: 'Low-level to high-level — a domain for serious engineers.', tags: ['engineering', 'bytes', 'craft'], price: 3900 },
  { id: 20, name: 'cloudpush.io', category: 'Dev', tier: 'New', description: 'Push to the cloud with confidence. DevOps-ready brand.', tags: ['cloud', 'devops', 'deploy'], price: 6800 },
  { id: 21, name: 'devharbor.com', category: 'Dev', tier: 'Std', description: 'A safe harbor for developers. Community or tool platform.', tags: ['community', 'harbor', 'safe'], price: 3200 },
  { id: 22, name: 'codepilot.dev', category: 'Dev', tier: 'Hot', description: 'AI-assisted coding brand. Navigate code with precision.', tags: ['ai-coding', 'pilot', 'assistant'], price: 21000 },
  { id: 23, name: 'terminalx.dev', category: 'Dev', tier: 'New', description: 'Terminal-first developer tools. Command-line excellence.', tags: ['terminal', 'cli', 'tools'], price: 7800 },
  { id: 24, name: 'fullstack.io', category: 'Dev', tier: 'Premium', description: 'The definitive full-stack development brand. Incredibly versatile.', tags: ['fullstack', 'versatile', 'definitive'], price: 38500 },

  // Brand (10)
  { id: 25, name: 'luxehaus.com', category: 'Brand', tier: 'Premium', description: 'Luxury meets modern aesthetics. High-end brand domain.', tags: ['luxury', 'aesthetics', 'high-end'], price: 28000 },
  { id: 26, name: 'velvetco.com', category: 'Brand', tier: 'Hot', description: 'Smooth, sophisticated brand name for premium companies.', tags: ['sophisticated', 'smooth', 'premium'], price: 15500 },
  { id: 27, name: 'primeaura.com', category: 'Brand', tier: 'Std', description: 'Prime presence with an aura of excellence. Versatile brand.', tags: ['prime', 'excellence', 'versatile'], price: 4200 },
  { id: 28, name: 'novamark.com', category: 'Brand', tier: 'Std', description: 'New star in the market. Fresh, dynamic brand identity.', tags: ['new', 'dynamic', 'fresh'], price: 3600 },
  { id: 29, name: 'elitecore.com', category: 'Brand', tier: 'Hot', description: 'Core elite identity for ambitious, results-driven brands.', tags: ['elite', 'core', 'ambitious'], price: 12800 },
  { id: 30, name: 'boldcraft.com', category: 'Brand', tier: 'Std', description: 'Bold craftsmanship. For brands that make a statement.', tags: ['bold', 'craft', 'statement'], price: 2800 },
  { id: 31, name: 'zenithbrand.com', category: 'Brand', tier: 'Std', description: 'Reach the zenith. Peak-performance branding domain.', tags: ['peak', 'zenith', 'performance'], price: 3100 },
  { id: 32, name: 'vistaline.com', category: 'Brand', tier: 'New', description: 'Clear vision, clean lines. Modern brand aesthetic.', tags: ['vision', 'clean', 'modern'], price: 5900 },
  { id: 33, name: 'monarkco.com', category: 'Brand', tier: 'Hot', description: 'Regal authority. A monarch among brand domains.', tags: ['regal', 'authority', 'monarch'], price: 16500 },
  { id: 34, name: 'cresthaven.com', category: 'Brand', tier: 'Std', description: 'Heritage and trust. Perfect for established or family brands.', tags: ['heritage', 'trust', 'family'], price: 2400 },

  // FinTech (10)
  { id: 35, name: 'paystream.io', category: 'FinTech', tier: 'Premium', description: 'Seamless payment streams. A powerhouse fintech domain.', tags: ['payments', 'streaming', 'fintech'], price: 35500 },
  { id: 36, name: 'fintechx.com', category: 'FinTech', tier: 'Hot', description: 'The X-factor in financial technology. Bold and direct.', tags: ['fintech', 'bold', 'x-factor'], price: 22500 },
  { id: 37, name: 'ledgervault.com', category: 'FinTech', tier: 'New', description: 'Secure financial ledger platform. Trust meets technology.', tags: ['ledger', 'vault', 'security'], price: 8200 },
  { id: 38, name: 'neobank.io', category: 'FinTech', tier: 'Premium', description: 'Next-generation banking. The future of finance starts here.', tags: ['banking', 'neo', 'future'], price: 41000 },
  { id: 39, name: 'cryptledger.com', category: 'FinTech', tier: 'Std', description: 'Cryptocurrency meets traditional ledger systems.', tags: ['crypto', 'ledger', 'traditional'], price: 4500 },
  { id: 40, name: 'wealthpilot.com', category: 'FinTech', tier: 'Hot', description: 'Navigate wealth management with AI-driven insights.', tags: ['wealth', 'management', 'ai'], price: 18000 },
  { id: 41, name: 'paygate.io', category: 'FinTech', tier: 'Hot', description: 'Payment gateway domain. Clear, concise, conversion-ready.', tags: ['gateway', 'payments', 'conversion'], price: 14500 },
  { id: 42, name: 'financeai.com', category: 'FinTech', tier: 'AI', description: 'AI-powered finance. Two mega-trends in one domain.', tags: ['ai', 'finance', 'dual-trend'], price: 26000 },
  { id: 43, name: 'tradepulse.io', category: 'FinTech', tier: 'New', description: 'Real-time trading insights and market pulse analytics.', tags: ['trading', 'pulse', 'real-time'], price: 9800 },
  { id: 44, name: 'smartledger.com', category: 'FinTech', tier: 'Std', description: 'Intelligent ledger technology for modern accounting.', tags: ['smart', 'ledger', 'accounting'], price: 5200 },

  // Health (10)
  { id: 45, name: 'medvault.io', category: 'Health', tier: 'Hot', description: 'Secure medical data vault. HIPAA-ready brand name.', tags: ['medical', 'vault', 'hipaa'], price: 19500 },
  { id: 46, name: 'healthpulse.ai', category: 'Health', tier: 'AI', description: 'AI health monitoring and diagnostics platform domain.', tags: ['health', 'monitoring', 'diagnostics'], price: 24000 },
  { id: 47, name: 'biosynth.io', category: 'Health', tier: 'New', description: 'Biosynthetics and biotech innovation platform brand.', tags: ['biotech', 'synthesis', 'innovation'], price: 11500 },
  { id: 48, name: 'wellnessiq.com', category: 'Health', tier: 'Std', description: 'Smart wellness platform. Health intelligence for everyone.', tags: ['wellness', 'iq', 'smart'], price: 4800 },
  { id: 49, name: 'genomex.io', category: 'Health', tier: 'Premium', description: 'Genomics and genetic research powerhouse domain.', tags: ['genomics', 'genetics', 'research'], price: 33000 },
  { id: 50, name: 'medstack.io', category: 'Health', tier: 'New', description: 'Medical technology stack for healthcare developers.', tags: ['medtech', 'stack', 'developer'], price: 7500 },
  { id: 51, name: 'vitacore.com', category: 'Health', tier: 'Hot', description: 'Vitality at its core. Wellness and longevity brand.', tags: ['vitality', 'core', 'longevity'], price: 13200 },
  { id: 52, name: 'healtech.ai', category: 'Health', tier: 'AI', description: 'AI-powered healing technology. The future of healthcare.', tags: ['healing', 'ai', 'future'], price: 21000 },
  { id: 53, name: 'pharmanet.io', category: 'Health', tier: 'Std', description: 'Pharmaceutical networking and supply chain platform.', tags: ['pharma', 'network', 'supply'], price: 6200 },
  { id: 54, name: 'neurowellness.com', category: 'Health', tier: 'Std', description: 'Neuroscience meets wellness. Brain health platform.', tags: ['neuro', 'wellness', 'brain'], price: 3800 },

  // Web3 (10)
  { id: 55, name: 'metachain.io', category: 'Web3', tier: 'Premium', description: 'The metaverse blockchain. Cross-chain future of web3.', tags: ['metaverse', 'blockchain', 'cross-chain'], price: 36000 },
  { id: 56, name: 'defistack.io', category: 'Web3', tier: 'Hot', description: 'DeFi infrastructure stack. Build decentralized finance.', tags: ['defi', 'infrastructure', 'stack'], price: 19800 },
  { id: 57, name: 'nftforge.io', category: 'Web3', tier: 'New', description: 'Forge unique NFTs. Creator-first digital asset platform.', tags: ['nft', 'creator', 'forge'], price: 8900 },
  { id: 58, name: 'web3vault.com', category: 'Web3', tier: 'Std', description: 'Secure web3 asset management and digital vault.', tags: ['web3', 'vault', 'security'], price: 5600 },
  { id: 59, name: 'chainpulse.io', category: 'Web3', tier: 'Hot', description: 'Real-time blockchain analytics and chain monitoring.', tags: ['blockchain', 'analytics', 'monitoring'], price: 16200 },
  { id: 60, name: 'tokencraft.io', category: 'Web3', tier: 'New', description: 'Token creation and management platform brand.', tags: ['token', 'creation', 'management'], price: 7100 },
  { id: 61, name: 'daobuilder.io', category: 'Web3', tier: 'Std', description: 'DAO governance and organization builder platform.', tags: ['dao', 'governance', 'builder'], price: 4900 },
  { id: 62, name: 'ethervault.io', category: 'Web3', tier: 'Hot', description: 'Ethereum-focused secure vault and staking platform.', tags: ['ethereum', 'vault', 'staking'], price: 22500 },
  { id: 63, name: 'blocksmith.io', category: 'Web3', tier: 'Std', description: 'Craft blockchain solutions. Developer tools for web3.', tags: ['blockchain', 'craft', 'tools'], price: 6800 },
  { id: 64, name: 'solanadev.io', category: 'Web3', tier: 'New', description: 'Solana ecosystem developer tools and resources.', tags: ['solana', 'developer', 'ecosystem'], price: 9200 },

  // Gaming (9)
  { id: 65, name: 'gameforge.gg', category: 'Gaming', tier: 'Premium', description: 'The ultimate gaming brand. Forge legendary experiences.', tags: ['gaming', 'forge', 'legendary'], price: 29000 },
  { id: 66, name: 'pixelvault.gg', category: 'Gaming', tier: 'Hot', description: 'Pixel-perfect gaming vault. Retro meets modern.', tags: ['pixel', 'retro', 'vault'], price: 17500 },
  { id: 67, name: 'questland.gg', category: 'Gaming', tier: 'New', description: 'Adventure gaming platform. Explore, quest, conquer.', tags: ['adventure', 'quest', 'explore'], price: 8400 },
  { id: 68, name: 'esportshub.gg', category: 'Gaming', tier: 'Hot', description: 'Central esports hub for tournaments and teams.', tags: ['esports', 'tournament', 'teams'], price: 21000 },
  { id: 69, name: 'arcadecraft.io', category: 'Gaming', tier: 'Std', description: 'Indie arcade game development and publishing brand.', tags: ['arcade', 'indie', 'publishing'], price: 4200 },
  { id: 70, name: 'gamestudio.gg', category: 'Gaming', tier: 'New', description: 'Professional game studio brand. AAA to indie.', tags: ['studio', 'professional', 'games'], price: 11500 },
  { id: 71, name: 'playnetwork.gg', category: 'Gaming', tier: 'Std', description: 'Gaming network infrastructure and social platform.', tags: ['network', 'social', 'infrastructure'], price: 5800 },
  { id: 72, name: 'virtualrealm.gg', category: 'Gaming', tier: 'New', description: 'VR and virtual world gaming experiences brand.', tags: ['vr', 'virtual', 'world'], price: 7900 },
  { id: 73, name: 'legendcraft.gg', category: 'Gaming', tier: 'Std', description: 'Craft legendary games. RPG and strategy focused.', tags: ['legend', 'rpg', 'strategy'], price: 3500 },

  // Travel (9)
  { id: 74, name: 'wanderluxe.com', category: 'Travel', tier: 'Premium', description: 'Luxury wanderlust. Premium travel experiences brand.', tags: ['luxury', 'wanderlust', 'premium'], price: 25000 },
  { id: 75, name: 'jetsetgo.com', category: 'Travel', tier: 'Hot', description: 'Jet-setting made easy. Fast-paced travel platform.', tags: ['jet-set', 'fast', 'platform'], price: 18500 },
  { id: 76, name: 'travelstack.io', category: 'Travel', tier: 'New', description: 'Travel tech stack for booking and itinerary platforms.', tags: ['tech', 'booking', 'itinerary'], price: 6500 },
  { id: 77, name: 'nomadpulse.com', category: 'Travel', tier: 'Std', description: 'Digital nomad lifestyle and remote travel platform.', tags: ['nomad', 'digital', 'remote'], price: 3800 },
  { id: 78, name: 'flyhaven.com', category: 'Travel', tier: 'Std', description: 'Your haven in the sky. Flight booking and travel deals.', tags: ['flights', 'booking', 'deals'], price: 2900 },
  { id: 79, name: 'voyageai.com', category: 'Travel', tier: 'AI', description: 'AI-powered voyage planning and travel intelligence.', tags: ['ai', 'voyage', 'planning'], price: 15500 },
  { id: 80, name: 'roamwise.com', category: 'Travel', tier: 'New', description: 'Wise roaming. Smart travel recommendations and guides.', tags: ['smart', 'roaming', 'guides'], price: 5200 },
  { id: 81, name: 'travelvault.com', category: 'Travel', tier: 'Std', description: 'Secure travel document and booking management vault.', tags: ['vault', 'documents', 'management'], price: 4100 },
  { id: 82, name: 'explorehub.com', category: 'Travel', tier: 'Std', description: 'Central hub for exploration and travel discovery.', tags: ['explore', 'discovery', 'hub'], price: 3400 },

  // Crypto (5)
  { id: 83, name: 'bitcoinvault.io', category: 'Crypto', tier: 'Premium', description: 'Bitcoin custody and vault services. Maximum security.', tags: ['bitcoin', 'custody', 'vault'], price: 32000 },
  { id: 84, name: 'altcoinx.com', category: 'Crypto', tier: 'Hot', description: 'Altcoin exchange and trading platform brand.', tags: ['altcoin', 'exchange', 'trading'], price: 14200 },
  { id: 85, name: 'cryptopulse.io', category: 'Crypto', tier: 'New', description: 'Crypto market pulse and real-time price analytics.', tags: ['market', 'pulse', 'analytics'], price: 9500 },
  { id: 86, name: 'satoshilab.io', category: 'Crypto', tier: 'Hot', description: 'Bitcoin research lab. Honor the founder, build the future.', tags: ['satoshi', 'research', 'bitcoin'], price: 19000 },
  { id: 87, name: 'tokengate.io', category: 'Crypto', tier: 'Std', description: 'Token-gated access and crypto authentication platform.', tags: ['token', 'gate', 'access'], price: 6500 },

  // Green (5)
  { id: 88, name: 'ecostack.io', category: 'Green', tier: 'New', description: 'Sustainable technology stack for green businesses.', tags: ['sustainable', 'eco', 'tech'], price: 7800 },
  { id: 89, name: 'greentech.ai', category: 'Green', tier: 'AI', description: 'AI for green technology. Climate-positive innovation.', tags: ['green', 'ai', 'climate'], price: 18500 },
  { id: 90, name: 'solarpulse.io', category: 'Green', tier: 'Std', description: 'Solar energy monitoring and analytics platform.', tags: ['solar', 'energy', 'monitoring'], price: 4600 },
  { id: 91, name: 'climatecore.com', category: 'Green', tier: 'Std', description: 'Core climate technology and carbon tracking platform.', tags: ['climate', 'carbon', 'tracking'], price: 155 },
]

export default domains
