import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Log, useStore } from '../store';
import {
    Container,
    List,
    ListContainer,
    ListWraper,
    LogBody,
    LogDetails,
    LogStatus,
} from './Styles';
import useResize from './useResize';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    const [selectedLog, setSelectedLog] = useState<null | Log>(null);

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const handleSelectLog = (log: Log) => () => setSelectedLog(log);

    const { ref } = useResize({
        position: 'top-bottom',
    });

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <Container ref={ref}>
                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        background: 'red',
                        cursor: 'e-resize',
                    }}></div>
                <ListWraper>
                    <ListContainer data-testid="ul">
                        {logs.map((value, index) => {
                            return (
                                <List
                                    onClick={handleSelectLog(value)}
                                    key={index}>
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
                </ListWraper>
            </Container>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
