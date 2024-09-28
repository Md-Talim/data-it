import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div className={cn("mx-auto max-w-6xl", className)} {...rest}>
      {children}
    </div>
  );
};
