import "~/styles/globals.css";

import { Red_Hat_Display } from "next/font/google";
import { type Metadata } from "next";

const redhat_display = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-redhat-display",
});

export const metadata: Metadata = {
  title: "JEP - CV - Johannes Eimer",
  description: "JEP - CV - Johannes Eimer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${redhat_display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
