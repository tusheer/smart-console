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
                paddingLeft: '20px',
            }}
            ref={ref}
            data-uid={uid}>
            <div
                style={{
                    position: 'absolute',
                    paddingTop: '14px',
                    width: '20px',
                    height: '20px',
                    left: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div
                style={{
                    background: hoverdObjectKey ? '#3e3e3e75' : '',
                    padding: '12px',
                }}>
                {keys.map((key) => (
                    <div
                        style={{
                            marginLeft: marginLeft > 0 ? marginLeft : 0,
                            padding: '3px 3px 3px 0px',
                        }}
                        key={key}>
                        {key} {':'}
                        <ObjectView
                            nestedIndex={++nestedIndex}
                            // marginLeft={marginLeft + 30}
                            objectPath={objectPath + '.' + key}>
                            {data[key]}
                        </ObjectView>
                    </div>
                ))}
            </div>
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
            <div style={{ position: 'relative', width: '100%' }}>
                {children}
            </div>
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
