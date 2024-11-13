"use client";

import { useEffect } from "react";
import { useContext } from "react";
import userContext from "../context/UserContext";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const { Name, authorName, userid } = useContext(userContext);
  const [post, setpost] = useState([]);
  console.log(post);
  console.log(Name);

  useEffect(() => {
    if (!userid) return;
    fetchpostbyuser();
   
  }, [userid]);
  const fetchpostbyuser = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userid}`
    );
    const posts = await data.json();
    setpost(posts);
  };
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {post.map((each) => (
        <Link href={`/PostDetails/${each.id}`} key={each.id}>
          <div
           
            className="border  w-72 h-56 px-4  flex-col shadow-lg py-4"
          >
            <div>
              <h1 className="font-semibold text-sm mb-2">{each.title}</h1>
            </div>
            <div>
              <p>
                {each.body ? each.body.split("").slice(0, 99).join("") : ""}
              </p>
              {/* // */}
            </div>
            <div>
              <span className="font-bold">
                author:<h1>{authorName}</h1>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default page;
