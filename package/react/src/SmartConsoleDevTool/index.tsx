import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { useStore } from '../store';
import { Container, List, ListContainer, LogBody, LogStatus } from './Styles';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <Container>
                <ListContainer data-testid="ul">
                    {logs.map((value, index) => {
                        return (
                            <List key={index}>
                                <LogStatus> {value.type} </LogStatus>
                                <LogBody>{value.data}</LogBody>
                            </List>
                        );
                    })}
                </ListContainer>
            </Container>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
