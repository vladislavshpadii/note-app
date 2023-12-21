import { shallowMount } from "@vue/test-utils";

import { mockedI18n } from "../../../test-utils/mockedI18n";
import DeleteNoteDialog from "../DeleteNoteDialog.vue";

describe("DeleteNoteDialog", () => {
  it("close-dialog when close button is clicked", async () => {
    const wrapper = shallowMount(DeleteNoteDialog, {
      global: {
        plugins: [mockedI18n],
      },
      props: {
        note: {
          id: "1",
          description: "Test Note",
        },
      },
      emits: ["close-dialog", "deletion-confirm"],
    });

    await wrapper.find(".dialog-container button.mx-3").trigger("click");

    expect(wrapper.emitted("close-dialog")).toBeTruthy();
    expect(wrapper.emitted("deletion-confirm")).toBeFalsy();
  });

  it("close dialog when delete button is clicked", async () => {
    const wrapper = shallowMount(DeleteNoteDialog, {
      global: {
        plugins: [mockedI18n],
      },
      props: {
        note: {
          id: "1",
          description: "Test Note",
        },
      },
      emits: ["close-dialog", "deletion-confirm"],
    });

    await wrapper.find(".dialog-container button.error").trigger("click");

    expect(wrapper.emitted("deletion-confirm")).toBeTruthy();
    expect(wrapper.emitted("close-dialog")).toBeFalsy();
  });
});
