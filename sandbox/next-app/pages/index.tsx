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
                objects
            </button>
            <button onClick={() => Console.log(['323', 2323, 2332])}>
                array
            </button>
            <button onClick={() => Console.log(3)}>number</button>
            <button
                onClick={() =>
                    Console.log(JSON.stringify({ hello: 'tusher' }))
                }>
                json
            </button>
            <SmartConsoleDevtool />
        </div>
    );
}
