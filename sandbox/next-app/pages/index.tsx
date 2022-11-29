import { SmartConsoleDevtool } from '@smart-console/react';
import { useState } from 'react';

export default function Web() {
    const [state, setState] = useState('Jane alamt usher');
    console.log('hello');
    console.log('ji');

    return (
        <div>
            <h1>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
}
