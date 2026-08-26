import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Lê um valor derivado de uma fonte externa (localStorage) de forma segura
 * para SSR: no servidor retorna `null`; no cliente, após a hidratação,
 * retorna o valor real. Evita `setState` dentro de `useEffect` só para
 * sincronizar leitura inicial.
 */
export function useSyncedValue<T>(getSnapshot: () => T): T {
  return useSyncExternalStore(
    noopSubscribe,
    getSnapshot,
    () => null as T
  );
}
