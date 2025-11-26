<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { Github } from "lucide-vue-next";
import { computed } from "vue";

import { VueIcon } from "@/components/icon/vue";
import { buttonVariants } from "@/components/ui/button";

const { y } = useWindowScroll();

const isScrolled = computed(() => y.value > 100);
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full transition-all"
    :class="
      isScrolled
        ? 'bg-background/90 border-b border-white/5 backdrop-blur-sm'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-2">
        <VueIcon alt="logo" />
        <span class="font-medium">Vue.js Setup</span>
      </div>
      <nav class="flex items-center gap-4">
        <a
          href="https://github.com/pyyupsk/vue-setup"
          target="_blank"
          :class="buttonVariants({ variant: 'outline', size: 'sm' })"
        >
          <Github />
          <span>Go to GitHub</span>
        </a>
      </nav>
    </div>
  </header>
</template>
