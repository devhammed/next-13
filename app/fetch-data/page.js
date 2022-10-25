// The return value is *not* serialized
// You can return Date, Map, Set, etc.
export async function getGithubData() {
  const res = await fetch('https://api.github.com/users/devhammed');

  return res.json();
}

export default async function Page() {
  const data = await getGithubData();

  return <h1>Hello, {data.login}!</h1>;
}
