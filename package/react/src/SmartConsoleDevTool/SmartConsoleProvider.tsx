import React from 'react';
import styled from './style-component';

const Div = styled('div', {
    background: 'blue',
});

const SmartConsoleProvider = () => {
    return (
        <Div style={{ height: '300px' }} value="green">
            <div>Tusher</div>
        </Div>
    );
};

export default SmartConsoleProvider;
