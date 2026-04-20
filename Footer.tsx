import React from 'react';
import Link from 'next/link';

const footerLinks = {
  product: [
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/roadmap', label: 'Roadmap' },
  ],
  community: [
    { href: 'https://twitter.com/tradflow', label: 'Twitter', external: true },
    { href: 'https://t.me/tradflow', label: 'Telegram', external: true },
  ],
  legal: [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1F] bg-[#050507]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-semibold text-white">TradFlow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The first skill-based trading platform where your performance determines your earnings. Learn, prove, and earn.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/tradflow" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00D4FF] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://t.me/tradflow" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00D4FF] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.216-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.953l11.56-4.458c.538-.19 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1A1A1F] mt-12 pt-8">
          <p className="text-gray-500 text-xs text-center">
            &copy; {new Date().getFullYear()} TradFlow. All rights reserved. Built for serious traders.
          </p>
        </div>
      </div>
    </footer>
  );
}
