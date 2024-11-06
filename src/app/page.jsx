"use client";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import useFetchPosts from "@/utilits/useFetchPost";

const Postss = () => {
  const [selectedUserId, setselectedUserId] = useState(1);

  const { Posts } = useFetchPosts(selectedUserId);
  if (!Posts) {
    return <p>No posts available or loading...</p>;
  }
  useEffect(() => {
    console.log("Fetched posts:", Posts);
  }, [Posts]);
  console.log(Posts);

  // if (error) return <p>Error: {error}</p>;

  return Posts.map((post) => {
    // const { userId, id, title, body } = post;
    return (
      <div key={post.id} className="flex justify-center flex-wrap ">
        <div className="border w-72  p-4 shadow-2xl">
          <div></div>

          <div>
            <h1 className="text-base font-medium">{post.title}</h1>
            <p className="text-sm">
              {post.body.split("").slice(0, 99).join("")}
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default Postss;
