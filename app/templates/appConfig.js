import Config from '/config';

class AppConfig {
    constructor() {
    }

    get constants() {
        return Config;
    }
}

let appConfig = new AppConfig();

export default appConfig;
