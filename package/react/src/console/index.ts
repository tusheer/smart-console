import { store } from '../store';

const console = {};

const log = (log: string) => {
    store.setState((value) => {
        return {
            logs: [
                ...value.logs,
                {
                    data: log,
                    time: new Date(),
                    type: 'log',
                },
            ],
        };
    });
};
const errorr = (log: string) => {
    store.setState((value) => {
        return {
            logs: [
                ...value.logs,
                {
                    data: log,
                    time: new Date(),
                    type: 'log',
                },
            ],
        };
    });
};

export default Object.assign(console, {
    log,
    errorr,
});
