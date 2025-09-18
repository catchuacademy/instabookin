// components/ForceLogout.tsx
"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function ForceLogout() {
  useEffect(() => {
    signOut({ callbackUrl: "/login" });
  }, []);

  return <p>Signing out...</p>;
}