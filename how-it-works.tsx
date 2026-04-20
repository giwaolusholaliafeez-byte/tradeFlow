import React from 'react';
import Layout from '@/components/layout/Layout';

const steps = [
  { number: 1, title: 'Learn', description: 'Complete structured courses and pass quizzes to build foundational trading knowledge. Start with basics and progress to advanced strategies.', icon: '📖' },
  { number: 2, title: 'Practice', description: 'Apply what you\'ve learned in simulated trades with real-time market data. Test strategies without risking capital.', icon: '🎯' },
  { number: 3, title: 'Compete', description: 'Enter tournaments and vaults to prove your skills against other traders. Your performance determines your ranking.', icon: '⚔️' },
  { number: 4, title: 'Earn', description: 'Win TF tokens based on your performance. Higher skill scores unlock access to larger reward pools.', icon: '🏅' },
];

export default function HowItWorks() {
  return (
    <Layout title="How It Works">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn → Prove → Earn</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">The complete skill-based earning loop launching December 11, 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="text-5xl mt-6 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-gray-400 mb-6">Join thousands of traders already waiting for December 11th launch</p>
            <a href="/#waitlist" className="inline-flex px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-xl font-semibold text-white hover:opacity-90 transition-all">
              Join the Waitlist →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
