<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Note } from '@/types/note'
import { useNotesStore } from '@/store/notes'
import routeNames from '@/router/route-names'

import NoteForm from '@/components/NoteForm.vue'
import DeleteNoteDialog from '@/components/dialogs/DeleteNoteDialog.vue'

const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()

const currentNote = ref<Note | null>(null)

const isDeleteDialogOpened = ref(false)

const noteId = computed(() => route.params.id as string)

const loadingNote = computed(() => notesStore.loadingNote)

const updateNote = async (description: string) => {
    await notesStore.updateNote({ id: noteId.value, description })
    router.push({ name: routeNames.home })
}

const deleteNote = async () => {
    await notesStore.deleteNote(currentNote.value?.id || '')
    isDeleteDialogOpened.value = false
    router.push({ name: routeNames.home })
}

watch(
    () => noteId, 
    async (id) => {
        currentNote.value = await notesStore.fetchNoteById(id.value as string)
        if (!currentNote.value) {
            router.push({ name: routeNames.pageNotFound })
        }
    },
    {
        immediate: true
    }
)
</script>

<template>
    <NoteForm class="my-4" v-if="!loadingNote && currentNote" :note=currentNote @submit-note="updateNote" @delete-note="isDeleteDialogOpened = true" :is-edit="true" />
    <DeleteNoteDialog v-if="isDeleteDialogOpened && currentNote" :note="currentNote" @close-dialog="isDeleteDialogOpened = false" @deletion-confirm="deleteNote" />
</template>