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
import useWindowResize from './useWindowResize';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    const [selectedLog, setSelectedLog] = useState<null | Log>(null);

    const { mouseMove, props } = useWindowResize({
        position: 'top-bottom',
    });

    const { mouseMove: logDetailsMouseMove, props: logDetailsProps } =
        useWindowResize({
            position: 'left-right',
        });

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const handleSelectLog = (log: Log) => () => setSelectedLog(log);

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <Container
                style={{
                    height:
                        mouseMove !== null
                            ? `${window.innerHeight - mouseMove}px`
                            : '300px',
                }}>
                <div
                    {...props}
                    style={{
                        width: '100%',
                        height: '2px',
                        background: 'white',
                        cursor: 'row-resize',
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
                        <LogDetails
                            style={{
                                width:
                                    mouseMove !== null
                                        ? `${logDetailsMouseMove}px`
                                        : '400px',
                            }}>
                            <div
                                {...logDetailsProps}
                                style={{
                                    height: '100%',
                                    width: '2px',
                                    background: '#ffffff15',
                                    position: 'absolute',
                                    left: '0',
                                    top: '0',
                                    cursor: 'ew-resize',
                                }}></div>
                            {JSON.stringify(selectedLog)}
                        </LogDetails>
                    ) : null}
                </ListWraper>
            </Container>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
