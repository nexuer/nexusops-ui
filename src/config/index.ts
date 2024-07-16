import { CodecFactory, EncryptionFactory } from "@nexuer/utils";

function getAppRunKeyPrefix(env: ImportMetaEnv): string {
  return `${__APP_INFO__.pkg.name}_${__APP_INFO__.pkg.version}_${env.mode}`.toUpperCase();
}

const locales: Config.Locale[] = [
  {
    name: "简体中文",
    key: "zh",
  },
  {
    name: "English",
    key: "en",
  },
];

export const globalConfig = newConfig(import.meta.env);

function newConfig(env: ImportMetaEnv): Config.Config {
  const cfg: Config.Config = {
    developerConfigurable: {
      encryption: env.DEV ? null : EncryptionFactory.newAesEncryption({ key: "nexusops-ui@", iv: "@nexusops-ui" }),
      codec: CodecFactory.newJson(),
      prefix: getAppRunKeyPrefix(env),
      locales,
    },
    userConfigurable: {
      localeKey: locales[0].key,
    },
  };
  return cfg;
}
