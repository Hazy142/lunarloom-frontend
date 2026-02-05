import { getTarotCards } from '@/lib/wordpress';

export default async function TarotPage() {
    const cards = await getTarotCards();

    return (
        <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        Tarot Cards
                    </h1>
                    <p className="text-purple-200 text-lg">
                        Explore the mystical wisdom of the Tarot
                    </p>
                </div>

                {/* Cards Grid */}
                {cards.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block p-8 bg-purple-900/30 rounded-lg border border-purple-500/30">
                            <p className="text-purple-300 text-xl mb-2">No tarot cards found</p>
                            <p className="text-purple-400 text-sm">
                                Add some cards in WordPress to see them here
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                            >
                                {/* Card Header */}
                                <div className="mb-4">
                                    <h2
                                        className="text-2xl font-bold text-purple-100 mb-2"
                                        dangerouslySetInnerHTML={{ __html: card.title.rendered }}
                                    />
                                    {card.arcana && (
                                        <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-800/50 rounded-full">
                                            {card.arcana}
                                        </span>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div
                                    className="text-purple-200 prose prose-invert prose-sm max-w-none mb-4"
                                    dangerouslySetInnerHTML={{ __html: card.excerpt?.rendered || card.content.rendered }}
                                />

                                {/* Keywords */}
                                {card.keywords && (
                                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                                        <p className="text-xs text-purple-400 uppercase tracking-wider mb-2">
                                            Keywords
                                        </p>
                                        <p className="text-purple-300 text-sm">
                                            {card.keywords}
                                        </p>
                                    </div>
                                )}

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
