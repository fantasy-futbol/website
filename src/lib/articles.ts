export interface ArticleMeta {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export const articles: ArticleMeta[] = [
  // Getting Started
  {
    slug: 'how-fantasy-futbol-works',
    title: 'How Fantasy Fútbol Works',
    category: 'Getting Started',
    description: 'Draft 10 clubs, pick 5 to start each week, earn points from match results. The manager with the most points wins.',
  },
  {
    slug: 'creating-vs-joining-league',
    title: 'Creating vs. Joining a League',
    category: 'Getting Started',
    description: 'Start your own league and become the League Admin, or join an existing one using a League ID.',
  },
  {
    slug: 'the-draft-explained',
    title: 'The Draft Explained',
    category: 'Getting Started',
    description: 'A snake draft where you take turns selecting clubs until everyone has a 10-team roster.',
  },
  {
    slug: 'the-first-month',
    title: 'The First Month: What to Do',
    category: 'Getting Started',
    description: 'After the draft, your first 5 picks become your Starting 5. Learn the app and start making a lineup decision each week.',
  },
  // Gameplay
  {
    slug: 'how-points-are-scored',
    title: 'How Points Are Scored',
    category: 'Gameplay',
    description: 'Your starting teams earn points from goals scored, goals conceded, and match results — across every competition.',
  },
  {
    slug: 'starting-5-vs-bench',
    title: 'Starting 5 vs. Bench',
    category: 'Gameplay',
    description: 'Only 5 of your 10 clubs earn points each week. Choose based on fixtures, competitions, and form.',
  },
  {
    slug: 'changing-your-starting-5',
    title: 'Changing Your Starting 5',
    category: 'Gameplay',
    description: 'Go to My Team, move to next week, tap Move then Here. Changes lock Monday at 11:59 PM Pacific.',
  },
  {
    slug: 'the-weekly-lock',
    title: 'The Weekly Lock',
    category: 'Gameplay',
    description: 'Your Starting 5 locks every Monday at 11:59 PM Pacific. Each week runs Tuesday through the following Monday.',
  },
  {
    slug: 'competition-types',
    title: 'Competition Types',
    category: 'Gameplay',
    description: 'Domestic leagues, cups, and European tournaments all count — with different point values for each.',
  },
  {
    slug: 'understanding-the-tables',
    title: 'Understanding the Tables',
    category: 'Gameplay',
    description: 'Three tables show manager standings, team goal differential, and team match result points.',
  },
  // App Guide
  {
    slug: 'reading-match-cards',
    title: 'Reading Match Cards',
    category: 'App Guide',
    description: 'Match cards show the result, score, competition, and fantasy points. Starter points appear bright; bench points appear faded.',
  },
];

export const categories = ['Getting Started', 'Gameplay', 'App Guide'] as const;

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return articles.filter((a) => a.category === category);
}
