"use client";

import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        onClick={() => signIn("google", { prompt: "select_account" })}
        className="bg-red-500 text-white p-2 w-full mb-2 hover:bg-red-700 cursor-pointer"
      >
        Login with Google <FontAwesomeIcon icon={faGoogle} />
      </button>
    </div>
  );
}
