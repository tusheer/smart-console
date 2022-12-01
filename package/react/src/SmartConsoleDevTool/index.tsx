import { useEffect, useState } from 'react';
import { useStore } from '../store';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const state = useStore((sate) => sate.consoles);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const logs = isSsr ? [] : state;

    return (
        <ul>
            {logs.map((value, index) => {
                return <li key={index}>{value}</li>;
            })}
        </ul>
    );
};

export default SmartConsoleDevTools;
