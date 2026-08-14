import { SUBSTACK_FEED_URL } from './links';

export interface SubstackPost {
  title: string;
  link: string;
  date: string;
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
};

function cleanText(value: string): string {
  return value
    .replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&(amp|lt|gt|quot|apos);/g, (_, name) => NAMED_ENTITIES[name])
    .trim();
}

function tagContent(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? cleanText(match[1]) : '';
}

function formatDate(pubDate: string): string {
  const parsed = new Date(pubDate);
  if (Number.isNaN(parsed.getTime())) return '';
  return parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export async function getLatestPosts(count = 3): Promise<SubstackPost[]> {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const xml = await response.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    return items.slice(0, count).flatMap((item) => {
      const title = tagContent(item, 'title');
      const link = tagContent(item, 'link');
      if (!title || !link) return [];
      return [{ title, link, date: formatDate(tagContent(item, 'pubDate')) }];
    });
  } catch {
    return [];
  }
}
