import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
});

export const metadata = {
  title: "Mostafa Falcon | Mobile & Web Developer",
  description: "I’m Mostafa Falcon, a Flutter and Next.js developer. I build high-performance mobile apps and responsive websites with great user experience.",
  icons: {
    icon: "/logo.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/assets/images/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${outfit.className} ${ovo.className} bg-[#11001F] text-white antialiased leading-8 overflow-x-hidden`}>{children}</body>
    </html>
  );
}
