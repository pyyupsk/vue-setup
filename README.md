# Vue Setup

> Clean, fast Vue 3 + Vite + TS starter with routing, Tailwind & shadcn-vue.

A modern Vue.js starter template that combines the best developer experience with production-ready features. Built for rapid prototyping and scalable applications.

## ✨ Features

- ⚡ **Vue 3** - Latest Vue with Composition API and `<script setup>`
- 🚀 **Vite** - Lightning fast development with HMR
- 📘 **TypeScript** - Full type safety with excellent DX
- 🛣️ **Vue Router** - File-based routing system
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn-vue** - Beautiful, accessible components
- 🔧 **ESLint + Prettier** - Code quality and formatting
- 📦 **Auto-imports** - Effortless development workflow

## 🛠️ Tech Stack

| Category        | Technology       |
| --------------- | ---------------- |
| Framework       | Vue 3            |
| Build Tool      | Vite             |
| Language        | TypeScript       |
| Styling         | Tailwind CSS     |
| Components      | shadcn-vue       |
| Routing         | Vue Router       |
| Package Manager | Bun              |
| Code Quality    | ESLint, Prettier |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/pyyupsk/vue-setup.git
cd vue-setup

# Install dependencies
bun install

# Start development server
bun run dev
```

### Available Scripts

```bash
# Development
bun run dev          # Start dev server
bun run build        # Build for production
bun run preview      # Preview production build

# Code Quality
bun run format       # Format code
bun run lint         # Lint code
bun run lint:fix     # Fix linting issues
bun run typecheck    # Type checking
```

## 📁 Project Structure

```files
vue-setup/
├── public/          # Static assets
├── src/
│   ├── assets/      # Static assets
│   ├── components/  # Vue components
│   ├── lib/         # Library code
│   ├── pages/       # Route pages
│   ├── app.vue      # Root component
│   ├── main.ts      # Application entry
│   └── router.ts    # Vue Router configuration
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## 🎨 Styling

This template uses Tailwind CSS with shadcn-vue components for a beautiful and consistent design system. All components are fully customizable and follow accessibility best practices.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
