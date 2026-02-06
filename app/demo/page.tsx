import TarotCard from '@/components/tarot/TarotCard';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-tarot-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-tarot-dark to-black flex flex-col items-center justify-center p-8 gap-12">
            <div className="text-center space-y-4">
                <h1 className="text-5xl text-transparent bg-clip-text bg-gold-shiny font-mystical font-bold drop-shadow-md">
                    LunarLoom Tarot
                </h1>
                <p className="text-tarot-gold-light/60 font-mystical tracking-widest">Klicke auf eine Karte, um sie aufzudecken</p>
            </div>

            <div className="flex flex-wrap gap-12 justify-center perspective-1000">
                <TarotCard
                    number="0"
                    name="The Fool"
                />
                <TarotCard
                    number="X"
                    name="Wheel of Fortune"
                    isReversed={true}
                />
                <TarotCard
                    number="XXI"
                    name="The World"
                />
            </div>
        </div>
    );
}
