import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { ReactQueryClientProvider } from '@/providers/query-provider'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolution X Search",
  description: "Search engine for Evolution X project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
