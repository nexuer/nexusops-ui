import { defineStore } from "pinia";
import { APP_STORE_ID } from "../../constants";
import { globalConfig } from "~/config";

interface AppState {
  // project config
  config: Config.Config;
  // Page loading status
  pageLoading: boolean;
}

// export const useAppStore = defineStore(APP_STORE_ID, () => {
//   const state = ref<AppState>({
//     config: globalConfig,
//     pageLoading: false,
//   });

//   return {
//     state,
//   };
// }, {
//   persist: {
//     paths: ["state.config"],
//   },
// });

export const useAppStore = defineStore({
  id: APP_STORE_ID,
  persist: {
    paths: ["config"],
  },
  state: (): AppState => ({
    config: globalConfig,
    pageLoading: false,
  }),
});
