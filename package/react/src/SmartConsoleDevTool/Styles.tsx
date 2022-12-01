import styled from './style-component';

export const Container = styled('div', (_, theme) => {
    return {
        background: theme.color.primary,
        color: 'white',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    };
});
