"use client";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { GlobalWrapper } from "@/components/GlobalWrapper";
import Provider from "@/redux/Provider";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/datepicker.min.js" />
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <GlobalWrapper.Container>
            <GlobalWrapper.Content>{children}</GlobalWrapper.Content>
          </GlobalWrapper.Container>
        </body>
      </html>
    </Provider>
  );
}
