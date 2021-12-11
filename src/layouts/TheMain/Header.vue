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
        <div
          v-if="!isSmall"
          class="row q-gutter-x-md"
        >
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
            <q-menu auto-close>
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
        <div v-else>
          <q-icon
            name="o_menu"
            color="black"
            class="cursor-pointer"
          >
            <q-menu auto-close>
              <q-list>
                <q-item
                  clickable
                  @click="goTo('education')"
                >
                  <q-item-section>
                    {{ $t('header.education').toString() }}
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="goTo('examples')"
                >
                  <q-item-section>
                    {{ $t('header.works').toString() }}
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="goTo('contacts')"
                >
                  <q-item-section>
                    {{ $t('header.contacts').toString() }}
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="openInstagram"
                >
                  <q-item-section>
                    Instagram
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="changeLang('')"
                >
                  <q-item-section>
                    {{ language }}
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
import { defineComponent, computed } from 'vue'
import { openURL } from 'quasar'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    isSmall: {
      type: Boolean
    }
  },
  setup() {
    const router = useRouter()
    const i18n = useI18n()
    const language = computed(() => i18n.locale.value === 'ru' ? 'English' : 'Русский')
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
        if (!locale) {
          i18n.locale.value = i18n.locale.value === 'ru' ? 'en-US' : 'ru'
          return
        }
        i18n.locale.value = locale
      },
      language
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
