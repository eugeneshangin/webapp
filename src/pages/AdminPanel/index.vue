<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 ">
      Примеры работ
    </div>
    <div>
      <q-input
        :model-value="url"
        v-model="url"
        type="text"
        label="Укажите ссылку на пример работы"
      />
    </div>
    <q-btn
      class="q-mt-lg"
      label="Добавить"
      flat
      dense
      :color="buttonColor"
      @click="add"
    />
  </q-page>
</template>
<script lang='ts'>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { worksStore, userStore } from 'src/store'
export default defineComponent({
  setup () {
    const url = ref('')
    const buttonColor = computed(() => url.value ? 'primary' : 'black')
    onMounted(async () => {
      await userStore.actions.loadMe()
    })
    return {
      url,
      buttonColor,
      add: () => {
        void worksStore.actions.addWorkExample({ url: url.value })
        url.value = ''
      }
    }
  }
})
</script>
