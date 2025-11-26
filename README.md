<div align="center">

# Vue.js Setup

**A modern Vue.js starter template with Vite, TypeScript, Tailwind CSS, and best practices built-in.**

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Features](#-features) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## Features

- **Vue 3** - Latest Vue with Composition API and `<script setup>`
- **Vite** - Lightning fast development with HMR
- **TypeScript** - Full type safety with excellent DX
- **Vue Router** - File-based routing system
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-vue** - Beautiful, accessible components
- **VueUse** - Essential Vue composition utilities
- **ESLint + Prettier** - Code quality and formatting
- **Auto-imports** - Effortless development workflow

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/pyyupsk/vue-setup.git my-app

# Navigate to the project
cd my-app

# Install dependencies
bun install

# Start development server
bun run dev
```

Your app will be running at `http://localhost:5173`

### Available Scripts

| Script              | Description                  |
| ------------------- | ---------------------------- |
| `bun run dev`       | Start development server     |
| `bun run build`     | Build for production         |
| `bun run preview`   | Preview production build     |
| `bun run format`    | Format code with Prettier    |
| `bun run lint`      | Lint code with ESLint        |
| `bun run lint:fix`  | Fix linting issues           |
| `bun run typecheck` | Run TypeScript type checking |

## Tech Stack

| Category        | Technology                                                      |
| --------------- | --------------------------------------------------------------- |
| Framework       | [Vue 3](https://vuejs.org/)                                     |
| Build Tool      | [Vite](https://vitejs.dev/)                                     |
| Language        | [TypeScript](https://www.typescriptlang.org/)                   |
| Styling         | [Tailwind CSS](https://tailwindcss.com/)                        |
| Components      | [shadcn-vue](https://www.shadcn-vue.com/)                       |
| Utilities       | [VueUse](https://vueuse.org/)                                   |
| Routing         | [Vue Router](https://router.vuejs.org/)                         |
| Package Manager | [Bun](https://bun.sh/)                                          |
| Code Quality    | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) |

## Project Structure

```text
vue-setup/
├── public/                # Static assets (favicon, og-image)
├── src/
│   ├── assets/
│   │   └── css/           # Global styles and Tailwind config
│   ├── components/
│   │   ├── icon/          # Icon components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── sections/      # Page sections (Hero, Features, CTA)
│   │   └── ui/            # UI components (Button, Card, Badge)
│   ├── constants/         # Constants and configuration
│   ├── lib/               # Utility functions
│   ├── pages/             # Route pages (file-based routing)
│   ├── app.vue            # Root component
│   ├── main.ts            # Application entry
│   └── router.ts          # Vue Router configuration
├── index.html             # HTML template
└── vite.config.ts         # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Guide](https://vuejs.org/guide/typescript/overview.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [VueUse](https://vueuse.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with Vue.js

</div>
