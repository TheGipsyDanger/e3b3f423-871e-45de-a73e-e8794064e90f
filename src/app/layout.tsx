"use client";
import { Inter } from "next/font/google";
import Provider from "@/redux/Provider";
import "./globals.css";

import { StyledComponentsRegistry, ThemeProvider } from "@/styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <StyledComponentsRegistry>
        <ThemeProvider>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
}
