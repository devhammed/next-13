import { z } from 'zod';

export const GitHubFormSchema = z.object({
  username: z.string().min(1),
});

export type GitHubForm = z.infer<typeof GitHubFormSchema>;
