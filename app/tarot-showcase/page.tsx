import TarotCardV2 from '@/components/tarot/TarotCardV2';
import TarotCardBack from '@/components/tarot/TarotCardBack';

export default function TarotShowcasePage() {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8 gap-12">
            <h1 className="text-4xl font-serif text-amber-200 tracking-widest">LUNAR LOOM TAROT</h1>

            <div className="flex flex-wrap items-center justify-center gap-12">
                {/* Card Front */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg text-amber-400/70 tracking-wider uppercase">Vorderseite</h2>
                    <div className="relative w-[340px] h-[580px] rounded-[24px] overflow-hidden border-[3px] border-[#c5a059] bg-[#1a0b2e] shadow-[0_0_50px_rgba(197,160,89,0.3)]">
                        {/* Simplified front card preview - using same proportions */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 340 580" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gold-grad-front" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f3e5ab" />
                                        <stop offset="50%" stopColor="#d4af37" />
                                        <stop offset="100%" stopColor="#9b7a28" />
                                    </linearGradient>
                                </defs>
                                <g stroke="url(#gold-grad-front)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                                    <path d="M 17 125 Q 42 42 125 17" />
                                    <path d="M 17 170 Q 51 51 170 17" />
                                    <path d="M 323 125 Q 298 42 215 17" />
                                    <path d="M 323 170 Q 289 51 170 17" />
                                    <path d="M 17 210 C 51 290 51 380 17 460" />
                                    <path d="M 323 210 C 289 290 289 380 323 460" />
                                    <path d="M 17 460 Q 42 538 125 563" />
                                    <path d="M 323 460 Q 298 538 215 563" />
                                </g>
                            </svg>
                        </div>

                        {/* Top Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[50px]">
                            <svg viewBox="0 0 120 60" className="w-full h-full drop-shadow-lg">
                                <defs>
                                    <linearGradient id="badge-grad-front" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#e3d2b6" />
                                        <stop offset="50%" stopColor="#d4af37" />
                                        <stop offset="100%" stopColor="#9b7a28" />
                                    </linearGradient>
                                </defs>
                                <path d="M 0 0 L 120 0 L 110 30 Q 60 60 10 30 Z" fill="url(#badge-grad-front)" stroke="#fceabb" strokeWidth="2" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center pb-2">
                                <span className="text-xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] tracking-widest font-serif">X</span>
                            </div>
                        </div>

                        {/* Central Arch Window */}
                        <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[72%] h-[60%] z-10">
                            <div className="w-full h-full rounded-t-full border-[3px] border-[#d4af37] p-[3px] bg-gradient-to-b from-[#d4af37] to-[#9b7a28]">
                                <div className="w-full h-full rounded-t-full bg-[#1a0b2e] p-[2px]">
                                    <div className="w-full h-full rounded-t-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff5d6_0%,_#e3d2b6_30%,_#a890b0_60%,_#6b5280_85%,_#1a0b2e_100%)] opacity-90"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Banner */}
                        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[90%] h-[12%] z-20 flex items-center justify-center">
                            <svg viewBox="0 0 300 80" className="absolute inset-0 w-full h-full drop-shadow-xl">
                                <defs>
                                    <linearGradient id="banner-grad-front" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#f3e5ab" />
                                        <stop offset="20%" stopColor="#d4af37" />
                                        <stop offset="80%" stopColor="#d4af37" />
                                        <stop offset="100%" stopColor="#9b7a28" />
                                    </linearGradient>
                                </defs>
                                <path d="M 0 30 Q 150 0 300 30 L 300 80 Q 150 60 0 80 Z" fill="url(#banner-grad-front)" stroke="#fceabb" strokeWidth="2" />
                            </svg>
                            <div className="relative z-10 text-center pt-3">
                                <h2 className="text-[#2a1b0a] text-sm tracking-widest font-serif font-semibold leading-tight">THE WHEEL OF</h2>
                                <h2 className="text-[#2a1b0a] text-base tracking-[0.2em] font-serif font-bold leading-tight">FORTUNE</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Back */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg text-amber-400/70 tracking-wider uppercase">Rückseite</h2>
                    <TarotCardBack />
                </div>
            </div>

            <p className="text-amber-200/50 text-sm mt-8">Lunar Loom Tarot Design System v2.0</p>
        </div>
    );
}
