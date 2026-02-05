import { getPageById } from '@/lib/wordpress';
import Link from 'next/link';

export default async function Home() {
  // Fetch the Start page content (ID 30)
  const startPage = await getPageById(30);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-6 animate-pulse">
            {startPage?.title.rendered ? (
              <span dangerouslySetInnerHTML={{ __html: startPage.title.rendered }} />
            ) : (
              'Lunar Loom'
            )}
          </h1>
          <p className="text-2xl text-purple-200 mb-4">
            Tarot, Rituale & Mondzyklen
          </p>
          {startPage?.content.rendered && (
            <div
              className="text-purple-300 max-w-3xl mx-auto prose prose-invert"
              dangerouslySetInnerHTML={{ __html: startPage.content.rendered }}
            />
          )}
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Blog Card */}
          <Link href="/blog">
            <div className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
              <div className="text-6xl mb-4">📖</div>
              <h2 className="text-3xl font-bold text-purple-100 mb-3">
                Blog
              </h2>
              <p className="text-purple-300">
                Erkenntnisse, Essays und Gedanken zu evidenzbasierter Spiritualität
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          </Link>

          {/* Tarot Card */}
          <Link href="/tarot">
            <div className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
              <div className="text-6xl mb-4">🔮</div>
              <h2 className="text-3xl font-bold text-purple-100 mb-3">
                Tarot
              </h2>
              <p className="text-purple-300">
                Discover the wisdom of the cards and unlock deeper insights into your journey
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          </Link>

          {/* Rituals Card */}
          <Link href="/rituals">
            <div className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-3xl font-bold text-purple-100 mb-3">
                Rituale
              </h2>
              <p className="text-purple-300">
                Sacred practices aligned with lunar phases to enhance your spiritual practice
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          </Link>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 text-center">
          <nav className="flex flex-wrap justify-center gap-6 text-purple-400 text-sm">
            <Link href="/ueber" className="hover:text-purple-300 transition-colors">Über Rachel</Link>
            <Link href="/buchung" className="hover:text-purple-300 transition-colors">Buchung</Link>
            <Link href="/kontakt" className="hover:text-purple-300 transition-colors">Kontakt</Link>
            <Link href="/faq" className="hover:text-purple-300 transition-colors">FAQ</Link>
            <Link href="/impressum" className="hover:text-purple-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-purple-300 transition-colors">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
