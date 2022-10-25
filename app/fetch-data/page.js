async function getGithubData() {
  // The default is static data fetching
  //  This is equivalent to getStaticProps().
  const res = await fetch('https://api.github.com/users/devhammed');

  // You can enable dynamic data fetching by using "no-store"
  // This is equivalent to getServerSideProps().
  // const resDynamic = await fetch('https://api.github.com/users/devhammed', {
  //   cache: 'no-store',
  // });

  // To revalidated cached data, you can use the next.revalidate option in fetch().
  // The default unit is seconds.
  // This is equivalent to Incremental Static Regeneration (ISR).
  // const resIncremental = await fetch('https://api.github.com/users/devhammed', {
  //   next: {
  //     revalidate: 10,
  //   },
  // });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page() {
  const data = await getGithubData();

  return <h1>Hello, {data.login}!</h1>;
}
