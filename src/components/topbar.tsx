import { Button } from "./button";
import { Logo } from "./logo";

export const Topbar = () => (
  <header className="flex w-full items-center justify-between">
    <Logo />

    <Button variant="secondary">Apply for access</Button>
  </header>
);
