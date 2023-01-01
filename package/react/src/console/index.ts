import { LogType, store } from '../store';
import { getUniqueId } from '../utils';

// function getStackTrace() {
// let stack = new Error().stack || '';
// stack = stack.split('\n').map(function (line) {
//     return line;
// });
// return stack;
// }

class Console {
    #setState(log: any, type: LogType) {
        store.setState((value) => {
            return {
                logs: [
                    ...value.logs,
                    {
                        data: log,
                        time: new Date(),
                        type: type,
                        id: getUniqueId(),
                    },
                ],
            };
        });
    }

    log(log: any) {
        // console.log(getStackTrace());
        this.#setState(log, 'log');
    }

    error(log: any) {
        this.#setState(log, 'error');
    }
}

//TODO 1: For object log user can see by object key close and open
//TODO 2: For array types user can see all the values by table ui and can able to search in table also if user can saw the whole table in new modal
//TODO 3: User can write test code using Console.describe and Console.test
//TODO 3: Unable all test utils to Console.test like expect() or tobe()
//TODO 4: Add retry option to ui

export default new Console();
