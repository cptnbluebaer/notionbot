import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertComp({
  title,
  description,
  color,
  variant,
}: {
  title: string;
  description: string;
  color: string;
  variant: "success" | "destructive" | "default";
}) {
  return (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
