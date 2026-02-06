import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    main: [
        { href: '/tarot', label: 'Tarot' },
        { href: '/rituals', label: 'Rituale' },
        { href: '/blog', label: 'Blog' },
        { href: '/ressourcen', label: 'Ressourcen' },
    ],
    about: [
        { href: '/ueber', label: 'Über Rachel' },
        { href: '/buchung', label: 'Buchung' },
        { href: '/kontakt', label: 'Kontakt' },
        { href: '/faq', label: 'FAQ' },
    ],
    legal: [
        { href: '/impressum', label: 'Impressum' },
        { href: '/datenschutz', label: 'Datenschutz' },
    ],
};

export default function Footer() {
    return (
        <footer className="relative">
            {/* Gold Gradient Shadow - fading from right to left */}
            <div
                className="h-1 w-full"
                style={{
                    background: 'linear-gradient(to left, rgba(201, 169, 98, 0.6), rgba(201, 169, 98, 0.2), transparent)'
                }}
            />

            {/* Main Footer Content */}
            <div className="bg-[#3D2E4A] text-[var(--color-cream)]">
                <div className="content-wrapper section-padding">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <Link href="/" className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/logo.png"
                                    alt="LunarLoom"
                                    width={60}
                                    height={60}
                                    className="rounded-lg bg-white/10 p-1"
                                />
                            </Link>
                            <p className="text-[#FDFBF7]/60 text-sm leading-relaxed">
                                Tarot, Rituale & Mondzyklen für dein spirituelles Wachstum.
                                Evidenzbasierte Spiritualität mit Herz.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-[var(--color-gold)] font-semibold mb-4 text-sm uppercase tracking-wider">
                                Entdecken
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.main.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-[#FDFBF7]/60 hover:text-[#FDFBF7] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* About */}
                        <div>
                            <h4 className="text-[var(--color-gold)] font-semibold mb-4 text-sm uppercase tracking-wider">
                                Über uns
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.about.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-[#FDFBF7]/60 hover:text-[#FDFBF7] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-[var(--color-gold)] font-semibold mb-4 text-sm uppercase tracking-wider">
                                Mondpost
                            </h4>
                            <p className="text-[#FDFBF7]/60 text-sm mb-4">
                                Erhalte monatliche Impulse zu Tarot & Mond.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="E-Mail"
                                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm placeholder:text-white/50 focus:outline-none focus:border-[var(--color-gold)]"
                                />
                                <button className="px-4 py-2 bg-[var(--color-gold)] text-[#3D2E4A] rounded-lg text-sm font-semibold hover:bg-[var(--color-gold-light)] transition-colors">
                                    ✦
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[#FDFBF7]/50 text-sm">
                            © {new Date().getFullYear()} LunarLoom · Alle Rechte vorbehalten
                        </p>
                        <div className="flex items-center gap-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#FDFBF7]/50 hover:text-[#FDFBF7] transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
