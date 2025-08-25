import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_API_BASE; // "https://uupeexgttlbfunjlttkr.supabase.co"
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // create this in Supabase settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey);