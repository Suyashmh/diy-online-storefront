import { z } from 'zod';

// Search input validation schema
export const searchSchema = z.object({
  query: z.string()
    .min(1, 'Search query cannot be empty')
    .max(100, 'Search query too long')
    .regex(/^[a-zA-Z0-9\s\-_.()&]+$/, 'Invalid characters in search query'),
});

// Product validation schemas
export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(200),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  image: z.string().url(),
  category: z.string().min(1),
  rating: z.number().min(0).max(5),
  reviews: z.number().min(0),
  inStock: z.boolean(),
  storeAvailable: z.boolean(),
});

export const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().positive().int().max(99),
});

// Input sanitization utility
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

// Validate and sanitize search input
export function validateSearchInput(input: string): { isValid: boolean; sanitized: string; error?: string } {
  try {
    const sanitized = sanitizeInput(input);
    searchSchema.parse({ query: sanitized });
    return { isValid: true, sanitized };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        isValid: false, 
        sanitized: sanitizeInput(input), 
        error: error.issues[0]?.message || 'Invalid input' 
      };
    }
    return { isValid: false, sanitized: '', error: 'Validation failed' };
  }
}