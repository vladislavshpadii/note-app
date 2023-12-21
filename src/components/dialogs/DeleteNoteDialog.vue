<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import { Note } from "@/types/note";

const props = defineProps<{
  note: Note;
}>();

const emits = defineEmits(["close-dialog", "deletion-confirm"]);

const { t } = useI18n();

const close = () => {
  emits("close-dialog");
};

const deleteNote = () => {
  emits("deletion-confirm");
};

const description = computed(() => props.note?.description || "");
</script>

<template>
  <div class="dialog-overlay" @click="close"></div>
  <div class="dialog-container secondary pa-5">
    <p v-html="t('note.delete.message', { description })"></p>
    <div class="d-flex justify-end">
      <button class="mx-3" @click="close">
        {{ t("note.actions.cancel") }}
      </button>
      <button class="error" @click="deleteNote">
        {{ t("note.actions.delete") }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog-overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.8);
}

.dialog-container {
  position: fixed;
  top: 0px;
  width: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1111;
  border-radius: 8px;
}
</style>
