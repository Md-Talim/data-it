import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary" }: Props) => {
  const style = {
    primary:
      "hover:bg-transparent border-2 border-springGreen bg-springGreen px-6 py-3 font-bold text-russianViolet hover:text-springGreen",
    secondary: "border-b-2 border-springGreen py-1 hover:text-springGreen",
  };

  return (
    <button className={cn("font-bold", style[variant])}>{children}</button>
  );
};
