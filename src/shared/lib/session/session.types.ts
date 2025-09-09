import { z } from 'zod';

export const SessionSchema = z.object({
  id: z.string(),
  tgId: z.number(),
  firstName: z.string(),
  lastName: z.string().optional(),
  username: z.string().optional(),
  photoUrl: z.string().optional(),
});

export type Session = z.infer<typeof SessionSchema>;
