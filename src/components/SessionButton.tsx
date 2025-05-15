"use client";

import { useSession, signOut } from "next-auth/react";

export default function SessionButton() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });

    window.open("https://accounts.google.com/logout", "_blank");

    setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 500);
  };

  if (session) {
    return (
      <button
        onClick={handleSignOut}
        className="bg-red-500 text-white px-4 py-2 rounded-lg ml-4"
      >
        Logout
      </button>
    );
  }

  return null;
}
