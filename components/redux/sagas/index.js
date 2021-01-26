import usersSaga from './users'
import {all} from "redux-saga/effects";

// Step 11: Create Root Saga
export default function* rootSaga() {
  yield all([
      ...usersSaga
  ])
}
