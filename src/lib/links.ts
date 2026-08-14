export const APP_STORE_URL = 'https://apps.apple.com/app/id6755744058';

export const SUBSTACK_URL = 'https://fantasyfutbol.substack.com';
export const SUBSTACK_FEED_URL = `${SUBSTACK_URL}/feed`;
export const SUBSTACK_EMBED_URL = `${SUBSTACK_URL}/embed`;

export const DEMO_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/qCZZ5tfWxl0';

export interface SocialLink {
  name: string;
  icon: 'x' | 'instagram' | 'tiktok' | 'youtube' | 'discord';
  url: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'X', icon: 'x', url: 'https://x.com/fantfutbol' },
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/fantfutbol/' },
  { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@fant.futbol' },
  { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@FantFutbol/' },
  { name: 'Discord', icon: 'discord', url: 'https://discord.gg/u64YjhFhM5' },
];
