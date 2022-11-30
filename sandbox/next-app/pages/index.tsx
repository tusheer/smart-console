import console, { SmartConsoleDevtool } from '@smart-console/react';

export default function Web() {
    console.errorr('this is new console');
    return (
        <div>
            <h1 onClick={() => console.errorr('test')}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
}
