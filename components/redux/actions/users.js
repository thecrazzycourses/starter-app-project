// Step 1: Create Types
export const Types = {
    GET_USERS_REQUESTS: 'users/get_users_requests',
    GET_USERS_SUCCESS: 'users/get_users_success',
};

// Step 2: Create Action
export const getUsersRequest = () => ({
   type: Types.GET_USERS_REQUESTS
});

export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
});
