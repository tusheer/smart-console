import Console, { SmartConsoleDevtool } from '@smart-console/react';
import React from 'react';

const App = () => {
    const handelValue = () => {
        Console.log('hi');
    };

    return (
        <div>
            <h1 onClick={handelValue}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
};

export default App;
