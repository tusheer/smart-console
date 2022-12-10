import Console, { SmartConsoleDevtool } from '@smart-console/react';
import React from 'react';
import { useState } from 'react';

const App = () => {
    const [state, setState] = useState(34);
    const handelValue = () => {
        Console.log('hi');
        console.log(34);
    };

    return (
        <div>
            <h1 onClick={handelValue}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
};

export default App;
