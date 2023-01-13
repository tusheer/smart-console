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
    objectPath?: string;
}

type CallBackFunction<S> = (v: VirtualStore) => S;

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
    objectPath = '',
}) => {
    const data =
        getDataType(children) === 'json' ? JSON.parse(children) : children;

    const setVirtualStore = useSetVirtualObjectStore();

    if (!isObjectOrJsonType(data)) {
        return children;
    }

    const ref = useRef<HTMLDivElement>(null);
    const uid = useId();

    const handleMouseEnterEvent = useCallback(
        (event: globalThis.MouseEvent) => {
            if (!ref.current) return;

            setVirtualStore((state) => {
                return {
                    ...state,
                    hoverData: { [objectPath]: true },
                };
            });

            event.stopImmediatePropagation();
            // ref.current.style.background = '#3e3e3e75';
        },
        []
    );

    const handleMouseLeaveEvent = useCallback(() => {
        if (!ref.current) return;
        setVirtualStore((state) => {
            return {
                ...state,
                hoverData: {},
            };
        });
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

    const hoverdObjectKey = useVirtualObjectStore(
        (state) => state.hoverData[objectPath]
    );

    return (
        <div
            style={{
                width: '100%',
                background: hoverdObjectKey ? '#3e3e3e75' : '',
            }}
            ref={ref}
            data-uid={uid}>
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
                        marginLeft={marginLeft + 30}
                        objectPath={objectPath + '.' + key}>
                        {data[key]}
                    </ObjectView>
                </div>
            ))}
        </div>
    );
};

const ObjectRender: React.FC<
    Omit<IObjectView, 'marginLeft' | 'nestedIndex' | 'objectPath'>
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

export const useVirtualObjectStore = <V,>(callback: CallBackFunction<V>): V => {
    const virtualStore = useContext(ObjectContext);

    return useSyncExternalStore(
        virtualStore.subscribe,
        useCallback(() => callback(virtualStore.getState()), []),
        () => callback(virtualStore.getState())
    ) as V;
};

const useSetVirtualObjectStore = () => {
    const virtualStore = useContext(ObjectContext);

    return virtualStore.setState;
};

const ObjectContext = createContext<CreateStoreReturnType>(
    createStore({
        data: {},
        hoverData: {},
        selectedData: {},
    })
);

export default ObjectRender;
