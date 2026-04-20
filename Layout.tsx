import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const siteTitle = title ? `${title} | TradFlow` : 'TradFlow | Skill-Based Trading Platform';
  const siteDescription = description || 'Learn to trade, prove your skills, and earn real rewards. The first platform where your performance determines your earnings.';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#050507]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
