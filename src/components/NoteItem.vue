<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { Note } from '@/types/note'
import routeNames from '@/router/route-names'

const { t } = useI18n()
const router = useRouter()

const props = defineProps<{
   note: Note 
}>()

const emits = defineEmits(['delete-note'])

const deleteNote = () => {
    emits('delete-note', props.note)
}
</script>

<template>
    <div class="note-item pa-5 ma-3">
        <p class="note-description" v-html="props.note.description" />
        <button class="mx-3" @click="router.push({ name: routeNames.editNote, params: { id: props.note.id } })">{{  t('note.actions.edit') }}</button>
        <button class="error" @click="deleteNote">{{  t('note.actions.delete') }}</button>
    </div>
</template>

<style lang="scss" scoped>
.note {
    &-item {
        border-radius: 8px;
        box-shadow: 29px 27px 55px -11px rgba(0,0,0,0.75);
    }

    &-description {
        text-align: left;
        white-space-collapse: preserve;
        text-wrap: wrap;
    }
}
</style>