export interface TarotCard {
    category: string;
    number: string;
    nameDe: string;
    nameEn: string;
    element?: string;
    planetZodiac?: string;
    numerology?: string;
    upright: string;
    reversed: string;
    love?: string;
    career?: string;
    spirituality?: string;
    keywords: string;
}

export const TAROT_CARDS: TarotCard[] = [
    // GROSSE ARKANA (Major Arcana)
    {
        category: "Grosse Arkana",
        number: "O",
        nameDe: "Der Narr",
        nameEn: "The Fool",
        element: "Luft",
        planetZodiac: "Uranus / Alle",
        numerology: "0",
        upright: "Neubeginn, Unschuld, Abenteuer, Leichtigkeit, Spontanität, freier Wille",
        reversed: "Recklessness, Unverantwortlichkeit, Leichtfertigkeit, Naivität",
        love: "Neue romantische Anfänge, spontane Liebe",
        career: "Neuer Job, kühner Berufswechsel",
        spirituality: "Spirituelle Reise beginnt, Vertrauen ins Universum",
        keywords: "Neubeginn, Freiheit, Mut"
    },
    {
        category: "Grosse Arkana",
        number: "I",
        nameDe: "Der Magier",
        nameEn: "The Magician",
        element: "Luft",
        planetZodiac: "Merkur / Zwilling",
        numerology: "1",
        upright: "Manifestation, Kreativität, Kraft, Selbstvertrauen, Geschicklichkeit, Magie",
        reversed: "Manipulation, Illusion, Täuschung, Mangel an Vertrauen",
        love: "Starke Anziehungskraft, magnetische Präsenz",
        career: "Erfolg durch Geschicklichkeit, Verhandlungserfolg",
        spirituality: "Verbindung von Himmel und Erde, bewusste Schöpfung",
        keywords: "Manifestation, Kraft, Willenskraft"
    },
    {
        category: "Grosse Arkana",
        number: "II",
        nameDe: "Die Hohepriesterin",
        nameEn: "The High Priestess",
        element: "Wasser",
        planetZodiac: "Mond / Krebs",
        numerology: "2",
        upright: "Intuition, Geheimnis, das Unbewusste, innere Stimme, Weiblichkeit",
        reversed: "Verborgenheit, Mangel an Intuition, oberflächliches Denken",
        love: "Geheime Anziehung, stille emotionale Tiefe",
        career: "Vertraue deinem Bauch, verborgene Information",
        spirituality: "Zugang zu spirituellen Geheimissen, Meditation",
        keywords: "Intuition, Geheimnis, innere Weisheit"
    },
    {
        category: "Grosse Arkana",
        number: "III",
        nameDe: "Die Herrscherin",
        nameEn: "The Empress",
        element: "Erde",
        planetZodiac: "Venus / Stier",
        numerology: "3",
        upright: "Weiblichkeit, Schönheit, Überfluss, Fruchtbarkeit, Natur, Kreativität",
        reversed: "Unfruchtbarkeit, Abhängigkeit, Vernachlässigung",
        love: "Leidenschaft, Schwangerschaft, tiefe weibliche Liebe",
        career: "Kreatives Projekt blüht auf, Wohlstand",
        spirituality: "Verbindung zur Göttin, Manifestation durch Kreativität",
        keywords: "Fruchtbarkeit, Überfluss, Kreativität"
    },
    {
        category: "Grosse Arkana",
        number: "IV",
        nameDe: "Der Herrscher",
        nameEn: "The Emperor",
        element: "Feuer",
        planetZodiac: "Mars / Widder",
        numerology: "4",
        upright: "Autorität, Macht, Kontrolle, Struktur, Vaterfigur, Führung",
        reversed: "Dominanz, Tyrannei, Aggression, mangelnde Kontrolle",
        love: "Starke Präsenz, Beschützer, Vater-Archetyp",
        career: "Führungsposition, Autorität, Geschäftserfolg",
        spirituality: "Erdung, Struktur im spirituellen Wachstum",
        keywords: "Macht, Struktur, Führung"
    },
    {
        category: "Grosse Arkana",
        number: "V",
        nameDe: "Der Hierophant",
        nameEn: "The Hierophant",
        element: "Erde",
        planetZodiac: "Venus / Stier",
        numerology: "5",
        upright: "Tradition, Konformität, Moral, Spiritualität, Wissensvermittlung, Institution",
        reversed: "Rebellion gegen Konvention, Heterodoxie, Unabhängigkeit",
        love: "Traditionelle Eheschließung, konservative Liebe",
        career: "Ausbildung, Mentoring, Führung von Institutionen",
        spirituality: "Spirituelle Lehre, innere Autorität",
        keywords: "Tradition, Spiritualität, Lehre"
    },
    {
        category: "Grosse Arkana",
        number: "VI",
        nameDe: "Die Liebenden",
        nameEn: "The Lovers",
        element: "Luft",
        planetZodiac: "Merkur / Zwilling",
        numerology: "6",
        upright: "Liebe, Harmonie, Verbindung, Entscheidung, Werte, Seelenverwandte",
        reversed: "Uneinigkeit, Konflikte, Trennungen, falsche Entscheidungen",
        love: "Seelenpartner, tiefe emotionale Bindung, Hochzeit",
        career: "Partnerschaften, wichtige Entscheidungen",
        spirituality: "Innere Integration, Annahme aller Teile des Selbst",
        keywords: "Liebe, Harmonie, Entscheidung"
    },
    {
        category: "Grosse Arkana",
        number: "VII",
        nameDe: "Der Wagen",
        nameEn: "The Chariot",
        element: "Wasser",
        planetZodiac: "Mars / Krebs",
        numerology: "7",
        upright: "Wille, Entschlossenheit, Kontrolle, Ziel, Triumph, Bewegung vorwärts",
        reversed: "Mangel an Richtung, Kontrollverlust, Hindernisse",
        love: "Leidenschaftliche Verfolgung der Liebe, intensives Verlangen",
        career: "Durchbruch nach Herausforderung, Erreichen des Ziels",
        spirituality: "Kontrolle über innere Kräfte, spirituelle Mastery",
        keywords: "Wille, Triumph, Kontrolle"
    },
    {
        category: "Grosse Arkana",
        number: "VIII",
        nameDe: "Die Kraft",
        nameEn: "Strength",
        element: "Feuer",
        planetZodiac: "Sonne / Löwe",
        numerology: "8",
        upright: "Innere Kraft, Mut, Ausdauer, Geduld, Mitgefühl, Vertrauen",
        reversed: "Innerliche Schwäche, Mangel an Glaube, Selbstzweifel",
        love: "Innere emotionale Kraft, tiefe persönliche Kraft",
        career: "Durchhaltevermögen bei Herausforderungen, innere Stärke",
        spirituality: "Über-Ich-Kraft, Beherrschung instinktiver Energien",
        keywords: "Kraft, Mut, Ausdauer"
    },
    {
        category: "Grosse Arkana",
        number: "IX",
        nameDe: "Der Eremit",
        nameEn: "The Hermit",
        element: "Erde",
        planetZodiac: "Merkur / Jungfrau",
        numerology: "9",
        upright: "Innere Suche, Weisheit, Rückzug, Spiritual Guidance, Introspekton, Geduld",
        reversed: "Isolation, Verletzung, fehlende innere Führung",
        love: "Einsamkeit Phase, innere Reflexion vor neuer Liebe",
        career: "Mentoring, Führung, innere Arbeit an Karriereziel",
        spirituality: "Tiefe spirituelle Suche, spirituelle Wegweisung",
        keywords: "Weisheit, Innenschau, Rückzug"
    },
    {
        category: "Grosse Arkana",
        number: "X",
        nameDe: "Das Rad des Schicksals",
        nameEn: "Wheel of Fortune",
        element: "Feuer",
        planetZodiac: "Jupiter / Schütze",
        numerology: "10",
        upright: "Schicksal, Glück, Karma, Zyklen, Wendepunkt, Erfolg, Evolution",
        reversed: "Pech, Kontrollverlust, negative Zyklen, Stagnation",
        love: "Fatum in der Liebe, Schicksalshafte Begegnungen",
        career: "Glückliche Wendung, karmic opportunity, Schicksalstür",
        spirituality: "Kosmisches Gesetz, karmic wheel, Evolution der Seele",
        keywords: "Schicksal, Glück, Zyklen"
    },
    {
        category: "Grosse Arkana",
        number: "XI",
        nameDe: "Die Gerechtigkeit",
        nameEn: "Justice",
        element: "Luft",
        planetZodiac: "Venus / Waage",
        numerology: "11",
        upright: "Gerechtigkeit, Gleichgewicht, Wahrheit, Rechenschaft, Fair, Bewertung",
        reversed: "Ungerechtigkeit, Bias, fehlende Rechenschaft",
        love: "Faire Liebe, Gleichgewicht in Beziehung, Wahrhaftigkeit",
        career: "Gerechtigkeit am Arbeitsplatz, faire Bewertung",
        spirituality: "Kosmisches Gleichgewicht, karmische Konsequenzen",
        keywords: "Gerechtigkeit, Gleichgewicht, Wahrheit"
    },
    {
        category: "Grosse Arkana",
        number: "XII",
        nameDe: "Der Gehängte",
        nameEn: "The Hanged Man",
        element: "Wasser",
        planetZodiac: "Neptun / Fische",
        numerology: "12",
        upright: "Opfer, Rückzug, Perspective Wechsel, Pause, Aufopferung, Weisheit",
        reversed: "Egoismus, Stagnation, Weigerung zu wachsen",
        love: "Abwarten in Liebe, neue Perspektive auf Beziehung",
        career: "Karriere-Pause, neue Sichtweise auf berufliches Problem",
        spirituality: "Spirituelle Transformation durch Aufopferung, Ego-Tod",
        keywords: "Aufopferung, Geduld, Perspektivwechsel"
    },
    {
        category: "Grosse Arkana",
        number: "XIII",
        nameDe: "Der Tod",
        nameEn: "Death",
        element: "Wasser",
        planetZodiac: "Pluto / Skorpion",
        numerology: "13",
        upright: "Transformation, Neuanfang, Ende eines Zyklus, innere Tod, Wandel, Erneuerung",
        reversed: "Stagnation, Weigerung zu verändern, stillstand",
        love: "Ende einer Beziehung, tiefgreifende Wandlung der Liebe",
        career: "Jobwechsel, beruflicher Neuanfang, alte Karriere endet",
        spirituality: "Spirituelle Wiedergeburt, tiefgreifende Transformation",
        keywords: "Transformation, Neuanfang, Wandel"
    },
    {
        category: "Grosse Arkana",
        number: "XIV",
        nameDe: "Die Mäßigkeit",
        nameEn: "Temperance",
        element: "Feuer",
        planetZodiac: "Schütze / Schütze",
        numerology: "14",
        upright: "Balance, Mäßigung, Harmonie, Geduld, Heilung, Synthese",
        reversed: "Imbalance, Exzess, Konflikte, Trennung",
        love: "Harmonische Liebe, Gleichgewicht in Partnerschaft",
        career: "Harmonische Teamarbeit, Gleichgewicht bei der Arbeit",
        spirituality: "Integration der Gegensätze, spirituelle Heilung",
        keywords: "Harmonie, Mäßigung, Heilung"
    },
    {
        category: "Grosse Arkana",
        number: "XV",
        nameDe: "Der Teufel",
        nameEn: "The Devil",
        element: "Erde",
        planetZodiac: "Saturn / Steinbock",
        numerology: "15",
        upright: "Bindung, Sucht, Materialismus, Schattenanteile, Illusion, Lust",
        reversed: "Befreiung, Erkenntnis, Überwindung von Sucht",
        love: "Leidenschaftliche aber toxische Liebe, Obsession",
        career: "Ungesunde berufliche Bindung, materialistisches Streben",
        spirituality: "Konfrontation mit Schattenanteilen, Ego-Beherrschung",
        keywords: "Bindung, Leidenschaft, Illusion"
    },
    {
        category: "Grosse Arkana",
        number: "XVI",
        nameDe: "Der Turm",
        nameEn: "The Tower",
        element: "Feuer",
        planetZodiac: "Mars / Skorpion",
        numerology: "16",
        upright: "Zusammenbruch, Offenbarung, Befreiung, plötzliche Veränderung, Wahrheit",
        reversed: "Erneuerung vermieden, Verleugnung, Verzögerung",
        love: "Plötzliches Ende einer Beziehung, massive emotionale Erschütterung",
        career: "Job-Kündigung, Karriere-Kollaps, aber Neuanfang möglich",
        spirituality: "Spirituelle Krisen, die zu Transformation führen",
        keywords: "Zusammenbruch, Offenbarung, Befreiung"
    },
    {
        category: "Grosse Arkana",
        number: "XVII",
        nameDe: "Der Stern",
        nameEn: "The Star",
        element: "Luft",
        planetZodiac: "Venus / Wassermann",
        numerology: "17",
        upright: "Hoffnung, Glaube, Inspiration, Klarheit, Zukunftsvision, Gnade",
        reversed: "Verlust von Hoffnung, Skepsis, Desillusionierung",
        love: "Hoffnung auf Liebe, inspirierende romantische Verbindung",
        career: "Hoffnung für Karriereziel, klare berufliche Vision",
        spirituality: "Spirituelle Klarheit, himmlische Führung, Intuition",
        keywords: "Hoffnung, Inspiration, Klarheit"
    },
    {
        category: "Grosse Arkana",
        number: "XVIII",
        nameDe: "Der Mond",
        nameEn: "The Moon",
        element: "Wasser",
        planetZodiac: "Mond / Fische",
        numerology: "18",
        upright: "Illusion, Angst, das Unbewusste, Träume, Intuition, Dunkelheit",
        reversed: "Klarheit, Illusion gelöst, innere Wahrheit erkannt",
        love: "Emotionale Verwirrung in Liebe, geheime Gefühle",
        career: "Verwirrung bei beruflicher Entscheidung, Illusion gegenüber Job",
        spirituality: "Zugang zum Unbewussten, psychische Fähigkeiten",
        keywords: "Illusion, Angst, Unbewusstes"
    },
    {
        category: "Grosse Arkana",
        number: "XIX",
        nameDe: "Die Sonne",
        nameEn: "The Sun",
        element: "Feuer",
        planetZodiac: "Sonne / Löwe",
        numerology: "19",
        upright: "Glück, Erfolg, Freude, Klarheit, Vitalität, Kindheit, Wärmeherzigkeit",
        reversed: "Schatten, Mangel an Klarheit, temporäre Dunkelheit",
        love: "Glückliche Liebe, warmherzige Bindung, Zusammenkunft",
        career: "Großer Erfolg, Glück im Job, Anerkennung",
        spirituality: "Spirituale Klarheit, inneres Licht, Göttliche Gnade",
        keywords: "Glück, Erfolg, Freude"
    },
    {
        category: "Grosse Arkana",
        number: "XX",
        nameDe: "Das Gericht",
        nameEn: "Judgement",
        element: "Feuer",
        planetZodiac: "Pluto / Skorpion",
        numerology: "20",
        upright: "Berufung, Auferstehung, Rechenschaft, Bewusstsein, Überprüfung, Reflexion",
        reversed: "Selbstzweifel, innere Kritik, Angst vor Urteil",
        love: "Wiederunion mit früherer Liebe, Ruf zu neuer Liebesphase",
        career: "Berufliche Neuorientierung, Karriere-Ruf, wichtiger Wendepunkt",
        spirituality: "Spirituale Auferstehung, Erwachen der höheren Natur",
        keywords: "Berufung, Auferstehung, Bewusstsein"
    },
    {
        category: "Grosse Arkana",
        number: "XXI",
        nameDe: "Die Welt",
        nameEn: "The World",
        element: "Erde",
        planetZodiac: "Saturn / Steinbock",
        numerology: "21",
        upright: "Vollendung, Ganzes, Erfüllung, reisen, Abschluss, Einheit, Bewusstsein",
        reversed: "Unvollständigkeit, Mangel an Abschluss, innere Blockade",
        love: "Vollendung einer Liebesphase, Ehe / Bindung",
        career: "Projekt-Completion, berufliche Erfüllung, globale Erfolg",
        spirituality: "Spirituale Einheit, Einheit aller Gegensätze, innere Ganzheit",
        keywords: "Vollendung, Einheit, Erfüllung"
    },

    // KLEINE ARKANA - STÄBE (Wands)
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "I",
        nameDe: "As der Stäbe",
        nameEn: "Ace of Wands",
        element: "Feuer",
        numerology: "1",
        upright: "Neubeginn, Kreativität, Inspiration, Potenzial, Energie",
        reversed: "Blockierte Energie, fehlende Inspiration, Stagnation",
        keywords: "Neubeginn, Kreativität, Energie"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "II",
        nameDe: "Zwei Stäbe",
        nameEn: "Two of Wands",
        element: "Feuer",
        numerology: "2",
        upright: "Planung, Entscheidung, Möglichkeiten, Kontrolle",
        reversed: "Bestrafung, Zwietracht, Verzweiflung",
        keywords: "Planung, Entscheidung, Kontrolle"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "III",
        nameDe: "Drei Stäbe",
        nameEn: "Three of Wands",
        element: "Feuer",
        numerology: "3",
        upright: "Erkundung, Reisen, Wachstum, Fortschritt",
        reversed: "Zurückhaltung, Verzögerung, innere Konflikte",
        keywords: "Erkundung, Wachstum, Fortschritt"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "IV",
        nameDe: "Vier Stäbe",
        nameEn: "Four of Wands",
        element: "Feuer",
        numerology: "4",
        upright: "Feier, Harmonie, Zusammenkunft, Erfolg",
        reversed: "Zerbruch, Verlust, Verwirrung",
        keywords: "Feier, Harmonie, Erfolg"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "V",
        nameDe: "Fünf Stäbe",
        nameEn: "Five of Wands",
        element: "Feuer",
        numerology: "5",
        upright: "Konflikt, Konkurrenz, Widerstand, Spannung",
        reversed: "Harmonie, Ausgleich, innerer Frieden",
        keywords: "Konflikt, Wettbewerb, Spannung"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "VI",
        nameDe: "Sechs Stäbe",
        nameEn: "Six of Wands",
        element: "Feuer",
        numerology: "6",
        upright: "Erfolg, Ruhm, Anerkennung, Sieg",
        reversed: "Schande, Missachtung, Niederlage",
        keywords: "Erfolg, Anerkennung, Sieg"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "VII",
        nameDe: "Sieben Stäbe",
        nameEn: "Seven of Wands",
        element: "Feuer",
        numerology: "7",
        upright: "Mut, Selbstbehauptung, Standhaftigkeit, Widerstand",
        reversed: "Verzagtheit, Niederlage, Aufgeben",
        keywords: "Mut, Standhaftigkeit, Widerstand"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "VIII",
        nameDe: "Acht Stäbe",
        nameEn: "Eight of Wands",
        element: "Feuer",
        numerology: "8",
        upright: "Aktion, Geschwindigkeit, Fortschritt, Energie",
        reversed: "Verzögerung, Blockade, Frustration",
        keywords: "Geschwindigkeit, Aktion, Fortschritt"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "IX",
        nameDe: "Neun Stäbe",
        nameEn: "Nine of Wands",
        element: "Feuer",
        numerology: "9",
        upright: "Belastbarkeit, Verletzlichkeit, Erholung, Vorsicht",
        reversed: "Verzweiflung, Mangel an Ausdauer",
        keywords: "Belastbarkeit, Vorsicht, Ausdauer"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "X",
        nameDe: "Zehn Stäbe",
        nameEn: "Ten of Wands",
        element: "Feuer",
        numerology: "10",
        upright: "Bürde, Verantwortung, Pflicht, Last",
        reversed: "Befreiung, Erleichterung, Aufgeben",
        keywords: "Bürde, Verantwortung, Last"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "Page",
        nameDe: "Bube der Stäbe",
        nameEn: "Page of Wands",
        element: "Feuer",
        numerology: "Hof",
        upright: "Entdeckung, Leidenschaft, Enthusiasmus, Neugier",
        reversed: "Unruhe, Mangel an Richtung, Impulsivität",
        keywords: "Enthusiasmus, Neugier, Entdeckung"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "Knight",
        nameDe: "Ritter der Stäbe",
        nameEn: "Knight of Wands",
        element: "Feuer",
        numerology: "Hof",
        upright: "Energie, Leidenschaft, Handlung, Abenteuer",
        reversed: "Rastlos, Ungeduld, Wut",
        keywords: "Energie, Leidenschaft, Abenteuer"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "Queen",
        nameDe: "Königin der Stäbe",
        nameEn: "Queen of Wands",
        element: "Feuer",
        numerology: "Hof",
        upright: "Freundlichkeit, Wärme, Energie, Leidenschaft",
        reversed: "Eifersucht, Unzufriedenheit, Manipulation",
        keywords: "Wärme, Energie, Leidenschaft"
    },
    {
        category: "KLEINE ARKANA - STÄBE",
        number: "King",
        nameDe: "König der Stäbe",
        nameEn: "King of Wands",
        element: "Feuer",
        numerology: "Hof",
        upright: "Führung, Charisma, Vertrauen, großzügig",
        reversed: "Dominanz, Tyrannei, Mangel an Geduld",
        keywords: "Führung, Charisma, Vertrauen"
    },

    // KLEINE ARKANA - KELCHE (Cups)
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "I",
        nameDe: "As der Kelche",
        nameEn: "Ace of Cups",
        element: "Wasser",
        numerology: "1",
        upright: "Liebe, Neubeginn, emotionale Füllung, Spiritualität",
        reversed: "Unreife Gefühle, Blockade, innere Leere",
        keywords: "Liebe, Emotionen, Spiritualität"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "II",
        nameDe: "Zwei Kelche",
        nameEn: "Two of Cups",
        element: "Wasser",
        numerology: "2",
        upright: "Partnerschaft, Liebe, Verständnis, tiefe Verbindung",
        reversed: "Disharmonie, Trennung, Betrug",
        keywords: "Partnerschaft, Liebe, Verbindung"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "III",
        nameDe: "Drei Kelche",
        nameEn: "Three of Cups",
        element: "Wasser",
        numerology: "3",
        upright: "Feier, Freundschaft, Dankbarkeit, Freude",
        reversed: "Isolation, Disharmonie, Überindulgenz",
        keywords: "Feier, Freundschaft, Freude"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "IV",
        nameDe: "Vier Kelche",
        nameEn: "Four of Cups",
        element: "Wasser",
        numerology: "4",
        upright: "Apathie, Kontemplation, Reevaluation, Zurückweisung",
        reversed: "Bewegung, Neugier, Akzeptanz",
        keywords: "Apathie, Kontemplation, Zurückweisung"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "V",
        nameDe: "Fünf Kelche",
        nameEn: "Five of Cups",
        element: "Wasser",
        numerology: "5",
        upright: "Trauer, Verlust, Traurigkeit, Verzweiflung",
        reversed: "Heilung, Akzeptanz, Vergebung",
        keywords: "Trauer, Verlust, Enttäuschung"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "VI",
        nameDe: "Sechs Kelche",
        nameEn: "Six of Cups",
        element: "Wasser",
        numerology: "6",
        upright: "Nostalgie, Unschuld, Erinnerung, Vergnügen",
        reversed: "Vergangenheit beendet, emotionale Zurückhaltung",
        keywords: "Nostalgie, Erinnerung, Unschuld"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "VII",
        nameDe: "Sieben Kelche",
        nameEn: "Seven of Cups",
        element: "Wasser",
        numerology: "7",
        upright: "Illusion, Vielfalt, Wunsch, Täuschung",
        reversed: "Klarheit, Wahrheit, Einfachheit",
        keywords: "Illusion, Träume, Wünsche"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "VIII",
        nameDe: "Acht Kelche",
        nameEn: "Eight of Cups",
        element: "Wasser",
        numerology: "8",
        upright: "Abreißen, Flucht, Abschied, Suche",
        reversed: "Stagnation, Angst vor Veränderung",
        keywords: "Abschied, Suche, Loslassen"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "IX",
        nameDe: "Neun Kelche",
        nameEn: "Nine of Cups",
        element: "Wasser",
        numerology: "9",
        upright: "Erfüllung, Zufriedenheit, Überfluss, Glück",
        reversed: "Unzufriedenheit, Verlangen, Disharmonie",
        keywords: "Erfüllung, Glück, Zufriedenheit"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "X",
        nameDe: "Zehn Kelche",
        nameEn: "Ten of Cups",
        element: "Wasser",
        numerology: "10",
        upright: "Harmonie, Glück, Familie, Erfolg",
        reversed: "Zerbruch, Disharmonie, Mangel an Erfüllung",
        keywords: "Harmonie, Familie, Glück"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "Page",
        nameDe: "Bube der Kelche",
        nameEn: "Page of Cups",
        element: "Wasser",
        numerology: "Hof",
        upright: "Sensibilität, Künstler, Inspiration, Botschaft",
        reversed: "Emotionale Unreife, Weigerung zu wachsen",
        keywords: "Sensibilität, Inspiration, Kreativität"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "Knight",
        nameDe: "Ritter der Kelche",
        nameEn: "Knight of Cups",
        element: "Wasser",
        numerology: "Hof",
        upright: "Romantik, Ideen, Intuition, Geduld",
        reversed: "Moodiness, Illusionen, Naivität",
        keywords: "Romantik, Intuition, Idealismus"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "Queen",
        nameDe: "Königin der Kelche",
        nameEn: "Queen of Cups",
        element: "Wasser",
        numerology: "Hof",
        upright: "Intuition, Weiblichkeit, innere Weisheit, Ruhm",
        reversed: "Unsicherheit, Mangel an Grenzen, Abhängigkeit",
        keywords: "Intuition, Weiblichkeit, Mitgefühl"
    },
    {
        category: "KLEINE ARKANA - KELCHE",
        number: "King",
        nameDe: "König der Kelche",
        nameEn: "King of Cups",
        element: "Wasser",
        numerology: "Hof",
        upright: "Emotionale Reife, Mitgefühl, Balance, Kreativität",
        reversed: "Moodiness, Instabilität, Gefühllose Kontrolle",
        keywords: "Emotionale Reife, Mitgefühl, Balance"
    },

    // KLEINE ARKANA - SCHWERTER (Swords)
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "I",
        nameDe: "As der Schwerter",
        nameEn: "Ace of Swords",
        element: "Luft",
        numerology: "1",
        upright: "Klarheit, Durchbruch, Wahrheit, Intellekt",
        reversed: "Verwirrung, Befruchtung, mangelnde Klarheit",
        keywords: "Klarheit, Wahrheit, Intellekt"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "II",
        nameDe: "Zwei Schwerter",
        nameEn: "Two of Swords",
        element: "Luft",
        numerology: "2",
        upright: "Spannungen, Pattsituation, indecision, Konflikt",
        reversed: "Entschluss, neuer Anfang, Überwindung",
        keywords: "Entscheidung, Pattsituation, Balance"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "III",
        nameDe: "Drei Schwerter",
        nameEn: "Three of Swords",
        element: "Luft",
        numerology: "3",
        upright: "Trauer, Sorge, Schmerz, Komplikation",
        reversed: "Heilung, Erholung, Mitgefühl",
        keywords: "Trauer, Schmerz, Herzschmerz"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "IV",
        nameDe: "Vier Schwerter",
        nameEn: "Four of Swords",
        element: "Luft",
        numerology: "4",
        upright: "Ruhe, Erholung, Meditation, Friede",
        reversed: "Angst, Albtraum, Mangel an Ruhe",
        keywords: "Ruhe, Erholung, Meditation"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "V",
        nameDe: "Fünf Schwerter",
        nameEn: "Five of Swords",
        element: "Luft",
        numerology: "5",
        upright: "Konflikt, Niederlage, Verlust, Spannungen",
        reversed: "Versöhnung, Vergebung, Einsicht",
        keywords: "Konflikt, Niederlage, Verlust"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "VI",
        nameDe: "Sechs Schwerter",
        nameEn: "Six of Swords",
        element: "Luft",
        numerology: "6",
        upright: "Überganglichkeit, Flucht, Reisen, Bewegung",
        reversed: "Verzögerung, Verwirrung, Gedankenverloren",
        keywords: "Übergang, Reise, Bewegung"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "VII",
        nameDe: "Sieben Schwerter",
        nameEn: "Seven of Swords",
        element: "Luft",
        numerology: "7",
        upright: "Betrug, Diebstahl, Geheimnis, Irreführung",
        reversed: "Wahrheit, Entdeckung, Akzeptanz",
        keywords: "Betrug, Strategie, Geheimnis"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "VIII",
        nameDe: "Acht Schwerter",
        nameEn: "Eight of Swords",
        element: "Luft",
        numerology: "8",
        upright: "Verbot, Gefangenschaft, Angst, mentale Blockade",
        reversed: "Befreiung, Sicherheit, neue Perspektive",
        keywords: "Gefangenschaft, Einschränkung, Angst"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "IX",
        nameDe: "Neun Schwerter",
        nameEn: "Nine of Swords",
        element: "Luft",
        numerology: "9",
        upright: "Angst, Alptraum, Schuldgefühl, Verwüstung",
        reversed: "Hoffnung, Innerer Friede, Vergebung",
        keywords: "Angst, Sorgen, Alpträume"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "X",
        nameDe: "Zehn Schwerter",
        nameEn: "Ten of Swords",
        element: "Luft",
        numerology: "10",
        upright: "Enende, Sorrow, Trennung, Verrat",
        reversed: "Heilung, Überwindung, innere Stärke",
        keywords: "Ende, Verrat, Niederlage"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "Page",
        nameDe: "Bube der Schwerter",
        nameEn: "Page of Swords",
        element: "Luft",
        numerology: "Hof",
        upright: "Neugier, Aufmerksamkeit, Lust zu lernen",
        reversed: "Impulsivität, Unverschämtheit, Mangel an Urteilskraft",
        keywords: "Neugier, Wachsamkeit, Kommunikation"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "Knight",
        nameDe: "Ritter der Schwerter",
        nameEn: "Knight of Swords",
        element: "Luft",
        numerology: "Hof",
        upright: "Tapferkeit, Unabhängigkeit, Jagd, Gerechtigkeit",
        reversed: "Agressivität, Grausamkeit, Egoismus",
        keywords: "Tapferkeit, Unabhängigkeit, Aktion"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "Queen",
        nameDe: "Königin der Schwerter",
        nameEn: "Queen of Swords",
        element: "Luft",
        numerology: "Hof",
        upright: "Unabhängigkeit, Klarheit, Gerechtigkeit, Schärfsinn",
        reversed: "Kälte, Hartherzigkeit, Mangel an Empathie",
        keywords: "Unabhängigkeit, Klarheit, Gerechtigkeit"
    },
    {
        category: "KLEINE ARKANA - SCHWERTER",
        number: "King",
        nameDe: "König der Schwerter",
        nameEn: "King of Swords",
        element: "Luft",
        numerology: "Hof",
        upright: "Wahrheit, Autorität, Intelligenz, Gerechtigkeit",
        reversed: "Tyrannei, Ungerechtigkeit, Arroganz",
        keywords: "Wahrheit, Autorität, Intelligenz"
    },

    // KLEINE ARKANA - MÜNZEN (Pentacles)
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "I",
        nameDe: "As der Münzen",
        nameEn: "Ace of Pentacles",
        element: "Erde",
        numerology: "1",
        upright: "Wohlstand, Möglichkeit, Neuanfang, Segen",
        reversed: "Mangel, Blockade, verpasste Chance",
        keywords: "Wohlstand, Möglichkeit, Manifestation"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "II",
        nameDe: "Zwei Münzen",
        nameEn: "Two of Pentacles",
        element: "Erde",
        numerology: "2",
        upright: "Balance, Adaptation, Flexibilität, Geschicklichkeit",
        reversed: "Ungleichgewicht, Fehlentscheidung, Verwirrung",
        keywords: "Balance, Flexibilität, Anpassung"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "III",
        nameDe: "Drei Münzen",
        nameEn: "Three of Pentacles",
        element: "Erde",
        numerology: "3",
        upright: "Zusammenarbeit, Fachkompetenz, Würdigung, harte Arbeit",
        reversed: "Mangel an Zusammenarbeit, Fehler, mangelnde Anerkennung",
        keywords: "Zusammenarbeit, Kompetenz, Teamarbeit"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "IV",
        nameDe: "Vier Münzen",
        nameEn: "Four of Pentacles",
        element: "Erde",
        numerology: "4",
        upright: "Vermögen, Sicherheit, Kontrolle, Geiz",
        reversed: "Großzügigkeit, Freigeben, finanzielle Stabilität",
        keywords: "Sicherheit, Kontrolle, Festhalten"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "V",
        nameDe: "Fünf Münzen",
        nameEn: "Five of Pentacles",
        element: "Erde",
        numerology: "5",
        upright: "Armut, Härte, Mangel, Schwierigkeiten",
        reversed: "Genesung, Unterstützung, neue Hoffnung",
        keywords: "Mangel, Schwierigkeiten, Armut"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "VI",
        nameDe: "Sechs Münzen",
        nameEn: "Six of Pentacles",
        element: "Erde",
        numerology: "6",
        upright: "Großzügigkeit, Austausch, Mildtätigkeit, Teilen",
        reversed: "Geiz, Unausgeglichenheit, Ungerechtigkeit",
        keywords: "Großzügigkeit, Austausch, Teilen"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "VII",
        nameDe: "Sieben Münzen",
        nameEn: "Seven of Pentacles",
        element: "Erde",
        numerology: "7",
        upright: "Erfolg durch Anstrengung, Investition, Geduld",
        reversed: "Mangel an Erfolg, vergebliche Bemühung, Mangel an Vertrauen",
        keywords: "Geduld, Investition, Belohnung"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "VIII",
        nameDe: "Acht Münzen",
        nameEn: "Eight of Pentacles",
        element: "Erde",
        numerology: "8",
        upright: "Handwerk, Fähigkeit, Meisterschaft, Engagement",
        reversed: "Mangel an Fortschritt, Manipulation, unnötige Anstrengung",
        keywords: "Meisterschaft, Handwerk, Hingabe"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "IX",
        nameDe: "Neun Münzen",
        nameEn: "Nine of Pentacles",
        element: "Erde",
        numerology: "9",
        upright: "Überfluss, Luxus, Unabhängigkeit, Erfolg",
        reversed: "Mangel an Unabhängigkeit, finanzielle Abhängigkeit",
        keywords: "Überfluss, Luxus, Unabhängigkeit"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "X",
        nameDe: "Zehn Münzen",
        nameEn: "Ten of Pentacles",
        element: "Erde",
        numerology: "10",
        upright: "Reichtum, Familie, Vermächtnis, Stabilität",
        reversed: "Finanzielle Verluste, familienprobleme, Mangel an Kontinuität",
        keywords: "Reichtum, Familie, Vermächtnis"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "Page",
        nameDe: "Bube der Münzen",
        nameEn: "Page of Pentacles",
        element: "Erde",
        numerology: "Hof",
        upright: "Lernen, Praktikant, Neugier, Studium",
        reversed: "Impulsivität, Mangel an Konzentration, Leichtfertigkeit",
        keywords: "Lernen, Praktikabilität, Neugier"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "Knight",
        nameDe: "Ritter der Münzen",
        nameEn: "Knight of Pentacles",
        element: "Erde",
        numerology: "Hof",
        upright: "Treue, Verantwortung, Dependable, Geduld",
        reversed: "Demütigung, Sabotage, Unreife",
        keywords: "Treue, Verantwortung, Geduld"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "Queen",
        nameDe: "Königin der Münzen",
        nameEn: "Queen of Pentacles",
        element: "Erde",
        numerology: "Hof",
        upright: "Wohlwollen, Wirklichkeitssinn, Großzügigkeit, Gefühl",
        reversed: "Armut, Geiz, Mangel an finanziellem Verständnis",
        keywords: "Wohlwollen, Praktikalität, Großzügigkeit"
    },
    {
        category: "KLEINE ARKANA - MÜNZEN",
        number: "King",
        nameDe: "König der Münzen",
        nameEn: "King of Pentacles",
        element: "Erde",
        numerology: "Hof",
        upright: "Wohlstand, Reichtum, Erfolg, Unternehmertum",
        reversed: "Korruption, Habgier, finanzielle Unvorsichtigkeit",
        keywords: "Wohlstand, Erfolg, Unternehmertum"
    },
];

// Helper functions
export function getAllCards(): TarotCard[] {
    return TAROT_CARDS;
}

export function getMajorArcana(): TarotCard[] {
    return TAROT_CARDS.filter(card => card.category === "Grosse Arkana");
}

export function getMinorArcana(): TarotCard[] {
    return TAROT_CARDS.filter(card => card.category !== "Grosse Arkana");
}

export function getCardsBySuit(suit: "STÄBE" | "KELCHE" | "SCHWERTER" | "MÜNZEN"): TarotCard[] {
    return TAROT_CARDS.filter(card => card.category.includes(suit));
}

export function getCardByNumber(number: string): TarotCard | undefined {
    return TAROT_CARDS.find(card => card.number === number);
}
