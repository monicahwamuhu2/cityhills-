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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "CityHills Initiatives | Empowering Youth, Transforming Communities",
    description: "A youth-led nonprofit committed to equipping youth with skills, mentorship, and opportunities to rise with courage, build businesses, and lead change.",
    type: "website",
    url: "https://cityhillinitiatives.com",
    siteName: "CityHills Initiatives",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CityHills Initiatives - Empowering Youth, Transforming Communities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CityHills Initiatives | Empowering Youth, Transforming Communities",
    description: "A youth-led nonprofit committed to equipping youth with skills, mentorship, and opportunities to rise with courage, build businesses, and lead change.",
    images: ['/opengraph-image.png'],
  },
  metadataBase: new URL('https://cityhillinitiatives.com'),
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