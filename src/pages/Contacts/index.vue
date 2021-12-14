<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 ">
      Оставить заявку
    </div>
    <div>
      <q-input
        :model-value="text"
        v-model="text"
        type="text"
        label="Укажите свои контактные данные и кратко опишите что бы вы хотели"
      />
    </div>
    <q-btn
      class="q-mt-lg"
      label="Отправить"
      flat
      dense
      :color="buttonColor"
      @click="add"
    />
  </q-page>
</template>
<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import { message } from 'src/api'
export default defineComponent({
  setup () {
    const text = ref('')
    const buttonColor = computed(() => text.value ? 'primary' : 'black')
    return {
      text,
      buttonColor,
      add: () => {
        void message.send({
          text: text.value
        })
      }
    }
  }
})
</script>
