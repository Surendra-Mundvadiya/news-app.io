const _Environments = {
    production: {
        env: "production",
        USER_URL: "https://techcrunch.com/",
        LOGS: false,
    },
    staging: {
        env: "staging",
        USER_URL: "https://techcrunch.com/",
        LOGS: true,
    },
    development: {
        env: "development",
        USER_URL: "https://techcrunch.com/",
        LOGS: true,
    },
    local: {
        env: "local",
        USER_URL: "https://techcrunch.com/",
        LOGS: true,
    },
};

const getEnvironment = () => {
    let env = "development";
    if (window.location.href.includes("localhost")) {
        env = "local";
    } else if (window.location.href.includes("development")) {
        env = "development";
    } else if (window.location.href.includes("staging")) {
        env = "staging";
    } else {
        env = "production";
    }
    return _Environments[env];
};

export default getEnvironment;
