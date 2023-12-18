<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Note } from '@/types/note'
import { useNotesStore } from '@/store/notes'
import routeNames from '@/router/route-names'

import NoteForm from '@/components/NoteForm.vue'

const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()

let currentNote = ref<Note | null>(null)

const noteId = computed(() => route.params.id as string)

const loadingNote = computed(() => notesStore.loadingNote)

const updateNote = async (description: string) => {
    await notesStore.updateNote({ id: noteId.value, description })
    router.push({ name: routeNames.home })
}

watch(
    () => noteId, 
    async (id) => {
        currentNote.value = await notesStore.fetchNoteById(id.value as string)
    },
    {
        immediate: true
    }
)
</script>

<template>
    <NoteForm v-if="!loadingNote && currentNote" :note=currentNote @submit-note="updateNote" :is-edit="true" />
</template>