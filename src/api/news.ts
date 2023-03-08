import axios from "axios";
import Environment from "../environment";

const instance: any = axios.create({
    baseURL: Environment().USER_URL,
    headers: { "Content-Type": "application/json" },
});

const log_prefix = "[PERFORMANCE-APP]";

const VERBOSE = Environment().LOGS;

const messages = {
    start: "Starting request.",
    end: "End request.",
    non200x: "The request was made and the server responded with a status code that falls out of the range of 2xx.",
    noResp: "The request was made but no response was received.",
    badConfig: "Something happened in setting up the request that triggered an Error.",
};

const genericError = {
    message: "Something Went Wrong",
    status: 500,
};

function logger(message: any, verbose: any, type: any) {
    if (verbose) {
        if (type === "error") {
            message = `[ERROR] ${message}`;
            type = "info";
        }
    }
}

function defaultCatch(error: any, resolve: any) {
    if (error.response) {
        logger(`${log_prefix} ${messages.non200x}`, VERBOSE, "error");
        logger(`${log_prefix} evaluating(error.response) ${error.response}`, VERBOSE, "error");

        resolve(error.response);
    } else if (error.request) {
        logger(`${log_prefix} ${messages.noResp}`, VERBOSE, "error");
        logger(`${log_prefix} evaluating(http.ClientRequest) ${error.request}`, VERBOSE, "error");

        resolve(genericError);
    } else {
        logger(`${log_prefix} ${messages.badConfig}`, VERBOSE, "error");
        logger(`${log_prefix} evaluating(config) ${error.config}`, VERBOSE, "error");
        logger(`${log_prefix} evaluating(axios.instance) ${instance}`, VERBOSE, "error");

        resolve(genericError);
    }
}

export default class News {
    static getNewsPost(values: any) {
        let payload = values;
        logger(`${log_prefix} ${messages.start} login`, VERBOSE, "info");
        return new Promise((resolve) => {
            // ?per_page=20&context=embed
            instance
                .get("/wp-json/wp/v2/posts" + payload.query)
                .then(function (response: any) {
                    resolve(response);
                })
                .catch(function (error: any) {
                    defaultCatch(error, resolve);
                });
        });
    }
}