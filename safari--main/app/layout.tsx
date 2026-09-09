import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = { title: "Dusty Roads Safari Camp" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}