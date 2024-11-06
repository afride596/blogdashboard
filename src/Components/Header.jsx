"use client";
import useFetchPosts from "@/utilits/useFetchPost";
import useFetchUser from "@/utilits/useFetchUser";
import { useEffect, useState } from "react";

const Header = () => {
  const { users } = useFetchUser();
  //   const { value, setvalue } = useState();
  const { selectedUserId, setselectedUserId } = useFetchPosts();

  return (
    <div>
      <nav className="bg-black w-full h-20 text-white flex justify-evenly items-center">
        <div className="border">
          <h1 className="text-white">logo</h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 font-medium text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>

            <select
              className="text-black outline-none bg-none"
              onChange={(e) => {
                // setvalue(selectedValue); // Set the selected user ID
                setselectedUserId(e.target.value); // Update selectedUserId
              }}
              value={selectedUserId}
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
