import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});
export const metadata: Metadata = {
  title: "dan.f.v Portfolio",
  description: "Dan Hendrix F. Villadolid Portfolio",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans">
        {/* <div className="bg-dan-profile"> */}
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow flex items-center justify-center w-full px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
        {/* </div> */}
      </body>
    </html>
  );
}
