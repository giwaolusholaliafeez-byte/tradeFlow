import React, { useState, useEffect } from 'react';
import Logo from '../components/ui/Logo';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(2847);

  useEffect(() => {
    // Target: December 11, 2026 (future date)
    const targetDate = new Date('December 11, 2026 00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitted(true);
    setEmail('');
    setWaitlistCount(waitlistCount + 1);
    setLoading(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const features = [
    { icon: '📚', title: 'Trading Academy', desc: 'Structured courses from Beginner to Elite' },
    { icon: '🏆', title: 'Tournaments', desc: 'Compete and win prize pools' },
    { icon: '🔐', title: 'Skill Vaults', desc: 'Exclusive reward pools for top traders' },
    { icon: '📊', title: 'Analytics', desc: 'Track your performance metrics' },
    { icon: '🎯', title: 'Skill Score', desc: 'Measure your true trading ability' },
    { icon: '💰', title: 'Earn While You Learn', desc: 'Build your TF balance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#050507]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#1A1A1F] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo/>
            <span className="text-xl font-semibold text-white">TradFlow</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
            <a href="https://x.com/trade_flowog?s=21" target="https://x.com/trade_flowog?s=21" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="https://t.me/tradflow" target="_blank" className="text-gray-400 hover:text-white transition">Telegram</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
            </span>
            <span className="text-sm text-[#00D4FF] font-medium">Launching December 1, 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Learn to Trade.
            <br />
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#F59E0B] bg-clip-text text-transparent">
              Prove Your Skills.
            </span>
            <br />
            Earn Real Rewards.
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            The first skill-based trading platform where your performance unlocks exclusive rewards.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF]">$100K+</div>
              <div className="text-sm text-gray-500">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF]">10K+</div>
              <div className="text-sm text-gray-500">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF]">94%</div>
              <div className="text-sm text-gray-500">Retention Rate</div>
            </div>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">⏰ TIME UNTIL LAUNCH</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#111114] border-2 border-[#00D4FF]/30 rounded-2xl px-6 py-4 min-w-[100px] text-center">
                <div className="text-4xl font-bold text-[#00D4FF] font-mono">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 uppercase mt-1">Days</div>
              </div>
              <div className="bg-[#111114] border-2 border-[#00D4FF]/30 rounded-2xl px-6 py-4 min-w-[100px] text-center">
                <div className="text-4xl font-bold text-[#00D4FF] font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 uppercase mt-1">Hours</div>
              </div>
              <div className="bg-[#111114] border-2 border-[#00D4FF]/30 rounded-2xl px-6 py-4 min-w-[100px] text-center">
                <div className="text-4xl font-bold text-[#00D4FF] font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 uppercase mt-1">Minutes</div>
              </div>
              <div className="bg-[#111114] border-2 border-[#00D4FF]/30 rounded-2xl px-6 py-4 min-w-[100px] text-center">
                <div className="text-4xl font-bold text-[#00D4FF] font-mono">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 uppercase mt-1">Seconds</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">December 11, 2026</p>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-[#111114] border border-[#1A1A1F] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-xl font-semibold text-white hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            ) : (
              <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl px-5 py-4">
                <p className="text-[#00D4FF]">✓ You're on the list! We'll notify you on December 11, 2026.</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-4">
              <span className="text-[#00D4FF] font-semibold">{waitlistCount.toLocaleString()}</span> traders already waiting
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-[#1A1A1F] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to succeed</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#111114] border border-[#1A1A1F] rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1A1A1F] text-center text-gray-500 text-sm">
        <p>&copy; 2026 TradFlow. All rights reserved. Launching December 11, 2026.</p>
      </footer>
    </div>
  );
}
