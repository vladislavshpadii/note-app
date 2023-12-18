<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'

import NoteForm from '@/components/NoteForm.vue'
import NoteItem from '@/components/NoteItem.vue'
import DeleteNoteDialog from '@/components/dialogs/DeleteNoteDialog.vue'

import { useNotesStore } from '@/store/notes'

const { t } = useI18n()

const notesStore = useNotesStore()

const isDeleteDialogOpened = ref(false)

const notes = computed(() => notesStore.notes)

onMounted(() => {
    notesStore.fetchNotes()
})

const createNote = async (noteDescription: string) => {
    await notesStore.createNote(noteDescription)
}

const openDeleteNote = () => {
    isDeleteDialogOpened.value= true
}
</script>

<template>
    <h1>{{  t('home.title')  }}</h1>
    <NoteForm @submit-note="createNote" />
    <template v-for="note in notes">
        <NoteItem :note="note" class="col-6" @delete-note="openDeleteNote" />
    </template>
    <DeleteNoteDialog />
</template>