import { z } from 'zod';

export const GitHubUserSchema = z.object({
  id: z.number(),
  login: z.string(),
  name: z.string(),
  avatar_url: z.string().nullable(),
  location: z.string().nullable(),
  followers: z.number(),
  following: z.number(),
  public_repos: z.number(),
  public_gists: z.number(),
});

export type GitHubUser = z.infer<typeof GitHubUserSchema>;
