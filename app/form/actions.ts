'use server';

import { ContactFormSchema } from '@/contracts/forms/contact';

export async function handleSubmit(formData: FormData) {
  const data = Object.fromEntries(formData);

  const contactForm = ContactFormSchema.parse(data);

  console.log(contactForm);
}
