import React, {
    useEffect,
    useMemo,
    useRef,
    useId,
    useCallback,
    createContext,
    useSyncExternalStore,
    useContext,
} from 'react';
import { getDataType, isObjectOrJsonType } from '../utils';
import { createStore, CreateStoreType } from '../store';

interface IObjectView {
    children: any;
    nestedIndex?: number;
    marginLeft?: number;
}

type CallBackFunction<S> = (v: {
    data: any;
    hoverData: any;
    selectedData: any;
}) => S;

type CreateStoreReturnType = ReturnType<CreateStoreType<VirtualStore>>;

type VirtualStore = {
    data: any;
    hoverData: any;
    selectedData: any;
};

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

const ObjectRender: React.FC<
    Omit<IObjectView, 'marginLeft' | 'nestedIndex'>
> = ({ children }) => {
    return (
        <ObjectProvider objectData={children}>
            <ObjectView>{children}</ObjectView>
        </ObjectProvider>
    );
};

const ObjectProvider: React.FC<
    React.PropsWithChildren<{ objectData: any }>
> = ({ children, objectData }) => {
    const virtualObjectStore = useMemo(
        () =>
            createStore({
                data: objectData,
                hoverData: {},
                selectedData: {},
            }),
        []
    );

    return (
        <ObjectContext.Provider value={virtualObjectStore}>
            {children}
        </ObjectContext.Provider>
    );
};

export const useStore = <V,>(callback: CallBackFunction<V>): V => {
    const virtualStore = useContext(ObjectContext);

    if (virtualStore === null) {
        return {
            data: {},
            hoverData: {},
            selectedData: {},
        } as V;
    }

    return useSyncExternalStore(
        virtualStore.subscribe,
        useCallback(() => callback(virtualStore.getState()), []),
        () => callback(virtualStore.getState())
    ) as V;
};

const ObjectContext = createContext<CreateStoreReturnType | null>(null);

export default ObjectRender;
