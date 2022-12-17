import Console, { SmartConsoleDevtool } from '@smart-console/react';

export default function Web() {
    Console.error('this is new console');

    return (
        <div>
            <h1 onClick={() => Console.error('test')}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
}
