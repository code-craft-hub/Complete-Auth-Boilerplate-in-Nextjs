"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex flex-wrap sm:flex-row justify-between items-center p-4 rounded-xl max-w-[600px] sm:w-[600px] shadow-sm gap-x-4">
      <div className="flex gap-4 flex-wrap sm:flex-row">
        <Button
          variant={pathname === "/client" ? "default" : "outline"}
          asChild
        >
          <Link href={"/client"}>Client</Link>
        </Button>

        <Button
          variant={pathname === "/server" ? "default" : "outline"}
          asChild
        >
          <Link href={"/server"}>Server</Link>
        </Button>
        <Button variant={pathname === "/admin" ? "default" : "outline"} asChild>
          <Link href={"/admin"}>Admin</Link>
        </Button>
        <Button
          variant={pathname === "/settings" ? "default" : "outline"}
          asChild
        >
          <Link href={"/settings"}>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
