import Link from "next/link";
import React, { FC } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link className="p-2 hover:bg-blue-800" href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
