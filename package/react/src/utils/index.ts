export const getLogType = (log: any) => {
    switch (typeof log) {
        case 'string':
            return isJsonString(log) ? 'json' : 'string';
        case 'object':
            return Array.isArray(log) ? 'array' : 'object';
    }
    return typeof log;
};

export const isJsonString = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export const timeFormat = (time: Date) =>
    time.toLocaleTimeString('en-US', {
        hour12: true,
    });
