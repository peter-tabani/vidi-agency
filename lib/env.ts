// ============================================================================
// ENVIRONMENT VARIABLE VALIDATION
// Ensures all required environment variables are set
// ============================================================================

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface EnvConfig {
  // Site
  NEXT_PUBLIC_SITE_URL: string;
  
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  
  // AI
  GROQ_API_KEY?: string;
  GROQ_MODEL?: string;
  
  // Email
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  ADMIN_EMAIL?: string;
  
  // Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
  
  // Feature Flags
  NEXT_PUBLIC_ENABLE_CHATBOT?: string;
  NEXT_PUBLIC_ENABLE_ANALYTICS?: string;
  NEXT_PUBLIC_MAINTENANCE_MODE?: string;
}

// ============================================================================
// ENVIRONMENT VALIDATION
// ============================================================================

/**
 * Validates that required environment variables are set
 * Throws an error if any required variables are missing
 */
export function validateEnv(): void {
  const requiredVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn(
      `⚠️ Missing environment variables: ${missingVars.join(', ')}\n` +
      'Some features may not work correctly. ' +
      'See .env.example for required variables.'
    );
  }
}

// ============================================================================
// ENVIRONMENT GETTERS
// ============================================================================

/**
 * Get environment variable with fallback
 */
export function getEnv(key: string, fallback: string = ''): string {
  return process.env[key] || fallback;
}

/**
 * Get boolean environment variable
 */
export function getEnvBool(key: string, fallback: boolean = false): boolean {
  const value = process.env[key];
  if (value === undefined) return fallback;
  return value === 'true' || value === '1';
}

/**
 * Get numeric environment variable
 */
export function getEnvNumber(key: string, fallback: number = 0): number {
  const value = process.env[key];
  if (value === undefined) return fallback;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? fallback : parsed;
}

// ============================================================================
// TYPED ENVIRONMENT ACCESS
// ============================================================================

export const env = {
  // Site Configuration
  siteUrl: getEnv('NEXT_PUBLIC_SITE_URL', 'https://vidiagency.com'),
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Supabase
  supabase: {
    url: getEnv('NEXT_PUBLIC_SUPABASE_URL'),
    anonKey: getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    serviceRoleKey: getEnv('SUPABASE_SERVICE_ROLE_KEY'),
  },
  
  // AI / Groq
  groq: {
    apiKey: getEnv('GROQ_API_KEY'),
    model: getEnv('GROQ_MODEL', 'llama-3.3-70b-versatile'),
  },
  
  // Email
  email: {
    resendApiKey: getEnv('RESEND_API_KEY'),
    from: getEnv('EMAIL_FROM', 'hello@vidiagency.com'),
    adminEmail: getEnv('ADMIN_EMAIL', 'admin@vidiagency.com'),
  },
  
  // Analytics
  analytics: {
    gaId: getEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID'),
  },
  
  // Feature Flags
  features: {
    chatbotEnabled: getEnvBool('NEXT_PUBLIC_ENABLE_CHATBOT', true),
    analyticsEnabled: getEnvBool('NEXT_PUBLIC_ENABLE_ANALYTICS', true),
    maintenanceMode: getEnvBool('NEXT_PUBLIC_MAINTENANCE_MODE', false),
  },
  
  // Security
  security: {
    rateLimitMax: getEnvNumber('RATE_LIMIT_MAX', 100),
    corsOrigins: getEnv('CORS_ALLOWED_ORIGINS', '').split(',').filter(Boolean),
  },
};

// ============================================================================
// INITIALIZATION
// ============================================================================

// Validate environment on module load (only in development)
if (process.env.NODE_ENV === 'development') {
  validateEnv();
}

export default env;
