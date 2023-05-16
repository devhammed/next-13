'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((count) => {
        if (count === 1) {
          throw new Error('I am your father!');
        }

        return count - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-3xl font-bold mb-10'>
        I solemnly swear that I'm up to no good!
      </h1>
      <p className='text-xl'>
        This page will throw an error in {countdown} seconds.
      </p>
    </div>
  );
}
