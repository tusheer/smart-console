import React, { useEffect, useRef, useState } from 'react';
import { HorizontalResizeBar, LogDetails } from './Styles';
import useWindowResize from '../hooks/useWindowResize';
import { store, useStore } from '../store';
import { AnimatePresence, Variant, useAnimationControls } from 'framer-motion';
import ObjectRender from './ObjectRender';

const getDetailsWidth = (mouseMove: number | null): string =>
    mouseMove !== null ? window.innerWidth - mouseMove + 'px' : '400px';

const generateAnimation = (
    opacity = 0,
    width: number | string = 0,
    duration = 0
): Variant => {
    return {
        opacity,
        width,
        transition: {
            duration,
        },
    };
};

const Details = () => {
    const selectedLog = useStore((sate) => sate.selectedLog);
    const previouseSelectedLog = useRef(selectedLog);
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);

    const { mouseMove, getResizeProps } = useWindowResize({
        position: 'horizontal',
    });

    const control = useAnimationControls();

    const handleStartAnimation = async () => {
        await control.start(
            generateAnimation(1, getDetailsWidth(mouseMove), 0.4)
        );
        setIsAnimationEnd(true);
    };

    const handleEndAnimation = async () => {
        await control.start(generateAnimation(0, 0, 0.4));
        setIsAnimationEnd(false);
    };

    useEffect(() => {
        if (selectedLog === null && previouseSelectedLog.current !== null) {
            handleEndAnimation();
        }
        previouseSelectedLog.current = selectedLog;

        if (selectedLog !== null && !isAnimationEnd) {
            handleStartAnimation();
        }
        if (isAnimationEnd && selectedLog) {
            control.start(generateAnimation(1, getDetailsWidth(mouseMove)));
        }
    }, [selectedLog, mouseMove, isAnimationEnd]);

    const handleClearSelectedLog = async () => {
        store.setState(() => {
            return {
                selectedLog: null,
            };
        });
    };

    return (
        <AnimatePresence>
            {previouseSelectedLog !== null ? (
                <LogDetails animate={control}>
                    <HorizontalResizeBar {...getResizeProps()} />
                    <div>
                        {selectedLog !== null ? (
                            <ObjectRender>{selectedLog}</ObjectRender>
                        ) : null}

                        <button onClick={handleClearSelectedLog}>Exit</button>
                    </div>
                </LogDetails>
            ) : null}
        </AnimatePresence>
    );
};

export default Details;
