import { useEffect, useState } from "preact/hooks";
import optionsStorage from "../utl/options-storage";

export const useBrowserStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (initialValue) {
      optionsStorage.set({ [key]: initialValue });
    }
    /* eslint-disable react-hooks/rules-of-hooks */

    useEffect(() => {
      async function setInitial() {
        const options = await optionsStorage.getAll();
        setStoredValue(options[key]);
      }

      setInitial();
    }, []);
    /* eslint-enable */
    return initialValue;
  });

  const setValue = async value => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    optionsStorage.set({ [key]: newValue });
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
