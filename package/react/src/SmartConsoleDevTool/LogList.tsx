import React from 'react';
import { ListContainer } from './Styles';
import { AnimatePresence } from 'framer-motion';
import { store, useStore } from '../store';
import Log from './Log';

const LogList = () => {
    const logs = useStore((sate) => sate.logs);

    const handleSelectedLog = (log: any) => () => {
        store.setState(() => {
            return {
                selectedLog: log,
            };
        });
    };

    return (
        <ListContainer data-testid="ul">
            <AnimatePresence>
                {logs.map((value, index) => {
                    return (
                        <Log
                            log={value}
                            key={index}
                            onSelect={handleSelectedLog}
                        />
                    );
                })}
            </AnimatePresence>
        </ListContainer>
    );
};

export default LogList;
