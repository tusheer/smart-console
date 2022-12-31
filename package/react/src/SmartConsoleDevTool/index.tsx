import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Log as LogType, useStore } from '../store';
import {
    Container,
    ListContainer,
    ListWraper,
    VarticalResizeBar,
} from './Styles';
import useWindowResize from '../hooks/useWindowResize';
import Log from './Log';
import Details from './Details';
import { AnimatePresence, Variant, useAnimationControls } from 'framer-motion';

const getConsoleHeight = (mouseMove: number | null): string =>
    mouseMove !== null ? window.innerHeight - mouseMove + 'px' : '300px';

const generateAnimation = (
    height: number | string = 0,
    duration: number | undefined = undefined
): Variant => {
    const transition =
        typeof duration === 'undefined'
            ? { type: 'spring', bounce: 1, damping: 16 }
            : { duration };

    return {
        height,
        transition,
    };
};

const SmartConsoleDevTools = () => {
    const logs = useStore((sate) => sate.logs);

    const [isSsr, setIsSsr] = useState(true);
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);
    const [isOpenConsole, setIsOpenConsole] = useState(false);
    const [selectedLog, setSelectedLog] = useState<null | LogType>(null);

    const { mouseMove, getResizeProps } = useWindowResize({
        position: 'vertical',
    });

    const control = useAnimationControls();

    const handleStartAnimation = async () => {
        await control.start(generateAnimation(getConsoleHeight(mouseMove)));
        setIsAnimationEnd(true);
    };

    useEffect(() => {
        if (isOpenConsole && !isAnimationEnd) {
            handleStartAnimation();
            return;
        }
        if (isAnimationEnd) {
            control.start(generateAnimation(getConsoleHeight(mouseMove), 0));
        }
    }, [isOpenConsole, mouseMove, isAnimationEnd]);

    useEffect(() => {
        setIsOpenConsole(true);
        setIsSsr(false);
    }, []);

    const handleSelectLog = (log: LogType) => () => setSelectedLog(log);

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <AnimatePresence>
                {isOpenConsole ? (
                    <Container animate={control}>
                        <VarticalResizeBar {...getResizeProps()} />
                        <ListWraper>
                            <ListContainer data-testid="ul">
                                <AnimatePresence>
                                    {logs.map((value, index) => {
                                        return (
                                            <Log
                                                log={value}
                                                key={index}
                                                onSelect={handleSelectLog}
                                            />
                                        );
                                    })}
                                </AnimatePresence>
                            </ListContainer>
                            <Details
                                selectedLog={selectedLog}
                                onClearSelectedLog={() => setSelectedLog(null)}
                            />
                        </ListWraper>
                    </Container>
                ) : null}
            </AnimatePresence>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
