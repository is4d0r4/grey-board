<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const newUserForm = ref ({
    name: '',
    cpf: '',
    telephone: '',
    email: '',
    profile_id: '',
    crm: '',
    password: '',
    confirmPassword: ''
})

const profiles = ref([
  { name: 'Enfermeiro(a)', id: 1 },
  { name: 'Interno(a)', id: 2 },
  { name: 'Residente', id: 3 },
  { name: 'Cirurgião(a)', id: 4 },
  { name: 'Anestesista', id: 5 },
])

function goBack() {
  router.push('/')
}
</script>
<template>
  <v-app>
    <v-main class="d-flex align-center justify-center" style="min-height: 100vh; background-color: #d7e5e7">
      <v-card
        class="pa-6"
        max-width="500"
        rounded="xl"
        elevation="4"
      >
      <v-row dense>
        <v-col cols="12" class="text-center">
            <h2>Novo Usuário - GREYBOARD</h2>
        </v-col>

        <v-col cols="12">
            <v-text-field
            v-model="newUserForm.name"
            label="Nome Completo*"
            density="comfortable"
            variant="outlined"
            rounded="xl"
            hide-details
            />
        </v-col>

        <v-col cols="6">
            <v-text-field
            v-model="newUserForm.cpf"
            label="CPF*"
            density="comfortable"
            variant="outlined"
            rounded="xl"
            hide-details
            />
        </v-col>
        <v-col cols="6">
            <v-text-field
            v-model="newUserForm.telephone"
            label="Telefone*"
            density="comfortable"
            variant="outlined"
            rounded="xl"
            hide-details
            class="mb-4"
            />
        </v-col>
        <v-col cols="6">
            <v-autocomplete
                v-model="newUserForm.profile_id"
                :items="profiles"
                item-title="name"
                item-value="id"
                label="Perfil*"
                density="comfortable"
                variant="outlined"
                rounded="xl"
                hide-details
                class="mb-4"
            />
        </v-col>
        <v-col cols="6">
            <v-text-field
            v-model="newUserForm.crm"
            label="CRM"
            density="comfortable"
            variant="outlined"
            rounded="xl"
            hide-details
            class="mb-4"
            />
        </v-col>
        <v-col cols="6">
            <v-text-field
            v-model="newUserForm.password"
            label="Senha*"
            density="comfortable"
            variant="outlined"
            rounded="xl"
            hide-details
            class="mb-4"
            />
        </v-col>
        <v-col cols="6">
            <v-text-field
            v-model="newUserForm.confirmPassword"
            label="Confirmar Senha*"
            density="comfortable"
            variant="outlined"
            rounded="xl"
            hide-details
            class="mb-4"
            />
        </v-col>
        
        <v-col cols="6">
            <v-btn
                block
                color="red lighten-1"
                size="large"
                class="text-white font-weight-bold rounded-xl mb-3"
                >
                SALVAR
            </v-btn>
        </v-col>
        <v-col cols="6">
            <v-btn
                block
                color="grey lighten-1"
                size="large"
                class="text-white font-weight-bold rounded-xl mb-3"
                @click="goBack"
                >
                VOLTAR
            </v-btn>
        </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>