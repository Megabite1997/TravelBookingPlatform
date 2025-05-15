"use client";

// import { useSession } from "next-auth/react";

export default function FlightsPage() {
  // const { data: session } = useSession();

  // if (!session) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
      <ul>
        <li>✈️ Bangkok → Tokyo</li>
        <li>✈️ Bangkok → New York</li>
        <li>✈️ Bangkok → Paris</li>
      </ul>
    </div>
  );
}
