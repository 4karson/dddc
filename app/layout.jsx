import "./globals.css";
import { DM_Sans } from 'next/font/google'
import { Inter } from "next/font/google";
import Navibar from "./_components/Navibar";
import { NextUIProvider } from "@nextui-org/system";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NextUIProvider>
          <Navibar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
