import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import SessionProviderComponent from "@/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "AuthJs in Nextjs",
  description: "Generated by codecrafthub.site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
        <SessionProviderComponent>
          <Toaster />
          {children}
          </SessionProviderComponent>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
