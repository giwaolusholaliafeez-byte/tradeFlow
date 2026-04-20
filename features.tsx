import React from 'react';
import Layout from '@/components/layout/Layout';

const features = [
  {
    category: 'Learning',
    items: [
      { title: 'Interactive Courses', description: 'Structured learning paths from beginner to elite with video lessons, quizzes, and practical exercises.' },
      { title: 'Real-time Feedback', description: 'Get immediate feedback on your trades and decisions to accelerate your learning curve.' },
      { title: 'Skill Assessment', description: 'Dynamic skill score that measures your true trading ability across multiple dimensions.' },
    ]
  },
  {
    category: 'Trading',
    items: [
      { title: 'Advanced Charts', description: 'Professional-grade charting tools with multiple timeframes, indicators, and drawing tools.' },
      { title: 'Portfolio Analytics', description: 'Track your performance with detailed metrics including win rate, profit factor, and risk-adjusted returns.' },
      { title: 'Risk Management', description: 'Built-in position sizing calculators and risk analysis tools to protect your capital.' },
    ]
  },
  {
    category: 'Earning',
    items: [
      { title: 'Tournaments', description: 'Compete against other traders in timed events. Top performers share prize pools based on performance.' },
      { title: 'Skill Vaults', description: 'Exclusive reward pools that only high-performing traders can access. Your skill determines your earnings.' },
      { title: 'Achievement Rewards', description: 'Complete challenges and milestones to earn bonus rewards and unlock new features.' },
    ]
  }
];

export default function Features() {
  return (
    <Layout title="Features">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to learn, trade, and earn</p>
          </div>

          {features.map((section, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand-cyan">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
