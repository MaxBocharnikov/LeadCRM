import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_AVAILABLE_WORKERS, FETCH_SOURCES, FETCH_STATUSES, FETCH_WORKER} from './constants';
import UserDataService from '../../services/api/userDataService';
import {saveAvailableWorkers, saveSources, saveStatuses, saveWorker} from './actions';

function* fetchWorker() {
    const result = yield call(UserDataService.getWorkerByUserId);
    yield put(saveWorker(result))
}

function* fetchSources () {
    const result = yield call(UserDataService.getUserSources);
    yield put(saveSources(result))
}

function* fetchStatuses () {
    const result = yield call(UserDataService.getUserStatuses);
    yield put(saveStatuses(result));
}

function* fetchAvailableWorkers () {
    const result = yield call(UserDataService.getAvailableWorkers);
    yield put(saveAvailableWorkers(result));
}

function* userDataWatcher() {
    yield all([
        takeLatest(FETCH_WORKER, fetchWorker),
        takeLatest(FETCH_SOURCES, fetchSources),
        takeLatest(FETCH_STATUSES, fetchStatuses),
        takeLatest(FETCH_AVAILABLE_WORKERS, fetchAvailableWorkers),
    ]);
}

export default userDataWatcher;
