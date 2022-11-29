import { SmartConsoleDevtool } from '@smart-console/react';
import React from 'react';
import { useState } from 'react';

const App = () => {
    const [state, setState] = useState(0);
    console.log('hi');
    return (
        <div>
            <SmartConsoleDevtool />
        </div>
    );
};

export default App;
