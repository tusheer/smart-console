import React from 'react';
import { Log as LogType } from '../store';
import { List, LogBody, LogStatus } from './Styles';

interface ILogProps {
    log: LogType;
    onSelect: (log: LogType) => () => void;
}

const Log: React.FC<ILogProps> = ({ log, onSelect }) => {
    return (
        <List onClick={onSelect(log)}>
            <LogStatus status={log.type}>{log.type}</LogStatus>
            <LogBody>
                <code>{log.data}</code>
            </LogBody>
        </List>
    );
};

export default Log;
