// app/blog/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

// Types für WordPress Post (aus REST API)
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

// Fetch-Funktion für alle Posts
async function getPosts(): Promise<WPPost[]> {
    const res = await fetch(
        'https://wp.lunarloom.de/wp-json/wp/v2/posts?per_page=100&_embed',
        {
            next: { revalidate: 60 }, // ISR: alle 60s neu validieren
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
        <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link href="/" className="inline-block mb-6 text-purple-400 hover:text-purple-300 transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        Blog
                    </h1>
                    <p className="text-purple-200 text-lg">
                        Tiefgehende Artikel zu Tarot, Astrologie und spirituellem Wachstum
                    </p>
                </div>

                {/* Blog Posts */}
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block p-8 bg-purple-900/30 rounded-lg border border-purple-500/30">
                            <p className="text-purple-300 text-xl mb-2">Keine Artikel gefunden</p>
                            <p className="text-purple-400 text-sm">
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
                                    <article className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
                                        {/* Featured Image */}
                                        {featuredImage && (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={featuredImage.source_url}
                                                    alt={featuredImage.alt_text || ''}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}

                                        <div className="p-8">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex-1">
                                                    <h2
                                                        className="text-3xl font-bold text-purple-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all"
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                    />
                                                    <time className="text-purple-400 text-sm">
                                                        {new Date(post.date).toLocaleDateString('de-DE', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </time>
                                                </div>
                                            </div>

                                            <div
                                                className="text-purple-200 prose prose-invert max-w-none line-clamp-3"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />

                                            <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <span className="font-semibold">Weiterlesen</span>
                                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 rounded-xl transition-all duration-300 pointer-events-none" />
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}

// Metadata für SEO
export const metadata: Metadata = {
    title: 'Blog – Rachel\'s Lunar Loom',
    description: 'Tiefgehende Artikel zu Tarot, Astrologie und spirituellem Wachstum',
};
