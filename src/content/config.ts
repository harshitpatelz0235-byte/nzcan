import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const techFixesSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string().default('HumanFix Tech Hero'),
  lastUpdated: z.coerce.date(),
  category: z.string(),
  country: z.enum(['nz', 'ca']),
  instantAnswer: z.string().optional(),
  tags: z.array(z.string()).optional(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),
});

const nz = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/nz" }),
  schema: techFixesSchema,
});

const ca = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ca" }),
  schema: techFixesSchema,
});

export const collections = { nz, ca };
