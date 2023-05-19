import { z, ZodType } from 'zod';

export function withValidation<
  Schema extends ZodType,
  ReturnType,
  Data = z.infer<Schema>
>(schema: Schema, action: (data: Data) => ReturnType) {
  return async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const validatedData = schema.parse(data) as Data;
    return action(validatedData);
  };
}
