import Console, { SmartConsoleDevtool } from '@smart-console/react';

export default function Web() {
    return (
        <div>
            <button
                onClick={() =>
                    Console.log({
                        new: 'OBject',
                    })
                }>
                A object
            </button>
            <button onClick={() => Console.log(['323', 2323, 2332])}>
                A Array
            </button>
            <button onClick={() => Console.log(3)}>A number</button>
            <button
                onClick={() =>
                    Console.log(JSON.stringify({ hello: 'tusher' }))
                }>
                A Json
            </button>
            <SmartConsoleDevtool />
        </div>
    );
}
