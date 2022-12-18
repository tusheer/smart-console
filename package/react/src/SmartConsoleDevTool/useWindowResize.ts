import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type ResizePerameterType = {
    position: 'left-right' | 'top-bottom';
};

type ResizeReturnType = {
    ref: RefObject<HTMLDivElement> | null;
    mouseMove: number;
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
        console.log('mouse move');
    }, []);

    console.log(ref);

    useEffect(() => {
        console.log(ref.current);
        if (ref.current === null) return;
        const element = ref.current;

        element.addEventListener('mousedown', handleMouseDown);
        element.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mousedown', handleMouseDown);
            element.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [ref.current]);

    return {
        ref,
        mouseMove,
    };
}

export default useWindowResize;
