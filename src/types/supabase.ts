export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: string
          title: string
          description: string | null
          icon_name: string | null
          image_url: string | null
          is_featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          icon_name?: string | null
          image_url?: string | null
          is_featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          icon_name?: string | null
          image_url?: string | null
          is_featured?: boolean
          created_at?: string
        }
      }
      plans: {
        Row: {
          id: string
          name: string
          price: string
          description: string | null
          features: Json
          is_recommended: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          price: string
          description?: string | null
          features?: Json
          is_recommended?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: string
          description?: string | null
          features?: Json
          is_recommended?: boolean
          created_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          service_interest: string | null
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          service_interest?: string | null
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          service_interest?: string | null
          message?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

