import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const forgotOrResetPasswordSchema = z
  .object({
    email: z.string().email('Invalid email address').optional(),
    newPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      )
      .optional(),
    reEnterNewPassword: z.string().optional(),
  })
  .refine(
    (data) =>
      (data.email && !data.newPassword && !data.reEnterNewPassword) || // Email only (forgot password)
      (data.newPassword &&
        data.reEnterNewPassword &&
        data.newPassword === data.reEnterNewPassword), // Password reset
    {
      message: "Passwords don't match or email is invalid.",
      path: ['reEnterNewPassword'], 
    }
  );
