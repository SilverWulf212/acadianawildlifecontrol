import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  phone: z.string().min(7, 'Please enter a valid phone number').max(20),
  address: z.string().min(1, 'Address or area is required').max(200),
  animalType: z.string().min(1, 'Please select an animal type'),
  location: z.string().min(1, 'Please select a location'),
  urgency: z.string().min(1, 'Please select urgency'),
  details: z.string().max(2000).optional(),
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
