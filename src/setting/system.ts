import { CodecFactory, EncryptionFactory } from "@nexuer/utils";

const { DEV, MODE } = import.meta.env;

export const SYSTEM_SETTING: Setting.System = {
  encryption: DEV ? null : EncryptionFactory.newAesEncryption({ key: "nexusops-ui@", iv: "@nexusops-ui" }),
  codec: CodecFactory.newJson(),
  prefix: `${__APP_INFO__.pkg.name}_${MODE}`.toUpperCase(),
  locales: [
    {
      name: "简体中文",
      key: "zh",
    },
    {
      name: "English",
      key: "en",
    },
  ],
};
