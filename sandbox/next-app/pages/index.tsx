import Console, { SmartConsoleDevtool } from '@smart-console/react';

export default function Web() {
    Console.errorr('this is new console');
    return (
        <div>
            <h1 onClick={() => Console.errorr('test')}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
}
