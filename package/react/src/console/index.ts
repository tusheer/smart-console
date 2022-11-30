import { store } from '../store';

const console = {};

const log = (log: string) => {
    store.setState((value) => {
        return {
            consoles: [...value.consoles, log],
        };
    });
};
const errorr = (log: string) => {
    store.setState((value) => {
        return {
            consoles: [...value.consoles, log],
        };
    });
};

export default Object.assign(console, {
    log,
    errorr,
});
