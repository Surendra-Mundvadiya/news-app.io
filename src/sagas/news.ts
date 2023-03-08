import { call, put } from "redux-saga/effects";
import constants from "../constants";
import News from "../api/news";

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

export function* getNewsPost(action: any) {
    yield load("getNewsPost");
    const response: ResponseGenerator = yield call(News.getNewsPost, action.payload);
    if (response.status === 200) {
        yield put({
            type: constants("news").reducers.getNewsPost.success,
            payload: response.data,
        });
        yield unload("getNewsPost");
    } else {
        yield error("getNewsPost", response, null);
        yield unload("getNewsPost");
    }
}
function* error(type: string, response: any, message: any) {
    let status = 0;
    if (response) {
        status = response.status || 0;
    }
    yield put({
        type: constants("news").reducers[type].error,
        payload: {
            status: status,
            message: message || "We ran into some issues and are looking into it.",
        },
    });
}

function* load(type: any) {
    console.log(constants('news'))
    yield put({
        type: constants("news").reducers[type].load,
    });
}

function* unload(type: any) {
    yield put({
        type: constants("news").reducers[type].unload,
    });
}
