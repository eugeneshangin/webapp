<template>
  <q-page class="сolumn page">
    <div class="text-h5 flex justify-center works-title">
     {{ $t('works.title').toString() }}
    </div>
    <div class="row col q-gutter-x-lg q-gutter-y-lg q-pt-lg justify-center">
      <q-img
        v-for="(link, i) in links"
        :key="i"
        :src="link"
        class="works-img"
      />
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  setup () {
    return {
      links: [
        'https://texterra.ru/upload/img/20-06-2018/09.jpg',
        'https://texterra.ru/upload/img/18-10-2019/3/1.jpg',
        'https://texterra.ru/upload/img/20-06-2018/04.jpg',
        'https://texterra.ru/upload/img/20-06-2018/05.jpg',
        'https://texterra.ru/upload/img/20-06-2018/07.jpg',
        'https://texterra.ru/upload/img/20-06-2018/08.jpg',
        'https://texterra.ru/upload/img/20-06-2018/06.jpg',
        'https://texterra.ru/upload/img/20-06-2018/02.jpg',
        'https://texterra.ru/upload/img/20-06-2018/03.jpg',
      ]
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
