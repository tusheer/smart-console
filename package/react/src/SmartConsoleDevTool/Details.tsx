import React, { useState } from 'react';
import { HorizontalResizeBar, LogDetails } from './Styles';
import useWindowResize from './useWindowResize';
import { Log } from '../store';
import { AnimatePresence, Variants, useMotionValueEvent } from 'framer-motion';

interface ILogDetails {
    selectedLog: Log | null;
    onClearSelectedLog: () => void;
}

const Details: React.FC<ILogDetails> = ({
    selectedLog,
    onClearSelectedLog,
}) => {
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);

    const {
        mouseMove: logDetailsMouseMove,
        getResizeProps: getHorigontalResizeProps,
    } = useWindowResize({
        position: 'horizontal',
    });

    const VIEW_VARIANTS: Variants = {
        initial: {
            opacity: 0,
            width: 0,
        },
        animate: {
            width:
                logDetailsMouseMove !== null
                    ? window.innerWidth - logDetailsMouseMove + 'px'
                    : '400px',
            opacity: 1,
            transition: {
                duration: isAnimationEnd ? 0 : 0.2,
            },
        },
        exit: {
            opacity: 0,
            width: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const handleClearSelectedLog = () => {
        setIsAnimationEnd(false);
        onClearSelectedLog();
    };

    useMotionValueEvent(VIEW_VARIANTS, 'change', (latest) => {
        console.log(latest);
    });

    return (
        <AnimatePresence>
            {selectedLog !== null ? (
                <LogDetails
                    variants={VIEW_VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    // onAnimationComplete={() => {
                    //     setIsAnimationEnd(true);
                    // }}
                    onTransitionEnd={() => {
                        console.log('ko');
                    }}>
                    <HorizontalResizeBar {...getHorigontalResizeProps()} />
                    <div>
                        {JSON.stringify(selectedLog)}
                        <button onClick={handleClearSelectedLog}>Exit</button>
                    </div>
                </LogDetails>
            ) : null}
        </AnimatePresence>
    );
};

export default Details;
