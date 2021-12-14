<template>
  <q-page class="column">
    <q-img
      class="main-image"
      src="/images/main.jpg"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        {{ $t('main.description').toString() }}
      </div>
    </q-img>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
});
</script>
<style lang="sass" scoped>
.main-image
  height: calc(100vh - 130px)
</style>
