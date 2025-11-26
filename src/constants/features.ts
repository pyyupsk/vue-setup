import type { Component } from "vue";

import { Code2, Layers, Terminal, Zap } from "lucide-vue-next";

type Feature = {
  description: string;
  icon: Component;
  title: string;
};

export const features: Feature[] = [
  {
    description:
      "Harness the full potential of Vue 3 Composition API with TypeScript for type-safe, scalable applications.",
    icon: Code2,
    title: "Vue 3 + TypeScript",
  },
  {
    description:
      "Lightning-fast HMR and optimized builds with Vite. Experience instant feedback during development.",
    icon: Zap,
    title: "Vite Powered",
  },
  {
    description:
      "Beautiful, accessible components from shadcn/ui built with Reka UI and Tailwind CSS.",
    icon: Layers,
    title: "Modern UI Stack",
  },
  {
    description:
      "Pre-configured ESLint, Prettier, and TypeScript for consistent, high-quality code.",
    icon: Terminal,
    title: "Developer Experience",
  },
];
