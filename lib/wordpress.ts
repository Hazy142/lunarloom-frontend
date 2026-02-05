// WordPress API Client - Extended for Pages
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://lunarloom.de/wp-json/wp/v2';

export interface TarotCard {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  arcana?: string;
  keywords?: string;
  featured_media?: number;
}

export interface Ritual {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  moon_phase?: string;
  duration?: string;
}

export interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  categories: number[];
  featured_media?: number;
}

export interface Page {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

// Tarot Cards
export async function getTarotCards(): Promise<TarotCard[]> {
  try {
    const res = await fetch(`${WP_API_URL}/tarot_card`, {
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

// Rituals
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

// Blog Posts
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

    if (!res.ok) {
      return null;
    }

    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Pages
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${slug}`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return null;
    }

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
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
