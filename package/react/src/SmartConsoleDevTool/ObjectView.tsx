import React, { createElement } from 'react';
import { getDataType } from '../utils';

interface IObjectView {
    children: { [key: string]: string };
}

const Hi = () => <div className="">tusher</div>;

const createObjectView = (
    object: any,
    Element: React.DetailedReactHTMLElement<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    >
) => {
    if (getDataType(object) !== 'object') {
        return createElement(React.Fragment, null, object);
    }

    return createElement('div', null), Element;
};

const ObjectView: React.FC<IObjectView> = ({ children }) => {
    const Element = createElement('div', null, JSON.stringify(children));
    return Element;
};

export default ObjectView;
