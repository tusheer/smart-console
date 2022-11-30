import { useCallback, useSyncExternalStore } from 'react';
import { store } from '../store';

const SmartConsoleDevTools = () => {
    const state = useSyncExternalStore(
        store.subscribe,
        useCallback(() => store.getState(), [])
    );

    return (
        <ul>
            {state.consoles.map((value, index) => {
                return <li key={index}>{value}</li>;
            })}
        </ul>
    );
};

export default SmartConsoleDevTools;
