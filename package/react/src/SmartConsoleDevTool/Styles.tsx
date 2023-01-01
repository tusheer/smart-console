import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${(props) => props.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    max-height: 100vh;
    margin: 0;
`;

export const ListWraper = styled.div`
    display: flex;
    height: 100%;
`;

export const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

export const List = styled(motion.li)`
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
    display: flex;
    justify-content: space-between;
`;

export const LogDetails = styled(motion.div)`
    width: 0px;
    opacity: 0;
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`;

export const VarticalResizeBar = styled.div`
    width: 100%;
    height: 2px;
    background: white;
    cursor: row-resize;
    user-select: none;
`;

export const LogTime = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 15px;
`;

export const HorizontalResizeBar = styled.div`
    height: 100%;
    width: 2px;
    cursor: ew-resize;
    user-select: none;
    background: #ffffff15;
`;
