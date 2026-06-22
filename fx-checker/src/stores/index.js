import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrencyStore = defineStore("currency", () => {
  const loading = ref(false);
  const fetchData = async () => {
    loading.value = true;
    try {
      ///
    } catch (err) {
      ///
    } finally {
      loading.value = false;
    }
  };
});
