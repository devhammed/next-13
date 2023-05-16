// Below use-client directive is to enable client rendering for this page
// instead of the default server rendering.

'use client';

import { useEffect } from 'react';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

// Error component should be the default export.
// It will receive the `error` object
// And also a `reset` function to retry loading that page/segment.
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex justify-center items-center flex-col min-h-screen bg-slate-100 dark:bg-black'>
      <h1 className='font-bold text-3xl mb-10'>Something went wrong!</h1>
      <button
        onClick={reset}
        className='p-2 bg-orange-600 hover:bg-orange-400 text-white h-12 w-28 rounded-lg'>
        Retry
      </button>
    </div>
  );
}
