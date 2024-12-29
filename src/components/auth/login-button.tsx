"use client";

import { useRouter } from "next/navigation";

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") return <span>Todo: implement modal</span>;
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
