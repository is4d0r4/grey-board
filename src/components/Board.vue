<script setup lang="ts">
import { useDessertStore } from '@/stores/board.ts'

const dessertStore = useDessertStore()
</script>

<template>
  <v-data-table
    :headers="dessertStore.headers"
    :items="dessertStore.boardItems"
    :items-per-page="5"
    class="elevation-1"
  />
</template>
