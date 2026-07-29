import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['indie', 'professional', 'labs']).default('indie'),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    thumbnail: z.string().optional(), //1200x675
    cover: z.string().optional(), //1920x1080
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects };
