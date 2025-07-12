// Content Security Policy configuration
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'img-src': ["'self'", "data:", "https:", "blob:"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'connect-src': ["'self'", "https://api.stripe.com"],
  'frame-ancestors': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

// Security headers for production
export const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

// Rate limiting configuration
export const RATE_LIMITS = {
  search: { requests: 30, window: 60000 }, // 30 requests per minute
  cart: { requests: 100, window: 60000 }, // 100 requests per minute
  api: { requests: 1000, window: 60000 }, // 1000 requests per minute
};

// Input validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  alphanumeric: /^[a-zA-Z0-9\s\-_.()&]+$/,
  productName: /^[a-zA-Z0-9\s\-_.()&]+$/,
  search: /^[a-zA-Z0-9\s\-_.()&]+$/,
};

// Environment validation
export function validateEnvironment() {
  const requiredEnvVars = ['NODE_ENV'];
  const missing = requiredEnvVars.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`);
  }
  
  return missing.length === 0;
}

// HTTPS enforcement check
export function enforceHTTPS() {
  if (typeof window !== 'undefined' && 
      window.location.protocol !== 'https:' && 
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1') {
    window.location.href = window.location.href.replace('http:', 'https:');
  }
}