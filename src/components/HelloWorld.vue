<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
      </h3>
    </div>
    <v-card class="pa-6">
        <h1 class="text-2xl font-bold mb-4 text-primary">Tailwind + Vuetify</h1>
        <v-btn color="primary">Botão Vuetify</v-btn>
      </v-card>
    <div class="p-6 bg-primary text-white rounded-md">
      Usando Tailwind via CDN com Vue!
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
