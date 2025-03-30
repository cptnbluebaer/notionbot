// app/addconnection/page.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import PropertiesElement from "@/components/propertiesElement";

export default function AddConnection() {
  const [properties, setProperties] = useState({});

  const loadDataBaseHandler = async () => {
    const response = await fetch("/api/addconnection");
    const { message, dataBaseInfo } = await response.json();
    setProperties(dataBaseInfo.properties);
  };

  console.log(Object.entries(properties));

  return (
    <div className=" dark:bg-[#1A1A1A]  px-4 text-white w-5/6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className=" bg-[#030712] dark:bg-white/10 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">
              Add New Database Connection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 text-white">
              <Label htmlFor="dbid">Notion Database ID</Label>
              <Input
                className="bg-[#10141E] text-white"
                id="dbid"
                placeholder="Enter Notion database ID..."
              />
              <Button
                onClick={loadDataBaseHandler}
                className="mt-2 bg-[#364153] hover:bg-[#46546b] text-white"
              >
                Load Properties
              </Button>
            </div>

            <div className="space-y-2 text-white">
              <Label htmlFor="command">Telegram Command</Label>
              <Input
                className="bg-[#10141E]"
                id="command"
                placeholder='e.g. "/task" or "/timetracking"'
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#10141E] dark:bg-white/10 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">
              Define Prompt for OpenAI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="per-property" className="w-full">
              <TabsList className="bg-gray-200 dark:bg-gray-800">
                <TabsTrigger value="per-property">
                  Comment per Property
                </TabsTrigger>
                <TabsTrigger value="full-prompt">Write Full Prompt</TabsTrigger>
              </TabsList>

              <TabsContent value="per-property">
                <p className="text-sm  mb-2 text-white">
                  Add a description for each property of the database that
                  OpenAI should use when creating entries.
                </p>
                <div className="space-y-4">
                  {Object.entries(properties).map((element, index) => (
                    <PropertiesElement
                      index={index}
                      label={element[0]}
                    ></PropertiesElement>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="full-prompt">
                <p className="text-sm text-muted-foreground mb-2">
                  Write a custom prompt that OpenAI should use to fill the
                  database entry.
                </p>
                <Textarea
                  placeholder="Describe the prompt OpenAI should follow..."
                  rows={8}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button className="bg-[#00BCFF] hover:bg-[#005fb891] text-white">
            Save Connection
          </Button>
        </div>
      </div>
    </div>
  );
}
