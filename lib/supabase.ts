import { createClient } from "@supabase/supabase-js";

export interface BoardMessage {
  id: string;
  role: "gost" | "vlasnik";
  name: string | null;
  message: string;
  approved: boolean;
  created_at: string;
}

export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
