import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

type MyComponentProps = {
  label: string;
  index: number;
};

export default function PropertiesElement({ label, index }: MyComponentProps) {
  return (
    <div
      className="animate-[var(--animate-fade-in-scale)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Label htmlFor="title" className="text-white">
        {label}
      </Label>
      <Input id="title" placeholder="Describe this field" />
    </div>
  );
}
