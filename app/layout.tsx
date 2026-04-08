import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AP Powerbuilding & Demolition Tmi",
  description:
    "AP Powerbuilding & Demolition Tmi tekee purku-, remontti- ja saneeraustöitä Ilmaristen alueella.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
