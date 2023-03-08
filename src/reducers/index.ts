import { combineReducers } from "redux";

import news from "./news";

const rootReducer = combineReducers({
    news,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
