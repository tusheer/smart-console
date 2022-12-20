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

function getLocalStorageValue(position: ResizePerameterType['position']) {
    return typeof window !== 'undefined'
        ? Number(localStorage.getItem(`smart-devtool-resize-${position}`)) ||
              null
        : null;
}

function useWindowResize({ position }: ResizePerameterType): ResizeReturnType {
    const [mouseMove, setMouseMove] = useState<number | null>(
        getLocalStorageValue(position)
    );

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
        let timeout: ReturnType<typeof setTimeout> | undefined;

        if (isMouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        timeout = setTimeout(() => {
            localStorage.setItem(
                `smart-devtool-resize-${position}`,
                String(mouseMove === null ? '' : mouseMove)
            );
        }, 700);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            clearTimeout(timeout);
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
