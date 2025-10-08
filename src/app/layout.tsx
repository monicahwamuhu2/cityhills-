import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CityHills Initiatives | Empowering Youth, Transforming Communities",
  description: "A youth-led nonprofit committed to equipping youth with skills, mentorship, and opportunities to rise with courage, build businesses, and lead change.",
  keywords: ["youth empowerment", "nonprofit", "mentorship", "entrepreneurship", "tech education", "leadership development"],
  authors: [{ name: "CityHills Initiatives" }],
  openGraph: {
    title: "CityHills Initiatives",
    description: "Empowering Youth, Transforming Communities",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}