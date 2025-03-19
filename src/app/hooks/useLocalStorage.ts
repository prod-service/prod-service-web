import { useState, useEffect } from "react";

function isSSR() {
  return typeof window === "undefined";
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (isSSR()) return initialValue; // SSR: return init val
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Помилка при отриманні з localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (!isSSR()) {
      try {
        localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error("Помилка при збереженні в localStorage:", error);
      }
    }
  }, [key, storedValue]);

  const removeItem = () => {
    if (!isSSR()) {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    }
  };

  return [storedValue, setStoredValue, removeItem] as const;
}
