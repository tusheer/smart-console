import styled from './style-component';

export const Container = styled('div', (_, theme) => {
    return {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol',
        padding: '0px',
        background: theme.color.primary,
        color: 'white',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '300px',
        borderTop: '0.5px solid  #100000f',
        margin: 0,
    };
});

export const ListContainer = styled('ul', () => {
    return {
        padding: 0,
        margin: 0,
    };
});

export const List = styled('li', () => {
    return {
        color: 'red',
    };
});
