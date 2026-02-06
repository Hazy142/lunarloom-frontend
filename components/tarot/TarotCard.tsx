'use client';

import React, { useState } from 'react';

// Sub-component for the 4-pointed star shape
function Star({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
    const d = `
    M 0 -${size} 
    Q ${size * 0.2} -${size * 0.2} ${size} 0 
    Q ${size * 0.2} ${size * 0.2} 0 ${size} 
    Q -${size * 0.2} ${size * 0.2} -${size} 0 
    Q -${size * 0.2} -${size * 0.2} 0 -${size}
  `;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <path d={d} fill={color} />
        </g>
    );
}

interface TarotCardProps {
    number: string;
    name: string;
    subtitle?: string;
    isReversed?: boolean;
    className?: string;
}

export default function TarotCard({ number, name, subtitle, isReversed = false, className = '' }: TarotCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Card dimensions
    const width = 340;
    const height = 580;
    const cx = width / 2;
    const cy = height / 2;

    const colors = {
        bg: "#1a0b2e",
        bgBack: "#241038",
        line: "#dcb978",
        gold: "#d4af37",
        goldLight: "#f3e5ab",
        goldDark: "#9b7a28",
    };

    // Split name into lines for banner
    const nameParts = name.split(' ');
    const nameTop = nameParts.slice(0, -1).join(' ');
    const nameBottom = nameParts[nameParts.length - 1];

    // === BACK SIDE HELPERS ===
    const renderBackgroundEllipses = () => {
        const ellipses = [];
        const count = 24;
        for (let i = 0; i < count; i++) {
            const angle = (i * 360) / count;
            ellipses.push(
                <ellipse key={`bg-ellipse-${i}`} cx={cx} cy={cy} rx={100} ry={320}
                    fill="none" stroke={colors.line} strokeWidth="0.5" strokeOpacity="0.4"
                    transform={`rotate(${angle}, ${cx}, ${cy})`}
                />
            );
        }
        return ellipses;
    };

    const renderIntersectingArcs = () => {
        const arcs = [];
        const steps = 12;
        for (let i = 0; i < steps; i++) {
            arcs.push(
                <path key={`arc-top-${i}`}
                    d={`M ${cx} -50 Q ${cx + (i - steps / 2) * 60} ${cy} ${cx + (i - steps / 2) * 120} ${height + 50}`}
                    fill="none" stroke={colors.line} strokeWidth="0.5" strokeOpacity="0.3"
                />
            );
            arcs.push(
                <path key={`arc-bottom-${i}`}
                    d={`M ${cx} ${height + 50} Q ${cx + (i - steps / 2) * 60} ${cy} ${cx + (i - steps / 2) * 120} -50`}
                    fill="none" stroke={colors.line} strokeWidth="0.5" strokeOpacity="0.3"
                />
            );
        }
        return arcs;
    };

    const renderCrescents = () => {
        const crescents = [];
        const count = 8;
        const radius = 55;
        for (let i = 0; i < count; i++) {
            const angle = (i * 360) / count;
            crescents.push(
                <g key={`crescent-${i}`} transform={`rotate(${angle}, ${cx}, ${cy})`}>
                    <path
                        d={`M ${cx} ${cy - radius} Q ${cx + 15} ${cy - radius - 25} ${cx} ${cy - radius - 50} Q ${cx - 15} ${cy - radius - 25} ${cx} ${cy - radius}`}
                        fill={colors.bgBack} stroke={colors.line} strokeWidth="1.5"
                    />
                    <path
                        d={`M ${cx} ${cy - radius - 5} Q ${cx + 8} ${cy - radius - 25} ${cx} ${cy - radius - 45} Q ${cx - 8} ${cy - radius - 25} ${cx} ${cy - radius - 5}`}
                        fill="none" stroke={colors.line} strokeWidth="1"
                    />
                </g>
            );
        }
        return crescents;
    };

    const renderStars = () => {
        const stars = [];
        const r1 = 90;
        for (let i = 0; i < 8; i++) {
            const angle = (i * 360) / 8 + 22.5;
            const rad = (angle * Math.PI) / 180;
            stars.push(<Star key={`star-1-${i}`} x={cx + r1 * Math.cos(rad)} y={cy + r1 * Math.sin(rad)} size={6} color={colors.line} />);
        }
        const r2 = 160;
        for (let i = 0; i < 12; i++) {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            stars.push(<Star key={`star-2-${i}`} x={cx + r2 * Math.cos(rad)} y={cy + r2 * Math.sin(rad)} size={8} color={colors.line} />);
        }
        [-220, -160, 160, 220].forEach((dy, i) => {
            stars.push(<Star key={`star-v-${i}`} x={cx} y={cy + dy} size={10} color={colors.line} />);
        });
        return stars;
    };

    return (
        <div
            className={`relative cursor-pointer transition-transform duration-700 hover:scale-105 ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                perspective: '1000px',
                transformStyle: 'preserve-3d'
            }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Card Inner (for flip) */}
            <div
                className="absolute w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* === BACK SIDE (visible initially) === */}
                <div
                    className="absolute w-full h-full rounded-[24px] shadow-[0_0_50px_rgba(46,16,71,0.6)]"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                        className="w-full h-full rounded-[24px] bg-[#241038] overflow-hidden border-[3px] border-[#dcb978]">
                        <defs>
                            <radialGradient id={`moonGrad-${number}`} cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#fffef0" />
                                <stop offset="80%" stopColor="#fdf8d6" />
                                <stop offset="100%" stopColor="#e8dcb5" />
                            </radialGradient>
                            <radialGradient id={`bgVig-${number}`} cx="50%" cy="50%" r="70%">
                                <stop offset="0%" stopColor="#2e1a47" stopOpacity="0" />
                                <stop offset="100%" stopColor="#150824" stopOpacity="0.8" />
                            </radialGradient>
                        </defs>
                        <rect width={width} height={height} fill="#241038" />
                        <g opacity="0.6">{renderBackgroundEllipses()}{renderIntersectingArcs()}</g>
                        <rect width={width} height={height} fill={`url(#bgVig-${number})`} />
                        <rect x="12" y="12" width={width - 24} height={height - 24} rx="16" fill="none" stroke={colors.line} strokeWidth="1.5" />
                        <path d="M 12 40 L 12 12 L 40 12" fill="none" stroke={colors.line} strokeWidth="3" />
                        <path d={`M ${width - 12} 40 L ${width - 12} 12 L ${width - 40} 12`} fill="none" stroke={colors.line} strokeWidth="3" />
                        <path d={`M 12 ${height - 40} L 12 ${height - 12} L 40 ${height - 12}`} fill="none" stroke={colors.line} strokeWidth="3" />
                        <path d={`M ${width - 12} ${height - 40} L ${width - 12} ${height - 12} L ${width - 40} ${height - 12}`} fill="none" stroke={colors.line} strokeWidth="3" />
                        <g>
                            <circle cx={cx} cy={cy} r="90" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.5" />
                            <circle cx={cx} cy={cy} r="85" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.5" />
                            {renderCrescents()}
                            <circle cx={cx} cy={cy} r="32" fill={`url(#moonGrad-${number})`} stroke={colors.line} strokeWidth="2" />
                            <g opacity="0.3" fill="#d4c59a">
                                <circle cx={cx - 8} cy={cy - 5} r="4" />
                                <circle cx={cx + 10} cy={cy + 8} r="6" />
                                <circle cx={cx + 5} cy={cy - 12} r="3" />
                            </g>
                        </g>
                        {renderStars()}
                        <Star x={40} y={40} size={12} color={colors.line} />
                        <Star x={width - 40} y={40} size={12} color={colors.line} />
                        <Star x={40} y={height - 40} size={12} color={colors.line} />
                        <Star x={width - 40} y={height - 40} size={12} color={colors.line} />
                    </svg>
                </div>

                {/* === FRONT SIDE === */}
                <div
                    className="absolute w-full h-full rounded-[24px] overflow-hidden border-[3px] border-[#c5a059] bg-[#1a0b2e] shadow-[0_0_50px_rgba(197,160,89,0.3)]"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    {/* Background Art Deco Lines */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
                            <defs>
                                <linearGradient id={`gold-grad-${number}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={colors.goldLight} />
                                    <stop offset="50%" stopColor={colors.gold} />
                                    <stop offset="100%" stopColor={colors.goldDark} />
                                </linearGradient>
                            </defs>
                            <g stroke={`url(#gold-grad-${number})`} strokeWidth="1.5" fill="none" strokeLinecap="round">
                                <path d="M 17 125 Q 42 42 125 17" />
                                <path d="M 17 170 Q 51 51 170 17" />
                                <path d="M 17 210 Q 68 68 119 17" />
                                <path d="M 0 85 L 42 42" />
                                <path d="M 0 255 C 42 213 42 85 85 42" />
                                <path d={`M ${width - 17} 125 Q ${width - 42} 42 ${width - 125} 17`} />
                                <path d={`M ${width - 17} 170 Q ${width - 51} 51 ${width - 170} 17`} />
                                <path d={`M ${width - 17} 210 Q ${width - 68} 68 ${width - 119} 17`} />
                                <path d={`M ${width} 85 L ${width - 42} 42`} />
                                <path d={`M ${width} 255 C ${width - 42} 213 ${width - 42} 85 ${width - 85} 42`} />
                                <path d={`M 17 210 C 51 298 51 383 17 468`} />
                                <path d={`M ${width - 17} 210 C ${width - 51} 298 ${width - 51} 383 ${width - 17} 468`} />
                                <path d="M 34 238 C 68 298 68 383 34 443" opacity="0.6" />
                                <path d={`M ${width - 34} 238 C ${width - 68} 298 ${width - 68} 383 ${width - 34} 443`} opacity="0.6" />
                                <circle cx="42" cy="42" r="1.5" fill={colors.goldLight} />
                                <circle cx={width - 42} cy="42" r="1.5" fill={colors.goldLight} />
                                <circle cx="17" cy="125" r="1.5" fill={colors.goldLight} />
                                <circle cx={width - 17} cy="125" r="1.5" fill={colors.goldLight} />
                                <circle cx="51" cy="298" r="1.5" fill={colors.goldLight} />
                                <circle cx={width - 51} cy="298" r="1.5" fill={colors.goldLight} />
                                <path d={`M 17 468 Q 42 553 125 ${height - 17}`} />
                                <path d={`M 17 425 Q 51 545 170 ${height - 17}`} />
                                <path d={`M 0 510 L 42 553`} />
                                <path d={`M ${width - 17} 468 Q ${width - 42} 553 ${width - 125} ${height - 17}`} />
                                <path d={`M ${width - 17} 425 Q ${width - 51} 545 ${width - 170} ${height - 17}`} />
                                <path d={`M ${width} 510 L ${width - 42} 553`} />
                            </g>
                        </svg>
                    </div>

                    {/* Top Badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[50px]">
                        <svg viewBox="0 0 120 60" className="w-full h-full drop-shadow-lg">
                            <defs>
                                <linearGradient id={`badge-grad-${number}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#e3d2b6" />
                                    <stop offset="50%" stopColor={colors.gold} />
                                    <stop offset="100%" stopColor={colors.goldDark} />
                                </linearGradient>
                            </defs>
                            <path d="M 0 0 L 120 0 L 110 30 Q 60 60 10 30 Z" fill={`url(#badge-grad-${number})`} stroke="#fceabb" strokeWidth="2" />
                            <path d="M 10 5 L 110 5 L 102 28 Q 60 50 18 28 Z" fill="none" stroke="#7a5c18" strokeWidth="1" opacity="0.6" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center pb-2">
                            <span className="text-xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] tracking-widest font-serif">{number}</span>
                        </div>
                    </div>

                    {/* Central Arch Window */}
                    <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[72%] h-[60%] z-10">
                        <div className={`w-full h-full rounded-t-full border-[3px] border-[#d4af37] p-[3px] bg-gradient-to-b from-[#d4af37] to-[#9b7a28] ${isReversed ? 'rotate-180' : ''}`}>
                            <div className="w-full h-full rounded-t-full bg-[#1a0b2e] p-[2px]">
                                <div className="w-full h-full rounded-t-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff5d6_0%,_#e3d2b6_30%,_#a890b0_60%,_#6b5280_85%,_#1a0b2e_100%)] opacity-90"></div>
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(26,11,46,0.8)] rounded-t-full pointer-events-none"></div>
                                    <div className="absolute inset-0 border border-[#fceabb] opacity-50 rounded-t-full pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[92%] h-[14%] z-20">
                        <svg viewBox="0 0 300 90" className="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id={`banner-grad-${number}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor={colors.goldLight} />
                                    <stop offset="20%" stopColor={colors.gold} />
                                    <stop offset="80%" stopColor={colors.gold} />
                                    <stop offset="100%" stopColor={colors.goldDark} />
                                </linearGradient>
                                {/* Path for curved text to follow */}
                                <path id={`textPath-${number}`} d="M 30 52 Q 150 35 270 52" fill="none" />
                                <path id={`textPathBottom-${number}`} d="M 40 72 Q 150 58 260 72" fill="none" />
                            </defs>
                            {/* Banner shape */}
                            <path d="M 0 25 Q 150 0 300 25 L 300 90 Q 150 70 0 90 Z" fill={`url(#banner-grad-${number})`} stroke="#fceabb" strokeWidth="2" />
                            <path d="M 12 30 Q 150 8 288 30 L 288 85 Q 150 65 12 85 Z" fill="none" stroke="#7a5c18" strokeWidth="1" opacity="0.5" />

                            {/* Text positioned on curves */}
                            {nameTop ? (
                                <>
                                    <text className="font-serif" fill="#2a1b0a" fontSize="14" fontWeight="600" textAnchor="middle">
                                        <textPath href={`#textPath-${number}`} startOffset="50%">
                                            {nameTop.toUpperCase()}
                                        </textPath>
                                    </text>
                                    <text className="font-serif" fill="#2a1b0a" fontSize="18" fontWeight="700" textAnchor="middle" letterSpacing="3">
                                        <textPath href={`#textPathBottom-${number}`} startOffset="50%">
                                            {nameBottom.toUpperCase()}
                                        </textPath>
                                    </text>
                                </>
                            ) : (
                                <text className="font-serif" fill="#2a1b0a" fontSize="20" fontWeight="700" textAnchor="middle" letterSpacing="3" x="150" y="58">
                                    {name.toUpperCase()}
                                </text>
                            )}
                        </svg>
                    </div>

                    {/* Corner Details */}
                    <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path d="M 0 100 L 0 50 Q 50 50 100 100 Z" fill="none" stroke={colors.gold} strokeWidth="1" />
                            <path d="M 10 100 L 10 60 Q 50 60 90 100" fill="none" stroke={colors.gold} strokeWidth="0.5" />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none -scale-x-100">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path d="M 0 100 L 0 50 Q 50 50 100 100 Z" fill="none" stroke={colors.gold} strokeWidth="1" />
                            <path d="M 10 100 L 10 60 Q 50 60 90 100" fill="none" stroke={colors.gold} strokeWidth="0.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
