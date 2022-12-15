import { LogType, store } from '../store';

class Console {
    private setState(log: any, type: LogType) {
        store.setState((value) => {
            return {
                logs: [
                    ...value.logs,
                    {
                        data: log,
                        time: new Date(),
                        type: type,
                    },
                ],
            };
        });
    }

    log(log: any) {
        this.setState(log, 'log');
    }

    error(log: any) {
        this.setState(log, 'error');
    }
}

export default new Console();
