<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loginForm = ref({
  cpf: '',
  password: '',
});
const loading = ref(false)
const router = useRouter()

function login() {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 3000)
}

function newLogin(){
  router.push(`/newLogin`)
}
</script>

<template>
  <v-app>
    <v-main class="d-flex align-center justify-center " style="min-height: 100vh; min-width: 100vh; background-color: #d7e5e7">
      <v-card
        class="pa-6"
        max-width="360"
        rounded="xl"
        elevation="4"
      >
        <div class="center">
          <img src="../assets/logo.png">
        </div>

        <v-text-field
          v-model="loginForm.cpf"
          label="CPF"
          density="comfortable"
          variant="outlined"
          rounded="xl"
          hide-details
          class="mb-4"
        />

        <v-text-field
          v-model="loginForm.password"
          label="Senha"
          type="password"
          density="comfortable"
          variant="outlined"
          rounded="xl"
          hide-details
          class="mb-4"
        />

        <v-btn
          block
          color="red lighten-1"
          size="large"
          class="text-white font-weight-bold rounded-xl mb-3"
          :loading="loading"
          @click="login()"
        >
          ENTRAR
        </v-btn>

        <div class="flex flex-col items-center space-y-1">
          <a href="#" class="text-caption text-decoration-underline">Esqueci minha senha</a>
          <a href="newLogin" class="text-caption text-decoration-underline">Novo Login</a>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>
