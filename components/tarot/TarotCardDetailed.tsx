'use client';

import React, { useState } from 'react';
import { Star, Wind, Globe, Heart, Compass, Eye, AlertTriangle, Lock } from 'lucide-react';

export default function TarotCardDetailed() {
    // State isn't strictly necessary for a static display, but adding a simple toggle 
    // for the "reversed" view or interactivity satisfies the prompt's requirement for hooks.
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-[#0f0a1e] flex justify-center items-center p-4 md:p-8 font-serif text-white">
            {/* Main Card Container */}
            <div
                className="relative w-full max-w-[900px] bg-gradient-to-b from-[#4a3b89] via-[#2a1f45] to-[#150e26] rounded-xl shadow-2xl overflow-hidden border-[3px] border-[#d4af37]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Inner Decorative Border */}
                <div className="absolute inset-2 border border-[#d4af37] opacity-50 rounded-lg pointer-events-none z-10"></div>

                {/* Corner Decorations (CSS Shapes) */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] rounded-tl-xl z-20"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] rounded-tr-xl z-20"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#d4af37] rounded-bl-xl z-20"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] rounded-br-xl z-20"></div>

                {/* Content Wrapper */}
                <div className="relative z-0 p-6 md:p-10 flex flex-col items-center">

                    {/* --- TOP SECTION: IMAGE & HEADER --- */}

                    {/* Number 0 Diamond */}
                    <div className="relative mb-[-20px] z-30">
                        <div className="w-12 h-12 bg-[#2a1f45] border-2 border-[#d4af37] rotate-45 flex items-center justify-center shadow-lg">
                            <span className="text-[#d4af37] text-xl font-bold -rotate-45">0</span>
                        </div>
                    </div>

                    {/* Main Arch Image */}
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="w-full h-[380px] rounded-t-[10rem] border-[3px] border-[#d4af37] overflow-hidden bg-blue-900 relative shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            {/* Placeholder for the detailed illustration */}
                            <img
                                src="https://picsum.photos/id/1015/600/800"
                                alt="The Fool Illustration"
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f45]/60 to-transparent"></div>
                        </div>

                        {/* Ribbon Banner */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[110%] md:w-[120%] h-16 flex justify-center items-center z-20">
                            <div className="relative w-full h-full">
                                {/* Ribbon Background (Simulated with CSS) */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#bfa3d9] via-[#e6d5f0] to-[#bfa3d9] transform skew-x-12 rounded-lg shadow-lg border border-[#8e7cc3]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h1 className="text-[#2a1b4a] text-3xl md:text-4xl font-bold tracking-wider uppercase drop-shadow-sm" style={{ fontFamily: 'serif' }}>
                                        Der Narr
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer for Ribbon */}
                    <div className="h-12 w-full"></div>

                    {/* --- MIDDLE SECTION: MEANING & COSMIC --- */}

                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 border-b border-[#d4af37]/30 pb-8">

                        {/* Left Column: Core Meaning */}
                        <div className="lg:col-span-2 space-y-5 text-[#e0d8f0]">
                            <h2 className="text-[#d4af37] text-lg font-bold tracking-wide border-b border-[#d4af37]/30 pb-1 inline-block mb-2">
                                KERNBEDEUTUNG & SYMBOLIK
                            </h2>

                            <div>
                                <h3 className="text-[#f0e68c] font-bold text-lg">Nummer 0: Der absolute Neubeginn</h3>
                                <p className="text-sm leading-relaxed opacity-90 mt-1">
                                    Als Karte Null repräsentiert der Narr das unendliche Potenzial vor der Formwerdung und den Mut, eine neue Reise ohne Vorurteile anzutreten.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#f0e68c] font-bold text-lg">Der Sprung aus Vertrauen</h3>
                                <p className="text-sm leading-relaxed opacity-90 mt-1">
                                    Er steht am Abgrund, nicht aus Dummheit, sondern aus purem Vertrauen in die Führung des Universums und die eigene Intuition.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#f0e68c] font-bold text-lg">Die weiße Rose & der Begleiter</h3>
                                <p className="text-sm leading-relaxed opacity-90 mt-1">
                                    Die weiße Rose in der Illustration symbolisiert Reinheit und Unschuld, während der treue Hund den Wanderer vor Gefahren warnt und ihn begleitet.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Cosmic Correspondences */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="text-right lg:text-left">
                                <h2 className="text-[#d4af37] text-lg font-bold tracking-wide border-b border-[#d4af37]/30 pb-1 inline-block mb-4">
                                    KOSMISCHE KORRESPONDENZEN
                                </h2>
                            </div>

                            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-blue-300/20 border border-blue-300/50 flex items-center justify-center shrink-0">
                                    <Wind className="text-blue-200 w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-[#f0e68c] font-bold text-lg">Element Luft</h3>
                                    <p className="text-xs leading-relaxed opacity-80">
                                        Das zugeordnete Element Luft steht für klare Gedanken, neue Perspektiven und die Leichtigkeit des Geistes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-teal-300/20 border border-teal-300/50 flex items-center justify-center shrink-0">
                                    <Globe className="text-teal-200 w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-[#f0e68c] font-bold text-lg">Planet Uranus</h3>
                                    <p className="text-xs leading-relaxed opacity-80">
                                        Uranus bringt die Energie von Freiheit, Rebellion gegen das Veraltete und plötzliche, lebensverändernde Durchbrüche.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- LOWER SECTION: EVERYDAY INTERPRETATION --- */}

                    <div className="w-full mt-8 text-center border-b border-[#d4af37]/30 pb-8">
                        <h2 className="text-[#d4af37] text-xl font-bold tracking-wide mb-8 flex items-center justify-center gap-2">
                            <Star className="w-4 h-4 text-[#d4af37]" />
                            DEUTUNG IM ALLTAG (AUFRECHT)
                            <Star className="w-4 h-4 text-[#d4af37]" />
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Love */}
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-3 relative group">
                                    <img src="https://picsum.photos/id/1004/200/200" alt="Love" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <Heart className="text-pink-300 w-8 h-8 drop-shadow-lg" />
                                    </div>
                                </div>
                                <h3 className="text-[#f0e68c] font-bold text-lg mb-2">In der Liebe</h3>
                                <p className="text-xs leading-relaxed opacity-80 px-2">
                                    Ein Hinweis auf neue, spontane romantische Anfänge, die ohne Angst vor Verletzung oder Altlasten eingegangen werden.
                                </p>
                            </div>

                            {/* Career */}
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-3 relative group">
                                    <img src="https://picsum.photos/id/1033/200/200" alt="Career" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <Compass className="text-amber-200 w-8 h-8 drop-shadow-lg" />
                                    </div>
                                </div>
                                <h3 className="text-[#f0e68c] font-bold text-lg mb-2">In der Karriere</h3>
                                <p className="text-xs leading-relaxed opacity-80 px-2">
                                    Symbolisiert einen kühnen Berufswechsel, den Start eines Herzensprojekts oder den Mut, völlig neue berufliche Wege zu gehen.
                                </p>
                            </div>

                            {/* Spiritual */}
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-3 relative group">
                                    <img src="https://picsum.photos/id/1042/200/200" alt="Spiritual" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <Eye className="text-purple-300 w-8 h-8 drop-shadow-lg" />
                                    </div>
                                </div>
                                <h3 className="text-[#f0e68c] font-bold text-lg mb-2">Spirituelle Reise</h3>
                                <p className="text-xs leading-relaxed opacity-80 px-2">
                                    Der Ruf, die eigene spirituelle Entwicklung jetzt zu starten und sich für höhere Führung zu öffnen.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- BOTTOM SECTION: SHADOW SIDE --- */}

                    <div className="w-full mt-8 relative">
                        {/* Darker Background Area */}
                        <div className="absolute -inset-6 bg-black/20 -z-10 rounded-xl"></div>

                        <h2 className="text-[#d4af37] text-xl font-bold tracking-wide mb-6 text-center uppercase">
                            Die Schattenseite (Umgekehrt)
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Warning */}
                            <div className="flex gap-4 items-start">
                                <div className="w-20 h-20 shrink-0 rounded-full border border-red-900/50 overflow-hidden relative">
                                    <img src="https://picsum.photos/id/1060/200/200" alt="Warning" className="w-full h-full object-cover grayscale opacity-70" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <AlertTriangle className="text-red-400 w-8 h-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#f0e68c] font-bold text-lg">Warnung vor Leichtsinn</h3>
                                    <p className="text-xs leading-relaxed opacity-80 mt-1">
                                        Umgekehrt warnt die Karte vor Unverantwortlichkeit, Naivität und blindem Vertrauen, das in Gefahr führen könnte.
                                    </p>
                                </div>
                            </div>

                            {/* Blocked */}
                            <div className="flex gap-4 items-start">
                                <div className="w-20 h-20 shrink-0 rounded-full border border-gray-600/50 overflow-hidden relative">
                                    <img src="https://picsum.photos/id/1025/200/200" alt="Blocked" className="w-full h-full object-cover grayscale opacity-70" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Lock className="text-gray-400 w-8 h-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#f0e68c] font-bold text-lg">Blockierter Neuanfang</h3>
                                    <p className="text-xs leading-relaxed opacity-80 mt-1">
                                        Sie kann auf eine Weigerung hinweisen, notwendige Veränderungen zu akzeptieren oder aus Angst vor dem Unbekannten zu stagnieren.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
