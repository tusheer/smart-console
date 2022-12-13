import styled from '@emotion/styled';

export const Container = styled.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${(props) => props.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid white;
    margin: 0;
    overflow-y: auto;
`;

export const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
`;

export const List = styled.li`
    color: ${(props) => props.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`;

export const LogStatus = styled.div<{
    status: 'error' | 'log' | 'success' | 'info' | 'describe';
}>`
    min-height: 25px;
    boxsizing: border-box;
    color: trasparent;
    min-width: 50px;
    padding: 2px 4px;
    background: ${(props) => props.theme.color[props.status]};
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
`;

export const LogBody = styled.div`
    padding: 4px 5px;
    color: white;
`;
