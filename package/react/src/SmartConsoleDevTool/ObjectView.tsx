import React, { useMemo } from 'react';
import { getDataType } from '../utils';

interface IObjectView {
    children: any;
}

const ObjectView: React.FC<IObjectView> = ({ children }) => {
    const data =
        getDataType(children) === 'json' ? JSON.parse(children) : children;

    if (getDataType(data) !== 'object') {
        return children;
    }

    const keys = useMemo(() => Object.keys(data), []);

    return (
        <div>
            {keys.map((key) => (
                <div key={key}>
                    {key} :
                    {getDataType(data[key]) === 'object' ? (
                        <ObjectView>{data[key]}</ObjectView>
                    ) : (
                        data[key]
                    )}
                </div>
            ))}
        </div>
    );
};

export default ObjectView;
