<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

const router = useRouter();
router.push("");
</script>

<template>
  <div class="grid h-screen place-items-center">
    <Button>Click me</Button>
  </div>
</template>
