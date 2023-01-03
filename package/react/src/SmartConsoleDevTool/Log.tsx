import React from 'react';
import { Log as LogType } from '../store';
import { List, LogBody, LogStatus, LogTime } from './Styles';
import { timeFormat } from '../utils';
import { motion } from 'framer-motion';
import { getDataType } from '../utils';
import ObjectView from './ObjectView';
interface ILogProps {
    log: LogType;
    onSelect: (log: LogType) => (event: React.MouseEvent) => void;
    onRemove: (id: string) => (event: React.MouseEvent) => void;
}

const Log: React.FC<ILogProps> = ({ log, onSelect, onRemove }) => {
    const varitans = {
        hover: {
            width: 18,
            opacity: 1,
            marginLeft: 8,
        },
    };

    const logType = getDataType(log.data);

    return (
        <List
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0, transition: { type: 'keyframes' } }}
            onClick={onSelect(log)}
            whileHover="hover">
            <LogStatus status={log.type}>{log.type}</LogStatus>
            <LogBody>
                {logType === 'object' || logType === 'json' ? (
                    <ObjectView>{log.data}</ObjectView>
                ) : (
                    log.data
                )}

                <LogTime>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                        }}>
                        <TimeIcon />
                        <div>{timeFormat(log.time)}</div>
                    </div>

                    <motion.div
                        onClick={onRemove(log.id)}
                        style={{ display: 'flex', alignItems: 'center' }}
                        variants={varitans}
                        initial={{
                            width: 0,
                            opacity: 0,
                            marginLeft: 0,
                        }}>
                        <CrossIcon />
                    </motion.div>
                </LogTime>
            </LogBody>
        </List>
    );
};

const TimeIcon = () => {
    return (
        <svg
            style={{ height: '18px', width: '18px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    );
};

const CrossIcon = () => {
    return (
        <motion.svg
            whileHover={{ scale: 1.1, rotate: 90 }}
            style={{ height: '18px', width: '18px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"></path>
        </motion.svg>
    );
};

export default Log;
