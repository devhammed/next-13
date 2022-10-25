// Below use-client directive is to enable client rendering for this page
// instead of the default server rendering.

'use client';

import { useEffect } from 'react';

// Error component should be the default export.
// It will receive the `error` object
// And also a `reset` function to retry loading that page/segment.
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
