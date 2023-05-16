import { GitHubUserSchema } from '@/contracts/github/user';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export interface PageProps {
  params: {
    username: string;
  };
}

export async function getUserData(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error('Unable to get user details from GitHub!');
  }

  const data = await response.json();

  const user = await GitHubUserSchema.parseAsync(data);

  return user;
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const user = await getUserData(params.username);

    return {
      title: `${user.name} Profile`,
    };
  } catch {
    return notFound();
  }
}

export default async function Page({ params }: PageProps) {
  const user = await getUserData(params.username);

  return (
    <>
      <h1>
        Hello {user.name} from {user.location}!
      </h1>
      <p>
        You are following {user.following} users and have {user.followers}{' '}
        followers.
      </p>
      <p>
        You have {user.public_repos} public repositories and have created{' '}
        {user.public_gists} public gists so far!
      </p>
    </>
  );
}
