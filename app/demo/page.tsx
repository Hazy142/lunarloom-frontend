import TarotCard from '@/components/tarot/TarotCard';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-[#0a0612] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#0a0612] to-black flex flex-col items-center justify-center p-8 gap-12">
            <div className="text-center space-y-4">
                <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#9b7a28] font-serif font-bold drop-shadow-md tracking-wider">
                    LUNAR LOOM TAROT
                </h1>
                <p className="text-[#dcb978]/60 font-serif tracking-widest">Klicke auf eine Karte, um sie aufzudecken</p>
            </div>

            <div className="flex flex-wrap gap-12 justify-center">
                <TarotCard
                    number="0"
                    name="The Fool"
                />
                <TarotCard
                    number="X"
                    name="Wheel of Fortune"
                />
                <TarotCard
                    number="XXI"
                    name="The World"
                />
            </div>
        </div>
    );
}
