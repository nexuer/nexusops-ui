import type { App } from "vue";
import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";

async function loadMessages(langs: Config.Locale[]) {
  const messages = {};

  for (const lang of langs) {
    const module = await import(`./lang/${lang.key}.json`);
    messages[lang.key] = module.default;
  }

  return messages;
};

export async function setupI18n(app: App, cfg: Config.Config) {
  const messages = await loadMessages(cfg.developerConfigurable.locales);
  const opts: I18nOptions = {
    legacy: false,
    locale: cfg.userConfigurable.localeKey,
    fallbackLocale: cfg.userConfigurable.localeKey,
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
