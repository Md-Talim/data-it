import Image from "next/image";

interface Props {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "light" }: Props) => {
  return (
    <Image src={`/logo-${variant}.svg`} width={96} height={25} alt="logo" />
  );
};
