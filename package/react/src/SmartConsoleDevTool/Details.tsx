import React, { useMemo } from 'react';
import { HorizontalResizeBar, LogDetails } from './Styles';
import useWindowResize from './useWindowResize';
import { Log } from '../store';
import { AnimatePresence } from 'framer-motion';

interface ILogDetails {
    selectedLog: Log | null;
}

const Details: React.FC<ILogDetails> = ({ selectedLog }) => {
    const {
        mouseMove: logDetailsMouseMove,
        getResizeProps: getHorigontalResizeProps,
    } = useWindowResize({
        position: 'horizontal',
    });

    const variants = useMemo(() => {
        return {
            initial: {
                opacity: 0.7,
                width: 0,
            },
            in: {
                width:
                    logDetailsMouseMove !== null
                        ? window.innerWidth - logDetailsMouseMove + 'px'
                        : '400px',
                opacity: 1,
                transition: {
                    opacity: {
                        duration: 0.4,
                        delay: 0.4,
                    },
                },
            },
            out: {
                opacity: 0,
                transition: {
                    opacity: {
                        duration: 0.4,
                    },
                },
            },
        };
    }, []);
    if (selectedLog === null) return null;

    return (
        <AnimatePresence>
            <LogDetails
                initial="initial"
                animate="in"
                exit="out"
                variants={variants}
                horizontalWidth={logDetailsMouseMove}>
                <HorizontalResizeBar {...getHorigontalResizeProps()} />
                {JSON.stringify(selectedLog)}
            </LogDetails>
        </AnimatePresence>
    );
};

export default Details;
