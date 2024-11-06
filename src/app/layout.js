import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Header />
        </header>

        <main className="flex flex-wrap gap-6 my-4 mx-4">{children}</main>
        <footer>
          <h2></h2>
        </footer>
      </body>
    </html>
  );
}
