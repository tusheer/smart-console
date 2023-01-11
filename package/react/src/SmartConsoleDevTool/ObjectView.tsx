import React, { useEffect, useMemo, useRef } from 'react';
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
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseEnterEvent = (event: globalThis.MouseEvent) => {
        if (!ref.current) return;
        event.stopImmediatePropagation();
    };

    useEffect(() => {
        if (!ref.current) return;
        ref.current.addEventListener(
            'mouseup',
            handleMouseEnterEvent as any,
            true
        );
        return () => {
            ref.current?.removeEventListener('mouseup', handleMouseEnterEvent);
        };
    }, []);

    const keys = useMemo(() => Object.keys(data), []);

    return (
        <div ref={ref}>
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
