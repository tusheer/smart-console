import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Log as LogType, useStore } from '../store';
import {
    Container,
    ListContainer,
    ListWraper,
    VarticalResizeBar,
} from './Styles';
import useWindowResize from './useWindowResize';
import Log from './Log';
import Details from './LogDetails';

const SmartConsoleDevTools = () => {
    const [isSsr, setIsSsr] = useState(true);
    const logs = useStore((sate) => sate.logs);

    const [selectedLog, setSelectedLog] = useState<null | LogType>(null);

    const { mouseMove, getResizeProps } = useWindowResize({
        position: 'vertical',
    });

    useEffect(() => {
        setIsSsr(false);
    }, []);

    const handleSelectLog = (log: LogType) => () => setSelectedLog(log);

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <Container varticalHeight={mouseMove}>
                <VarticalResizeBar {...getResizeProps()} />
                <ListWraper>
                    <ListContainer data-testid="ul">
                        {logs.map((value, index) => {
                            return (
                                <Log
                                    log={value}
                                    key={index}
                                    onSelect={handleSelectLog}
                                />
                            );
                        })}
                    </ListContainer>
                    <Details selectedLog={selectedLog} />
                </ListWraper>
            </Container>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
