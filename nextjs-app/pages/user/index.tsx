import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/user", {
      headers: {
        mode: "cors",
      },
    })
      .then((response: Response) => response.json())
      .then((users: any) => {
        setUsers(users);
      });
  }, []);
  const router = useRouter();
  const removeUser = async (id) => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3001/user/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <>
      <div>
        <Link href="/user/addUser">Add User</Link>
      </div>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <td>Name</td>
              <th>Age</th>
              <th>Account Number</th>
              <th>Is Active </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => {
              return (
                <tr key={`user-${user.id}`}>
                  <td> #{user.id}</td>
                  <td>
                    {user.firstName} {user.lastName}{" "}
                  </td>
                  <td> {user.age}</td>
                  <td> {user.accountNumber}</td>
                  <td> {user.isActive == 1 ? "active" : "in-active"}</td>
                  <td>
                    <Link href={`/user/${user.id}`}> edit </Link>
                    <a
                      onClick={() => removeUser(user.id)}
                      className="text-red-400"
                    >
                      | delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
