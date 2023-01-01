import React, { useEffect, useRef } from 'react';
import { ListContainer } from './Styles';
import { AnimatePresence } from 'framer-motion';
import { store, useStore } from '../store';
import Log from './Log';

const LogList = () => {
    const logs = useStore((sate) => sate.logs);
    const previousLogLength = useRef(logs.length);
    const containerRef = useRef<HTMLUListElement>(null);

    const handleSelectedLog = (log: any) => () => {
        store.setState(() => {
            return {
                selectedLog: log,
            };
        });
    };

    const handleRemoveLog = (id: string) => (event: React.MouseEvent) => {
        event.stopPropagation();
        const _logs = [...logs];
        const findIndex = _logs.findIndex((log) => log.id === id);
        if (findIndex > -1) {
            _logs.splice(findIndex, 1);
        }
        store.setState((value) => {
            return {
                logs: _logs,
                selectedLog:
                    value.selectedLog?.id === id ? null : value.selectedLog,
            };
        });
    };

    useEffect(() => {
        if (previousLogLength.current < logs.length) {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
        previousLogLength.current = logs.length;
    }, [logs]);

    return (
        <ListContainer ref={containerRef} data-testid="ul">
            <AnimatePresence presenceAffectsLayout>
                {logs.map((value) => {
                    return (
                        <Log
                            onRemove={handleRemoveLog}
                            log={value}
                            key={value.id}
                            onSelect={handleSelectedLog}
                        />
                    );
                })}
            </AnimatePresence>
        </ListContainer>
    );
};

export default LogList;
