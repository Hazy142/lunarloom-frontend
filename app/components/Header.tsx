'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
    { href: '/tarot', label: 'Tarot' },
    { href: '/rituals', label: 'Rituale' },
    { href: '/blog', label: 'Blog' },
    { href: '/ueber', label: 'Über Rachel' },
    { href: '/buchung', label: 'Buchung' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Main Header - matching hero gradient start */}
            <div className="bg-[#a3a0a5] backdrop-blur-sm">
                <div className="content-wrapper">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo.png"
                                alt="LunarLoom"
                                width={50}
                                height={50}
                                className="transition-transform group-hover:scale-105"
                            />
                            <span className="hidden sm:block font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3D2E4A] group-hover:text-[#5f4678] transition-colors">
                                LunarLoom
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#3D2E4A]/80 hover:text-[#3D2E4A] transition-colors font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-gold)] after:transition-all hover:after:w-full"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-[#3D2E4A] hover:text-[#5f4678] transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                )}
                            </svg>
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-[#3D2E4A]/20">
                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block py-2 text-[#3D2E4A]/80 hover:text-[#3D2E4A] transition-colors font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Gold Gradient Shadow - fading from left to right */}
            <div
                className="h-1 w-full"
                style={{
                    background: 'linear-gradient(to right, rgba(201, 169, 98, 0.6), rgba(201, 169, 98, 0.2), transparent)'
                }}
            />
        </header>
    );
}
