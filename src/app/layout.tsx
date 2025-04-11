import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono } from "./ui/fonts";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Продовольча служба",
  description: "Прод",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
