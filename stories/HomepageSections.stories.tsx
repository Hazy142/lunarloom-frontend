import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from 'next/image';

// Homepage Layout with configurable section backgrounds
interface HomepageLayoutProps {
    // Hero Section
    heroGradientFrom: string;
    heroGradientVia: string;
    heroGradientTo: string;

    // Navigation Cards Section
    navCardsBackground: string;
    cardBackground: string;

    // About Section
    aboutBackground: string;

    // CTA Section
    ctaGradientFrom: string;
    ctaGradientTo: string;
}

function HomepageLayout({
    heroGradientFrom = '#F8F3EC',
    heroGradientVia = '#F5EFE6',
    heroGradientTo = '#EDE6DC',
    navCardsBackground = '#EDE6DC',
    cardBackground = '#FAF7F2',
    aboutBackground = '#F5EFE6',
    ctaGradientFrom = '#3D2E4A',
    ctaGradientTo = '#6B5B7A',
}: HomepageLayoutProps) {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative min-h-[400px] flex items-center justify-center"
                style={{
                    background: `linear-gradient(to bottom, ${heroGradientFrom}, ${heroGradientVia}, ${heroGradientTo})`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <Image src="/logo-symbol.png" alt="" width={600} height={468} />
                </div>
                <div className="relative z-10 text-center p-8">
                    <Image src="/logo-text.png" alt="LunarLoom" width={400} height={108} className="mx-auto mb-4" />
                    <p style={{ color: '#6B5B7A', fontFamily: 'Georgia, serif', fontSize: '1.25rem' }}>
                        <span style={{ color: '#C9A962' }}>✦</span> Tarot, Rituale & Mondzyklen <span style={{ color: '#C9A962' }}>✦</span>
                    </p>
                </div>
            </section>

            {/* Navigation Cards Section */}
            <section className="py-16 px-8" style={{ backgroundColor: navCardsBackground }}>
                <div className="text-center mb-8">
                    <span style={{ color: '#C9A962', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Entdecke
                    </span>
                    <h2 style={{ color: '#3D2E4A', fontFamily: 'Georgia, serif', fontSize: '2rem', marginTop: '0.5rem' }}>
                        Dein Weg zur inneren Weisheit
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {['🔮 Tarot', '🌙 Rituale', '📖 Blog'].map((item) => (
                        <div
                            key={item}
                            className="p-6 rounded-2xl text-center"
                            style={{ backgroundColor: cardBackground, border: '1px solid rgba(107,91,122,0.15)' }}
                        >
                            <div className="text-4xl mb-2">{item.split(' ')[0]}</div>
                            <h3 style={{ color: '#3D2E4A', fontFamily: 'Georgia, serif' }}>{item.split(' ')[1]}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-8" style={{ backgroundColor: aboutBackground }}>
                <div className="max-w-2xl mx-auto text-center">
                    <span style={{ color: '#C9A962', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Evidenzbasierte Spiritualität
                    </span>
                    <h2 style={{ color: '#3D2E4A', fontFamily: 'Georgia, serif', fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                        Willkommen bei LunarLoom
                    </h2>
                    <p style={{ color: '#6B5B7A' }}>
                        Authentische Tarot-Interpretationen, kraftvolle Mondrituale und tiefgehende Ressourcen.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 px-8"
                style={{ background: `linear-gradient(135deg, ${ctaGradientFrom}, ${ctaGradientTo})` }}
            >
                <div className="max-w-2xl mx-auto text-center">
                    <h2 style={{ color: '#FDFBF7', fontFamily: 'Georgia, serif', fontSize: '2rem', marginBottom: '1rem' }}>
                        Bereit für dein persönliches Reading?
                    </h2>
                    <button
                        style={{
                            background: 'linear-gradient(135deg, #C9A962, #A68942)',
                            color: '#3D2E4A',
                            padding: '0.875rem 2rem',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            border: 'none'
                        }}
                    >
                        ✦ Termin buchen
                    </button>
                </div>
            </section>
        </div>
    );
}

const meta: Meta<typeof HomepageLayout> = {
    title: 'LunarLoom/Homepage Sections',
    component: HomepageLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // Hero Section
        heroGradientFrom: {
            control: 'color',
            description: 'Hero: Gradient Start (oben)',
            table: { category: '1. Hero Section' }
        },
        heroGradientVia: {
            control: 'color',
            description: 'Hero: Gradient Mitte',
            table: { category: '1. Hero Section' }
        },
        heroGradientTo: {
            control: 'color',
            description: 'Hero: Gradient Ende (unten)',
            table: { category: '1. Hero Section' }
        },
        // Nav Cards Section
        navCardsBackground: {
            control: 'color',
            description: 'Navigations-Karten: Hintergrund',
            table: { category: '2. Navigations-Karten' }
        },
        cardBackground: {
            control: 'color',
            description: 'Karten: Hintergrundfarbe',
            table: { category: '2. Navigations-Karten' }
        },
        // About Section
        aboutBackground: {
            control: 'color',
            description: 'Über-Bereich: Hintergrund',
            table: { category: '3. Über-Bereich' }
        },
        // CTA Section
        ctaGradientFrom: {
            control: 'color',
            description: 'CTA: Gradient Start',
            table: { category: '4. CTA Section' }
        },
        ctaGradientTo: {
            control: 'color',
            description: 'CTA: Gradient Ende',
            table: { category: '4. CTA Section' }
        },
    },
};

export default meta;
type Story = StoryObj<typeof HomepageLayout>;

export const Default: Story = {
    args: {
        heroGradientFrom: '#F8F3EC',
        heroGradientVia: '#F5EFE6',
        heroGradientTo: '#EDE6DC',
        navCardsBackground: '#EDE6DC',
        cardBackground: '#FAF7F2',
        aboutBackground: '#F5EFE6',
        ctaGradientFrom: '#3D2E4A',
        ctaGradientTo: '#6B5B7A',
    },
};

export const WarmTones: Story = {
    args: {
        heroGradientFrom: '#FDF8F0',
        heroGradientVia: '#F9F0E3',
        heroGradientTo: '#F0E6D8',
        navCardsBackground: '#F0E6D8',
        cardBackground: '#FFFBF5',
        aboutBackground: '#F9F0E3',
        ctaGradientFrom: '#4A3D5C',
        ctaGradientTo: '#7A6B8A',
    },
};

export const CoolTones: Story = {
    args: {
        heroGradientFrom: '#F5F3F8',
        heroGradientVia: '#EDE8F2',
        heroGradientTo: '#E5DFEC',
        navCardsBackground: '#E5DFEC',
        cardBackground: '#FAF8FC',
        aboutBackground: '#EDE8F2',
        ctaGradientFrom: '#2E3A4A',
        ctaGradientTo: '#5B6B7A',
    },
};
