import { getRituals } from '@/lib/wordpress';
import Link from 'next/link';
import { Metadata } from 'next';

export default async function RitualsPage() {
    const rituals = await getRituals();

    return (
        <div className="page-container">
            {/* Header */}
            <section className="bg-gradient-to-b from-[var(--color-cream)] to-[var(--color-cream-dark)] section-padding">
                <div className="content-wrapper text-center">
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-widest font-medium">
                        ✦ Im Einklang mit dem Mond ✦
                    </span>
                    <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-lavender-dark)] mt-4 mb-4">
                        Rituale
                    </h1>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Heilige Praktiken für spirituelle Transformation, abgestimmt auf die Mondphasen.
                    </p>
                    <div className="divider-gold mt-6" />
                </div>
            </section>

            {/* Rituals List */}
            <section className="section-padding">
                <div className="content-wrapper">
                    {rituals.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="card-lunarloom inline-block">
                                <div className="text-4xl mb-4">🌙</div>
                                <p className="text-[var(--color-lavender)] text-xl mb-2">Keine Rituale gefunden</p>
                                <p className="text-[var(--color-text-muted)] text-sm">
                                    Bald gibt es hier kraftvolle Mondrituale
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto space-y-8">
                            {rituals.map((ritual) => (
                                <article key={ritual.id} className="card-lunarloom group">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Moon Phase Icon */}
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-lavender)]/20 to-[var(--color-gold)]/20 flex items-center justify-center text-3xl">
                                            🌙
                                        </div>

                                        <div className="flex-1">
                                            {/* Header */}
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                                <h2
                                                    className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-lavender-dark)]"
                                                    dangerouslySetInnerHTML={{ __html: ritual.title.rendered }}
                                                />
                                                {ritual.moon_phase && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-[var(--color-gold)] bg-[var(--color-gold)]/10 rounded-full">
                                                        <span>☽</span> {ritual.moon_phase}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Duration */}
                                            {ritual.duration && (
                                                <p className="text-[var(--color-text-muted)] text-sm mb-4 flex items-center gap-2">
                                                    <span>⏱️</span> Dauer: {ritual.duration}
                                                </p>
                                            )}

                                            {/* Content */}
                                            <div
                                                className="prose-lunarloom text-[var(--color-text-secondary)]"
                                                dangerouslySetInnerHTML={{ __html: ritual.content.rendered }}
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Moon Phase Legend */}
            <section className="bg-[var(--color-cream-dark)] section-padding">
                <div className="content-wrapper">
                    <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-lavender-dark)] text-center mb-8">
                        Die Mondphasen
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl mb-2">🌑</div>
                            <h3 className="font-semibold text-[var(--color-lavender-dark)]">Neumond</h3>
                            <p className="text-sm text-[var(--color-text-muted)]">Neubeginn & Intention</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">🌓</div>
                            <h3 className="font-semibold text-[var(--color-lavender-dark)]">Zunehmend</h3>
                            <p className="text-sm text-[var(--color-text-muted)]">Wachstum & Aktion</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">🌕</div>
                            <h3 className="font-semibold text-[var(--color-lavender-dark)]">Vollmond</h3>
                            <p className="text-sm text-[var(--color-text-muted)]">Manifestation & Höhepunkt</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">🌗</div>
                            <h3 className="font-semibold text-[var(--color-lavender-dark)]">Abnehmend</h3>
                            <p className="text-sm text-[var(--color-text-muted)]">Loslassen & Reflexion</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="content-wrapper text-center">
                    <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-lavender-dark)] mb-4">
                        Möchtest du ein geführtes Ritual erleben?
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
                        Buche eine persönliche Session für ein individuell abgestimmtes Ritual.
                    </p>
                    <Link href="/buchung" className="btn-primary">
                        <span className="mr-2">🌙</span> Session buchen
                    </Link>
                </div>
            </section>
        </div>
    );
}

export const metadata: Metadata = {
    title: 'Rituale',
    description: 'Kraftvolle Mondrituale für spirituelle Transformation – abgestimmt auf die Mondphasen.',
};
