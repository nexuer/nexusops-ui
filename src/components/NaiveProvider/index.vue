<script setup lang="ts">
import { createTextVNode } from "vue";

defineOptions({
  name: "AppProvider",
});

const ContextHolder = defineComponent({
  name: "ContextHolder",
  setup() {
    function register() {
      window.$loadingBar = useLoadingBar();
      window.$dialog = useDialog();
      window.$message = useMessage();
      window.$notification = useNotification();
    }

    register();

    return () => createTextVNode();
  },
});
</script>

<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <ContextHolder />
          <slot />
          <NGlobalStyle />
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>
