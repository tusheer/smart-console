import Console, { SmartConsoleDevtool } from '@smart-console/react';

export default function Web() {
    return (
        <div>
            <button
                onClick={() =>
                    Console.error({
                        noNested: '1',
                        nested: {
                            noNested2: '1',
                            nested2: {
                                nonested3: 1,
                            },
                        },
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
