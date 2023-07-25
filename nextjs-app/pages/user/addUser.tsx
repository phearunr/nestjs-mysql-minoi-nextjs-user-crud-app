"use client";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addUser() {
  const router = useRouter();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, age, accountNumber }),
      });

      if (!res.ok) {
        throw new Error("Failed to add user ");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Add User</h1>
        <Link href="/user">Back To User Listings</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setAge(e.target.value)}
              value={age}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Age"
            />
          </div>

          <div>
            <input
              onChange={(e) => setAccountNumber(e.target.value)}
              value={accountNumber}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Account Number"
            />
          </div>
          <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
