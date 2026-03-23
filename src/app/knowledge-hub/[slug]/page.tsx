import { readFile } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';
import ArticleLayout from '@/components/knowledge-hub/ArticleLayout';
import { mdxComponents } from '@/components/knowledge-hub/mdx-components';
import { articles } from '@/lib/articles';

interface ArticleFrontmatter {
  title: string;
  category: string;
  description: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Fantasy Fútbol`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    'src/content/knowledge-hub',
    `${slug}.mdx`
  );

  let source: Buffer;
  try {
    source = await readFile(filePath);
  } catch {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<ArticleFrontmatter>({
    source: source.toString(),
    options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm] } },
    components: mdxComponents,
  });

  return (
    <ArticleLayout frontmatter={frontmatter}>
      {content}
    </ArticleLayout>
  );
}
