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
        marginTop: '20px',
    };
});

export const List = styled('li', (_, theme) => {
    return {
        color: theme.color['grey:300'],
        background: '#fffffc10',
        borderBottom: '1px solid #ffffff15',
        display: 'flex',
    };
});

export const LogStatus = styled('div', (_, theme) => {
    return {
        boxSizing: 'border-box',
        borderLeft: '2px solid #c9f236',
        color: theme.color['grey:300'],
        width: '50px',
        padding: '2px 4px',
        fontSize: '16px',
        textTransform: 'uppercase',
    };
});

export const LogBody = styled('div', (_, theme) => {
    return {
        padding: '2px 2px',
        color: theme.color['grey:300'],
    };
});
