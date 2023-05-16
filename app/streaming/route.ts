import { sleep } from '@/utils/sleep';
import { iteratorToStream } from '@/utils/stream';

async function* makeIterator(encoder: TextEncoder): AsyncGenerator<Uint8Array> {
  await sleep(2000);
  yield encoder.encode('<p>One</p>');
  await sleep(2000);
  yield encoder.encode('<p>Two</p>');
  await sleep(2000);
  yield encoder.encode('<p>Three</p>');
}

export async function GET(): Promise<Response> {
  const encoder = new TextEncoder();

  const iterator = makeIterator(encoder);

  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
