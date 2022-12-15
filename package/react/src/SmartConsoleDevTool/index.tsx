import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Log, useStore } from '../store';
import {
    Container,
    List,
    ListContainer,
    LogBody,
    LogDetails,
    LogStatus,
} from './Styles';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    const [selectedLog, setSelectedLog] = useState<null | Log>(null);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const handleSelectLog = (log: Log) => () => setSelectedLog(log);

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <Container>
                <ListContainer data-testid="ul">
                    {logs.map((value, index) => {
                        return (
                            <List onClick={handleSelectLog(value)} key={index}>
                                <LogStatus status={value.type}>
                                    {value.type}
                                </LogStatus>
                                <LogBody>
                                    <code>{value.data}</code>
                                </LogBody>
                            </List>
                        );
                    })}
                </ListContainer>
                {selectedLog ? (
                    <LogDetails>{JSON.stringify(selectedLog)}</LogDetails>
                ) : null}
            </Container>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
