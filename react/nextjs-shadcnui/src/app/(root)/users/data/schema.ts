import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  username: z.string(),
  nickname: z.string(),
  email: z.string(),
  phone: z.string(),
});

export type User = z.infer<typeof userSchema>;
