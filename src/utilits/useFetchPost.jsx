"use client";
import { useState, useEffect } from "react";

let useFetchPosts = () => {
  const [Posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  let [selectedUserId, setselectedUserId] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      //   console.log(data);

      //   const filteredPosts = data.filter(
      //     (post) => post.userId === selectedUserId
      //   );

      // Filter posts by userId

      const filteredpost = data.filter(
        (post) => post.userId === parseInt(selectedUserId)
      );

      //   console.log(filteredPosts);
      setPosts(filteredpost);
      console.log(Posts);
    };
    fetchPosts();
  }, [selectedUserId]);

  return { Posts, selectedUserId, setselectedUserId };
};

export default useFetchPosts;
