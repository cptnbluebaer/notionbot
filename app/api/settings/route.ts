import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";
import { Settings } from "@/app/settings/page";

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

export async function POST(req: Request) {
  const supabase = await createClient();
  const body = await req.json();

  console.log(body.key_telegrambot);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("UserSettings")
    .update({
      Name: body.Name,
      key_notion: body.key_notion,
      key_openai: body.key_openai,
      key_telegrambot: body.key_telegrambot,
    })
    .eq("user_id", user?.id)
    .select();
  console.log(error);

  return NextResponse.json({ message: "Updated User Settings", data, error });
}
