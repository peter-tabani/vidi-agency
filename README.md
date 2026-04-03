# Vidi Agency Website

A modern AI agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🚀 Modern Next.js 15 with App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion for animations
- 📧 EmailJS integration for contact forms
- 🗄️ Supabase for database
- 🎯 SEO optimized
- ♿ Accessibility focused
- 🔒 Security headers implemented
- ✅ End-to-end testing with Playwright

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

For UI mode:
```bash
npm run test:ui
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   ├── case-studies/   # Case study pages
│   ├── solutions/      # Solutions pages
│   └── ...             # Other pages
├── components/          # React components
├── lib/                # Utility functions
├── tests/              # Playwright tests
├── public/             # Static assets
└── posts/              # Blog markdown files
```

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## Deployment

This site is deployed to Netlify. Push to main branch to deploy.

## License

Private - All rights reserved
