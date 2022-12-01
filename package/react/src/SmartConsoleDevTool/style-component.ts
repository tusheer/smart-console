import {
    forwardRef,
    createElement,
    useEffect,
    useState,
    ReactHTML,
    HTMLProps,
    ElementType,
    CSSProperties,
} from 'react';
import { useTheme } from './ThemeProvider';

type Query<Type> = {
    [key: string]: CSSProperties | QueryFunction<Type>;
};

type QueryFunction<RestType> = (
    rest: RestType,
    theme: ReturnType<typeof useTheme>
) => CSSProperties;

export const styled = <
    Type extends keyof ReactHTML,
    ComponentProps extends HTMLProps<Type>,
    OthersType
>(
    type: Type,
    newStyles: CSSProperties | QueryFunction<OthersType> = {},
    queries: Query<OthersType> = {}
) => {
    const ForwardComponent = forwardRef<
        ElementType<Type>,
        ComponentProps & OthersType
    >(({ style, ...rest }, ref) => {
        const theme = useTheme();

        const mediaStyles = Object.entries(queries).reduce(
            (current, [key, value]) => {
                return useMediaQuery(key)
                    ? {
                          ...current,
                          ...(typeof value === 'function'
                              ? (value(
                                    rest as OthersType,
                                    theme
                                ) as CSSProperties)
                              : value),
                      }
                    : current;
            },
            {}
        );

        return createElement(type, {
            ...rest,
            style: {
                ...(typeof newStyles === 'function'
                    ? newStyles(rest as OthersType, theme)
                    : newStyles),
                ...style,
                ...mediaStyles,
            },
            ref,
        });
    });
    ForwardComponent.displayName = 'SmartConsole' + type;
    return ForwardComponent;
};

export function useMediaQuery(query: string) {
    // Keep track of the preference in state, start with the current match
    const [isMatch, setIsMatch] = useState<boolean>(
        () => window.matchMedia && window.matchMedia(query).matches
    );

    // Watch for changes
    useEffect(() => {
        if (!window.matchMedia) {
            return;
        }

        // Create a matcher
        const matcher = window.matchMedia(query);

        // Create our handler
        const onChange = ({ matches }: { matches: boolean }) =>
            setIsMatch(matches);

        // Listen for changes
        matcher.addListener(onChange);

        return () => {
            // Stop listening for changes
            matcher.removeListener(onChange);
        };
    }, [isMatch, query, setIsMatch]);

    return isMatch;
}

export default styled;
