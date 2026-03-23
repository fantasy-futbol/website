import Link from 'next/link';
import type { Metadata } from 'next';
import { articles, categories, getArticlesByCategory } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Support — Fantasy Fútbol',
  description: 'Get help with Fantasy Fútbol. Contact us, browse FAQs, and find guides in the Knowledge Hub.',
};

const categoryDescriptions: Record<string, string> = {
  'Getting Started': 'New to the game? Start here.',
  'Gameplay': 'Deep dives on scoring, lineups, and strategy.',
  'App Guide': 'How to navigate and use the app.',
};

export default function KnowledgeHubPage() {
  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-[#00FF87] transition-colors">
            Fantasy Fútbol
          </Link>
          <a
            href="https://apps.apple.com/app/id6755744058"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00FF87] text-[#1E1E1E] px-6 py-2 rounded-full font-semibold hover:bg-[#00FF87]/90 transition-colors text-sm md:text-base"
          >
            Download App
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fantasy Fútbol Support
          </h1>
          <p className="text-[#828282] text-xl">
            Welcome to Fantasy Fútbol support. We're here to help you get the most out of the game.
          </p>
        </div>

        {/* Contact Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-[#00FF87]">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="mailto:hello@fantasyfutbol.co"
              className="bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#333333] transition-colors group"
            >
              <div className="text-[#00FF87] text-2xl mb-3">✉</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-[#828282] text-sm group-hover:text-[#00FF87] transition-colors">
                hello@fantasyfutbol.co
              </div>
              <div className="text-[#828282] text-xs mt-2">Response within 24–48 hours</div>
            </a>
            <a
              href="https://discord.gg/u64YjhFhM5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#333333] transition-colors group"
            >
              <div className="text-[#00FF87] text-2xl mb-3">💬</div>
              <div className="font-semibold mb-1">Discord</div>
              <div className="text-[#828282] text-sm group-hover:text-[#00FF87] transition-colors">
                Join our community
              </div>
              <div className="text-[#828282] text-xs mt-2">Chat with the community</div>
            </a>
            <a
              href="https://reddit.com/r/fantasyfutbol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#333333] transition-colors group"
            >
              <div className="text-[#00FF87] text-2xl mb-3">🔴</div>
              <div className="font-semibold mb-1">Reddit</div>
              <div className="text-[#828282] text-sm group-hover:text-[#00FF87] transition-colors">
                r/fantasyfutbol
              </div>
              <div className="text-[#828282] text-xs mt-2">Discuss and get help</div>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-[#00FF87]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I join a league?',
                a: "Get a League ID from whoever invited you, then tap \"Join a League\" and enter the code. You'll be added instantly.",
              },
              {
                q: 'How does scoring work?',
                a: 'You earn points from your Starting 5\'s match results: +1 per goal scored, -1 per goal conceded, plus bonus points for wins and draws (+3 for league wins, +4 for cup wins, +5 for European wins).',
              },
              {
                q: 'How do I draft teams?',
                a: "Your League Admin will schedule the draft. When it's your turn, tap the green \"Draft\" button next to the team you want. You'll draft 10 teams total in a snake draft format.",
              },
              {
                q: "I didn't receive my verification email",
                a: "Check your spam/junk folder first. If it's not there, wait a few minutes and try again. Still nothing? Email us at hello@fantasyfutbol.co and we'll help.",
              },
              {
                q: 'Can I change my Starting 5?',
                a: 'Yes, but only for future months. Go to My Team, toggle to next month, and use the Move/Here buttons to swap teams. Changes lock at 12:00 AM on the 1st.',
              },
              {
                q: 'What if I miss the draft?',
                a: "If you don't pick within your allotted time, the system auto-drafts the highest-ranked available team based on last season's league standings.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#2A2A2A] rounded-2xl p-6">
                <div className="font-semibold text-white mb-2">{q}</div>
                <div className="text-[#828282] leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Report a Bug */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-[#00FF87]">Report a Bug</h2>
          <div className="bg-[#2A2A2A] rounded-2xl p-6">
            <p className="text-[#ABABAB] mb-4">
              Found something broken? Email us at{' '}
              <a href="mailto:hello@fantasyfutbol.co" className="text-[#00FF87] hover:underline">
                hello@fantasyfutbol.co
              </a>{' '}
              with:
            </p>
            <ul className="space-y-2 text-[#828282]">
              {[
                'Your device (e.g., iPhone 14, iPad Pro)',
                'Your iOS version (e.g., iOS 17.2)',
                'What you were trying to do',
                'What happened instead',
                'Screenshots if possible',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#00FF87] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#828282] mt-4">We'll investigate and get back to you.</p>
          </div>
        </section>

        {/* Knowledge Hub */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 pl-4 border-l-4 border-[#00FF87]">Knowledge Hub</h2>
          <p className="text-[#828282] mb-8 pl-5">
            Looking for more detailed guides? Browse our full Knowledge Hub below.
          </p>

          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category}>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                  <span className="text-[#828282] text-sm">{categoryDescriptions[category]}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {getArticlesByCategory(category).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/knowledge-hub/${article.slug}`}
                      className="bg-[#2A2A2A] rounded-xl p-5 hover:bg-[#333333] transition-colors group border border-transparent hover:border-[#00FF87]/20"
                    >
                      <div className="font-semibold text-white group-hover:text-[#00FF87] transition-colors mb-1">
                        {article.title}
                      </div>
                      <div className="text-[#828282] text-sm leading-relaxed">
                        {article.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-[#00FF87]">Feedback</h2>
          <div className="bg-[#2A2A2A] rounded-2xl p-6">
            <p className="text-[#ABABAB] mb-4">
              Have ideas to make Fantasy Fútbol better? We're actively developing and want to hear from you.
            </p>
            <ul className="space-y-2 text-[#828282]">
              <li className="flex items-start gap-2">
                <span className="text-[#00FF87] mt-0.5">•</span>
                <span>
                  <strong className="text-white">Discord:</strong> Share suggestions with the community
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF87] mt-0.5">•</span>
                <span>
                  <strong className="text-white">Reddit:</strong> Post on r/fantasyfutbol
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF87] mt-0.5">•</span>
                <span>
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:hello@fantasyfutbol.co" className="text-[#00FF87] hover:underline">
                    hello@fantasyfutbol.co
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF87] mt-0.5">•</span>
                <span>
                  <strong className="text-white">In-App:</strong> Use the feedback form in Settings
                </span>
              </li>
            </ul>
            <p className="text-[#828282] mt-4">Your input shapes the game. Thanks for playing.</p>
          </div>
        </section>

        {/* Legal */}
        <section>
          <div className="flex gap-6 text-[#828282] text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="text-[#828282]">Fantasy Fútbol © 2026</div>
            <div className="flex gap-6 text-[#828282]">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/knowledge-hub" className="hover:text-white transition-colors">
                Knowledge Hub
              </Link>
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
