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

export async function generateStaticParams() {
    const res = await fetch('https://wp.lunarloom.de/wp-json/wp/v2/posts?per_page=100');

    if (!res.ok) return [];

    const posts: WPPost[] = await res.json();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: 'Artikel nicht gefunden',
        };
    }

    const description = post.excerpt.rendered
        .replace(/<[^>]*>/g, '')
        .substring(0, 160)
        .trim();

    return {
        title: post.title.rendered.replace(/<[^>]*>/g, ''),
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
        <div className="page-container">
            {/* Featured Image Header */}
            {featuredImage && (
                <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
                    <img
                        src={featuredImage.source_url}
                        alt={featuredImage.alt_text || post.title.rendered.replace(/<[^>]*>/g, '')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-lavender-dark)]/60 to-transparent" />
                </div>
            )}

            <article className="section-padding">
                <div className="content-wrapper">
                    <div className="max-w-3xl mx-auto">
                        {/* Back Link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#FDFBF7]/70 hover:text-[var(--color-gold)] transition-colors mb-8"
                        >
                            <span>←</span> Zurück zum Blog
                        </Link>

                        {/* Article Header */}
                        <header className="mb-10">
                            <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-4">
                                <time className="text-[var(--color-gold)] font-medium">
                                    {new Date(post.date).toLocaleDateString('de-DE', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                {post.modified !== post.date && (
                                    <>
                                        <span>·</span>
                                        <span>
                                            Aktualisiert: {new Date(post.modified).toLocaleDateString('de-DE', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </>
                                )}
                            </div>
                            <h1
                                className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] leading-tight"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                            <div className="divider-gold mt-8" style={{ marginLeft: 0 }} />
                        </header>

                        {/* Article Content */}
                        <div
                            className="prose-lunarloom text-[#FDFBF7]/80"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />

                        {/* Back to Blog CTA */}
                        <div className="mt-16 pt-8 border-t border-[var(--card-border)] text-center">
                            <p className="text-[var(--color-text-muted)] mb-4">
                                Gefallen dir meine Artikel?
                            </p>
                            <Link href="/blog" className="btn-secondary">
                                Weitere Artikel entdecken
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
