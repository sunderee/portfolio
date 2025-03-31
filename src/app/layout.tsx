import { RootLayoutProps } from "@/types/ui";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Peter Aleksander Bizjak",
  description:
    "Professional portfolio of Peter Aleksander Bizjak, offering software development, cybersecurity services, and technical consulting.",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
