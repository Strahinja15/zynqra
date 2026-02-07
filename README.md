# Zynqra

A modern, real-time cryptocurrency tracking and analysis platform built with Next.js, TypeScript, and the CoinGecko API. Zynqra provides comprehensive insights into cryptocurrency markets with live data streaming, detailed coin analytics, and currency conversion tools.

## 🌟 Features

- **Real-Time Price Tracking**: Live cryptocurrency prices and market data through WebSocket connections
- **Comprehensive Coin Analytics**: Detailed coin information including market cap, volume, price changes, and historical data
- **Advanced Charting**: Interactive candlestick charts powered by Lightweight Charts for technical analysis
- **Trending Coins Dashboard**: View market trending coins and top gainers/losers at a glance
- **Multi-Currency Converter**: Convert cryptocurrency values across multiple fiat currencies
- **Market Categories**: Browse cryptocurrencies by market categories
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for seamless experience across all devices
- **Server-Side Rendering**: Optimized performance with Next.js SSR and incremental static regeneration
- **Type-Safe Development**: Full TypeScript support for robust and maintainable code

## 📦 Tech Stack

- **Framework**: [Next.js 16.1.5](https://nextjs.org) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) + [PostCSS 4](https://postcss.org)
- **UI Components**: [Radix UI](https://www.radix-ui.com) + Custom components
- **Charts**: [Lightweight Charts 5.1.0](https://lightweight-charts.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Data Fetching**: [CoinGecko Pro API](https://www.coingecko.com/api)
- **Real-Time Updates**: WebSocket connections via CoinGecko WebSocket API
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Code Quality**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm/bun
- CoinGecko Pro API key ([Get it here](https://www.coingecko.com/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zynqra.git
   cd zynqra
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_KEY=your_api_key
   NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://ws.coingecko.com/events/v1/ticker
   NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key
   ```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## 📂 Project Structure

```
zynqra/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home page with trending coins, categories, and overview
│   ├── layout.tsx               # Root layout with header/nav
│   ├── globals.css              # Global styles
│   └── coins/
│       ├── page.tsx             # All coins listing page
│       └── [id]/
│           └── page.tsx         # Individual coin detail page
├── components/
│   ├── home/                    # Home page specific components
│   │   ├── CoinOverview.tsx     # Market overview widget
│   │   ├── TrendingCoins.tsx    # Trending coins table
│   │   ├── TopGainersAndLosers.tsx  # Market movers
│   │   ├── CandlestickChart.tsx # Price chart component
│   │   └── Categories.tsx       # Crypto categories
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   ├── pagination.tsx
│   │   ├── select.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   ├── DataTable.tsx            # Generic data table component
│   ├── Converter.tsx            # Currency converter widget
│   ├── CoinHeader.tsx           # Coin detail header
│   ├── CoinsPagination.tsx      # Pagination control
│   ├── Header.tsx               # Navigation header
│   ├── LiveDataWrapper.tsx      # WebSocket data wrapper
│   └── fallback.tsx             # Skeleton loaders
├── hooks/
│   └── useCoinGeckoWebSocket.ts # WebSocket hook for real-time data
├── lib/
│   ├── coingecko.actions.ts    # Server-side API calls
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
├── constants.ts                 # Application constants and chart configs
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.ts              # Next.js configuration
├── eslint.config.mjs           # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Project dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Key Components

### CoinOverview
Displays market overview with top cryptocurrencies and market statistics.

### TrendingCoins
Shows trending coins in a sortable, paginated table with real-time price updates.

### CandlestickChart
Interactive candlestick chart for technical analysis with customizable timeframes.

### Converter
Multi-currency converter to calculate cryptocurrency values in different fiat currencies.

### DataTable
Generic, highly customizable data table component used throughout the application.

## 📡 API Integration

Zynqra uses the **CoinGecko Pro API** for comprehensive cryptocurrency data:
- Real-time price data via WebSocket
- Historical market data and charts
- Trending coins and market categories
- Detailed coin information and analytics

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with CoinGecko CDN integration
- **Code Splitting**: Automatic route-based code splitting
- **Server Components**: Strategic use of React Server Components for reduced client-side JavaScript
- **Caching Strategy**: Incremental Static Regeneration (ISR) for frequently accessed data
- **Suspense Boundaries**: Loading states for improved perceived performance
- **Lightweight UI Library**: Radix UI for accessible, performant components

## 🔒 Security

- API keys stored in environment variables (never committed)
- Server-side API calls for sensitive operations
- Content Security Policy ready
- TypeScript for type safety

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop browsers
- Tablets
- Mobile devices

Built with Tailwind CSS utility-first approach for consistency and maintainability.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

For issues and questions, please open an issue on the GitHub repository.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CoinGecko API Documentation](https://www.coingecko.com/en/api/documentation)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

---

**Made with ❤️ by the Zynqra team**
