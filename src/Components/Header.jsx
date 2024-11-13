"use client";
import Image from "next/image";
import image from "../app/design.png";
import { useEffect, useContext } from "react";
import userContext from "./src/context/userContext.jsx";
import Link from "next/link";

const Header = () => {
  const { setuserid, setName, Name, setauthorName } = useContext(userContext);

  useEffect(() => {
    userdata();
  }, []);

  const userdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setName(users);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleUserSelect = (e) => {
    const selectedUserId = e.target.value;
    const selectedUser = Name.find(
      (user) => user.id === parseInt(selectedUserId)
    );
    if (selectedUser) {
      setauthorName(selectedUser.name);
      setuserid(selectedUserId);
    }
  };

  return (
    <nav className="bg-black w-full h-20 text-white flex justify-between px-2 items-center">
      <div className="pl-4">
        <Image className="w-10" src={image} alt="Logo" width={40} height={40} />
      </div>
      <div>
        <ul className="flex justify-between items-center gap-4 font-medium text-lg">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/services">
            <li>Service</li>
          </Link>
          <li>
            <select
              className="text-black outline-none bg-none"
              onChange={handleUserSelect}
            >
              <option value="">Select User</option>
              {Name.length > 0 &&
                Name.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
