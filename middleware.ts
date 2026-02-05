import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 301 Redirects for old URLs to new IA structure
const redirects: Record<string, string> = {
    // Blog posts that were previously at root level now under /blog
    '/empowerment-durch-evidenzbasierte-spirituelle-praktiken': '/blog/empowerment-durch-evidenzbasierte-spirituelle-praktiken',
    '/10-jahre-erfahrung-rachels-reise-zu-spiritualitaet': '/blog/10-jahre-erfahrung-rachels-reise-zu-spiritualitaet',
    '/warum-emotionale-klarheit-so-wichtig-ist': '/blog/warum-emotionale-klarheit-so-wichtig-ist',
    '/selbstreflexion-durch-tarot-ein-wegweiser': '/blog/selbstreflexion-durch-tarot-ein-wegweiser',
    '/die-verbindung-von-tarot-und-psychologie-erklaert': '/blog/die-verbindung-von-tarot-und-psychologie-erklaert',
    '/personalisierte-leitfaeden-fuer-spirituelles-wachstum': '/blog/personalisierte-leitfaeden-fuer-spirituelles-wachstum',
    '/wie-mondrituale-ihr-leben-veraendern-koennen': '/blog/wie-mondrituale-ihr-leben-veraendern-koennen',
    '/die-magie-der-tarot-lesungen-ein-leitfaden': '/blog/die-magie-der-tarot-lesungen-ein-leitfaden',

    // Privacy policy renamed
    '/privacy-policy': '/datenschutz',

    // Sample/demo pages removed
    '/sample-page': '/',
    '/hello-world': '/blog',
};

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if path needs redirect
    if (pathname in redirects) {
        const newUrl = new URL(redirects[pathname], request.url);
        return NextResponse.redirect(newUrl, 301);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
