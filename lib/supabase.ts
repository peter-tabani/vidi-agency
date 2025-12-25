import { createClient } from '@supabase/supabase-js'

// We use specific checks here. If the environment variable is missing (like during a build),
// we use a fake placeholder string so the createClient function doesn't crash.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

export const supabase = createClient(supabaseUrl, supabaseKey)