import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z
    .string()
    .trim()
    .min(5, 'Email muy corto')
    .max(254, 'Email demasiado largo')
    .email('Email inválido')
    .refine(
      (email) => {
        const [_, domain] = email.split('@');
        return domain && domain.includes('.');
      },
      { message: 'Dominio de email inválido' }
    ),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 caracteres'),
  organization: z.string().min(3, 'La organización debe tener al menos 3 caracteres'),
  location: z.string().min(3, 'La ubicación debe tener al menos 3 caracteres'),
  referralSource: z.string().optional(),
  services: z.array(z.string()).optional(),
  contactMethod: z.string().optional(),
  notes: z.string().optional(),
});
