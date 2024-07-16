declare namespace Config {
  import type { Codec, Encryption } from "@nexuer/utils";

  interface UserConfigurable {
    localeKey: string;
  }

  interface Locale {
    name: string;
    key: string;
  }

  interface DeveloperConfigurable {
    encryption: Encryption | null;
    codec: Codec;
    prefix: string;
    locales: Locale[];
  }

  interface Config {
    userConfigurable: UserConfigurable;
    developerConfigurable: DeveloperConfigurable;
  }

}
