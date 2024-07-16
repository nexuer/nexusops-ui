<script lang="ts" setup>
import { logger } from "@nexuer/utils";
import { useAppStore } from "./store/modules/app";

const { t } = useI18n();
const appStore = useAppStore();
// appStore.config.userConfigurable.localeKey = "en";
console.log(appStore.config);
logger.info("NexusOps UI Ready!  ⸜(๑'ᵕ'๑)⸝⋆*");
</script>

<template>
  <div>{{ t("hello") }}</div>
  <NConfigProvider class="wh-full">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
