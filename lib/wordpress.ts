// WordPress API Client - Complete
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://wp.lunarloom.de/wp-json/wp/v2';

// =====================
// Types
// =====================

export interface TarotCard {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  meta: {
    arcana?: string;
    keywords?: string;
    card_number?: string;
    name_english?: string;
    element?: string;
    planet_zodiac?: string;
    numerology?: string;
    category?: string;
    upright?: string;
    reversed?: string;
    love?: string;
    career?: string;
    spirituality?: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Ritual {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  moon_phase?: string;
  duration?: string;
}

export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  categories: number[];
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Page {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

// =====================
// Tarot Cards
// =====================

export async function getTarotCards(): Promise<TarotCard[]> {
  try {
    const res = await fetch(`${WP_API_URL}/tarot_card?_embed&per_page=100`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch tarot cards: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching tarot cards:', error);
    return [];
  }
}

export async function getTarotCardBySlug(slug: string): Promise<TarotCard | null> {
  try {
    const res = await fetch(`${WP_API_URL}/tarot_card?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) return null;

    const cards = await res.json();
    return cards[0] || null;
  } catch (error) {
    console.error('Error fetching tarot card:', error);
    return null;
  }
}

// =====================
// Rituals
// =====================

export async function getRituals(): Promise<Ritual[]> {
  try {
    const res = await fetch(`${WP_API_URL}/ritual`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch rituals: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching rituals:', error);
    return [];
  }
}

// =====================
// Blog Posts
// =====================

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) return null;

    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// =====================
// Pages
// =====================

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${slug}`, {
      next: { revalidate: 3600 } // Pages ändern sich seltener → 1h Cache
    });

    if (!res.ok) return null;

    const pages = await res.json();
    return pages[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getPageById(id: number): Promise<Page | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages/${id}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// =====================
// GraphQL Client (für später)
// =====================

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://wp.lunarloom.de/graphql';

export async function fetchGraphQL<T>(query: string, variables = {}): Promise<T | null> {
  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching GraphQL:', error);
    return null;
  }
}
