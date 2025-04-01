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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

type SingleProperty = {
  id: string;
  name: string;
  type: string;
};

type Properties = {
  [key: string]: SingleProperty;
};

type promptInfo = {
  [key: string]: string;
};

export default function AddConnection() {
  const [promptInfo, setPromptInfo] = useState<promptInfo>({});
  const [properties, setProperties] = useState<Properties>({});

  const loadDataBaseHandler = async () => {
    const response = await fetch("/api/addconnection");
    const { message, dataBaseInfo } = await response.json();
    setProperties(dataBaseInfo.properties);
  };

  const changePromptInfoHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { value } = event.target;

    setPromptInfo((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="dark:bg-[#1A1A1A] px-4 text-white w-5/6"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-[#030712] dark:bg-white/10 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white">
              Add New Database Connection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 text-white">
              <Label htmlFor="dbid">Notion Database ID</Label>
              <Input
                pattern="^[A-Za-z0-9]{10,}$"
                className="bg-[#10141E] text-[#00BCFF]"
                id="dbid"
                placeholder="Enter Notion database ID..."
              />
              <Button
                type="button"
                onClick={loadDataBaseHandler}
                className="mt-2 bg-[#364153] hover:bg-[#46546b] text-white"
              >
                Load Properties
              </Button>
            </div>
          </CardContent>
        </Card>

        {Object.keys(properties).length <= 0 ? (
          <></>
        ) : (
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
                  <TabsTrigger value="full-prompt">
                    Write Full Prompt
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="per-property">
                  <p className="text-sm mb-2 text-white">
                    Add a description for each property of the database that
                    OpenAI should use when creating entries.
                  </p>
                  <div>
                    {Object.entries(properties).map((element, index) => (
                      <Badge
                        key={index}
                        style={{ animationDelay: `${index * 100}ms` }}
                        className="m-2 p-3 text-[#00BCFF] bg-[#1D202A] animate-[var(--animate-fade-in-scale)]"
                      >
                        {element[0]}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-5">
                    <Textarea
                      onChange={changePromptInfoHandler}
                      className="text-white"
                      id="promptdescription"
                      placeholder="Describe the prompt OpenAI should follow..."
                      rows={8}
                    />
                  </div>
                  <Separator className="mt-10" />
                  <p className="pb-2 text-white pt-4">
                    Add some additional Info for each field
                  </p>
                  <div className="space-y-4">
                    {Object.entries(properties).map((element, index) => (
                      <PropertiesElement
                        key={index}
                        handler={changePromptInfoHandler}
                        index={index}
                        label={element[0]}
                      />
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
                    className="text-white"
                    rows={8}
                  />
                </TabsContent>
                <div className="space-y-2 pt-2 text-white">
                  <Label htmlFor="command">Telegram Command</Label>
                  <Input
                    pattern="^\/[A-Za-z]{0,15}$"
                    className="bg-[#10141E]"
                    id="command"
                    required
                    placeholder='e.g. "/task" or "/timetracking"'
                  />
                </div>
              </Tabs>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#00BCFF] hover:bg-[#005fb891] text-white"
          >
            Save Connection
          </Button>
        </div>
      </div>
    </form>
  );
}
