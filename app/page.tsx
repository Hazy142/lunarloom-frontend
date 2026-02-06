import { getPageById } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const startPage = await getPageById(30);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        {/* Gradient Background - Dark mystical tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#a3a0a5] via-[#5f4678] to-[#3f2f4e]" />

        {/* Large Logo Symbol as Background Decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/logo-symbol.png"
            alt=""
            width={900}
            height={700}
            className="opacity-[0.21] scale-[1.4]"
            priority
          />
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-gold)]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#3f2f4e]/30 rounded-full blur-[100px]" />

        <div className="relative content-wrapper section-padding text-center z-10">
          {/* Logo Schriftzug */}
          <div className="mb-10 animate-fade-in">
            <Image
              src="/logo-text.png"
              alt="LunarLoom"
              width={500}
              height={135}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </div>

          {/* Tagline - light text for dark background */}
          <p className="text-xl md:text-2xl text-[#FDFBF7]/90 mb-3 font-[family-name:var(--font-cormorant)] font-medium">
            <span className="text-[var(--color-gold)]">✦</span> Tarot, Rituale & Mondzyklen <span className="text-[var(--color-gold)]">✦</span>
          </p>

          {startPage?.content.rendered && (
            <div
              className="text-[#FDFBF7]/70 max-w-2xl mx-auto mt-6"
              dangerouslySetInnerHTML={{ __html: startPage.content.rendered }}
            />
          )}

          <div className="divider-gold mt-10" />

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tarot" className="btn-primary">
              <span className="mr-2">🔮</span> Tarot entdecken
            </Link>
            <Link href="/buchung" className="btn-gold">
              <span className="mr-2">✦</span> Reading buchen
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#FDFBF7]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="section-padding bg-[#3f2f4e]">
        <div className="content-wrapper">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] text-sm uppercase tracking-widest font-medium">
              Entdecke
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mt-2">
              Dein Weg zur inneren Weisheit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tarot Card */}
            <Link href="/tarot" className="group">
              <div className="gold-glow-hover text-center h-full bg-[#5f4678] rounded-2xl p-8 border border-[#FDFBF7]/10 transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:-translate-y-1">
                <div className="text-5xl mb-4">🔮</div>
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                  Tarot
                </h3>
                <p className="text-[#FDFBF7]/70">
                  Entdecke die Weisheit der Karten und gewinne tiefere Einblicke in deinen Lebensweg.
                </p>
                <div className="mt-4 text-[var(--color-gold)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Erkunden <span>→</span>
                </div>
              </div>
            </Link>

            {/* Rituale Card */}
            <Link href="/rituals" className="group">
              <div className="gold-glow-hover text-center h-full bg-[#5f4678] rounded-2xl p-8 border border-[#FDFBF7]/10 transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:-translate-y-1">
                <div className="text-5xl mb-4">🌙</div>
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                  Rituale
                </h3>
                <p className="text-[#FDFBF7]/70">
                  Heilige Praktiken im Einklang mit den Mondphasen für deine spirituelle Entwicklung.
                </p>
                <div className="mt-4 text-[var(--color-gold)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Erkunden <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card */}
            <Link href="/blog" className="group">
              <div className="gold-glow-hover text-center h-full bg-[#5f4678] rounded-2xl p-8 border border-[#FDFBF7]/10 transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:-translate-y-1">
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                  Blog
                </h3>
                <p className="text-[#FDFBF7]/70">
                  Erkenntnisse, Essays und Gedanken zu Spiritualität, Tarot und innerem Wachstum.
                </p>
                <div className="mt-4 text-[var(--color-gold)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Lesen <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-[#3f2f4e]">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[var(--color-gold)] text-sm uppercase tracking-widest font-medium">
              Evidenzbasierte Spiritualität
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mt-4 mb-6">
              Willkommen bei LunarLoom
            </h2>
            <p className="text-lg text-[#FDFBF7]/70 leading-relaxed mb-8">
              Hier findest du authentische Tarot-Interpretationen, kraftvolle Mondrituale
              und tiefgehende Ressourcen für deine spirituelle Reise. Kein Hokuspokus –
              nur ehrliche Weisheit mit Herz und Verstand.
            </p>
            <Link href="/ueber" className="inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg border-2 border-[#FDFBF7]/30 text-[#FDFBF7] hover:bg-[#FDFBF7]/10 transition-all">
              Mehr über Rachel erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Vertical gradient mirroring hero */}
      <section className="bg-gradient-to-b from-[#3D2E4A] to-[#a3a0a5]">
        <div className="content-wrapper section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-4">
            Bereit für dein persönliches Reading?
          </h2>
          <p className="text-[#FDFBF7]/70 mb-8 max-w-xl mx-auto">
            Buche jetzt eine individuelle Tarot-Session und entdecke,
            was die Karten für dich bereithalten.
          </p>
          <Link href="/buchung" className="btn-gold">
            <span className="mr-2">✦</span> Termin buchen
          </Link>
        </div>
      </section>
    </div>
  );
}
