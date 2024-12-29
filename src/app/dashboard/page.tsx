"use client";
import React from 'react'
import { auth } from "@/auth"
import { signOut, useSession } from 'next-auth/react'
const Dashboard = () => {
    const {data,status,update} = useSession();
    // console.log(data,status)
    const publicRoutes = ["/", "/api/auth/signin", "/api/auth/signout", "/api/auth/callback"];
    const url = "/dashboard"
  // Check if the requested path is public
  const isPublic = publicRoutes.some((route) => url.startsWith(route));

  console.log(isPublic)

  return (
    <div>
      welcome
      <button onClick={() => signOut({redirectTo: "/"})}>Signout</button>
    </div>
  )
}

export default Dashboard
