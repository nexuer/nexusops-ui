import { System, sys } from "typescript";
import type { App } from "vue";
import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";
import { useAppStore } from "~/store/modules/app";

async function loadMessages(langs: Setting.Locale[]) {
  const messages = {};

  for (const lang of langs) {
    const module = await import(`./lang/${lang.key}.json`);
    messages[lang.key] = module.default;
  }

  return messages;
};

export async function setupI18n(app: App, system: Setting.System, user: Setting.User) {
  const messages = await loadMessages(system.locales);
  const opts: I18nOptions = {
    legacy: false,
    locale: user.locale,
    fallbackLocale: system.locales[0].key,
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
