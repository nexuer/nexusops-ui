import type { App } from "vue";
import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";

export async function setupI18n(app: App) {
  const messages = Object.fromEntries(
    Object.entries(
      import.meta.glob<{ default: any }>("./locales/*.json", { eager: true }),
    ).map(([key, value]) => {
      return [key.slice(10, -5), value.default];
    }),
  );
  const opts: I18nOptions = {
    legacy: false,
    locale: "zh",
    fallbackLocale: "zh",
    messages,
    sync: true,
    availableLocales: Object.keys(messages),
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  };
  const i18n = createI18n(opts);
  app.use(i18n);
}
