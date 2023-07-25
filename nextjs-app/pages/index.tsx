import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <div>
        <h1>Thank for yours</h1>
        <p>
          Checkout on CRUD User:  <Link href="/user"> User Listings </Link>
        </p>
      </div>
    </>
  );
}
