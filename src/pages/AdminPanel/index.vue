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
import { defineComponent, ref, computed } from 'vue'
import { worksStore } from 'src/store'
export default defineComponent({
  setup () {
    const url = ref('')
    const buttonColor = computed(() => url.value ? 'primary' : 'black')
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
