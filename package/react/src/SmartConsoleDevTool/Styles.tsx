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
    border-top: 1px solid red;
    margin: 0;
`;

export const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
`;

export const List = styled.li`
    color: blue;
    background: #fffffc10;
    borderbottom: 1px solid #ffffff15;
    display: flex;
    &:hover {
        color: green;
    }
`;

export const LogStatus = styled.div`
    boxsizing: border-box;
    border-left: 2px solid #c9f236;
    /* color: red; */
    width: 50px;
    padding: 2px 4px;
    font-size: 16px;
    texttransform: uppercase;
`;

export const LogBody = styled.div`
    padding: 2px 2px;
    color: red;
`;
