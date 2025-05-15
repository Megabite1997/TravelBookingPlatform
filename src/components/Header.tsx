"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import SessionButton from "@/components/SessionButton";

const Header: React.FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Travel Booking Platform</div>
      <div className="flex items-center">
        <nav className="flex gap-4">
          {!session && (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register">Register</Link>
              <Link href="/auth/reset-password">Reset Password</Link>
            </>
          )}
          <Link href="/booking/flights">Flights</Link>
          <Link href="/booking/hotels">Hotels</Link>
          <Link href="/booking/history">History</Link>
        </nav>
        <SessionButton />
      </div>
    </header>
  );
};

export default Header;
