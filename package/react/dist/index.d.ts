declare const SmartConsoleDevTools: () => JSX.Element | null;

declare class Console {
    #private;
    log(log: any): void;
    error(log: any): void;
}
declare const _default: Console;

export { SmartConsoleDevTools as SmartConsoleDevtool, _default as default };
