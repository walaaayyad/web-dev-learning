# Educational Platform

A clean Next.js 16 foundation with TypeScript and Tailwind CSS, ready for building an educational platform.

## Project Structure

```
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer with links
├── context/               # React context for state management
├── lib/                   # Utility functions and helpers
├── styles/                # Global CSS and Tailwind styles
│   └── globals.css        # Global styles
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the production-ready application
- **`npm start`** - Start the production server
- **`npm run lint`** - Run ESLint to check code quality

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - For type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Modern UI library
- **ESLint** - Code quality and style checking

## Features

- ✅ Next.js App Router (not Pages Router)
- ✅ Full TypeScript support with strict mode
- ✅ Tailwind CSS with semantic design tokens
- ✅ Scalable folder structure
- ✅ Header and Footer components
- ✅ ESLint configuration
- ✅ Dark mode support ready
- ✅ Responsive design

## Development

The project includes pre-built Header and Footer components in the `/components` directory. The `/context` and `/lib` folders are ready for adding state management and utility functions as needed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## License

This project is open source and available under the ISC License.
