import type { PluginOption } from "vite";
import UnoCSS from "unocss/vite";

export function configureUnoCSS(): PluginOption {
  return UnoCSS();
}
