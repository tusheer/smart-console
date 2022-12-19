import Console, { SmartConsoleDevtool } from '@smart-console/react';
import React from 'react';

const App = () => {
    const handelValue = async () => {
        // fetch('https://bible-api.com/romans+12:1-2').then((data) =>
        //     data.json().then((data) => {
        //         Console.log(data);
        //     })
        // );
        Console.log('console.log(hello)');

        Console.error('Error Test');
    };

    return (
        <div>
            <h1 onClick={handelValue}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
};

export default App;
