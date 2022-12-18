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
    margin: 0;
`;

export const ListWraper = styled.div`
    display: flex;
`;

export const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

export const List = styled.li`
    width: 100%;
    cursor: pointer;
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
    width: 100%;
`;

export const LogDetails = styled.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;
