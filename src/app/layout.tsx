import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Web Smart — Digital Products That Scale",
  description:
    "Web Smart builds premium web applications, SaaS products, and automation systems for startups and growing businesses.",
  keywords: [
    "web application development",
    "SaaS development",
    "automation solutions",
    "software company",
    "web smart",
  ],
  authors: [{ name: "Web Smart" }],
  openGraph: {
    title: "Web Smart — Digital Products That Scale",
    description:
      "We help startups and businesses build web apps, SaaS products, and automation systems that grow with you.",
    type: "website",
    locale: "en_US",
    siteName: "Web Smart",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Smart — Digital Products That Scale",
    description:
      "Premium web application, SaaS, and automation development for businesses that mean business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

