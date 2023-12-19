<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <router-link to="/" class="mx-3">{{  t('header.home') }}</router-link>
    <router-link to="/statistics">{{  t('header.statistics') }}</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/_index.scss";
</style>
