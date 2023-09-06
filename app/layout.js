import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wordle",
  description: "This is a wordle game for you to play!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto ">{children}</div>
      </body>
    </html>
  );
}
