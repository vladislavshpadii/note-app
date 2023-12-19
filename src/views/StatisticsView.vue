<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import { useNotesStore } from '@/store/notes'

const { t } = useI18n()

const noteStore = useNotesStore()

const notes = computed(() => noteStore.notes)

const amountCharactersInNote = computed(() => notes.value.reduce((acc, item) => {
    acc += item.description.length
    return acc
}, 0))

onMounted(() => {
    noteStore.fetchNotes()
})
</script>

<template>
    <h1>{{  t('statistics.title')  }}</h1>

    <table class="statistics-table">
        <tbody>
            <tr>
                <td class="pa-1 white--border">{{  t('statistics.countOfNotes')  }} </td>
                <td class="pa-1 white--border">{{ notes.length }}</td>
            </tr>
            <tr>
                <td class="pa-1 white--border">{{  t('statistics.countOfCharacters')  }}</td>
                <td class="pa-1 white--border">{{ amountCharactersInNote }}</td>
            </tr>
        </tbody>
    </table>
</template>
