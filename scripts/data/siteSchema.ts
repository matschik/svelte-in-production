import { z } from 'zod';

export const SiteSchema = z.object({
  name: z.string().min(2),
  brand: z.string(),
  sector: z.string(),
  hidden: z.boolean().optional(),
  implementation: z.enum(['Svelte', 'Svelte Kit', 'Svelte with Astro', 'Svelte in Micro Frontend']),
  domains: z.array(z.url()),
  evidence: z.array(z.object({
    type: z.enum(['blog', 'press', 'detector', 'code', 'other']),
    url: z.url()
  }))
});

export const SitesSchema = z.array(SiteSchema);

export type Site = z.infer<typeof SiteSchema>;
export type Sites = z.infer<typeof SitesSchema>;