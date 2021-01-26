import {Types} from "../actions/users";

// Step 3: Create State
const INITIAL_STATE = {
    items: []
}

// Step 4: Create Reducer
export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                items: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}
