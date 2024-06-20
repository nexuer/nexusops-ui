// vite.config.mts
import { generateConfig } from "file:///E:/fly/github/nexuer/nexusops-ui/packages/vite/dist/index.mjs";
import AutoImport from "file:///E:/fly/github/nexuer/nexusops-ui/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.11.0_vue@3.4.29_typescript@5.4.5___rollup@3.29.4/node_modules/unplugin-auto-import/dist/vite.js";
import vue from "file:///E:/fly/github/nexuer/nexusops-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.5__vue@3.4.29_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = generateConfig({
  overrides: {
    plugins: [
      vue(),
      AutoImport({
        dts: "src/types/auto-imports.d.ts",
        imports: [
          "vue",
          "vue-i18n"
        ]
      })
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcZmx5XFxcXGdpdGh1YlxcXFxuZXh1ZXJcXFxcbmV4dXNvcHMtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGZseVxcXFxnaXRodWJcXFxcbmV4dWVyXFxcXG5leHVzb3BzLXVpXFxcXHZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZmx5L2dpdGh1Yi9uZXh1ZXIvbmV4dXNvcHMtdWkvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZ2VuZXJhdGVDb25maWcgfSBmcm9tIFwiQG5leHVzb3BzLXVpL3ZpdGVcIjtcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbmZpZyh7XHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICBkdHM6IFwic3JjL3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzXCIsXHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICAgIFwidnVlLWkxOG5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxzQkFBc0I7QUFDN1QsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsZUFBZTtBQUFBLEVBQzVCLFdBQVc7QUFBQSxJQUNULFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
