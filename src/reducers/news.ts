import constants from "../constants";

const initial_state = {
    logged_in: false,
    loading: false,
    posts: [],
};

export default function News(state = initial_state, action: any): any {
    switch (action.type) {
        case constants("news").reducers.getNewsPost.load:
            return {
                ...state,
                loading: true,
            };
        case constants("news").reducers.getNewsPost.success:
            console.log(action);
            return {
                ...state,
                loading: false,
                logged_in: true,
                posts: action.payload,
            };
        case constants("news").reducers.getNewsPost.error:
            return {
                ...state,
                loading: false,
            };
        case constants("news").reducers.getNewsPost.set:
            return {
                ...state,
            };

        default:
            return state;
    }
}
