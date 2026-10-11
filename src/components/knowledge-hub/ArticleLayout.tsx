import Link from 'next/link';

interface ArticleFrontmatter {
  title: string;
  category: string;
  description: string;
}

interface ArticleLayoutProps {
  frontmatter: ArticleFrontmatter;
  children: React.ReactNode;
}

const categoryColors: Record<string, string> = {
  'Getting Started': 'bg-[#00FF87]/10 text-[#00FF87] border border-[#00FF87]/20',
  'Gameplay': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  'App Guide': 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
};

export default function ArticleLayout({ frontmatter, children }: ArticleLayoutProps) {
  const badgeClass = categoryColors[frontmatter.category] ?? 'bg-[#2A2A2A] text-[#828282]';

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

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-[#828282]">
          <Link href="/knowledge-hub" className="hover:text-[#00FF87] transition-colors">
            Knowledge Hub
          </Link>
          <span>/</span>
          <span className="text-[#ABABAB]">{frontmatter.category}</span>
          <span>/</span>
          <span className="text-white truncate">{frontmatter.title}</span>
        </nav>
      </div>

      {/* Article header */}
      <header className="max-w-3xl mx-auto px-6 pt-6 pb-8">
        <div className="mb-4">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
            {frontmatter.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          {frontmatter.title}
        </h1>
        <p className="text-[#828282] text-lg">{frontmatter.description}</p>
      </header>

      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#2A2A2A]" />
      </div>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-6 py-10">
        {children}
      </article>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-[#2A2A2A] pt-8">
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center gap-2 text-[#00FF87] hover:text-white transition-colors font-medium"
          >
            ← Back to Knowledge Hub
          </Link>
        </div>
      </div>

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
