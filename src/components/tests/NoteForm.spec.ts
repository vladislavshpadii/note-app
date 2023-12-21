import { shallowMount } from "@vue/test-utils";

import { mockedI18n } from "../../test-utils/mockedI18n";
import router from "../../test-utils/router";
import NoteForm from "../NoteForm.vue";

describe("NoteForm", () => {
  it("event when submit button is clicked", async () => {
    const wrapper = shallowMount(NoteForm, {
      global: {
        plugins: [mockedI18n, router],
      },
      emits: ["submitNote", "deleteNote"],
    });

    await wrapper.find("[data-submit-button]").trigger("click");

    expect(wrapper.emitted("deleteNote")).toBeFalsy();
  });

  it("event when delete button is clicked", async () => {
    const wrapper = shallowMount(NoteForm, {
      global: {
        plugins: [mockedI18n, router],
      },
      props: {
        isEdit: true,
      },
      emits: ["submitNote", "deleteNote"],
    });

    await wrapper.find("[data-delete-button]").trigger("click");

    expect(wrapper.emitted("submitNote")).toBeFalsy();
  });
});
