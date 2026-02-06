import React from 'react';

export default function TarotCardV2() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-8 font-serif">
            {/* Card Container */}
            <div className="relative w-[400px] h-[700px] rounded-[2.5rem] overflow-hidden border-[3px] border-[#c5a059] bg-[#1a0b2e] shadow-[0_0_50px_rgba(197,160,89,0.3)]">

                {/* 1. Background & Decorative Line Art */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 700" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f3e5ab" />
                                <stop offset="50%" stopColor="#d4af37" />
                                <stop offset="100%" stopColor="#9b7a28" />
                            </linearGradient>
                        </defs>

                        {/* Symmetrical Art Deco / Web Lines */}
                        <g stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                            {/* Top Left Radiating */}
                            <path d="M 20 150 Q 50 50 150 20" />
                            <path d="M 20 200 Q 60 60 200 20" />
                            <path d="M 20 250 Q 80 80 140 20" />
                            <path d="M 0 100 L 50 50" />
                            <path d="M 0 300 C 50 250 50 100 100 50" />

                            {/* Top Right Radiating (Mirrored) */}
                            <path d="M 380 150 Q 350 50 250 20" />
                            <path d="M 380 200 Q 340 60 200 20" />
                            <path d="M 380 250 Q 320 80 260 20" />
                            <path d="M 400 100 L 350 50" />
                            <path d="M 400 300 C 350 250 350 100 300 50" />

                            {/* Side Weaving Patterns */}
                            <path d="M 20 250 C 60 350 60 450 20 550" />
                            <path d="M 380 250 C 340 350 340 450 380 550" />

                            <path d="M 40 280 C 80 350 80 450 40 520" opacity="0.6" />
                            <path d="M 360 280 C 320 350 320 450 360 520" opacity="0.6" />

                            {/* Connecting Nodes (Small circles) */}
                            <circle cx="50" cy="50" r="1.5" fill="#f3e5ab" />
                            <circle cx="350" cy="50" r="1.5" fill="#f3e5ab" />
                            <circle cx="20" cy="150" r="1.5" fill="#f3e5ab" />
                            <circle cx="380" cy="150" r="1.5" fill="#f3e5ab" />
                            <circle cx="60" cy="350" r="1.5" fill="#f3e5ab" />
                            <circle cx="340" cy="350" r="1.5" fill="#f3e5ab" />

                            {/* Bottom Left Radiating */}
                            <path d="M 20 550 Q 50 650 150 680" />
                            <path d="M 20 500 Q 60 640 200 680" />
                            <path d="M 0 600 L 50 650" />

                            {/* Bottom Right Radiating */}
                            <path d="M 380 550 Q 350 650 250 680" />
                            <path d="M 380 500 Q 340 640 200 680" />
                            <path d="M 400 600 L 350 650" />
                        </g>
                    </svg>
                </div>

                {/* 2. Top Badge (Roman Numeral X) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[60px]">
                    <svg viewBox="0 0 120 60" className="w-full h-full drop-shadow-lg">
                        <defs>
                            <linearGradient id="badge-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#e3d2b6" />
                                <stop offset="50%" stopColor="#d4af37" />
                                <stop offset="100%" stopColor="#9b7a28" />
                            </linearGradient>
                        </defs>
                        {/* Shield Shape */}
                        <path
                            d="M 0 0 L 120 0 L 110 30 Q 60 60 10 30 Z"
                            fill="url(#badge-grad)"
                            stroke="#fceabb"
                            strokeWidth="2"
                        />
                        {/* Inner Border */}
                        <path
                            d="M 10 5 L 110 5 L 102 28 Q 60 50 18 28 Z"
                            fill="none"
                            stroke="#7a5c18"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center pb-2">
                        <span className="text-2xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] tracking-widest font-serif">X</span>
                    </div>
                </div>

                {/* 3. Central Arch Window */}
                <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[72%] h-[62%] z-10">
                    {/* Outer Gold Border Frame */}
                    <div className="w-full h-full rounded-t-full border-[3px] border-[#d4af37] p-[4px] shadow-[0_0_15px_rgba(212,175,55,0.4)] bg-gradient-to-b from-[#d4af37] to-[#9b7a28]">
                        {/* Inner Frame Layer */}
                        <div className="w-full h-full rounded-t-full bg-[#1a0b2e] p-[2px]">
                            {/* The Glowing Content Area */}
                            <div className="w-full h-full rounded-t-full overflow-hidden relative">
                                {/* Radial Gradient Background */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff5d6_0%,_#e3d2b6_30%,_#a890b0_60%,_#6b5280_85%,_#1a0b2e_100%)] opacity-90"></div>

                                {/* Subtle Inner Glow/Vignette */}
                                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(26,11,46,0.8)] rounded-t-full pointer-events-none"></div>

                                {/* Inner Gold Rim */}
                                <div className="absolute inset-0 border border-[#fceabb] opacity-50 rounded-t-full pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Bottom Banner (The Wheel of Fortune) */}
                <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[90%] h-[14%] z-20 flex items-center justify-center">
                    <svg viewBox="0 0 300 80" className="absolute inset-0 w-full h-full drop-shadow-xl">
                        <defs>
                            <linearGradient id="banner-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f3e5ab" />
                                <stop offset="20%" stopColor="#d4af37" />
                                <stop offset="80%" stopColor="#d4af37" />
                                <stop offset="100%" stopColor="#9b7a28" />
                            </linearGradient>
                        </defs>
                        {/* Curved Banner Shape */}
                        <path
                            d="M 0 30 Q 150 0 300 30 L 300 80 Q 150 60 0 80 Z"
                            fill="url(#banner-grad)"
                            stroke="#fceabb"
                            strokeWidth="2"
                        />
                        {/* Decorative Inner Line */}
                        <path
                            d="M 10 35 Q 150 10 290 35 L 290 75 Q 150 55 10 75 Z"
                            fill="none"
                            stroke="#7a5c18"
                            strokeWidth="1"
                            opacity="0.5"
                        />
                    </svg>

                    {/* Text Content */}
                    <div className="relative z-10 text-center pt-4">
                        <h2 className="text-[#2a1b0a] text-lg tracking-widest font-serif font-semibold leading-tight">
                            THE WHEEL OF
                        </h2>
                        <h2 className="text-[#2a1b0a] text-xl tracking-[0.2em] font-serif font-bold leading-tight">
                            FORTUNE
                        </h2>
                    </div>
                </div>

                {/* 5. Extra Corner Details (Simulating the intricate corners) */}
                {/* Bottom Left Corner Detail */}
                <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 0 100 L 0 50 Q 50 50 100 100 Z" fill="none" stroke="#d4af37" strokeWidth="1" />
                        <path d="M 10 100 L 10 60 Q 50 60 90 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                    </svg>
                </div>
                {/* Bottom Right Corner Detail */}
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-90">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 0 100 L 0 50 Q 50 50 100 100 Z" fill="none" stroke="#d4af37" strokeWidth="1" />
                        <path d="M 10 100 L 10 60 Q 50 60 90 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                    </svg>
                </div>

            </div>
        </div>
    );
}
