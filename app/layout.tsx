import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyles } from "@/app/global";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twnty",
  description: "Test task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
