import { createI18n } from "vue-i18n";

export const mockedI18n = createI18n({
  legacy: false,
  missingWarn: false,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  warnHtmlInMessage: false,
  fallbackWarn: false,
});
