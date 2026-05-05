# BT Engine Lab — Website

Marketing and product catalog website for **BT Engine Lab LLC**, a life science and proteomics equipment supplier based in Woodland Hills, CA.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with custom brand tokens
- **Framer Motion** for animations
- **Zod** for form validation
- **@21st-sdk** packages included for future AI assistant integration

## Setup

```bash
cd bt-engine-lab
npm install
cp .env.example .env.local
# Fill in .env.local values (optional — site works without them)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See [`.env.example`](.env.example) for all supported variables.

| Variable | Purpose |
|----------|---------|
| `QUOTE_WEBHOOK_URL` | Webhook to receive quote form submissions (Zapier, Make, n8n, etc.) |
| `CONTACT_WEBHOOK_URL` | Webhook to receive contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Full site URL for SEO/OG (default: `https://btenginelabllc.com`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID |

## Deploying to Vercel

1. Push to a GitHub/GitLab repo
2. Import the project in [Vercel](https://vercel.com)
3. Set the root directory to `bt-engine-lab`
4. Add environment variables in the Vercel dashboard
5. Deploy

## Site Map

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/products` | Product catalog with filters |
| `/products/[slug]` | Product detail |
| `/solutions` | Application hub |
| `/solutions/proteomics` | Proteomics workflow (priority page) |
| `/solutions/genomics` | Genomics |
| `/solutions/cell-biology` | Cell Biology |
| `/solutions/biochemistry` | Biochemistry |
| `/services` | Service offerings |
| `/about` | Company & founder |
| `/resources` | Blog/articles |
| `/resources/[slug]` | Article detail |
| `/contact` | Contact form + info |
| `/request-quote` | Dedicated quote request form |

## Adding Products

Edit `lib/products.ts` — add entries to the `products` array. Images use Unsplash URLs by default; replace with real product imagery hosted via Next.js Image (add domains to `next.config.ts`).

## Brand Tokens

Defined in `tailwind.config.ts`:

- **Navy** `#0B1F3A` — primary dark
- **Cobalt** `#1E40AF` — secondary
- **Cyan** `#06B6D4` — accent / CTAs
- **Light** `#F8FAFC` — section backgrounds
- **Dark** `#0F172A` — body text
