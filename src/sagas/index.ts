import { takeLatest } from "redux-saga/effects";
import { getNewsPost } from "./news";
import constants from "../constants";
function* sagas() {
    //auth

    yield takeLatest(constants("news").sagas.getNewsPost, getNewsPost);

  
}

export default sagas;
