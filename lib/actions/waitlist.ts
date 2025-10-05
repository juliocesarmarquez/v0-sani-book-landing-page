"use server"

import { createAdminClient } from "@/lib/supabase/server"

export async function addToWaitlist(email: string) {
  try {
    const supabase = await createAdminClient()

    const { data, error } = await supabase.from("waitlist").insert({ email }).select()

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          error: "This email is already on the waitlist",
        }
      }
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    }
  }
}
