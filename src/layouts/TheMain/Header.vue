<template>
  <q-header
    class="bg-white row items-center header"
    elevated
  >
    <q-toolbar>
      <q-toolbar-title class="row items-center justify-around">
        <div
          class="logo cursor-pointer"
          @click="goTo('main')"
        >
          {{ $t('header.name').toString() }}
        </div>
        <div class="row q-gutter-x-md">
          <div
            class="main-menu cursor-pointer"
            @click="goTo('education')"
          >
            {{ $t('header.education').toString() }}
          </div>
          <div
            class="main-menu cursor-pointer"
            @click="goTo('examples')">
            {{ $t('header.works').toString() }}
          </div>
          <div
            class="main-menu cursor-pointer"
            @click="goTo('contacts')"
          >
            {{ $t('header.contacts').toString() }}
          </div>
          <q-icon
            name="o_photo_camera"
            color="black"
            class="cursor-pointer"
            @click="openInstagram"
          />
          <q-icon
            name="o_translate"
            color="black"
            class="cursor-pointer"
          >
            <q-menu>
              <q-list>
                <q-item
                  clickable
                  @click="changeLang('ru')"
                >
                  <q-item-section>
                    Русский
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="changeLang('en-US')"
                >
                  <q-item-section>
                    English
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-icon>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { openURL } from 'quasar'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const router = useRouter()
    const i18n = useI18n()
    return {
      openInstagram: () => {
        openURL('https://www.instagram.com/lena_ipatova_')
      },
      goTo: (name: string) => {
        void router.push({
          name
        })
      },
      changeLang: (locale: string) => {
        i18n.locale.value = locale
      }
    }
  },
})
</script>
<style lang="sass" scoped>
.header
  height: 80px

.logo
  font-size: 22px
  color: black
  font-weight: 600
  letter-spacing: 1px

.main-menu
  color: #464646
  font-size: 13px
  font-weight: 400
  position: relative
  text-transform: uppercase
  &:hover
    color: #999
</style>
