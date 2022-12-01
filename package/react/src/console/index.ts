import { store } from '../store';

const console = {};

const log = (log: string) => {
    store.setState((value) => {
        return {
            logs: [...value.logs, log],
        };
    });
};
const errorr = (log: string) => {
    store.setState((value) => {
        return {
            logs: [...value.logs, log],
        };
    });
};

export default Object.assign(console, {
    log,
    errorr,
});
