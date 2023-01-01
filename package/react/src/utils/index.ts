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

export const getUniqueId = () => {
    // always start with a letter (for DOM friendlyness)
    var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
    do {
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode = Math.floor(Math.random() * 42 + 48);
        if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 32);

    return idstr;
};
