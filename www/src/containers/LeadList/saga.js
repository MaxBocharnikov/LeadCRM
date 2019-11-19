import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {FETCH_LEAD_LIST} from "./constants";
import LeadService from "../../services/leadService";
import {hideListSpinner, saveLeadList, showListSpinner} from './actions';
import {getFilter} from "./selectors";
import {formatPhoneUtil} from "../../utils/phoneFormatUtils";


const leadService = new LeadService();

function* fetchLeadList() {
    const filter = yield select(getFilter);
    yield put (showListSpinner());
    const result = yield call(leadService.getLeadList, filter);
    yield put(saveLeadList(result));
    yield put (hideListSpinner())
}

function* leadListWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_LIST, fetchLeadList),
    ]);
}

export default leadListWatcher;
