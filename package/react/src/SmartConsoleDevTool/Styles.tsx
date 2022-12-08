import styled from '@emotion/styled';

export const Container = styled.div`
    fontfamily: -apple-system BlinkMacSystemFont 'Segoe UI' Roboto Helvetica
        Arial sans-serif 'Apple Color Emoji' 'Segoe UI Emoji' 'Segoe UI Symbol';
    padding: 0px;
    background: ${(props) => props.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid red;
    margin: 0;
`;

export const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
`;

export const List = styled.li`
    color: red;
    background: #fffffc10;
    borderbottom: 1px solid #ffffff15;
    display: flex;
`;

export const LogStatus = styled.div`
    boxsizing: border-box;
    border-left: 2px solid #c9f236;
    color: red;
    width: 50px;
    padding: 2px 4px;
    font-size: 16px;
    texttransform: uppercase;
`;

export const LogBody = styled.div`
    padding: 2px 2px;
    color: red;
`;
