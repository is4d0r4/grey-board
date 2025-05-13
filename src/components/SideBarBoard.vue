<script setup lang="ts">
    const items = [
        { title: 'Meus Dados', icon: 'mdi-account' },
        { title: 'Quadro de Cirurgia', icon: 'mdi-clipboard-text-outline' },
        { title: 'Agendar Cirurgia', icon: 'mdi-calendar-check-outline' },
        { title: 'Plantões', icon: 'mdi-hospital-building' },
        { title: 'Residentes', icon: 'mdi-school-outline' },
        { title: 'Pacientes', icon: 'mdi-account-multiple' },
    ]
</script>

<template>
    <div class="sidebar">
        <v-app>
            <v-navigation-drawer permanent class="pa-4" width="260">
                <img src="@/assets/bailey.jpeg" max-width="120" class="w-42 h-42 mb-4 rounded-full" rounded="circle" />
                <div class="text-center">
                <div class="font-weight-bold">DRª MIRANDA BAILEY</div>
                <div class="text-caption">Chefe de Cirurgia Clínica</div>
                </div>

                <v-list nav dense class="mt-4">
                    <v-list-item v-for="item in items" class="hover:bg-sky-100" :key="item.title" :prepend-icon="item.icon" :title="item.title" />
                </v-list>
                <div class="mt-auto text-center">
                <a href="#" class="text-caption text-decoration-underline">SAIR</a>
                </div>
            </v-navigation-drawer>
        </v-app>
    </div>
</template>
