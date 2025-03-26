"use client";
import { createClient } from "../utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertComp } from "@/components/alert";

export type Settings = {
  key_notion: string;
  key_openai: string;
  key_telegrambot: string;
  Name: string;
  Email: string;
};

export default function UserSettings() {
  const [settings, setSettings] = useState<Settings>();
  const [alert, setAlert] = useState<{ show: boolean; variant: string }>({
    show: false,
    variant: "success",
  });

  const submitHandler = async () => {
    const data = await fetch("/api/settings", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(settings),
    });
    const res = await data.json();
    if (!res.error) setAlert({ show: true, variant: "success" });
    if (res.error) setAlert({ show: true, variant: "destructive" });
    setTimeout(() => {
      setAlert({ show: false, variant: "success" });
    }, 3000);
  };

  const changeSettingsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;

    setSettings((prevState) => {
      return {
        ...(prevState ?? {
          key_notion: "",
          key_openai: "",
          key_telegrambot: "",
          Name: "",
          Email: "",
        }),
        [id]: value,
      };
    });
  };

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
            onChange={changeSettingsHandler}
            value={settings?.Name ?? ""}
            type="text"
            id="Name"
            placeholder="Enter your name"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Email
          </Label>
          <Input
            onChange={changeSettingsHandler}
            value={settings?.Email ?? ""}
            type="email"
            id="Email"
            placeholder="Enter your email"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>

        <div>
          <Label htmlFor="notionApiKey" className="block text-sm font-medium">
            Notion API Key
          </Label>
          <Input
            onChange={changeSettingsHandler}
            type="password"
            id="key_notion"
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
            onChange={changeSettingsHandler}
            value={settings?.key_telegrambot ?? ""}
            type="password"
            id="key_telegrambot"
            placeholder="Enter your Telegram API Key"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>

        <div>
          <Label htmlFor="openAiKey" className="block text-sm font-medium">
            OpenAI API Key
          </Label>
          <Input
            onChange={changeSettingsHandler}
            value={settings?.key_openai ?? ""}
            type="password"
            id="key_openai"
            placeholder="Enter your OpenAI API Key"
            className="w-full mt-1 h-10 border-2 border-[#C4DFE6] bg-[#deeaed]"
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={submitHandler}
            className="cursor-pointer bg-[#492af9] w-50"
          >
            Save Settings
          </Button>
        </div>
      </div>
      {alert.show ? (
        <div className="pt-2">
          <AlertComp
            title="Success!"
            description="You successfully updated your settings"
            color=""
            variant="success"
          ></AlertComp>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
