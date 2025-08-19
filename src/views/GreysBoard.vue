<script setup lang="ts">
  import SideBarBoard from '@/components/BoardSideBar.vue'
  import Filter from '@/components/BoardHeader.vue'
  import Board from '@/components/Board.vue'
</script>
<template>
<div class="flex bg-[#f5faf8] min-h-screen">
  <SideBarBoard />
    <main class="flex-1 p-6 ml-[260px]">
      <Filter />
      <Board />
    </main>
  </div>
</template>
