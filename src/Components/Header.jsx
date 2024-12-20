"use client";
import Image from "next/image";
import image from "../app/design.png";
import { useEffect, useContext } from "react";
import userContext from "../context/UserContext";
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
    <div className=" flex  border w-full justify-between ">
      <div className="pl-4 ">
        <Image className="w-20" src={image} alt="Logo" width={40} height={40} />
      </div>

      <nav className="flex justify-end">
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
      </nav>
    </div>
  );
};

export default Header;
