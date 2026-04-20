import React from 'react';
import Layout from '@/components/layout/Layout';

const roadmap = [
  { date: 'October 2025', title: 'Waitlist Opens', description: 'Join the waitlist for early access and exclusive bonuses. Community channels open.', status: 'current' },
  { date: 'November 2025', title: 'Private Beta', description: 'First 1,000 waitlist members get access to the platform. Free trading and learning modules.', status: 'upcoming' },
  { date: 'December 11, 2025', title: '🚀 Public Launch', description: 'Full platform access. Tournaments, skill vaults, and token economy go live. First $50K prize pool tournament opens.', status: 'upcoming' },
  { date: 'January 2026', title: 'Mobile App Beta', description: 'Native iOS and Android apps with full platform functionality.', status: 'upcoming' },
  { date: 'Q1 2026', title: 'Broker Integration', description: 'Connect with real brokers to trade live markets with your verified skill score.', status: 'upcoming' },
];

export default function Roadmap() {
  return (
    <Layout title="Roadmap">
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Roadmap</h1>
            <p className="text-gray-400 text-lg">The path to revolutionizing skill-based trading</p>
            <div className="inline-flex mt-4 px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full">
              <span className="text-sm text-[#00D4FF] font-medium">🚀 Launching December 11, 2025</span>
            </div>
          </div>

          <div className="space-y-8">
            {roadmap.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className={`font-mono text-sm mb-2 ${
                      item.date === 'December 11, 2025' ? 'text-[#F59E0B] font-bold' : 'text-[#00D4FF]'
                    }`}>
                      {item.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className={`px-3 py-1 border rounded-full text-xs whitespace-nowrap ${
                    item.status === 'current' ? 'bg-[#00D4FF]/10 border-[#00D4FF]/30 text-[#00D4FF]' :
                    item.status === 'upcoming' ? 'bg-gray-800/50 border-gray-700 text-gray-400' :
                    'bg-green-500/10 border-green-500/30 text-green-500'
                  }`}>
                    {item.status === 'current' ? '⚡ In Progress' : item.status === 'upcoming' ? '📅 Upcoming' : '✓ Completed'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/#waitlist" className="inline-flex px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-xl font-semibold text-white hover:opacity-90 transition-all">
              Join the Waitlist →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
