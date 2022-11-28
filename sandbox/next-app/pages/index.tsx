import { SmartConsoleDevtool } from '@smart-console/react';
import { useState } from 'react';
import tsconfig from 'tsconfig/nextjs.json';

export default function Web() {
    console.log(tsconfig);
    const [state, setState] = useState('Jane alamt usher');
    console.log('hello');

    return (
        <div>
            <h1>Web</h1>
            <SmartConsoleDevtool />
        </div>
    );
}
