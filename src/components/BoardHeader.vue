<script setup lang="ts">
  const dataHoraAtual = new Date();
  const hour = String(dataHoraAtual.getHours()).padStart(2, '0');
  const minute = String(dataHoraAtual.getMinutes()).padStart(2, '0');

  const diaAtual = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(dataHoraAtual);

  const dia = String(dataHoraAtual.getDate()).padStart(2, '0');
  const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataHoraAtual.getFullYear();

  const dataFormatada = `${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)} ${dia}/${mes}/${ano}`;
</script>
<template>
  <div class="flex justify-between items-start mb-4">
    <div class="flex items-center space-x-2">
      <v-btn icon class="bg-[#f5faf8] border border-gray-300">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn class="bg-blue-500 rounded-lg">
        + AGENDAR CIRURGIA
      </v-btn>
    </div>
    <div class="text-right text-sm">
      <div class="text-gray-500">Última atualização:</div>
      <div class="text-3xl text-blue-500">{{ hour }}:{{ minute }}</div>
      <div class="text-gray-600">{{ dataFormatada }}</div>
    </div>
  </div>
</template>

