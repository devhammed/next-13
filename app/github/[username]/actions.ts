'use server';

import { GitHubUserSchema } from '@/contracts/github/user';

export async function getUserData(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error('Unable to get user details from GitHub!');
  }

  const data = await response.json();

  const user = await GitHubUserSchema.parseAsync(data);

  return user;
}
