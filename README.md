# Lunar Loom Frontend

Headless WordPress Frontend für [lunarloom.de](https://lunarloom.de) - Moderne spirituelle Beratung mit evidenzbasierten Praktiken.

## 🌙 Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** WordPress REST API + GraphQL (WPGraphQL)
- **Deployment:** Vercel

## ✨ Features

- 🔮 **Tarot Card Database** - Custom WordPress post type integration
- ✨ **Rituals Library** - Moon phase-aligned spiritual practices
- 📖 **Blog** - Evidence-based spirituality articles
- 🎨 **Modern UI** - Dark theme with gradient aesthetics
- 🚀 **Server-Side Rendering** - Optimized performance
- 📱 **Responsive Design** - Mobile-first approach

## 🏗️ Architecture

```
Next.js Frontend (Vercel)
    ↓ REST/GraphQL API
WordPress Backend (IONOS)
    ↓
MySQL Database
```

### Routes

- `/` - Homepage (fetches Start page from WordPress)
- `/blog` - Blog index (all posts)
- `/blog/[slug]` - Individual blog posts
- `/tarot` - Tarot card collection
- `/rituals` - Ritual practices
- `/ueber` - About page
- `/buchung` - Booking page
- `/kontakt` - Contact page
- `/faq` - FAQ
- `/impressum` - Legal notice
- `/datenschutz` - Privacy policy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Access to WordPress backend API

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_WP_API_URL=https://lunarloom.de/wp-json/wp/v2
NEXT_PUBLIC_GRAPHQL_URL=https://lunarloom.de/graphql
```

### Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
lunarloom-frontend/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage
│   ├── blog/                # Blog routes
│   │   ├── page.tsx         # Blog index
│   │   └── [slug]/          # Dynamic blog posts
│   ├── tarot/               # Tarot section
│   ├── rituals/             # Rituals section
│   └── [...]/               # Other pages
├── lib/                      # Utilities
│   └── wordpress.ts         # WordPress API client
├── middleware.ts            # 301 redirects
├── .env.local              # Environment variables (gitignored)
└── public/                  # Static assets
```

## 🔌 WordPress Integration

### Custom Post Types

- `tarot_card` - Tarot cards with arcana and keywords
- `ritual` - Rituals with moon phases and duration
- `moon_phase_guide` - Long-form moon phase guides

### API Client

Located in `lib/wordpress.ts`:

```typescript
// Fetch all posts
const posts = await getPosts();

// Fetch single post by slug
const post = await getPostBySlug('my-post');

// Fetch page by slug
const page = await getPageBySlug('about');

// Fetch tarot cards
const cards = await getTarotCards();

// Fetch rituals
const rituals = await getRituals();
```

## 🎨 Design System

### Colors

- Primary: Purple gradients (`from-purple-400 to-pink-600`)
- Background: Dark indigo/purple gradients
- Text: Purple tints for hierarchy

### Typography

- Headings: Bold, gradient text
- Body: Readable purple-200
- Prose: Tailwind Typography plugin

## 🚢 Deployment

For detailed deployment instructions, see the deployment guide in the project documentation.

### Quick Deploy to Vercel

**Required Environment Variables:**

- `NEXT_PUBLIC_WP_API_URL`
- `NEXT_PUBLIC_GRAPHQL_URL`

## 📝 Content Management

All content is managed in WordPress:

1. Log into WordPress admin
2. Create/edit posts, pages, tarot cards, or rituals
3. Changes appear automatically on frontend (60s cache)

---

Built with 🌙 by Rachel - Evidence-based spirituality for modern seekers

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
