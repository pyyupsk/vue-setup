<script setup lang="ts">
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CodePreviewSection } from "@/components/sections/code-preview";
import { CTASection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
</script>

<template>
  <!-- Header -->
  <Header />

  <main class="relative">
    <!-- Gradient background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-linear-to-br from-emerald-500/20 to-transparent blur-3xl"
      />
      <div
        class="absolute -right-1/4 -bottom-1/4 h-3/4 w-3/4 rounded-full bg-linear-to-tl from-emerald-500/10 to-transparent blur-3xl"
      />
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(66,184,131,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,184,131,0.03)_1px,transparent_1px)] bg-size-[64px_64px]"
    />

    <!-- Sections -->
    <HeroSection />
    <FeaturesSection />
    <CodePreviewSection />
    <CTASection />
  </main>

  <!-- Footer -->
  <Footer />
</template>
