import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Tool = {
  id: number
  name: string
  slug: string
  tagline: string | null
  description: string | null
  category: string | null
  subcategory: string | null
  tags: string[] | null
  website_url: string | null
  logo_url: string | null
  pricing: string
  rating: number
  is_featured: boolean
  is_explicit: boolean
  is_published: boolean
  created_at: string
}