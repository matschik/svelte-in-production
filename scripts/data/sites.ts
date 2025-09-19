import { SitesSchema, type Sites } from './siteSchema.ts';

export const sites: Sites = [
  {
    name: "ViaMichelin",
    brand: "ViaMichelin",
    sector: "Travel & Navigation",
    implementation: "Svelte Kit",
    domains: [
      "https://viamichelin.com"
    ],
    evidence: [{
      type: "detector",
      url: "https://viamichelin.fr"
    }]
  },
  {
    name: "Radio France",
    brand: "Radio France",
    sector: "Media & Broadcasting",
    implementation: "Svelte Kit",
    domains: ["https://radiofrance.fr"],
    evidence: [{
      type: "developer talk",
      url: "https://meetech.app/svelte-paris/event/2025-09/talk/svelte-et-radiofrance-toute-une-histoire-et_K8eEO8MoLqs7uHjk"
    }]
  },
  {
    name: "France Bleu",
    brand: "France Bleu",
    sector: "Media & Broadcasting",
    implementation: "Svelte Kit",
    domains: ["https://francebleu.fr"],
    evidence: [{
      type: "detector",
      url: "https://francebleu.fr"
    }]
  },
  {
    name: "The New York Times",
    brand: "The New York Times",
    sector: "Media & Publishing",
    implementation: "Svelte",
    domains: ["https://nytimes.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Apple Music",
    brand: "Apple",
    sector: "Technology & Media",
    implementation: "Svelte",
    domains: ["https://music.apple.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Stack Overflow",
    brand: "Stack Overflow",
    sector: "Technology & Developer Tools",
    implementation: "Svelte",
    domains: ["https://stackoverflow.com"],
    evidence: [{
      type: "blog official",
      url: "https://stackoverflow.blog/2023/10/31/why-stack-overflow-is-embracing-svelte/"
    }]
  },
  {
    name: "IKEA",
    brand: "IKEA",
    sector: "Retail & E-commerce",
    implementation: "Svelte in Micro Frontend",
    domains: ["https://www.ikea.com/fr/fr/"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Decathlon",
    brand: "Decathlon",
    sector: "Retail & E-commerce",
    implementation: "Svelte Kit",
    domains: ["https://www.decathlon.fr"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Yelp Top 100",
    brand: "Yelp",
    sector: "Business & Reviews",
    implementation: "Svelte",
    domains: ["https://top100.yelp.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Spotify",
    brand: "Spotify",
    sector: "Music & Streaming",
    implementation: "Svelte in Micro Frontend",
    domains: ["https://spotify.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }],
    hidden: true
  },
  {
    name: "Square",
    brand: "Square",
    sector: "Financial Technology",
    implementation: "Svelte",
    domains: ["https://squareup.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Cloudflare",
    brand: "Cloudflare",
    sector: "Technology & Infrastructure",
    implementation: "Svelte in Micro Frontend",
    domains: ["https://cloudflare.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }],
    hidden: true
  },
  {
    name: "Brave Search",
    brand: "Brave",
    sector: "Technology & Search",
    implementation: "Svelte Kit",
    domains: ["https://search.brave.com"],
    evidence: [{
      type: "blog unofficial",
      url: "https://www.okupter.com/blog/companies-using-svelte"
    }]
  },
  {
    name: "Windmill",
    brand: "Windmill Labs",
    sector: "Developer Tools & Platform",
    implementation: "Svelte Kit",
    domains: ["https://windmill.dev"],
    evidence: [{
      type: "code",
      url: "https://github.com/windmill-labs/windmill"
    }]
  },
  {
    name: "Leroy Merlin",
    brand: "Leroy Merlin",
    sector: "Retail & E-commerce",
    implementation: "Svelte in Micro Frontend",
    domains: ["https://www.leroymerlin.fr"],
    evidence: [{
      type: "developer talk",
      url: "https://www.welovespeed.com/en/2021/talks/micro-frontend-drives-web-performance/"
    }]
  }
];

// Validate the data at runtime
const validationResult = SitesSchema.safeParse(sites);
if (!validationResult.success) {
  throw new Error(`Invalid sites data: ${validationResult.error.message}`);
}