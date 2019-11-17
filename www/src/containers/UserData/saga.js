import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_AVAILABLE_WORKERS, FETCH_SOURCES, FETCH_STATUSES, FETCH_WORKER} from './constants';
import UserDataService from '../../services/userDataService';
import {saveAvailableWorkers, saveSources, saveStatuses, saveWorker} from './actions';

const userDataService = new UserDataService();


function* fetchWorker() {
    const result = yield call(userDataService.getWorkerByUserId);
    yield put(saveWorker(result.data))
}

function* fetchSources () {
    const result = yield call(userDataService.getUserSources);
    yield put(saveSources(result.data))
}

function* fetchStatuses () {
    const result = yield call(userDataService.getUserStatuses);
    yield put(saveStatuses(result.data));
}

function* fetchAvailableWorkers () {
    const result = yield call(userDataService.getAvailableWorkers);
    yield put(saveAvailableWorkers(result.data));
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
