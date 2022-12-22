import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Log, useStore } from '../store';
import {
    Container,
    HorizontalResizeBar,
    List,
    ListContainer,
    ListWraper,
    LogBody,
    LogDetails,
    LogStatus,
    VarticalResizeBar,
} from './Styles';
import useWindowResize from './useWindowResize';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    const [selectedLog, setSelectedLog] = useState<null | Log>(null);

    const { mouseMove, props } = useWindowResize({
        position: 'vertical',
    });

    const { mouseMove: logDetailsMouseMove, props: logDetailsProps } =
        useWindowResize({
            position: 'horizontal',
        });

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const handleSelectLog = (log: Log) => () => setSelectedLog(log);

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <Container varticalHeight={mouseMove}>
                <VarticalResizeBar {...props} />
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
                        <LogDetails horizontalWidth={logDetailsMouseMove}>
                            <HorizontalResizeBar {...logDetailsProps} />
                            {JSON.stringify(selectedLog)}
                        </LogDetails>
                    ) : null}
                </ListWraper>
            </Container>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
