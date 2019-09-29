import { all, call, put, takeLatest } from 'redux-saga/effects';
import {GET_CURRENT_USER} from './constants';


function* getCurrentUser (action) {
    console.log('get user with JWT ' + action.payload.token);
}


function* userDataWatcher() {
    yield all([
        takeLatest(GET_CURRENT_USER, getCurrentUser)
    ]);
}

export default userDataWatcher;
