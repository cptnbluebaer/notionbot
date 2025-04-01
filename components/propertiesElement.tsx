import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

type MyComponentProps = {
  label: string;
  index: number;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PropertiesElement({
  label,
  index,
  handler,
}: MyComponentProps) {
  return (
    <div
      className="animate-[var(--animate-fade-in-scale)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Label htmlFor="title" className="text-[#00BCFF] pb-2">
        {label}
      </Label>
      <Input
        onChange={handler}
        id={label}
        placeholder="Describe this field"
        className="text-white"
      />
    </div>
  );
}
