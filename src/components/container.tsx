import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn("mx-auto max-w-6xl px-4 py-6 md:px-10", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
