import { getPageBySlug } from '@/lib/wordpress';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function UeberPage() {
    const page = await getPageBySlug('ueber');

    if (!page) {
        notFound();
    }

    return (
        <div className="page-container">
            {/* Header */}
            <section className="bg-gradient-to-b from-[#a3a0a5] via-[#5f4678] to-[#3f2f4e] section-padding">
                <div className="content-wrapper text-center">
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-widest font-medium">
                        ✦ Über Mich ✦
                    </span>
                    <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mt-4 mb-4">
                        Rachel’s Lunar Loom
                    </h1>
                </div>
            </section>

            <div className="section-padding">
                <div className="content-wrapper max-w-4xl mx-auto">
                    <Link href="/" className="inline-block mb-8 text-[var(--color-gold)] hover:text-[#FDFBF7] transition-colors">
                        ← Zurück zur Startseite
                    </Link>

                    <article className="bg-[#5f4678] rounded-xl p-8 md:p-12 border border-[#FDFBF7]/10 prose-lunarloom text-[#FDFBF7]/80">
                        <h1
                            className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-[#FDFBF7] mb-8 border-b border-[var(--color-gold)] pb-4"
                            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                        />

                        <div
                            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                        />
                    </article>
                </div>
            </div>
        </div>
    );
}
