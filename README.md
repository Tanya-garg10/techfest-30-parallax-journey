# 🚀 Techfest 30 — Parallax Journey

> *Journey Through Three Decades of Technological Revolution*

A visually immersive, parallax scroll experience built to celebrate **Techfest's 30th Anniversary**. The page takes users on a cinematic journey from the **Past** → **Present** → **Future** of technology, powered by smooth scroll animations and a sleek dark aesthetic.

---

## ✨ Features

- 🎞️ **Parallax Scrolling** — Smooth depth effects tied to scroll position
- 🌌 **Hero Section** — Full-screen animated intro with glowing typography and floating particles
- 📜 **Past Section** — Celebrating Techfest's historical roots and early tech milestones
- ⚡ **Present Section** — Highlighting today's cutting-edge innovations
- 🔭 **Future Section** — A futuristic vision of what lies ahead
- 🌙 **Dark Mode First** — Deep navy/cyan palette with glowing accent effects
- 📱 **Fully Responsive** — Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.6 | React Framework & Routing |
| [React](https://react.dev/) | ^19 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.0 | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | ^4.8.0 | UI Components |
| [Lucide React](https://lucide.dev/) | ^1.16.0 | Icons |
| [Vercel Analytics](https://vercel.com/analytics) | 1.6.1 | Web Analytics |
| [pnpm](https://pnpm.io/) | — | Package Manager |

---

## 📁 Project Structure

```
techfest-30-parallax-journey/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles & animations
├── components/
│   ├── HeroSection.tsx     # Full-screen parallax hero
│   ├── PastSection.tsx     # Historical journey section
│   ├── PresentSection.tsx  # Present-day tech showcase
│   ├── FutureSection.tsx   # Futuristic vision section
│   ├── Footer.tsx          # Site footer
│   └── ui/
│       └── button.tsx      # Reusable button component
├── hooks/
│   └── useScrollPosition.ts  # Custom hook for scroll tracking
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/                 # Static assets & icons
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **pnpm** (recommended) — install via `npm install -g pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/Tanya-garg10/techfest-30-parallax-journey.git

# Navigate to the project directory
cd techfest-30-parallax-journey

# Install dependencies
pnpm install
```

### Running Locally

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Tanya-garg10/techfest-30-parallax-journey)

---

## 🎨 Design Highlights

- **Color Palette**: Deep navy (`#0a0e27`) background with `cyan-400` accent glows
- **Typography**: Geist Sans + Geist Mono (Google Fonts)
- **Animations**: CSS-based float animations + JS scroll-linked parallax via `useScrollPosition` hook
- **Grid Overlay**: Subtle cyan grid texture on the hero for a sci-fi aesthetic

---

## 📄 License

This project was created for **Techfest 30th Anniversary**. All rights reserved.

---

<p align="center">Made with ❤️ for Techfest's 30th Anniversary</p>
