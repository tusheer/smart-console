import React from 'react';
import { Log as LogType } from '../store';
import { List, LogBody, LogStatus, Time } from './Styles';

interface ILogProps {
    log: LogType;
    onSelect: (log: LogType) => () => void;
}

const getLogType = (log: any) => {
    return typeof log;
};

const Log: React.FC<ILogProps> = ({ log, onSelect }) => {
    console.log(getLogType(log.data));
    return (
        <List onClick={onSelect(log)}>
            <LogStatus status={log.type}>{log.type}</LogStatus>
            <LogBody>
                {JSON.stringify(log.data)}
                <Time>
                    <svg
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
                    {log.time.toLocaleTimeString('en-US', {
                        hour12: true,
                        // timeStyle: 'medium',
                        formatMatcher: 'best fit',
                    })}
                </Time>
            </LogBody>
        </List>
    );
};

export default Log;
