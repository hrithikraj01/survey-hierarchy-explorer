export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      availability: {
        Row: {
          created_at: string
          date: string
          id: string
          is_available: boolean
          price_override: number | null
          updated_at: string
          workation_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          is_available?: boolean
          price_override?: number | null
          updated_at?: string
          workation_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          is_available?: boolean
          price_override?: number | null
          updated_at?: string
          workation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "availability_workation_id_fkey"
            columns: ["workation_id"]
            isOneToOne: false
            referencedRelation: "workations"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_experiences: {
        Row: {
          booking_id: string
          created_at: string
          experience_id: string
          id: string
          participants: number
          total_price: number
        }
        Insert: {
          booking_id: string
          created_at?: string
          experience_id: string
          id?: string
          participants?: number
          total_price: number
        }
        Update: {
          booking_id?: string
          created_at?: string
          experience_id?: string
          id?: string
          participants?: number
          total_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "booking_experiences_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_experiences_experience_id_fkey"
            columns: ["experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          company_id: string | null
          created_at: string
          end_date: string
          guests: number
          id: string
          notes: string | null
          start_date: string
          status: string
          total_price: number
          updated_at: string
          user_id: string
          workation_id: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          end_date: string
          guests?: number
          id?: string
          notes?: string | null
          start_date: string
          status?: string
          total_price: number
          updated_at?: string
          user_id: string
          workation_id: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          end_date?: string
          guests?: number
          id?: string
          notes?: string | null
          start_date?: string
          status?: string
          total_price?: number
          updated_at?: string
          user_id?: string
          workation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_workation_id_fkey"
            columns: ["workation_id"]
            isOneToOne: false
            referencedRelation: "workations"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          budget: number | null
          contact_email: string
          contact_phone: string | null
          created_at: string
          id: string
          location: string | null
          logo_url: string | null
          name: string
          size: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          budget?: number | null
          contact_email: string
          contact_phone?: string | null
          created_at?: string
          id?: string
          location?: string | null
          logo_url?: string | null
          name: string
          size?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          budget?: number | null
          contact_email?: string
          contact_phone?: string | null
          created_at?: string
          id?: string
          location?: string | null
          logo_url?: string | null
          name?: string
          size?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      experiences: {
        Row: {
          created_at: string
          description: string
          duration: number
          id: string
          image_url: string | null
          max_participants: number
          price: number
          title: string
          updated_at: string
          workation_id: string
        }
        Insert: {
          created_at?: string
          description: string
          duration: number
          id?: string
          image_url?: string | null
          max_participants: number
          price: number
          title: string
          updated_at?: string
          workation_id: string
        }
        Update: {
          created_at?: string
          description?: string
          duration?: number
          id?: string
          image_url?: string | null
          max_participants?: number
          price?: number
          title?: string
          updated_at?: string
          workation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "experiences_workation_id_fkey"
            columns: ["workation_id"]
            isOneToOne: false
            referencedRelation: "workations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message: string
          title: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company_id: string | null
          created_at: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company_id?: string | null
          created_at?: string
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company_id?: string | null
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_profiles_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          booking_id: string
          comment: string | null
          created_at: string
          id: string
          is_approved: boolean
          rating: number
          updated_at: string
          user_id: string
          workation_id: string
        }
        Insert: {
          booking_id: string
          comment?: string | null
          created_at?: string
          id?: string
          is_approved?: boolean
          rating: number
          updated_at?: string
          user_id: string
          workation_id: string
        }
        Update: {
          booking_id?: string
          comment?: string | null
          created_at?: string
          id?: string
          is_approved?: boolean
          rating?: number
          updated_at?: string
          user_id?: string
          workation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_workation_id_fkey"
            columns: ["workation_id"]
            isOneToOne: false
            referencedRelation: "workations"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_responses: {
        Row: {
          created_at: string
          id: string
          responses: Json
          role: string
          user_details: Json
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          responses: Json
          role: string
          user_details: Json
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          responses?: Json
          role?: string
          user_details?: Json
          user_id?: string | null
        }
        Relationships: []
      }
      workation_images: {
        Row: {
          created_at: string
          id: string
          image_url: string
          is_primary: boolean
          workation_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          is_primary?: boolean
          workation_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          is_primary?: boolean
          workation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workation_images_workation_id_fkey"
            columns: ["workation_id"]
            isOneToOne: false
            referencedRelation: "workations"
            referencedColumns: ["id"]
          },
        ]
      }
      workations: {
        Row: {
          address: string
          amenities: string[]
          capacity: number
          created_at: string
          description: string
          featured: boolean
          id: string
          is_verified: boolean
          latitude: number | null
          location: string
          longitude: number | null
          max_stay: number
          min_stay: number
          price_per_night: number
          title: string
          updated_at: string
          wellness_features: string[]
          wifi_speed: number | null
        }
        Insert: {
          address: string
          amenities?: string[]
          capacity: number
          created_at?: string
          description: string
          featured?: boolean
          id?: string
          is_verified?: boolean
          latitude?: number | null
          location: string
          longitude?: number | null
          max_stay?: number
          min_stay?: number
          price_per_night: number
          title: string
          updated_at?: string
          wellness_features?: string[]
          wifi_speed?: number | null
        }
        Update: {
          address?: string
          amenities?: string[]
          capacity?: number
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          is_verified?: boolean
          latitude?: number | null
          location?: string
          longitude?: number | null
          max_stay?: number
          min_stay?: number
          price_per_night?: number
          title?: string
          updated_at?: string
          wellness_features?: string[]
          wifi_speed?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: {
          user_id: string
        }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
      is_corporate: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
      is_same_company: {
        Args: {
          user_id: string
          profile_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "user" | "corporate" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
