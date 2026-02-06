'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Local utility for class merging since lib/utils might not exist yet
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TarotCardProps {
    number: string;
    name: string;
    imageSrc?: string;
    isReversed?: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({ number, name, imageSrc, isReversed = false }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const variants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 },
    };

    return (
        <div
            className="relative w-[300px] h-[500px] perspective-1000 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-700"
                initial="back"
                animate={isFlipped ? "front" : "back"} // Logik umgedreht: Startet meist verdeckt (Rückseite)
                variants={variants}
            >
                {/* ================= VORDERSEITE (Das Bild) ================= */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border-[3px] border-tarot-gold-dark bg-tarot-dark shadow-2xl"
                    style={{ transform: "rotateY(0deg)" }} // Explizit für Safari/3D
                >
                    {/* Dekorativer Rahmen */}
                    <div className="absolute inset-2 border border-tarot-gold/30 rounded-xl z-10 pointer-events-none"></div>

                    {/* Nummer Plakette */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-24 h-12">
                        <div className="w-full h-full bg-gold-shiny rounded-b-3xl shadow-lg border-b-2 border-tarot-gold-light flex items-center justify-center">
                            <span className="font-mystical text-2xl font-bold text-tarot-dark drop-shadow-sm pt-1">
                                {number}
                            </span>
                        </div>
                    </div>

                    {/* Bild-Fenster */}
                    <div className="absolute top-[12%] left-[10%] right-[10%] bottom-[15%] z-0">
                        <div className="w-full h-full rounded-t-full border-[3px] border-tarot-gold bg-gradient-to-b from-gray-900 to-tarot-dark overflow-hidden relative shadow-inner group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-shadow duration-500">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={name}
                                    fill
                                    className={cn("object-cover opacity-90 transition-transform duration-500", isReversed && "rotate-180")}
                                />
                            ) : (
                                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-tarot-dark to-black opacity-80 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-tarot-gold/10 blur-xl animate-pulse"></div>
                                </div>
                            )}
                            <div className="absolute inset-0 rounded-t-full ring-1 ring-inset ring-white/20 pointer-events-none"></div>
                        </div>
                    </div>

                    <SideDecoration position="left" />
                    <SideDecoration position="right" />

                    {/* Name Banner */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] z-20">
                        <div className="relative bg-gold-gradient p-[2px] rounded-t-[50%] rounded-b-lg shadow-lg">
                            <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 px-4 py-3 text-center rounded-t-[50%] rounded-b-md border border-tarot-gold-shadow/20">
                                <h2 className="font-mystical text-tarot-dark font-bold tracking-widest uppercase text-sm md:text-base leading-tight">
                                    {name}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RÜCKSEITE (Das Muster) ================= */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border-[3px] border-tarot-gold-dark shadow-2xl bg-tarot-dark"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="w-full h-full relative flex items-center justify-center">
                        {/* Geometrisches Mandala (CSS only) */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tarot-gold-dark via-transparent to-transparent"></div>

                        {/* Kreise */}
                        <div className="w-[280px] h-[280px] border border-tarot-gold/20 rounded-full absolute animate-[spin_60s_linear_infinite]"></div>
                        <div className="w-[240px] h-[240px] border border-tarot-gold/30 rounded-full absolute"></div>
                        <div className="w-[200px] h-[200px] border border-tarot-gold/40 rounded-full absolute flex items-center justify-center">
                            <div className="w-[150px] h-[150px] border border-tarot-gold/20 rotate-45 absolute"></div>
                            <div className="w-[150px] h-[150px] border border-tarot-gold/20 absolute"></div>
                        </div>

                        {/* Zentraler Mond/Sonne */}
                        <div className="relative z-10 w-20 h-20 rounded-full bg-gold-gradient shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-tarot-dark/20 backdrop-blur-sm"></div>
                        </div>

                        <div className="absolute inset-2 border-2 border-tarot-gold rounded-xl pointer-events-none"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SideDecoration = ({ position }: { position: 'left' | 'right' }) => {
    const isLeft = position === 'left';
    return (
        <div className={cn("absolute top-1/4 bottom-1/4 w-4 flex flex-col justify-between opacity-60 pointer-events-none", isLeft ? 'left-2' : 'right-2')}>
            <svg width="20" height="300" viewBox="0 0 20 300" className="h-full w-full stroke-tarot-gold fill-none">
                <path d={isLeft
                    ? "M0,0 Q20,75 0,150 T0,300"
                    : "M20,0 Q0,75 20,150 T20,300"} strokeWidth="0.8" />
            </svg>
        </div>
    );
};

export default TarotCard;
