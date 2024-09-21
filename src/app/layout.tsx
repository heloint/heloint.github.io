import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./sharedCcomponents/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "heloint (Dániel Májer)",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-32 flex flex-col justify-center items-center">
          {/* <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full"> */}
          {children}
          {/* </div> */}
        </main>
      </body>
    </html>
  );
}
