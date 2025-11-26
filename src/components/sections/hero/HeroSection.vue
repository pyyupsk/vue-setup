<script setup lang="ts">
import { ArrowRight, Github, Rocket } from "lucide-vue-next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { techStack } from "@/constants/tech-stack";
import { cn } from "@/lib/utils";
</script>

<template>
  <section class="relative z-10 container pt-20 pb-32 md:pt-32 md:pb-40">
    <div class="mx-auto max-w-4xl text-center">
      <!-- Badge -->
      <Badge
        class="mb-8 gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-emerald-400"
      >
        <Rocket class="h-4 w-4" />
        <span>Production-Ready Vue 3 Starter</span>
      </Badge>

      <!-- Main heading -->
      <h1 class="mb-6 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
        Build Modern Apps
        <br />
        <span
          class="bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent"
        >
          At Lightning Speed
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
        A meticulously crafted Vue 3 starter template with TypeScript, Vite, Tailwind CSS, and
        shadcn/ui. Start building beautiful, performant applications in seconds.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" class="group bg-emerald-500 hover:bg-emerald-500/90">
          Get Started
          <ArrowRight class="transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg">
          <Github />
          View on GitHub
        </Button>
      </div>
    </div>

    <!-- Tech stack pills -->
    <div class="mt-20 flex flex-wrap items-center justify-center gap-3">
      <span class="text-muted-foreground text-sm">Powered by</span>
      <Badge v-for="tech in techStack" :key="tech.name" variant="secondary">
        <div :class="cn('size-2 rounded-full bg-linear-to-r', tech.color)" />
        <span>{{ tech.name }}</span>
        <span class="text-muted-foreground">v{{ tech.version }}</span>
      </Badge>
    </div>
  </section>
</template>
