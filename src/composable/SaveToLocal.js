import { ref, watch } from "vue";

export const useStorage = (key, data = null) => {
  const getData = () => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const saveData = () => {
    if (data.value === null || data.value === '') {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(data.value));
    }
  }

  const storedData = getData();

  if (storedData) {
    data = ref(storedData);
  } else {
    data = ref(data);
    saveData();
  }

  watch(data, saveData, { deep: true });

  console.log(key, data);
  return data
}
