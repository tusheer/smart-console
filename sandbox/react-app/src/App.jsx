import console, { SmartConsoleDevtool } from '@smart-console/react';
import React from 'react';

const App = () => {
    return (
        <div>
            <h1 onClick={() => console.errorr('test')}>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
};

export default App;
