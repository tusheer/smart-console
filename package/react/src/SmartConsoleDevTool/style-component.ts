import {
    forwardRef,
    createElement,
    useEffect,
    useState,
    ReactHTML,
    HTMLProps,
    ElementType,
} from 'react';

export const styled = <Type extends keyof ReactHTML>(
    type: Type,
    newStyles: {} = {},
    queries = {}
) => {
    const ForwardComponent = forwardRef<
        ElementType<Type>,
        {
            style?: StyleSheet;
        } & HTMLProps<Type>
    >(({ style, ...rest }, ref) => {
        // const theme = useTheme();
        const theme = {};

        const mediaStyles = Object.entries(queries).reduce(
            (current, [key, value]) => {
                return useMediaQuery(key)
                    ? {
                          ...current,
                          ...(typeof value === 'function'
                              ? value(rest, theme)
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
                    ? newStyles(rest, theme)
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
