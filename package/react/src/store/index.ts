export const initialStore: {
    consoles: string[];
} = {
    consoles: [],
};

type Store = typeof initialStore;

type SetStoreCallback = (value: Store) => Partial<Store>;

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
