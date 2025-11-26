<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

import { Button } from "@/components/ui/button";
</script>

<template>
  <section class="relative z-10 container py-24 text-center">
    <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
      Ready to Build Something Amazing?
    </h2>
    <p class="text-muted-foreground mx-auto mb-8 max-w-2xl">
      Join developers who ship faster with our production-ready Vue 3 starter template.
    </p>
    <Button size="lg" class="group">
      Start Building Now
      <ArrowRight class="transition-transform group-hover:translate-x-1" />
    </Button>
  </section>
</template>
