import React from "react";
import NavLink from "./NavLink";

const AccountLinks: React.FunctionComponent = () => {
  return (
    <div className=" flex gap-8">
      <NavLink href="/auth/login">Login</NavLink>
      <NavLink href="/auth/register">Register</NavLink>
    </div>
  );
};

export default AccountLinks;
