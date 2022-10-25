// Below use-client directive is to enable client rendering for this page
// instead of the default server rendering.

'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    throw new Error('I am not your father!');
  }, []);

  return <h1>I solemnly swear that I'm up to no good!</h1>;
}
