import { defineStore } from "pinia";
import { APP_STORE_ID } from "../../constants";
import { DEFAULT_USER_SETTING } from "~/setting";

interface AppState {
  // project config
  userSetting: Setting.User;
  // Page loading status
  pageLoading: boolean;
}

export const useAppStore = defineStore(APP_STORE_ID, () => {
  const state = ref<AppState>({
    userSetting: DEFAULT_USER_SETTING,
    pageLoading: false,
  });

  function getUserSetting(): Setting.User {
    return state.value.userSetting;
  }

  return {
    getUserSetting,
  };
}, {
  persist: {
    paths: ["state.userSetting"],
  },
});
