import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                tarot: {
                    dark: '#1a0b2e', // Deep Purple
                    gold: {
                        light: '#f3e5ab', // Pale Gold
                        DEFAULT: '#d4af37', // Classic Gold
                        dark: '#aa8c2c', // Dark Gold
                        shadow: '#4b3621', // Brownish Shadow
                    }
                }
            },
            fontFamily: {
                mystical: ['var(--font-cinzel)', 'serif'], // Nutzung der CSS-Variable
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #f3e5ab 0%, #d4af37 50%, #aa8c2c 100%)',
                'gold-shiny': 'linear-gradient(to bottom, #aa8c2c, #f3e5ab, #d4af37, #aa8c2c)',
            }
        },
    },
    plugins: [
        function ({ addUtilities }: any) {
            addUtilities({
                '.backface-hidden': {
                    'backface-visibility': 'hidden',
                },
                '.rotate-y-180': {
                    transform: 'rotateY(180deg)',
                },
                '.transform-style-3d': {
                    'transform-style': 'preserve-3d',
                },
                '.perspective-1000': {
                    perspective: '1000px',
                },
            });
        },
    ],
};
export default config;
