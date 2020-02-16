import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {FETCH_LEAD_LIST} from "./constants";
import LeadService from "../../services/api/leadService";
import {hideListSpinner, saveLeadList, showListSpinner} from './actions';
import {getFilter} from "./selectors";

function* fetchLeadList() {
    const filter = yield select(getFilter);
    yield put (showListSpinner());
    const result = yield call(LeadService.getLeadList, filter);
    yield put(saveLeadList(result));
    yield put (hideListSpinner())
}

function* leadListWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_LIST, fetchLeadList),
    ]);
}

export default leadListWatcher;
