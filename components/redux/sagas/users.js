import {call, fork, put, takeEvery} from "redux-saga/effects";
import * as actions from '../actions/users'
import * as api from '../api/users'

// Step 9: Create getUser function which watcher will call
function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    } catch (e) {
        console.log(e)
    }
}

// Step 8: Create User Saga Watcher
// Whenever get-user action dispatch this saga will watch and call getUsers function
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUESTS, getUsers);
}

// Step 10: Create fork
const usersSaga = [
    fork(watchGetUsersRequest)
];

export default usersSaga;
