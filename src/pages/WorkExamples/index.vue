<template>
  <q-page class="сolumn page">
    <div class="text-h5 flex justify-center works-title">
     {{ $t('works.title').toString() }}
    </div>
    <div class="row col q-gutter-x-lg q-gutter-y-lg q-pt-lg justify-center">
      <q-img
        v-for="(work, i) in works"
        :key="i"
        :src="work.url"
        class="works-img"
      />
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { worksStore } from 'src/store'

export default defineComponent({

  setup () {
    onMounted(async () => {
      await worksStore.actions.loadWorks()
    })

    const works = computed(() => worksStore.state.works)
    return {
      works
    }
  }
});
</script>
<style lang="sass" scoped>
.page
  margin: 8vh 8vh 0 8vh

.works-title
  color: #444
  font-size: 24px
  letter-spacing: 2px
  line-height: 22px
.works-img
  width: 30vh
  height: 50vh
</style>
