<script lang="ts" setup>
import { logger } from "@nexuer/utils";

logger.info("NexusOps UI Ready!  ⸜(๑'ᵕ'๑)⸝⋆*");
</script>

<template>
  <NConfigProvider class="wh-full">
    <NaiveUIProvider>
      <RouterView />
    </NaiveUIProvider>
  </NConfigProvider>
</template>
