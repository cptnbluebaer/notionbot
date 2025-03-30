import { Client } from "@notionhq/client";
import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
import { Settings } from "@/app/settings/page";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export async function GET() {
  type SettingsResponse = {
    data: Settings | null;
    error: string | null;
  };

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "No User", status: 400 });

  const { data: UserSettings, error }: PostgrestSingleResponse<Settings[]> =
    await supabase.from("UserSettings").select("*").eq("user_id", user.id);
  if (!UserSettings)
    return NextResponse.json({ error: "No Data", status: 400 });

  const notion = new Client({ auth: UserSettings[0].key_notion });

  const databaseId = "14ba83bf2a3a80beb552cb70367143cb";
  const dataBaseInfo = await notion.databases.retrieve({
    database_id: databaseId,
  });
  return NextResponse.json({ message: "data", dataBaseInfo });
}
