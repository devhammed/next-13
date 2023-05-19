'use server';

import { ContactFormSchema } from '@/contracts/forms/contact';

export async function handleSubmit(formData: FormData) {
  const data = Object.fromEntries(formData);

  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    throw result.error;
  }

  return true;
}
