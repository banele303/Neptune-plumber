import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neptune Plumbing the best Plumbing services campany in Gauteng",
  description: "Looking for reliable  plumbing service ? Choose Neptune Plumbers 24 7 today! Call us immediately at +27 83 300 0705 for plumber services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="AW-11405523497" />
    </html>
  );
}
