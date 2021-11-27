import optionsStorage from '../utl/options-storage.js';
import { useCallback, useEffect, useState } from "preact/hooks";
export const useBrowserStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (initialValue) {
      optionsStorage.set({ [key]: initialValue })
    }
    useEffect(async () => { 
      const options = await optionsStorage.getAll();
      setStoredValue(options[key])
    }, [optionsStorage] )
    return initialValue;
  });

  const setValue = async value => {
    const newVal = value instanceof Function ? value(storedValue) : value;
    optionsStorage.set({ [key]: newVal })
    setStoredValue(newVal);
  };

  return [storedValue, setValue];
};