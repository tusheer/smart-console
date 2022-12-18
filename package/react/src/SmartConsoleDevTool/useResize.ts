import { RefObject, useRef } from 'react';

type ResizePerameterType = {
    position: 'left-right' | 'top-bottom';
};

type ResizeReturnType = {
    ref: RefObject<HTMLDivElement> | null;
};

function useResize({ position }: ResizePerameterType): ResizeReturnType {
    const ref = useRef<HTMLDivElement>(null);

    return {
        ref,
    };
}

export default useResize;
