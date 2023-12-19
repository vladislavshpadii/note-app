<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <h1>{{ t('pageNotFound.title') }}</h1>
    <p>{{ t('pageNotFound.description') }}</p>
</template>