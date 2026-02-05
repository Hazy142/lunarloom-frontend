import { getPageBySlug } from '@/lib/wordpress';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function FAQPage() {
    const page = await getPageBySlug('faq');

    if (!page) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors">
                        ← Zurück zur Startseite
                    </Link>

                    <article className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-8 md:p-12 border border-purple-500/30">
                        <h1
                            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
                            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                        />

                        <div
                            className="prose prose-lg prose-invert prose-purple max-w-none
                         prose-headings:text-purple-100 
                         prose-p:text-purple-200 
                         prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                         prose-strong:text-purple-100"
                            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                        />
                    </article>
                </div>
            </div>
        </main>
    );
}
