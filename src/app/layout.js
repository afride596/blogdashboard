"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "src/Components/Header";
import userContext from "../context/UserContext";
import { useState } from "react";
//
export default function RootLayout({ children }) {
  const [userid, setuserid] = useState(1);
  const [Name, setName] = useState("");
  const [authorName, setauthorName] = useState("Leanne Graham");

  return (
    <userContext.Provider
      value={{ setuserid, userid, setName, Name, setauthorName, authorName }}
    >
      <html lang="en">
        <body>
          <Header>
            <Header />
          </Header>
          <main className="flex flex-wrap gap-6 my-4 mx-4">{children}</main>
          {/* // */}
          <footer className="w-full fixed -bottom-1 h-14 border font-bold bg-[#635d5d] text-white flex justify-center items-center">
            <h1>Footer</h1>
          </footer>
        </body>
      </html>
    </userContext.Provider>
  );
}
