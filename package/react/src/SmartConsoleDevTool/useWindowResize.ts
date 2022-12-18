import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type ResizePerameterType = {
    position: 'left-right' | 'top-bottom';
};

type ResizeReturnType = {
    mouseMove: number;
    props: {
        ref: RefObject<HTMLDivElement> | null;
        onMouseDown: () => void;
        onMouseUp: () => void;
    };
};

function useWindowResize({ position }: ResizePerameterType): ResizeReturnType {
    const [mouseMove, setMouseMove] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback(() => {
        setIsMouseDown(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsMouseDown(false);
    }, []);

    const handleMouseMove = useCallback(() => {
        if (isMouseDown) {
            console.log(ref);
        }
    }, [isMouseDown]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [ref.current]);

    useEffect(() => {
        setMouseMove(0);
    }, []);

    return {
        mouseMove,
        props: {
            onMouseUp: handleMouseUp,
            onMouseDown: handleMouseDown,
            ref,
        },
    };
}

export default useWindowResize;
