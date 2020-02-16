import { all, call, put, takeLatest } from 'redux-saga/effects';
import {ADD_LEAD, EDIT_LEAD, FETCH_LEAD_DETAIL} from "./constants";
import LeadService from "../../services/api/leadService";
import {
    hideModal, hideModalSpinner, saveLeadDetail, showModal, showModalSpinner
} from './actions';
import {fetchLeadList, hideListSpinner, showListSpinner} from "../LeadList/actions";

function* fetchLeadDetail(action) {
    yield put(showListSpinner());
    const result = yield call(LeadService.getLeadById, action.payload.id);
    yield put(saveLeadDetail(result));
    yield put(hideListSpinner());
    yield put(showModal());
}

function* addLead (action) {
    yield put(showModalSpinner());
    yield call(LeadService.addLead, action.payload.lead);
    yield put(fetchLeadList());
    yield put(hideModalSpinner());
    yield put(hideModal());
}

function* editLead (action) {
    yield put(showModalSpinner());
    yield call(LeadService.editLead, action.payload.lead);
    yield put(fetchLeadList());
    yield put(hideModalSpinner());
    yield put(hideModal());
}

function* leadDetailWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_DETAIL, fetchLeadDetail),
        takeLatest(ADD_LEAD, addLead),
        takeLatest(EDIT_LEAD, editLead)
    ]);
}

export default leadDetailWatcher;
