'use client';

import { useState } from 'react';
import { TarotCard as TarotCardType } from '@/lib/wordpress';

interface TarotCardGalleryProps {
    card: TarotCardType;
}

export default function TarotCardGallery({ card }: TarotCardGalleryProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const cardNumber = card.meta.card_number || '';
    const nameDe = card.title.rendered;
    const nameEn = card.meta.name_english || '';
    const element = card.meta.element || '';
    const keywords = card.meta.keywords || '';
    const upright = card.meta.upright || '';
    const reversed = card.meta.reversed || '';

    // Determine colors based on element
    const getElementColors = () => {
        if (element.includes('Feuer')) return { gold: '#d4af37', goldLight: '#f3e5ab', goldDark: '#9b7a28' };
        if (element.includes('Wasser')) return { gold: '#7db4d4', goldLight: '#a8d8f0', goldDark: '#4a7c9b' };
        if (element.includes('Luft')) return { gold: '#c9a0dc', goldLight: '#e6c7f2', goldDark: '#8b5ca3' };
        if (element.includes('Erde')) return { gold: '#8fbc8f', goldLight: '#b8d8b8', goldDark: '#5a7c5a' };
        // Default gold
        return { gold: '#d4af37', goldLight: '#f3e5ab', goldDark: '#9b7a28' };
    };

    const colors = getElementColors();

    return (
        <div
            className="relative w-full h-[420px] cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front of Card */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden border-[2px] border-[#c5a059] bg-[#1a0b2e] shadow-[0_0_30px_rgba(197,160,89,0.2)] hover:shadow-[0_0_50px_rgba(197,160,89,0.4)] transition-shadow">

                        {/* Background Decorative Lines */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                            <svg className="w-full h-full" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id={`gold-grad-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={colors.goldLight} />
                                        <stop offset="50%" stopColor={colors.gold} />
                                        <stop offset="100%" stopColor={colors.goldDark} />
                                    </linearGradient>
                                </defs>
                                <g stroke={`url(#gold-grad-${card.id})`} strokeWidth="1" fill="none">
                                    <path d="M 15 100 Q 40 40 100 15" opacity="0.6" />
                                    <path d="M 285 100 Q 260 40 200 15" opacity="0.6" />
                                    <path d="M 15 200 C 50 150 50 100 80 50" opacity="0.4" />
                                    <path d="M 285 200 C 250 150 250 100 220 50" opacity="0.4" />
                                    <circle cx="40" cy="40" r="1.5" fill={colors.goldLight} />
                                    <circle cx="260" cy="40" r="1.5" fill={colors.goldLight} />
                                </g>
                            </svg>
                        </div>

                        {/* Top Badge (Roman Numeral) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[90px] h-[50px]">
                            <svg viewBox="0 0 90 50" className="w-full h-full drop-shadow-lg">
                                <defs>
                                    <linearGradient id={`badge-grad-${card.id}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor={colors.goldLight} />
                                        <stop offset="50%" stopColor={colors.gold} />
                                        <stop offset="100%" stopColor={colors.goldDark} />
                                    </linearGradient>
                                </defs>
                                <path d="M 0 0 L 90 0 L 82 25 Q 45 45 8 25 Z" fill={`url(#badge-grad-${card.id})`} stroke="#fceabb" strokeWidth="1.5" />
                                <path d="M 8 4 L 82 4 L 76 22 Q 45 38 14 22 Z" fill="none" stroke="#7a5c18" strokeWidth="0.8" opacity="0.5" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center pb-1">
                                <span className="text-lg font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] tracking-wider font-serif">
                                    {cardNumber}
                                </span>
                            </div>
                        </div>

                        {/* Central Arch Window */}
                        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[70%] h-[55%] z-10">
                            <div className="w-full h-full rounded-t-full border-[2px] border-[#d4af37] p-[3px] shadow-[0_0_12px_rgba(212,175,55,0.3)]" style={{
                                background: `linear-gradient(to bottom, ${colors.gold}, ${colors.goldDark})`
                            }}>
                                <div className="w-full h-full rounded-t-full bg-[#1a0b2e] p-[2px]">
                                    <div className="w-full h-full rounded-t-full overflow-hidden relative">
                                        <div className="absolute inset-0 opacity-90" style={{
                                            background: 'radial-gradient(circle at center, #fff5d6 0%, #e3d2b6 30%, #a890b0 60%, #6b5280 85%, #1a0b2e 100%)'
                                        }}></div>
                                        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(26,11,46,0.8)] rounded-t-full"></div>
                                        <div className="absolute inset-0 border border-[#fceabb] opacity-40 rounded-t-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Banner (Name) */}
                        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[90%] h-[16%] z-20">
                            <svg viewBox="0 0 300 70" className="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                    <linearGradient id={`banner-grad-${card.id}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor={colors.goldLight} />
                                        <stop offset="20%" stopColor={colors.gold} />
                                        <stop offset="80%" stopColor={colors.gold} />
                                        <stop offset="100%" stopColor={colors.goldDark} />
                                    </linearGradient>
                                    <path id={`textPath-${card.id}`} d="M 30 42 Q 150 28 270 42" fill="none" />
                                </defs>
                                <path d="M 0 20 Q 150 0 300 20 L 300 70 Q 150 55 0 70 Z" fill={`url(#banner-grad-${card.id})`} stroke="#fceabb" strokeWidth="2" />
                                <path d="M 12 24 Q 150 6 288 24 L 288 66 Q 150 51 12 66 Z" fill="none" stroke="#7a5c18" strokeWidth="1" opacity="0.5" />

                                <text className="font-serif" fill="#2a1b0a" fontSize="16" fontWeight="700" textAnchor="middle" letterSpacing="2">
                                    <textPath href={`#textPath-${card.id}`} startOffset="50%">
                                        {nameDe.toUpperCase()}
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Corner Decorations */}
                        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none opacity-60">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path d="M 0 100 L 0 50 Q 50 50 100 100 Z" fill="none" stroke={colors.gold} strokeWidth="1" />
                            </svg>
                        </div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-60 -scale-x-100">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path d="M 0 100 L 0 50 Q 50 50 100 100 Z" fill="none" stroke={colors.gold} strokeWidth="1" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Back of Card (Info) */}
                <div
                    className="absolute inset-0 backface-hidden rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden border-[2px] border-[#c5a059] bg-gradient-to-b from-[#2a1b3d] to-[#1a0b2e] shadow-[0_0_30px_rgba(197,160,89,0.2)] p-6 text-[#FDFBF7]">

                        {/* Card Name EN */}
                        <div className="text-center mb-4">
                            <h3 className="text-xl font-serif font-bold text-[#d4af37] tracking-wider">{nameEn}</h3>
                            {element && (
                                <p className="text-xs text-[#FDFBF7]/60 mt-1">Element: {element}</p>
                            )}
                        </div>

                        {/* Keywords */}
                        {keywords && (
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-[#d4af37] mb-2 tracking-widest">KEYWORDS</h4>
                                <p className="text-sm text-[#FDFBF7]/80">{keywords}</p>
                            </div>
                        )}

                        {/* Upright */}
                        {upright && (
                            <div className="mb-3">
                                <h4 className="text-xs font-bold text-[#d4af37] mb-1 tracking-widest">AUFRECHT</h4>
                                <p className="text-xs text-[#FDFBF7]/70 leading-relaxed line-clamp-3">{upright}</p>
                            </div>
                        )}

                        {/* Reversed */}
                        {reversed && (
                            <div className="mb-3">
                                <h4 className="text-xs font-bold text-[#d4af37] mb-1 tracking-widest">UMGEKEHRT</h4>
                                <p className="text-xs text-[#FDFBF7]/70 leading-relaxed line-clamp-3">{reversed}</p>
                            </div>
                        )}

                        {/* Click to flip back hint */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-[#FDFBF7]/40 text-center">
                            Klicke um zurückzudrehen
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
