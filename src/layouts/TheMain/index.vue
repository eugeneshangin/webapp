<template>
  <q-layout
    view="hHh Lpr fFf"
    @resize="resize"
  >
    <Header
      :is-small="isSmall"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      class="bg-grey-2 justify-center flex"
    >
      <q-toolbar>
        <q-toolbar-title class="flex justify-center items-center">
          <div class="text-black footer">
            {{ $t('footer.description').toString() }}
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from './Header.vue'

export default defineComponent({
  components: {
    Header
  },

  setup () {
    const isSmall = ref(false)
    return {
      resize: (size: { height: number, width: number }) => {
        isSmall.value = size.width < 700
      },
      isSmall
    }
  }
})
</script>
<style lang="sass" scoped>
.footer
  font-size: 12px
</style>
