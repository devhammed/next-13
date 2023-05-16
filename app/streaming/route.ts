import { sleep } from '@/utils/sleep';
import { iteratorToStream } from '@/utils/stream';

async function* makeIterator(): AsyncGenerator<Uint8Array> {
  const encoder = new TextEncoder();

  await sleep(2000);

  yield encoder.encode('<p>One</p>');

  await sleep(2000);

  yield encoder.encode('<p>Two</p>');

  await sleep(2000);

  yield encoder.encode('<p>Three</p>');
}

export async function GET(): Promise<Response> {
  const iterator = makeIterator();

  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
