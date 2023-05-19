'use server';

import { withValidation } from '@/utils/form-validation';
import { ContactFormSchema } from '@/contracts/forms/contact';

export const handleSubmit = withValidation(ContactFormSchema, (data) => {
  console.log('form', data);
});
