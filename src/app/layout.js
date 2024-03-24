import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { ToastContainer, toast } from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}