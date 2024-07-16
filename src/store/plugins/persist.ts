import { type PersistedStateFactoryOptions, type Serializer, createPersistedState } from "pinia-plugin-persistedstate";

import type { Pinia } from "pinia";
import type { Codec, Encryption } from "@nexuer/utils";

/**
 * Register Pinia Persist Plugin
 *
 * @param pinia Pinia instance Pinia
 */
export function registerPiniaPersistPlugin(pinia: Pinia, cfg: Config.DeveloperConfigurable) {
  pinia.use(createPersistedState(
    createPersistedStateOptions(cfg),
  ));
}

export function createPersistedStateOptions(cfg: Config.DeveloperConfigurable): PersistedStateFactoryOptions {
  return {
    storage: localStorage,
    key: id => `${cfg.prefix}__${id}`,
    serializer: customSerializer(cfg.codec, cfg.encryption),
  };
}

/**
 * Custom serializer for serialization and deserialization of storage data
 *
 * @param shouldEnableEncryption whether to enable encryption for storage data
 * @returns serializer
 */
function customSerializer(codec: Codec, enc: Encryption | null): Serializer {
  if (enc) {
    return {
      deserialize: (value) => {
        const decrypted = enc.decrypt(value);
        return codec.Unmarshal(decrypted);
      },
      serialize: (value) => {
        const serialized = codec.Marshal(value);
        return enc.encrypt(serialized);
      },
    };
  } else {
    return {
      deserialize: (value) => {
        return codec.Unmarshal(value);
      },
      serialize: (value) => {
        return codec.Marshal(value);
      },
    };
  }
}
