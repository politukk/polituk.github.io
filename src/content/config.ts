import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      author: z.string().default("polİTÜk"),
      description: z.string(),
      date: z.date(),
      editorPick: z.boolean().optional(),
      cover: z.string().optional(),
      category: z.object({
        label: z.string(),
        slug: z.string(),
      }),
      tags: z.array(z.string()).optional(),
    }),
  }),
};  