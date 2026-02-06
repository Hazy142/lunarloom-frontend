'use client';

import { useEffect, useState } from 'react';
import { getTarotCards } from '@/lib/wordpress';
import { TarotCard } from '@/lib/wordpress';
import TarotCardGallery from '@/components/tarot/TarotCardGallery';
import Link from 'next/link';

type FilterType = 'all' | 'major' | 'STÄBE' | 'KELCHE' | 'SCHWERTER' | 'MÜNZEN';

export default function TarotPage() {
    const [cards, setCards] = useState<TarotCard[]>([]);
    const [filter, setFilter] = useState<FilterType>('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCards() {
            const data = await getTarotCards();
            setCards(data);
            setLoading(false);
        }
        loadCards();
    }, []);

    const filteredCards = cards.filter(card => {
        if (filter === 'all') return true;
        if (filter === 'major') return card.meta.category === 'Grosse Arkana';
        if (filter === 'STÄBE') return card.meta.category?.includes('STÄBE');
        if (filter === 'KELCHE') return card.meta.category?.includes('KELCHE');
        if (filter === 'SCHWERTER') return card.meta.category?.includes('SCHWERTER');
        if (filter === 'MÜNZEN') return card.meta.category?.includes('MÜNZEN');
        return true;
    });

    // Group by category for display
    const majorArcana = filteredCards.filter(c => c.meta.category === 'Grosse Arkana');
    const wands = filteredCards.filter(c => c.meta.category?.includes('STÄBE'));
    const cups = filteredCards.filter(c => c.meta.category?.includes('KELCHE'));
    const swords = filteredCards.filter(c => c.meta.category?.includes('SCHWERTER'));
    const pentacles = filteredCards.filter(c => c.meta.category?.includes('MÜNZEN'));

    return (
        <div className="page-container">
            {/* Header */}
            <section className="bg-gradient-to-b from-[#a3a0a5] via-[#5f4678] to-[#3f2f4e] section-padding">
                <div className="content-wrapper text-center">
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-widest font-medium">
                        ✦ 78 Wege zur Weisheit ✦
                    </span>
                    <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mt-4 mb-4">
                        Tarot
                    </h1>
                    <p className="text-lg text-[#FDFBF7]/80 max-w-2xl mx-auto">
                        Entdecke die Bedeutung jeder Karte – aus einer tiefen, evidenzbasierten Perspektive.
                    </p>
                    <div className="divider-gold mt-6" />
                </div>
            </section>

            {/* Filter Bar */}
            <section className="bg-[#3f2f4e] border-b border-[#FDFBF7]/10">
                <div className="content-wrapper py-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all ${filter === 'all'
                                    ? 'bg-[var(--color-gold)] text-[#1a0b2e]'
                                    : 'bg-[#5f4678] text-[#FDFBF7] hover:bg-[#6B5B7A]'
                                }`}
                        >
                            ALLE ({cards.length})
                        </button>
                        <button
                            onClick={() => setFilter('major')}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all ${filter === 'major'
                                    ? 'bg-[var(--color-gold)] text-[#1a0b2e]'
                                    : 'bg-[#5f4678] text-[#FDFBF7] hover:bg-[#6B5B7A]'
                                }`}
                        >
                            Große Arkana ({majorArcana.length})
                        </button>
                        <button
                            onClick={() => setFilter('STÄBE')}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all ${filter === 'STÄBE'
                                    ? 'bg-[var(--color-gold)] text-[#1a0b2e]'
                                    : 'bg-[#5f4678] text-[#FDFBF7] hover:bg-[#6B5B7A]'
                                }`}
                        >
                            🔥 Stäbe ({wands.length})
                        </button>
                        <button
                            onClick={() => setFilter('KELCHE')}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all ${filter === 'KELCHE'
                                    ? 'bg-[var(--color-gold)] text-[#1a0b2e]'
                                    : 'bg-[#5f4678] text-[#FDFBF7] hover:bg-[#6B5B7A]'
                                }`}
                        >
                            💧 Kelche ({cups.length})
                        </button>
                        <button
                            onClick={() => setFilter('SCHWERTER')}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all ${filter === 'SCHWERTER'
                                    ? 'bg-[var(--color-gold)] text-[#1a0b2e]'
                                    : 'bg-[#5f4678] text-[#FDFBF7] hover:bg-[#6B5B7A]'
                                }`}
                        >
                            🌬️ Schwerter ({swords.length})
                        </button>
                        <button
                            onClick={() => setFilter('MÜNZEN')}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all ${filter === 'MÜNZEN'
                                    ? 'bg-[var(--color-gold)] text-[#1a0b2e]'
                                    : 'bg-[#5f4678] text-[#FDFBF7] hover:bg-[#6B5B7A]'
                                }`}
                        >
                            ⛰️ Münzen ({pentacles.length})
                        </button>
                    </div>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="section-padding">
                <div className="content-wrapper">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block">
                                <p className="text-[var(--color-gold)] text-xl mb-2">Lade Tarot-Karten...</p>
                                <div className="w-8 h-8 border-4 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin mx-auto"></div>
                            </div>
                        </div>
                    ) : cards.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="card-lunarloom inline-block">
                                <p className="text-[var(--color-lavender)] text-xl mb-2">Keine Tarot-Karten gefunden</p>
                                <p className="text-[var(--color-text-muted)] text-sm">
                                    Karten werden bald hinzugefügt
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Major Arcana */}
                            {filter === 'all' && majorArcana.length > 0 && (
                                <div className="mb-16">
                                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                        <span className="gold-accent">✦</span> Große Arkana <span className="gold-accent">✦</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                        {majorArcana.map((card) => (
                                            <TarotCardGallery key={card.id} card={card} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Filtered or Suits */}
                            {filter === 'major' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                    {filteredCards.map((card) => (
                                        <TarotCardGallery key={card.id} card={card} />
                                    ))}
                                </div>
                            )}

                            {filter === 'STÄBE' && (
                                <div>
                                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                        <span className="gold-accent">🔥</span> Stäbe (Feuer) <span className="gold-accent">🔥</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                        {wands.map((card) => (
                                            <TarotCardGallery key={card.id} card={card} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {filter === 'KELCHE' && (
                                <div>
                                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                        <span className="gold-accent">💧</span> Kelche (Wasser) <span className="gold-accent">💧</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                        {cups.map((card) => (
                                            <TarotCardGallery key={card.id} card={card} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {filter === 'SCHWERTER' && (
                                <div>
                                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                        <span className="gold-accent">🌬️</span> Schwerter (Luft) <span className="gold-accent">🌬️</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                        {swords.map((card) => (
                                            <TarotCardGallery key={card.id} card={card} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {filter === 'MÜNZEN' && (
                                <div>
                                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                        <span className="gold-accent">⛰️</span> Münzen (Erde) <span className="gold-accent">⛰️</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                        {pentacles.map((card) => (
                                            <TarotCardGallery key={card.id} card={card} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Small Suits when viewing all */}
                            {filter === 'all' && (
                                <>
                                    {/* Wands */}
                                    {wands.length > 0 && (
                                        <div className="mb-16">
                                            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                                <span className="gold-accent">🔥</span> Stäbe <span className="gold-accent">🔥</span>
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                                {wands.map((card) => (
                                                    <TarotCardGallery key={card.id} card={card} />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Cups */}
                                    {cups.length > 0 && (
                                        <div className="mb-16">
                                            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                                <span className="gold-accent">💧</span> Kelche <span className="gold-accent">💧</span>
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                                {cups.map((card) => (
                                                    <TarotCardGallery key={card.id} card={card} />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Swords */}
                                    {swords.length > 0 && (
                                        <div className="mb-16">
                                            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                                <span className="gold-accent">🌬️</span> Schwerter <span className="gold-accent">🌬️</span>
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                                {swords.map((card) => (
                                                    <TarotCardGallery key={card.id} card={card} />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Pentacles */}
                                    {pentacles.length > 0 && (
                                        <div className="mb-16">
                                            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                                <span className="gold-accent">⛰️</span> Münzen <span className="gold-accent">⛰️</span>
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                                {pentacles.map((card) => (
                                                    <TarotCardGallery key={card.id} card={card} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-b from-[#3D2E4A] to-[#a3a0a5] section-padding">
                <div className="content-wrapper text-center">
                    <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-4">
                        Möchtest du ein persönliches Reading?
                    </h2>
                    <p className="text-[#FDFBF7]/70 mb-6 max-w-xl mx-auto">
                        Lass die Karten für dich sprechen – individuell und tiefgehend.
                    </p>
                    <Link href="/buchung" className="btn-primary">
                        <span className="mr-2">🔮</span> Termin buchen
                    </Link>
                </div>
            </section>
        </div>
    );
}
