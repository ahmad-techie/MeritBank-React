import { LOGIN } from './ActionTypes'

const initialState = {
    token: ''
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {

            };
        default: return state;
    }
}

export default loginReducer