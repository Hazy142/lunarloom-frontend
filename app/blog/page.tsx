import { getPosts } from '@/lib/wordpress';
import Link from 'next/link';

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
                        Erkenntnisse zu evidenzbasierter Spiritualität, Tarot und Mondzyklen
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
                        {posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`}>
                                <article className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
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

                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 rounded-xl transition-all duration-300 pointer-events-none" />
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
