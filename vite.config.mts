import { generateConfig } from "@nexusops-ui/vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";

export default generateConfig({
  overrides: {
    plugins: [
      vue(),
      AutoImport({
        dts: "src/types/auto-imports.d.ts",
        imports: [
          "vue",
          "vue-i18n",
        ],
      }),
    ],
  },
});
