<script setup lang="ts">
import { useRouter } from "vue-router";

import { Button } from "@/components/ui/button";

const router = useRouter();
router.push("");
</script>

<template>
  <div class="grid h-screen place-items-center">
    <Button>Click me</Button>
  </div>
</template>
