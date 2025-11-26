<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/constants/features";
</script>

<template>
  <section class="relative z-10 container py-24">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Everything You Need</h2>
      <p class="text-muted-foreground mx-auto max-w-3xl">
        A carefully selected stack of modern tools and best practices to supercharge your
        development workflow.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card
        v-for="feature in features"
        :key="feature.title"
        class="group relative transition-all hover:border-emerald-500/40"
      >
        <CardHeader>
          <div
            class="mb-2 flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/20 to-emerald-500/5"
          >
            <component :is="feature.icon" class="size-6 text-emerald-400" />
          </div>
          <CardTitle>{{ feature.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{{ feature.description }}</CardDescription>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
