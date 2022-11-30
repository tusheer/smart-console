import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { store } from '../store';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const state = useSyncExternalStore(
        store.subscribe,
        useCallback(() => store.getState(), []),
        () => store.getState()
    );

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const logs = isSsr ? [] : state.consoles;

    return (
        <ul>
            {logs.map((value, index) => {
                return <li key={index}>{value}</li>;
            })}
        </ul>
    );
};

export default SmartConsoleDevTools;
