<template>
  <q-page class="column items-center justify-center q-gutter-y-md">
    <div class="text-h5 text-bold">
      Авторизация
    </div>
    <q-input
      :model-value="name"
      v-model="name"
      style="min-width: 20%"
      label="Логин"
    />
    <q-input
      :model-value="password"
      v-model="password"
      label="Пароль"
      style="min-width: 20%"
      type="password"
    />
    <q-btn
      class="q-mt-lg"
      label="Войти"
      style="min-width: 20%"
      flat
      dense
      :color="buttonColor"
      @click="login"
    />
  </q-page>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { userStore } from 'src/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()
    const isCanAuth = computed(() => name.value && password.value)
    const buttonColor = computed(() => isCanAuth.value ? 'primary' : 'black')
    const name = ref('')
    const password = ref('')
    return {
      name,
      password,
      buttonColor,
      login: async () => {
        if (!isCanAuth.value) return
        await userStore.actions.auth({
          login: name.value,
          password: password.value
        })
        await router.push({ name: 'admin' })
      }
    }
  }
});
</script>
