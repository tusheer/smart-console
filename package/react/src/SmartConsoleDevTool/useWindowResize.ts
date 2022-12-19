import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type ResizePerameterType = {
    position: 'horizontal' | 'vertical';
};

type ResizeReturnType = {
    mouseMove: number | null;
    props: {
        ref: RefObject<HTMLDivElement> | null;
        onMouseDown: () => void;
    };
};

function useWindowResize({ position }: ResizePerameterType): ResizeReturnType {
    const [mouseMove, setMouseMove] = useState<number | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback(() => {
        setIsMouseDown(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsMouseDown(false);
    }, []);

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (isMouseDown) {
                setMouseMove(
                    position === 'vertical' ? event.pageY : event.pageX
                );
            }
        },
        [isMouseDown]
    );

    useEffect(() => {
        if (isMouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isMouseDown]);

    return {
        mouseMove,
        props: {
            onMouseDown: handleMouseDown,
            ref,
        },
    };
}

export default useWindowResize;
