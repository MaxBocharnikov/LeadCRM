import { all, call, put, takeLatest } from 'redux-saga/effects';
import {LOGIN} from './constants';
import AuthService from '../../services/api/authService';
import {onErrorLogin, onSuccessLogin} from './action';
import {TOKEN_STORAGE} from '../../constatnts/token';

function* login(action) {
    try {
        const result = yield call(AuthService.login, action.payload);
        localStorage.setItem(TOKEN_STORAGE, result.data.token);
        yield put(onSuccessLogin());
    } catch(e) {
        yield put(onErrorLogin())
    }
}

function* authWatcher() {
    yield all([
        takeLatest(LOGIN, login)
    ]);
}

export default authWatcher;
