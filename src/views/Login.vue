<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loginForm = ref({
  cpf: '',
  password: '',
});
const loading = ref(false)
const router = useRouter()
const loginFormRef = ref()
const cpfRules = [
  (v: string) => !!v || 'CPF é obrigatório',
  (v: string) => v.length === 11 || 'CPF incompleto',
]

const passwordRules = [
  (v: string) => !!v || 'Senha é obrigatória',
  (v: string) => v.length >= 6 || 'Mínimo de 6 caracteres',
]

async function login() {
  const formIsValid = await loginFormRef.value?.validate()

  if (!formIsValid) return

  loading.value = true

  setTimeout(() => {
    loading.value = false
    router.push('/grey-board') 
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

        <v-form ref="loginFormRef">
            <v-text-field
              :rules="cpfRules"
              v-model="loginForm.cpf"
              label="CPF"
              density="comfortable"
              variant="outlined"
              rounded="xl"
              class="mb-4"
            />

            <v-text-field
             :rules="passwordRules"
              v-model="loginForm.password"
              label="Senha"
              type="password"
              density="comfortable"
              variant="outlined"
              rounded="xl"
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
        </v-form>
        
        <div class="flex flex-col items-center space-y-1">
          <a href="#" class="text-caption text-decoration-underline">Esqueci minha senha</a>
          <a href="newLogin" class="text-caption text-decoration-underline">Novo Login</a>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>
