import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Finder",
  description: "Discover your next car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
