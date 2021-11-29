import { useEffect, useState } from "preact/hooks";
import optionsStorage from "../utl/options-storage";

export const fromStorage = (key, initialValue) => {
  const l = useBrowserStorage(key, initialValue);
  useEffect(() => {
    async function setInitial() {
      const options = await optionsStorage.getAll();
      l[1](options[key]);
    }

    setInitial();
  }, []);
  return l[0];
};

export function useBrowserStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (initialValue) {
      optionsStorage.set({ [key]: initialValue });
    }
    return initialValue;
  });

  const setValue = async (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    optionsStorage.set({ [key]: newValue });
    setStoredValue(newValue);
  };

  return [[storedValue, setValue], setStoredValue];
}
