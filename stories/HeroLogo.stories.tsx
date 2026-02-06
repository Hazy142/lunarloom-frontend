import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from 'next/image';

// Hero Logo Component with configurable props
interface HeroLogoProps {
    opacity: number;
    scale: number;
    symbolSize: number;
    textWidth: number;
}

function HeroLogo({ opacity = 0.08, scale = 1.5, symbolSize = 900, textWidth = 450 }: HeroLogoProps) {
    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-b from-[#F8F3EC] via-[#F5EFE6] to-[#EDE6DC]">
            {/* Background Logo Symbol */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                    src="/logo-symbol.png"
                    alt=""
                    width={symbolSize}
                    height={Math.round(symbolSize * 0.78)}
                    style={{
                        opacity: opacity,
                        transform: `scale(${scale})`,
                    }}
                />
            </div>

            {/* Decorative Blurs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A962]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#6B5B7A]/10 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <Image
                    src="/logo-text.png"
                    alt="LunarLoom"
                    width={textWidth}
                    height={Math.round(textWidth * 0.27)}
                    className="drop-shadow-sm mb-6"
                />
                <p className="text-xl text-[#6B5B7A] font-serif">
                    <span className="text-[#C9A962]">✦</span> Tarot, Rituale & Mondzyklen <span className="text-[#C9A962]">✦</span>
                </p>
            </div>
        </div>
    );
}

const meta: Meta<typeof HeroLogo> = {
    title: 'LunarLoom/Hero Logo',
    component: HeroLogo,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        opacity: {
            control: { type: 'range', min: 0, max: 0.5, step: 0.01 },
            description: 'Opacity of the background logo symbol',
        },
        scale: {
            control: { type: 'range', min: 0.5, max: 2.5, step: 0.1 },
            description: 'Scale of the background logo',
        },
        symbolSize: {
            control: { type: 'range', min: 400, max: 1200, step: 50 },
            description: 'Base size of the symbol in pixels',
        },
        textWidth: {
            control: { type: 'range', min: 200, max: 600, step: 25 },
            description: 'Width of the text logo',
        },
    },
};

export default meta;
type Story = StoryObj<typeof HeroLogo>;

export const Default: Story = {
    args: {
        opacity: 0.08,
        scale: 1.5,
        symbolSize: 900,
        textWidth: 450,
    },
};

export const MoreVisible: Story = {
    args: {
        opacity: 0.15,
        scale: 1.25,
        symbolSize: 900,
        textWidth: 450,
    },
};

export const Subtle: Story = {
    args: {
        opacity: 0.05,
        scale: 1.75,
        symbolSize: 1000,
        textWidth: 400,
    },
};
