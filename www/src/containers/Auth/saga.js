import { all, call, put, takeLatest } from 'redux-saga/effects';
import {LOGIN} from './constants';
import AuthService from '../../services/authService';
import {onErrorLogin, onSuccessLogin} from './action';


const authService = new AuthService();

function* login(action) {
    try {
        const result = yield call(authService.login, action.payload);
        localStorage.setItem('JWT', result.data.token);
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
