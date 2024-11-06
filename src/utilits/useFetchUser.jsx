"use client";
import { useState, useEffect } from "react";

const useFetchUser = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setusers(data);
    };
    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useFetchUser;
