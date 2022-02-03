<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 ">
      {{ $t('contacts.title').toString() }}
    </div>
    <div>
      <q-input
        :model-value="text"
        v-model="text"
        type="text"
        :label="$t('contacts.description').toString()"
      />
    </div>
    <q-btn
      class="q-mt-lg"
      :label="$t('contacts.send').toString()"
      flat
      dense
      :color="buttonColor"
      @click="add"
    />
  </q-page>
</template>
<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import api from 'src/api'
export default defineComponent({
  setup () {
    const text = ref('')
    const buttonColor = computed(() => text.value ? 'primary' : 'black')
    return {
      text,
      buttonColor,
      add: () => {
        void api.message.send({
          text: text.value
        })
      }
    }
  }
})
</script>
