'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation wrapper component
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Handle scroll for navbar blur
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setNavbarBlur(window.scrollY > 50);
    });
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Thanks for joining the waitlist!' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1E1E1E] text-white">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navbarBlur ? 'bg-[#1E1E1E]/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Fantasy Fútbol</div>
          <div className="flex items-center gap-6">
            <a
              href="/knowledge-hub"
              className="hidden md:block text-[#828282] hover:text-white transition-colors text-sm font-medium"
            >
              Learn the Game
            </a>
            <a
              href="https://apps.apple.com/app/id6755744058"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00FF87] text-[#1E1E1E] px-6 py-2 rounded-full font-semibold hover:bg-[#00FF87]/90 transition-colors text-sm md:text-base"
            >
              Download App
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF87] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-800 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <FadeInSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Fantasy Soccer, Finally Done Right.
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl md:text-2xl text-[#828282] mb-10 max-w-3xl mx-auto">
              Draft entire clubs from Europe's top 5 leagues. Earn points across every competition - leagues, cups, and Champions League nights.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://apps.apple.com/app/id6755744058"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00FF87] text-[#1E1E1E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00FF87]/90 transition-all hover:scale-105"
              >
                Download on the App Store
              </a>
              <a
                href="#waitlist"
                className="text-[#00FF87] hover:text-white transition-colors"
              >
                Join the Android waitlist →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Every other fantasy soccer game is broken.
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-[#2A2A2A] p-8 rounded-2xl">
                <div className="text-[#00FF87] text-4xl mb-4">❌</div>
                <p className="text-xl">FPL only covers one league</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-[#2A2A2A] p-8 rounded-2xl">
                <div className="text-[#00FF87] text-4xl mb-4">❌</div>
                <p className="text-xl">Cup matches don't count anywhere</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-[#2A2A2A] p-8 rounded-2xl">
                <div className="text-[#00FF87] text-4xl mb-4">❌</div>
                <p className="text-xl">You're drafting players, not teams</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Simple to learn. Deep to master.
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12">
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <div className="text-[#00FF87] text-8xl font-bold mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4">Draft Clubs</h3>
                <p className="text-[#828282] text-lg">
                  Pick teams from all 5 European leagues
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="text-[#00FF87] text-8xl font-bold mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4">Pick Your Starting 5</h3>
                <p className="text-[#828282] text-lg">
                  Choose your lineup each month
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="text-center">
                <div className="text-[#00FF87] text-8xl font-bold mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4">Earn Points</h3>
                <p className="text-[#828282] text-lg">
                  Win points on match results and goals across every competition
                </p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <p className="text-center mt-16 text-[#828282]">
              Want the full breakdown?{' '}
              <a href="/knowledge-hub" className="text-[#00FF87] hover:text-white transition-colors">
                Explore the Knowledge Hub →
              </a>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Built for real European football fans.
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-4 px-4 text-[#828282] font-semibold"></th>
                    <th className="py-4 px-4 text-[#00FF87] font-bold">Fantasy Fútbol</th>
                    <th className="py-4 px-4 text-[#828282] font-semibold">FPL</th>
                    <th className="py-4 px-4 text-[#828282] font-semibold">Fantasy La Liga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2A2A2A]">
                    <td className="py-4 px-4">Team-based drafting</td>
                    <td className="py-4 px-4 text-center text-[#00FF87] text-2xl">✓</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                  </tr>
                  <tr className="border-b border-[#2A2A2A]">
                    <td className="py-4 px-4">All 5 leagues</td>
                    <td className="py-4 px-4 text-center text-[#00FF87] text-2xl">✓</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                  </tr>
                  <tr className="border-b border-[#2A2A2A]">
                    <td className="py-4 px-4">Cups & European tournaments</td>
                    <td className="py-4 px-4 text-center text-[#00FF87] text-2xl">✓</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                  </tr>
                  <tr className="border-b border-[#2A2A2A]">
                    <td className="py-4 px-4">Monthly squad strategy</td>
                    <td className="py-4 px-4 text-center text-[#00FF87] text-2xl">✓</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                  </tr>
                  <tr className="border-b border-[#2A2A2A]">
                    <td className="py-4 px-4">Multi-competition scoring</td>
                    <td className="py-4 px-4 text-center text-[#00FF87] text-2xl">✓</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                    <td className="py-4 px-4 text-center text-[#828282] text-2xl">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="waitlist" className="py-24 px-6 bg-[#171717]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your squad is waiting.
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <a
              href="https://apps.apple.com/app/id6755744058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-12"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-[#828282] mb-6">Android coming soon - join the waitlist</p>
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-[#2A2A2A] border border-[#3A3A3A] rounded-full text-white placeholder-[#828282] focus:outline-none focus:border-[#00FF87] disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00FF87] text-[#1E1E1E] px-8 py-3 rounded-full font-bold hover:bg-[#00FF87]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            {message && (
              <p className={`text-sm ${message.type === 'success' ? 'text-[#00FF87]' : 'text-red-400'}`}>
                {message.text}
              </p>
            )}
          </FadeInSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="text-[#828282]">Fantasy Fútbol © 2026</div>
            <div className="flex gap-6 text-[#828282]">
              <a href="#how-it-works" className="hover:text-white transition-colors">
                How It Works
              </a>
              <a href="/knowledge-hub" className="hover:text-white transition-colors">
                Knowledge Hub
              </a>
              <a
                href="https://apps.apple.com/app/id6755744058"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Download
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-[#828282]">
            Not affiliated with any football league or governing body.
          </p>
        </div>
      </footer>
    </div>
  );
}
