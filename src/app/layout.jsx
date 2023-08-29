import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="container mx-auto px-5 mt-4">{children}</main>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <Link href="/doc" className="bg-green-200 text-white px-4 py-2 rounded-full font-semibold">
            Documentacion
          </Link>
        </div>
      </body>
    </html>
  );
}
