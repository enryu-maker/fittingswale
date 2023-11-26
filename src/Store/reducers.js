const initialState = {
    access: null,
    user: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload.access,
                user: action.payload.user
            };
        case "LOGOUT":
            return {
                ...state,
                access: action.payload,
            };
        default:
            return state;
    }
};