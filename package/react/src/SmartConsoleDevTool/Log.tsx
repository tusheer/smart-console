import React from 'react';
import { Log as LogType } from '../store';
import { List, LogBody, LogStatus, LogTime } from './Styles';
import { timeFormat } from '../utils';

interface ILogProps {
    log: LogType;
    onSelect: (log: LogType) => () => void;
}

const Log: React.FC<ILogProps> = ({ log, onSelect }) => {
    return (
        <List onClick={onSelect(log)}>
            <LogStatus status={log.type}>{log.type}</LogStatus>
            <LogBody>
                <div>{JSON.stringify(log.data)}</div>
                <LogTime>
                    <TimeIcon />
                    <div>{timeFormat(log.time)}</div>
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

export default Log;
