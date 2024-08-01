declare namespace Setting {
  import type { Codec, Encryption } from "@nexuer/utils";

  type LocaleKey = "zh" | "en";
  type Theme = "light" | "dark" | "auto";

  interface User {
    locale: LocaleKey;
    theme: Theme;
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
