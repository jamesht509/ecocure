import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Yankee Pest | Premium Pest Management",
  description: "Scientific protection and absolute peace of mind for luxury homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-[#fffbeb] font-sans antialiased text-[#064e3b]",
          inter.variable
        )}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

