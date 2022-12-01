import { useEffect, useState } from 'react';
import { useStore } from '../store';
import { Container } from './Styles';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    if (isSsr) return null;

    return (
        <Container>
            {logs.map((value, index) => {
                return <li key={index}>{value}</li>;
            })}
        </Container>
    );
};

export default SmartConsoleDevTools;
