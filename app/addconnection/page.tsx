// app/addconnection/page.tsx

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AddConnection() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] dark:bg-[#1A1A1A] py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">
              Add New Database Connection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="dbid">Notion Database ID</Label>
              <Input id="dbid" placeholder="Enter Notion database ID..." />
              <Button className="mt-2 bg-[#492AF9] hover:bg-[#3e23d0] text-white">
                Load Properties
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="command">Telegram Command</Label>
              <Input
                id="command"
                placeholder='e.g. "/task" or "/timetracking"'
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Define Prompt for OpenAI</CardTitle>
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
                <p className="text-sm text-muted-foreground mb-2">
                  Add a description for each property of the database that
                  OpenAI should use when creating entries.
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="e.g. The name of the task" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      placeholder="e.g. When the task is due"
                    />
                  </div>
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
          <Button className="bg-[#492AF9] hover:bg-[#3e23d0] text-white">
            Save Connection
          </Button>
        </div>
      </div>
    </div>
  );
}
