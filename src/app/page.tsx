import Link from 'next/link';
import FadeInSection from '@/components/home/FadeInSection';
import Navbar from '@/components/home/Navbar';
import PhoneFrame from '@/components/home/PhoneFrame';
import SocialLinks from '@/components/home/SocialLinks';
import VideoFacade from '@/components/home/VideoFacade';
import WaitlistForm from '@/components/home/WaitlistForm';
import {
  APP_STORE_URL,
  SUBSTACK_EMBED_URL,
  SUBSTACK_URL,
} from '@/lib/links';
import { getLatestPosts } from '@/lib/substack';

// Placeholder — drop the real app screenshot at public/hero-screenshot.webp
// (same filename = no code change needed).
const HERO_SCREENSHOT = '/hero-screenshot.webp';

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <div className="bg-[#1E1E1E] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden">
        {/* Gradient background: static radial gradients on mobile (blur +
            mix-blend + infinite pulse are GPU killers on phones), animated
            blobs on md+ */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 md:hidden bg-[radial-gradient(ellipse_at_28%_30%,rgba(0,255,135,0.55),transparent_55%),radial-gradient(ellipse_at_75%_40%,rgba(20,83,45,0.6),transparent_55%),radial-gradient(ellipse_at_40%_75%,rgba(6,95,70,0.6),transparent_55%)]"></div>
          <div className="hidden md:block">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF87] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-800 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto z-10 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <FadeInSection>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Fantasy Soccer, Finally Done Right.
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-[#828282] mb-10 max-w-3xl mx-auto lg:mx-0">
                Draft entire clubs from Europe&apos;s top 5 leagues. Earn points across every competition - leagues, cups, and Champions League nights.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <a
                  href={APP_STORE_URL}
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

          <FadeInSection delay={0.3}>
            <PhoneFrame className="w-56 sm:w-64 lg:w-72 mx-auto aspect-[9/19.5]">
              <img
                src={HERO_SCREENSHOT}
                alt="Fantasy Fútbol app screenshot"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </PhoneFrame>
          </FadeInSection>
        </div>
      </section>

      {/* SEE IT IN ACTION */}
      <section className="py-24 px-6 bg-[#171717]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See it in action.
            </h2>
            <p className="text-[#828282] text-xl mb-12">
              From draft night to matchday - a tour of the app.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <PhoneFrame className="w-64 sm:w-72 mx-auto aspect-[9/19.2]">
              <VideoFacade />
            </PhoneFrame>
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
                <p className="text-xl">Cup matches don&apos;t count anywhere</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-[#2A2A2A] p-8 rounded-2xl">
                <div className="text-[#00FF87] text-4xl mb-4">❌</div>
                <p className="text-xl">You&apos;re drafting players, not teams</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 bg-[#171717] scroll-mt-16">
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
                  Choose your lineup each week
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
              <Link href="/knowledge-hub" className="text-[#00FF87] hover:text-white transition-colors">
                Explore the Knowledge Hub →
              </Link>
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
                    <td className="py-4 px-4">Weekly squad strategy</td>
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

      {/* THE COMMISSIONER'S REPORT */}
      <section className="py-24 px-6 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              The Commissioner&apos;s Report
            </h2>
            <p className="text-[#828282] text-xl text-center mb-16">
              News, strategy, and game updates from the First Commissioner.
            </p>
          </FadeInSection>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {posts.map((post, index) => (
                <FadeInSection key={post.link} delay={0.1 * (index + 1)}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full bg-[#2A2A2A] p-8 rounded-2xl hover:bg-[#333333] transition-colors"
                  >
                    {post.date && (
                      <time className="text-sm text-[#828282] mb-3">{post.date}</time>
                    )}
                    <h3 className="text-xl font-bold mb-4 flex-1">{post.title}</h3>
                    <span className="text-[#00FF87] text-sm font-medium">
                      Read on Substack →
                    </span>
                  </a>
                </FadeInSection>
              ))}
            </div>
          ) : (
            <FadeInSection>
              <p className="text-center text-[#828282] mb-16">
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FF87] hover:text-white transition-colors"
                >
                  Read the latest on Substack →
                </a>
              </p>
            </FadeInSection>
          )}

          <FadeInSection delay={0.4}>
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">Follow the Commissioner&apos;s Report</h3>
              <iframe
                src={SUBSTACK_EMBED_URL}
                title="Subscribe to the Commissioner's Report on Substack"
                loading="lazy"
                className="w-full h-[150px] rounded-2xl border border-[#2A2A2A]"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* JOIN THE COMMUNITY */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the community.
            </h2>
            <p className="text-[#828282] text-xl mb-12">
              Banter, highlights, and game updates - wherever you hang out.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <SocialLinks variant="strip" />
          </FadeInSection>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="waitlist" className="py-24 px-6 bg-[#171717] scroll-mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your squad is waiting.
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <a
              href={APP_STORE_URL}
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
            <p className="text-[#828282] mb-6">On Android? Get notified at launch.</p>
            <WaitlistForm />
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
              <Link href="/knowledge-hub" className="hover:text-white transition-colors">
                Knowledge Hub
              </Link>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Substack
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Download
              </a>
            </div>
            <SocialLinks variant="footer" />
          </div>
          <p className="text-center text-sm text-[#828282]">
            Not affiliated with any football league or governing body.
          </p>
        </div>
      </footer>
    </div>
  );
}
