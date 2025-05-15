"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import SessionButton from "@/components/SessionButton";
import AccountLinks from "./AccountLinks";
import NavLink from "./NavLink";

const Header: React.FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center sticky">
      <Link className="text-xl font-bold" href="/">
        Travel Booking Platform
      </Link>
      <div className="flex items-center">
        <nav className="flex gap-8">
          <NavLink href="/booking/flights">Flights</NavLink>
          <NavLink href="/booking/hotels">Hotels</NavLink>
          <NavLink href="/booking/history">History</NavLink>

          {!session && <AccountLinks />}
        </nav>
        <SessionButton />
      </div>
    </header>
  );
};

export default Header;
