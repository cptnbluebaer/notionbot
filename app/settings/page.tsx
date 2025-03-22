"use client";
import { createClient } from "../utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Settings = {
  key_notion: string;
  key_openai: string;
  key_telegrambot: string;
  Name: string;
  Email: string;
};

export default function UserSettings() {
  const [settings, setSettings] = useState<Settings>();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetch("/api/settings").then((response) =>
        response.json()
      );

      setSettings(data.UserSettings[0]);
    };
    fetchUserData();
  }, []);

  return (
    <div className="p-6 w-full mx-auto rounded-lg shadow-md bg-[#ffffff]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">User Settings</h1>
        <p className="text-gray-600">
          Change your settings to set up your NotionBOT
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium">
            Name
          </Label>
          <Input
            value={settings?.Name ?? ""}
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Email
          </Label>
          <Input
            value={settings?.Email ?? ""}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>

        <div>
          <Label htmlFor="notionApiKey" className="block text-sm font-medium">
            Notion API Key
          </Label>
          <Input
            type="text"
            id="notionApiKey"
            placeholder="Enter your Notion API Key"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
            value={settings?.key_notion ?? ""}
          />
        </div>

        <div>
          <Label htmlFor="telegramApiKey" className="block text-sm font-medium">
            Telegram API Key
          </Label>
          <Input
            value={settings?.key_telegrambot ?? ""}
            type="text"
            id="telegramApiKey"
            placeholder="Enter your Telegram API Key"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>

        <div>
          <Label htmlFor="openAiKey" className="block text-sm font-medium">
            OpenAI API Key
          </Label>
          <Input
            value={settings?.key_openai ?? ""}
            type="text"
            id="openAiKey"
            placeholder="Enter your OpenAI API Key"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>
        <div className="flex justify-center">
          <Button className="cursor-pointer bg-[#66a5ad] w-50">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
