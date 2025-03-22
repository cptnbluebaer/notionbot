import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: UserSettings, error } = await supabase
    .from("UserSettings")
    .select("*")
    .eq("user_id", user?.id);

  return NextResponse.json({ message: "User Settings Data", UserSettings });
}
