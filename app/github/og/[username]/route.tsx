import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';
import { GitHubUserSchema } from '@/contracts/github/user';

export const runtime = 'edge';

export async function GET({ nextUrl: { searchParams } }: NextRequest) {
  const username = searchParams.get('username');

  if (!username) {
    return new Response('Get out of here!', { status: 400 });
  }

  const response = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    return new Response('Unable to get user details from GitHub!', {
      status: 502,
    });
  }

  const data = await response.json();

  const user = await GitHubUserSchema.parseAsync(data);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img
          width='256'
          height='256'
          src={user.avatar_url!}
          style={{
            borderRadius: 128,
          }}
        />
        <p>{user.name}</p>
        <p>github.com/{username}</p>
      </div>
    ),
    {
      width: 1000,
      height: 630,
    }
  );
}
