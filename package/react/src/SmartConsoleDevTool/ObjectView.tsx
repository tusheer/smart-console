import React, { useEffect, useMemo, useRef, useId, useCallback } from 'react';
import { getDataType, isObjectOrJsonType } from '../utils';
import { createStore } from '../store';

interface IObjectView {
    children: any;
    nestedIndex?: number;
    marginLeft?: number;
}

const virtualStore = createStore({ hi: 'sdf' });

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
    const uid = useId();

    const handleMouseEnterEvent = useCallback(
        (event: globalThis.MouseEvent) => {
            if (!ref.current) return;
            event.stopImmediatePropagation();
            ref.current.style.background = '#3e3e3e75';
        },
        []
    );

    const handleMouseLeaveEvent = useCallback(() => {
        if (!ref.current) return;

        ref.current.style.background = '';
    }, []);

    useEffect(() => {
        if (!ref.current) return;
        ref.current.addEventListener('mouseover', handleMouseEnterEvent);
        ref.current.addEventListener('mouseleave', handleMouseLeaveEvent);

        return () => {
            ref.current?.removeEventListener(
                'mouseover',
                handleMouseEnterEvent
            );

            ref.current?.removeEventListener(
                'mouseleave',
                handleMouseLeaveEvent
            );
        };
    }, []);

    const keys = useMemo(() => Object.keys(data), []);

    return (
        <div style={{ width: '100%' }} ref={ref} data-uid={uid}>
            {keys.map((key) => (
                <div
                    style={{
                        marginLeft: marginLeft > 0 ? marginLeft : 0,
                        padding: '3px',
                    }}
                    key={key}>
                    {key} {'>'}
                    <ObjectView
                        nestedIndex={++nestedIndex}
                        marginLeft={marginLeft + 30}>
                        {data[key]}
                    </ObjectView>
                </div>
            ))}
        </div>
    );
};

export default ObjectView;
