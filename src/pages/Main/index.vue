<template>
  <q-page>
    <div class="q-col-gutter-md row items-center justify-center row items-center justify-center page">
      <q-img
        src="https://sun9-75.userapi.com/impf/c630224/v630224209/2114c/c--po2yzVm4.jpg?size=2560x1438&quality=96&sign=cf37259a37e0378167b3c48063ded854&type=album"
        class="col"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ $t('main.description').toString() }}
        </div>
      </q-img>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>
<style lang="sass" scoped>
.page
  margin: 8vh
</style>
