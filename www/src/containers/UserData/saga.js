import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_WORKER} from './constants';
import UserDataService from '../../services/userDataService';
import {saveWorker} from './actions';

const userDataService = new UserDataService();


function* fetchWorker() {
    const result = yield call(userDataService.getWorkerByUserId);
    yield put(saveWorker(result.data))
}


function* userDataWatcher() {
    yield all([
        takeLatest(FETCH_WORKER, fetchWorker)
    ]);
}

export default userDataWatcher;
