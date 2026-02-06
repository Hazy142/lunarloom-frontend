import { getTarotCards } from '@/lib/wordpress';
import Link from 'next/link';
import { Metadata } from 'next';

export default async function TarotPage() {
    const cards = await getTarotCards();

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
                        Entdecke die Bedeutung jeder Karte – aus meiner persönlichen, evidenzbasierten Perspektive.
                    </p>
                    <div className="divider-gold mt-6" />
                </div>
            </section>

            {/* Cards Grid */}
            <section className="section-padding">
                <div className="content-wrapper">
                    {cards.length === 0 ? (
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
                            {/* Major Arcana Section */}
                            <div className="mb-16">
                                <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                    <span className="gold-accent">✦</span> Große Arkana <span className="gold-accent">✦</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {cards
                                        .filter((card) => card.arcana === 'Major Arcana')
                                        .map((card) => (
                                            <TarotCard key={card.id} card={card} />
                                        ))}
                                </div>
                            </div>

                            {/* Minor Arcana Section */}
                            {cards.some((card) => card.arcana !== 'Major Arcana') && (
                                <div>
                                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] text-center mb-8">
                                        <span className="gold-accent">✦</span> Kleine Arkana <span className="gold-accent">✦</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {cards
                                            .filter((card) => card.arcana !== 'Major Arcana')
                                            .map((card) => (
                                                <TarotCard key={card.id} card={card} />
                                            ))}
                                    </div>
                                </div>
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

interface TarotCardProps {
    card: {
        id: number;
        slug: string;
        title: { rendered: string };
        content: { rendered: string };
        excerpt: { rendered: string };
        arcana?: string;
        keywords?: string;
    };
}

function TarotCard({ card }: TarotCardProps) {
    return (
        <div className="card-lunarloom group cursor-pointer bg-[#5f4678] border-[#FDFBF7]/10 hover:border-[var(--color-gold)]/40 gold-glow-hover">
            {/* Arcana Badge */}
            <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-gold)]">
                    {card.arcana === 'Major Arcana' ? 'Große Arkana' : card.arcana}
                </span>
            </div>

            {/* Card Title */}
            <h3
                className="text-xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-3 group-hover:text-[var(--color-gold)] transition-colors"
                dangerouslySetInnerHTML={{ __html: card.title.rendered }}
            />

            {/* Content/Excerpt */}
            <div
                className="text-[#FDFBF7]/70 text-sm mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{
                    __html: card.excerpt?.rendered || card.content?.rendered || ''
                }}
            />

            {/* Keywords */}
            {card.keywords && (
                <div className="flex flex-wrap gap-2">
                    {card.keywords.split(',').slice(0, 3).map((keyword, i) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 bg-[#FDFBF7]/10 text-[#FDFBF7] rounded-full"
                        >
                            {keyword.trim()}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export const metadata: Metadata = {
    title: 'Tarot',
    description: 'Entdecke die Bedeutung der 78 Tarot-Karten – Große und Kleine Arkana mit persönlichen Interpretationen.',
};
