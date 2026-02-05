// app/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface WPPost {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    modified: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

// Fetch einen Post per Slug
async function getPost(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `https://wp.lunarloom.de/wp-json/wp/v2/posts?slug=${slug}&_embed`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) return null;

    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
}

// Alle Slugs für Static Generation vorab fetchen
export async function generateStaticParams() {
    const res = await fetch('https://wp.lunarloom.de/wp-json/wp/v2/posts?per_page=100');

    if (!res.ok) return [];

    const posts: WPPost[] = await res.json();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Metadata dynamisch erzeugen
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: 'Artikel nicht gefunden – Lunar Loom',
        };
    }

    // HTML-Tags aus Excerpt entfernen für Description
    const description = post.excerpt.rendered
        .replace(/<[^>]*>/g, '')
        .substring(0, 160)
        .trim();

    return {
        title: `${post.title.rendered.replace(/<[^>]*>/g, '')} – Lunar Loom`,
        description,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];

    return (
        <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        ← Zurück zum Blog
                    </Link>

                    {/* Featured Image */}
                    {featuredImage && (
                        <div className="mb-8 rounded-xl overflow-hidden">
                            <img
                                src={featuredImage.source_url}
                                alt={featuredImage.alt_text || post.title.rendered.replace(/<[^>]*>/g, '')}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    )}

                    {/* Article */}
                    <article className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 md:p-12 border border-purple-500/30">
                        {/* Header */}
                        <header className="mb-8">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                            <div className="flex items-center gap-4 text-purple-400 text-sm">
                                <time>
                                    {new Date(post.date).toLocaleDateString('de-DE', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                {post.modified !== post.date && (
                                    <span>
                                        · Aktualisiert: {new Date(post.modified).toLocaleDateString('de-DE', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                )}
                            </div>
                        </header>

                        {/* Content */}
                        <div
                            className="prose prose-lg prose-invert prose-purple max-w-none
                         prose-headings:text-purple-100 
                         prose-p:text-purple-200 
                         prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                         prose-strong:text-purple-100
                         prose-ul:text-purple-200
                         prose-ol:text-purple-200
                         prose-blockquote:border-purple-500 prose-blockquote:text-purple-300"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />
                    </article>

                    {/* Back to Blog */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/blog"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                        >
                            Weitere Artikel entdecken
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
