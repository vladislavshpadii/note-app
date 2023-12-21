<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import DeleteNoteDialog from "@/components/dialogs/DeleteNoteDialog.vue";
import NoteForm from "@/components/NoteForm.vue";
import NoteItem from "@/components/NoteItem.vue";
import { useNotesStore } from "@/store/notes";
import { Note } from "@/types/note";

const { t } = useI18n();

const notesStore = useNotesStore();

const isDeleteDialogOpened = ref(false);
const selectedNote = ref<Note | null>(null);

const notes = computed(() => notesStore.notes);

onMounted(() => {
  notesStore.fetchNotes();
});

const createNote = async (noteDescription: string) => {
  await notesStore.createNote(noteDescription);
};

const openDeleteNote = (note: Note) => {
  selectedNote.value = note;
  isDeleteDialogOpened.value = true;
};

const deleteNote = async () => {
  await notesStore.deleteNote(selectedNote.value?.id || "");
  selectedNote.value = null;
  isDeleteDialogOpened.value = false;
};
</script>

<template>
  <h1>{{ t("home.title") }}</h1>
  <NoteForm @submit-note="createNote" />
  <div class="my-3">
    <template v-for="note in notes" :key="note.id">
      <NoteItem :note="note" class="col-12" @delete-note="openDeleteNote" />
    </template>
  </div>
  <DeleteNoteDialog
    v-if="isDeleteDialogOpened && selectedNote"
    :note="selectedNote"
    @close-dialog="isDeleteDialogOpened = false"
    @deletion-confirm="deleteNote"
  />
</template>
