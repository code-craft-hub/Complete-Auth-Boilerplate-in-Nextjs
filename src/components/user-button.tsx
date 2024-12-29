"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const UserButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export default UserButton;
