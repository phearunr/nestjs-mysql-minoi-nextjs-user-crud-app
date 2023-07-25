import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// get User
const getUser = async (userId) => {
  if (userId) {
    await fetch("http://localhost:3001/user/1", {
      method: "GET",
    })
      .then((response: Response) => response.json())
      .then((user: any) => {
       // console.log(user.accountNumber)
       return user;
      });
  }
};

// Update User
const handleSubmit = async () => {
  // preventDefault();
  try {
    const res = await fetch(`http://localhost:3001/user/1`, {
      method: "PUT",
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

export default function editUser() {

  const router = useRouter();
  const userId = router.query.userId;

  const user  = getUser(userId);

  // console.log('User:' + user);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [accountNumber, setAccountNumber] = useState();

  return (
    <div>
      <div>
      
        <h1>
          Edit User: { userId } 
        </h1>
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
