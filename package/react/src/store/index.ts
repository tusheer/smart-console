import { useCallback, useSyncExternalStore } from 'react';

type Store = typeof initialStore;
type CallBackFunction<S> = (v: Store) => S;
type SetStoreCallback = (value: Store) => Partial<Store>;

export type LogType = 'error' | 'log' | 'success' | 'info' | 'describe';

export type Log = {
    type: LogType;
    data: any;
    time: Date;
    id: string;
};

type InitailState = {
    logs: Log[];
    selectedLog: Log | null;
};

export const initialStore: InitailState = {
    logs: [],
    selectedLog: null,
};

export const createStore = (initialStore: Store) => {
    let state = initialStore;
    const getState = () => state;
    const listeners = new Set<Function>();
    const setState = (fn: SetStoreCallback) => {
        state = {
            ...state,
            ...fn(state),
        };
        listeners.forEach((l) => l());
    };
    const subscribe = (listener: Function) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    };
    return { getState, setState, subscribe };
};

export const store = createStore(initialStore);

export const useStore = <V>(callback: CallBackFunction<V>): V => {
    return useSyncExternalStore(
        store.subscribe,
        useCallback(() => callback(store.getState()), []),
        () => callback(initialStore)
    ) as V;
};
