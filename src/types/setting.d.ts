declare namespace Setting {
  import type { Codec, Encryption } from "@nexuer/utils";

  type LocaleKey = "zh" | "en";

  interface User {
    locale: LocaleKey;
  }

  interface Locale {
    name: string;
    key: LocaleKey;
  }

  interface System {
    encryption: Encryption | null;
    codec: Codec;
    prefix: string;
    locales: Locale[];
  }

}
