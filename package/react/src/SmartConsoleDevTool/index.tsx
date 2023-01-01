import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Container, ListWraper, VarticalResizeBar } from './Styles';
import useWindowResize from '../hooks/useWindowResize';
import Details from './Details';
import { AnimatePresence, Variant, useAnimationControls } from 'framer-motion';
import LogList from './LogList';

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
    const [isSsr, setIsSsr] = useState(true);
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);
    const [isOpenConsole, setIsOpenConsole] = useState(false);
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

    if (isSsr) return null;

    return (
        <ThemeProvider>
            <AnimatePresence>
                {isOpenConsole ? (
                    <Container animate={control}>
                        <VarticalResizeBar {...getResizeProps()} />
                        <ListWraper>
                            <LogList />
                            <Details />
                        </ListWraper>
                    </Container>
                ) : null}
            </AnimatePresence>
        </ThemeProvider>
    );
};

export default SmartConsoleDevTools;
