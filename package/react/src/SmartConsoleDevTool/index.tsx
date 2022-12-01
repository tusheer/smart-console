import { useEffect, useState } from 'react';
import { useStore } from '../store';
import SmartConsoleProvider from './SmartConsoleProvider';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    if (isSsr) return null;

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'red',
            }}>
            {logs.map((value, index) => {
                return <li key={index}>{value}</li>;
            })}
            <SmartConsoleProvider />
        </div>
    );
};

export default SmartConsoleDevTools;
