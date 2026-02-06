import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// Card Component with configurable props
interface CardLunarLoomProps {
    title: string;
    description: string;
    emoji: string;
    showGradientBorder: boolean;
    backgroundColor: string;
}

function CardLunarLoom({
    title = 'Tarot',
    description = 'Entdecke die Weisheit der Karten.',
    emoji = '🔮',
    showGradientBorder = true,
    backgroundColor = '#FAF7F2'
}: CardLunarLoomProps) {
    return (
        <div
            className="group cursor-pointer"
            style={{ maxWidth: '320px' }}
        >
            <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                    backgroundColor,
                    border: '1px solid rgba(107, 91, 122, 0.15)',
                }}
            >
                {/* Gradient top border */}
                {showGradientBorder && (
                    <div
                        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: 'linear-gradient(90deg, #6B5B7A, #C9A962)' }}
                    />
                )}

                <div className="text-center">
                    <div className="text-5xl mb-4">{emoji}</div>
                    <h3
                        className="text-2xl font-semibold mb-3 group-hover:text-[#6B5B7A] transition-colors"
                        style={{
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            color: '#3D2E4A'
                        }}
                    >
                        {title}
                    </h3>
                    <p style={{ color: '#6B5B7A' }}>
                        {description}
                    </p>
                    <div
                        className="mt-4 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                        style={{ color: '#C9A962' }}
                    >
                        Erkunden <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const meta: Meta<typeof CardLunarLoom> = {
    title: 'LunarLoom/Card',
    component: CardLunarLoom,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'cream',
            values: [
                { name: 'cream', value: '#EDE6DC' },
                { name: 'white', value: '#FFFFFF' },
                { name: 'dark', value: '#3D2E4A' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        emoji: { control: 'text' },
        showGradientBorder: { control: 'boolean' },
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof CardLunarLoom>;

export const Tarot: Story = {
    args: {
        title: 'Tarot',
        description: 'Entdecke die Weisheit der Karten und gewinne tiefere Einblicke.',
        emoji: '🔮',
        showGradientBorder: true,
        backgroundColor: '#FAF7F2',
    },
};

export const Rituale: Story = {
    args: {
        title: 'Rituale',
        description: 'Heilige Praktiken im Einklang mit den Mondphasen.',
        emoji: '🌙',
        showGradientBorder: true,
        backgroundColor: '#FAF7F2',
    },
};

export const Blog: Story = {
    args: {
        title: 'Blog',
        description: 'Erkenntnisse, Essays und Gedanken zu Spiritualität.',
        emoji: '📖',
        showGradientBorder: true,
        backgroundColor: '#FAF7F2',
    },
};
