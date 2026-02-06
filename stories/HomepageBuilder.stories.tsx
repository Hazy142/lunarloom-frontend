import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Section types
type SectionId = 'hero' | 'navCards' | 'about' | 'cta';

interface SectionConfig {
    id: SectionId;
    name: string;
    enabled: boolean;
}

interface HomepageBuilderProps {
    /** Section order (comma-separated): hero,navCards,about,cta */
    sectionOrder: string;
    /** Show Hero Section */
    showHero: boolean;
    /** Show Navigation Cards Section */
    showNavCards: boolean;
    /** Show About Section */
    showAbout: boolean;
    /** Show CTA Section */
    showCTA: boolean;
}

// Individual Section Components
function HeroSection() {
    return (
        <section className="relative min-h-[350px] flex items-center justify-center"
            style={{ background: 'linear-gradient(to bottom, #a3a0a5, #5f4678, #3f2f4e)' }}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <Image src="/logo-symbol.png" alt="" width={500} height={390} />
            </div>
            <div className="relative z-10 text-center p-8">
                <Image src="/logo-text.png" alt="LunarLoom" width={400} height={108} className="mx-auto mb-4" />
                <p style={{ color: '#FDFBF7', opacity: 0.9, fontFamily: 'Georgia, serif', fontSize: '1.25rem' }}>
                    <span style={{ color: '#C9A962' }}>✦</span> Tarot, Rituale & Mondzyklen <span style={{ color: '#C9A962' }}>✦</span>
                </p>
                <div className="mt-6 flex gap-4 justify-center">
                    <button className="px-6 py-3 rounded-lg text-white" style={{ background: 'linear-gradient(135deg, #6B5B7A, #8A7A99)' }}>
                        🔮 Tarot entdecken
                    </button>
                    <button className="px-6 py-3 rounded-lg font-semibold" style={{ background: 'linear-gradient(135deg, #C9A962, #A68942)', color: '#3D2E4A' }}>
                        ✦ Reading buchen
                    </button>
                </div>
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/50">HERO SECTION</div>
        </section>
    );
}

function NavCardsSection() {
    const cards = [
        { emoji: '🔮', title: 'Tarot', desc: 'Entdecke die Weisheit der Karten.' },
        { emoji: '🌙', title: 'Rituale', desc: 'Heilige Praktiken im Einklang mit den Mondphasen.' },
        { emoji: '📖', title: 'Blog', desc: 'Erkenntnisse und Gedanken zu Spiritualität.' },
    ];

    return (
        <section className="py-12 px-8 relative" style={{ backgroundColor: '#3f2f4e' }}>
            <div className="text-center mb-8">
                <span style={{ color: '#C9A962', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Entdecke
                </span>
                <h2 style={{ color: '#FDFBF7', fontFamily: 'Georgia, serif', fontSize: '2rem', marginTop: '0.5rem' }}>
                    Dein Weg zur inneren Weisheit
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
                        style={{
                            backgroundColor: '#5f4678',
                            border: '1px solid rgba(253,251,247,0.1)'
                        }}
                    >
                        <div className="text-4xl mb-2">{card.emoji}</div>
                        <h3 style={{ color: '#FDFBF7', fontFamily: 'Georgia, serif', fontSize: '1.25rem' }}>{card.title}</h3>
                        <p style={{ color: 'rgba(253,251,247,0.7)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/50">NAV CARDS SECTION</div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="py-12 px-8 relative" style={{ backgroundColor: '#3f2f4e' }}>
            <div className="max-w-2xl mx-auto text-center">
                <span style={{ color: '#C9A962', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Evidenzbasierte Spiritualität
                </span>
                <h2 style={{ color: '#FDFBF7', fontFamily: 'Georgia, serif', fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    Willkommen bei LunarLoom
                </h2>
                <p style={{ color: 'rgba(253,251,247,0.7)' }}>
                    Hier findest du authentische Tarot-Interpretationen, kraftvolle Mondrituale
                    und tiefgehende Ressourcen für deine spirituelle Reise.
                </p>
                <button
                    className="mt-6 px-6 py-3 rounded-lg"
                    style={{ border: '2px solid rgba(253,251,247,0.3)', color: '#FDFBF7', background: 'transparent' }}
                >
                    Mehr über Rachel erfahren
                </button>
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/50">ABOUT SECTION</div>
        </section>
    );
}

function CTASection() {
    return (
        <section
            className="py-12 px-8 relative"
            style={{ background: 'linear-gradient(to bottom, #3D2E4A, #a3a0a5)' }}
        >
            <div className="max-w-2xl mx-auto text-center">
                <h2 style={{ color: '#FDFBF7', fontFamily: 'Georgia, serif', fontSize: '2rem', marginBottom: '1rem' }}>
                    Bereit für dein persönliches Reading?
                </h2>
                <p style={{ color: 'rgba(253,251,247,0.7)', marginBottom: '1.5rem' }}>
                    Buche jetzt eine individuelle Tarot-Session.
                </p>
                <button
                    className="px-8 py-3 rounded-lg font-semibold"
                    style={{ background: 'linear-gradient(135deg, #C9A962, #A68942)', color: '#3D2E4A' }}
                >
                    ✦ Termin buchen
                </button>
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/50">CTA SECTION</div>
        </section>
    );
}

// Section map
const sectionComponents: Record<SectionId, () => JSX.Element> = {
    hero: HeroSection,
    navCards: NavCardsSection,
    about: AboutSection,
    cta: CTASection,
};

// Main Builder Component
function HomepageBuilder({
    sectionOrder = 'hero,navCards,about,cta',
    showHero = true,
    showNavCards = true,
    showAbout = true,
    showCTA = true,
}: HomepageBuilderProps) {
    const visibility: Record<SectionId, boolean> = {
        hero: showHero,
        navCards: showNavCards,
        about: showAbout,
        cta: showCTA,
    };

    const orderedSections = sectionOrder
        .split(',')
        .map(s => s.trim() as SectionId)
        .filter(id => visibility[id] && sectionComponents[id]);

    return (
        <div className="w-full">
            {/* Header Preview */}
            <div className="h-16 flex items-center px-6" style={{ backgroundColor: '#a3a0a5' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20" />
                    <span style={{ color: '#3D2E4A', fontFamily: 'Georgia, serif', fontWeight: 600 }}>LunarLoom</span>
                </div>
            </div>
            <div className="h-1" style={{ background: 'linear-gradient(to right, rgba(201,169,98,0.6), rgba(201,169,98,0.2), transparent)' }} />

            {/* Sections */}
            {orderedSections.length === 0 ? (
                <div className="py-20 text-center bg-gray-100">
                    <p className="text-gray-500">Keine Sections aktiviert. Aktiviere mindestens eine Section in den Controls.</p>
                </div>
            ) : (
                orderedSections.map((sectionId) => {
                    const Component = sectionComponents[sectionId];
                    return <Component key={sectionId} />;
                })
            )}

            {/* Footer Preview */}
            <div className="h-1" style={{ background: 'linear-gradient(to left, rgba(201,169,98,0.6), rgba(201,169,98,0.2), transparent)' }} />
            <div className="py-8 px-6" style={{ backgroundColor: '#3D2E4A' }}>
                <p style={{ color: 'rgba(253,251,247,0.5)', fontSize: '0.875rem', textAlign: 'center' }}>
                    © 2026 LunarLoom · Footer Preview
                </p>
            </div>

            {/* Current Order Display */}
            <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg">
                <div className="font-bold mb-1">Aktive Reihenfolge:</div>
                <code>{orderedSections.join(' → ')}</code>
            </div>
        </div>
    );
}

const meta: Meta<typeof HomepageBuilder> = {
    title: 'LunarLoom/Homepage Builder',
    component: HomepageBuilder,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        sectionOrder: {
            control: 'text',
            description: 'Reihenfolge der Sections (kommagetrennt): hero, navCards, about, cta',
            table: { category: '📐 Reihenfolge' }
        },
        showHero: {
            control: 'boolean',
            description: 'Hero Section anzeigen',
            table: { category: '👁️ Sichtbarkeit' }
        },
        showNavCards: {
            control: 'boolean',
            description: 'Navigations-Karten anzeigen',
            table: { category: '👁️ Sichtbarkeit' }
        },
        showAbout: {
            control: 'boolean',
            description: 'Über-Bereich anzeigen',
            table: { category: '👁️ Sichtbarkeit' }
        },
        showCTA: {
            control: 'boolean',
            description: 'CTA Section anzeigen',
            table: { category: '👁️ Sichtbarkeit' }
        },
    },
};

export default meta;
type Story = StoryObj<typeof HomepageBuilder>;

export const Default: Story = {
    args: {
        sectionOrder: 'hero,navCards,about,cta',
        showHero: true,
        showNavCards: true,
        showAbout: true,
        showCTA: true,
    },
};

export const MinimalLanding: Story = {
    args: {
        sectionOrder: 'hero,cta',
        showHero: true,
        showNavCards: false,
        showAbout: false,
        showCTA: true,
    },
};

export const ReversedOrder: Story = {
    args: {
        sectionOrder: 'cta,about,navCards,hero',
        showHero: true,
        showNavCards: true,
        showAbout: true,
        showCTA: true,
    },
};

export const CardsFirst: Story = {
    args: {
        sectionOrder: 'navCards,hero,about,cta',
        showHero: true,
        showNavCards: true,
        showAbout: true,
        showCTA: true,
    },
};
