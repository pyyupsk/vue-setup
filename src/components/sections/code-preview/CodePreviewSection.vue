<template>
  <section class="relative z-10 container py-24">
    <div
      class="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm"
    >
      <!-- Terminal header -->
      <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div class="h-3 w-3 rounded-full bg-red-500/80" />
        <div class="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div class="h-3 w-3 rounded-full bg-green-500/80" />
        <span class="text-muted-foreground ml-4 text-sm">Terminal</span>
      </div>
      <!-- Terminal content -->
      <div class="p-6 font-mono text-sm">
        <div class="flex items-center gap-2">
          <span class="text-emerald-400">$</span>
          <span class="text-foreground/80">gh repo clone pyyupsk/vue-setup my-app</span>
        </div>
        <div class="mt-2 flex items-center gap-2">
          <span class="text-emerald-400">$</span>
          <span class="text-foreground/80">cd my-app && bun install</span>
        </div>
        <div class="mt-2 flex items-center gap-2">
          <span class="text-emerald-400">$</span>
          <span class="text-foreground/80">bun run dev</span>
        </div>
        <div class="mt-4 text-emerald-400">✓ Ready in 234ms</div>
        <div class="text-foreground/50 mt-1">
          ➜ Local: <span class="text-emerald-400">http://localhost:3000/</span>
        </div>
      </div>
    </div>
  </section>
</template>
