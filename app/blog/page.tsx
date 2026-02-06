// app/blog/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

interface WPPost {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

async function getPosts(): Promise<WPPost[]> {
    const res = await fetch(
        'https://wp.lunarloom.de/wp-json/wp/v2/posts?per_page=100&_embed',
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        console.error('Failed to fetch posts:', res.status);
        return [];
    }

    return res.json();
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="page-container">
            {/* Header */}
            <section className="bg-gradient-to-b from-[var(--color-cream)] to-[var(--color-cream-dark)] section-padding">
                <div className="content-wrapper text-center">
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-widest font-medium">
                        ✦ Erkenntnisse & Essays ✦
                    </span>
                    <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-lavender-dark)] mt-4 mb-4">
                        Blog
                    </h1>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Tiefgehende Artikel zu Tarot, Astrologie und spirituellem Wachstum
                    </p>
                    <div className="divider-gold mt-6" />
                </div>
            </section>

            {/* Blog Posts */}
            <section className="section-padding">
                <div className="content-wrapper">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="card-lunarloom inline-block">
                                <p className="text-[var(--color-lavender)] text-xl mb-2">Keine Artikel gefunden</p>
                                <p className="text-[var(--color-text-muted)] text-sm">
                                    Bald gibt es hier neue Inhalte
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto space-y-8">
                            {posts.map((post) => {
                                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];

                                return (
                                    <Link key={post.id} href={`/blog/${post.slug}`}>
                                        <article className="card-lunarloom group overflow-hidden">
                                            <div className="flex flex-col md:flex-row gap-6">
                                                {/* Featured Image */}
                                                {featuredImage && (
                                                    <div className="md:w-64 h-48 md:h-auto overflow-hidden rounded-lg flex-shrink-0">
                                                        <img
                                                            src={featuredImage.source_url}
                                                            alt={featuredImage.alt_text || ''}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                )}

                                                <div className="flex-1">
                                                    <time className="text-[var(--color-gold)] text-sm font-medium">
                                                        {new Date(post.date).toLocaleDateString('de-DE', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </time>
                                                    <h2
                                                        className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-lavender-dark)] mt-2 mb-3 group-hover:text-[var(--color-lavender)] transition-colors"
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                    />
                                                    <div
                                                        className="text-[var(--color-text-secondary)] line-clamp-3"
                                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                                    />
                                                    <div className="mt-4 text-[var(--color-gold)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                                        Weiterlesen <span>→</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Tiefgehende Artikel zu Tarot, Astrologie und spirituellem Wachstum bei LunarLoom',
};
