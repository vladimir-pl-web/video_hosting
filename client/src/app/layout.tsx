
import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.scss";
import classes from './mainLayout.module.scss';
import AuthProvider from "./providers/AuthProvider";
import Sidebar from "./components/modules/Sidebar/Sidebar";
import LayoutContent from "./components/modules/LayoutContent/LayoutContent";

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Vlad's videos",
  description: "My personal Youtube))",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${roboto.variable} antialiased`}
      > 
      <AuthProvider>
        <div className={classes.mainLayout}>
          <Sidebar />
          <LayoutContent>
            {children}
          </LayoutContent>

        </div>

      </AuthProvider>
      </body>
    </html>
  );
}
