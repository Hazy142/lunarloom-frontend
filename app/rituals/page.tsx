import { getRituals } from '@/lib/wordpress';

export default async function RitualsPage() {
    const rituals = await getRituals();

    return (
        <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        Rituale
                    </h1>
                    <p className="text-purple-200 text-lg">
                        Sacred practices for spiritual transformation
                    </p>
                </div>

                {/* Rituals List */}
                {rituals.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block p-8 bg-purple-900/30 rounded-lg border border-purple-500/30">
                            <p className="text-purple-300 text-xl mb-2">No rituals found</p>
                            <p className="text-purple-400 text-sm">
                                Add some rituals in WordPress to see them here
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto space-y-6">
                        {rituals.map((ritual) => (
                            <div
                                key={ritual.id}
                                className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h2
                                        className="text-3xl font-bold text-purple-100"
                                        dangerouslySetInnerHTML={{ __html: ritual.title.rendered }}
                                    />
                                    {ritual.moon_phase && (
                                        <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-300 bg-purple-800/50 rounded-full">
                                            🌙 {ritual.moon_phase}
                                        </span>
                                    )}
                                </div>

                                {ritual.duration && (
                                    <p className="text-purple-400 text-sm mb-4">
                                        ⏱️ Duration: {ritual.duration}
                                    </p>
                                )}

                                <div
                                    className="text-purple-200 prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: ritual.content.rendered }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 rounded-xl transition-all duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
