<script setup lang="ts">
import { VueIcon } from "@/components/icon/vue";
</script>

<template>
  <footer class="bg-background relative z-10 border-t border-white/5 py-8">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
      <div class="flex items-center gap-2">
        <VueIcon alt="logo" />
        <span class="font-medium">Vue.js Setup</span>
      </div>
      <p class="text-muted-foreground text-sm">Built with Vue 3, Vite, and Tailwind CSS</p>
      <a
        href="https://github.com/pyyupsk/vue-setup"
        target="_blank"
        class="hover:text-foreground text-muted-foreground text-sm transition-colors"
      >
        GitHub
      </a>
    </div>
  </footer>
</template>
