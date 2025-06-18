import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Soumyaranjan Rout - Full Stack Developer | React, Next.js, Node.js Expert',
  description: 'Experienced Full Stack Developer with 5+ years in React, Next.js, Node.js, and Python. View my portfolio showcasing 20+ successful projects including e-commerce platforms, web applications, and mobile apps.',
  keywords: [
    'full stack developer',
    'react developer',
    'nextjs developer',
    'nodejs developer',
    'web developer',
    'javascript expert',
    'typescript',
    'python developer',
    'portfolio',
    'Soumyaranjan Rout',
    'software engineer',
    'frontend developer',
    'backend developer',
    'agentic ai','modelcontext protocol', 'RAG', 'CAG'
  ],
  authors: [{ name: 'Soumyaranjan Rout' }],
  creator: 'Soumyaranjan Rout',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tanushree.vercel.app/',
    title: 'Soumyaranjan Rout - Full Stack Developer Portfolio',
    description: 'Experienced developer specializing in modern web technologies. Check out my projects and skills.',
    siteName: 'Soumyaranjan Rout Portfolio',
    images: [
      {
        url: '/tanulight.png',
        width: 1200,
        height: 630,
        alt: 'Soumyaranjan Rout - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumyaranjan Rout - Full Stack Developer',
    description: 'Portfolio showcasing modern web development projects and expertise.',
    images: ['/tanulight.png'],
    creator: '@tanushree',
  },
  alternates: {
    canonical: 'https://tanushree.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Soumyaranjan Rout',
              url: 'https://tanushree.vercel.app/',
              image: '/tanulight.png',
              jobTitle: 'Full Stack Developer',
              description: 'Experienced Full Stack Developer specializing in React, Next.js, and Node.js',
              sameAs: [
                'https://www.linkedin.com/in/soumyaranjan-rout-87086a207',
                'https://github.com/Soumya7681',
                'https://www.instagram.com/uchiha_sa_su_ke?igsh=MXIzaHoxMXBzdjBq'
              ],
              knowsAbout: [
                'JavaScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'TypeScript',
                'Web Development'
              ],
              alumniOf: 'Utkal University, Bhubaneswar',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangalore',
                addressCountry: 'India'
              }
            })
          }}
        />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>

    </html>
  );
}
