<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import { Note } from "@/types/note";

const props = defineProps<{
  note?: Note | null;
  isEdit?: boolean;
}>();

const { t } = useI18n();

const emits = defineEmits(["submitNote", "deleteNote"]);

// eslint-disable-next-line vue/no-setup-props-destructure
const noteDescription = ref(props.note?.description || "");
const noteError = ref<null | string>(null);

const router = useRouter();

const submitNote = async () => {
  if (noteDescription.value) {
    noteError.value = null;
    emits("submitNote", noteDescription.value);
    if (!props.isEdit) {
      noteDescription.value = "";
    }
  } else {
    noteError.value = "Note description required";
  }
};

const deleteNote = () => {
  emits("deleteNote", props.note?.id);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && event.ctrlKey) {
    submitNote();
  }
};
</script>

<template>
  <div class="note-form">
    <textarea
      v-model="noteDescription"
      :class="['note-textarea', { 'error--border': noteError }]"
      @keydown="handleKeydown"
    >
    </textarea>
    <p class="note-error error--text">{{ noteError }}</p>
    <button v-if="isEdit" class="mx-3" @click="router.go(-1)">
      {{ t("note.actions.cancel") }}
    </button>
    <button data-submit-button @click="submitNote">
      {{ isEdit ? t("note.actions.save") : t("note.actions.create") }}
    </button>
    <button
      v-if="isEdit"
      class="error mx-3"
      data-delete-button
      @click="deleteNote"
    >
      {{ t("note.actions.delete") }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.note {
  &-textarea {
    width: 100%;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
  }

  &-error {
    height: 20px;
  }
}
</style>
