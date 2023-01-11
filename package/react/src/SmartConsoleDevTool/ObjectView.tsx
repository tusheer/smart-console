import React, { useMemo } from 'react';
import { getDataType, isObjectOrJsonType } from '../utils';

interface IObjectView {
    children: any;
    nestedIndex?: number;
    marginLeft?: number;
}

const ObjectView: React.FC<IObjectView> = ({
    children,
    nestedIndex = 0,
    marginLeft = 0,
}) => {
    const data =
        getDataType(children) === 'json' ? JSON.parse(children) : children;

    if (!isObjectOrJsonType(data)) {
        return children;
    }

    const keys = useMemo(() => Object.keys(data), []);

    return (
        <div>
            {keys.map((key) => (
                <div style={{ marginLeft: marginLeft + 20 }} key={key}>
                    {key} {'>'}
                    <ObjectView
                        nestedIndex={++nestedIndex}
                        marginLeft={marginLeft + 20}>
                        {data[key]}
                    </ObjectView>
                </div>
            ))}
        </div>
    );
};

export default ObjectView;
