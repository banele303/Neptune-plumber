import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neptune Plumbing the best Plumbing services campany in Gauteng",
  description: "We offer the bext plumbing services than any one else 24 7 , fast and reliable plumber",
};

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
