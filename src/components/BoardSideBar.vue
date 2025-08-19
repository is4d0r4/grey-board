<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
    const items = [
        { title: 'Meus Dados', icon: 'mdi-account' },
        { title: 'Quadro de Cirurgia', icon: 'mdi-clipboard-text-outline' },
        { title: 'Agendar Cirurgia', icon: 'mdi-calendar-check-outline' },
        { title: 'Plantões', icon: 'mdi-hospital-building' },
        { title: 'Residentes', icon: 'mdi-school-outline' },
        { title: 'Pacientes', icon: 'mdi-account-multiple' },
    ]

    function getOut(){
        router.replace(`/`)
    }
</script>

<template>
    <div class="sidebar">
      <v-app>
        <v-navigation-drawer permanent stateless class="pa-4 w-[260px] bg-[#f5faf8] relative">
          <div class="flex justify-center mb-4">
            <img src="@/assets/bailey.jpeg" class="w-40 h-40 rounded-full border-4 border-[#dfebe7] object-cover" />
          </div>
          <div class="text-center mb-4">
            <div class="font-bold text-sm">DRª MIRANDA BAILEY</div>
            <div class="text-xs">Chefe de Cirurgia Clínica</div>
          </div>
          <v-list nav dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :prepend-icon="item.icon"
              :title="item.title"
              class="rounded-md transition-all duration-200 hover:bg-[#e1f0eb] cursor-pointer"
            />
          </v-list>
          <div class="mt-auto text-center">
            <a @click="getOut" class="text-xs underline text-green-700 cursor-pointer">SAIR</a>
          </div>
        </v-navigation-drawer>
      </v-app>
    </div>
</template>
