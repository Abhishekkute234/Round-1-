import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegalWork – A Single Platform to Manage Your Legal Work",
  description:
    "Track matters, coordinate schedules, manage clients, centralize documents, and handle communication – all in one system.",
  keywords: ["legal work", "law management", "matters", "billing", "documents", "tasks"],
  openGraph: {
    title: "LegalWork – A Single Platform to Manage Your Legal Work",
    description:
      "Track matters, coordinate schedules, manage clients, centralize documents, and handle communication – all in one system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
