import { useEffect, useState } from 'react';
import { useStore } from '../store';
import { Container, List, ListContainer } from './Styles';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    if (isSsr) return null;

    return (
        <Container>
            <ListContainer data-testid="ul">
                {logs.map((value, index) => {
                    return <List key={index}>{value}</List>;
                })}
            </ListContainer>
        </Container>
    );
};

export default SmartConsoleDevTools;
