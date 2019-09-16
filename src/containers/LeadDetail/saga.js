import { all, call, put, takeLatest } from 'redux-saga/effects';
import {ADD_LEAD, EDIT_LEAD, FETCH_LEAD_DETAIL} from "./constants";
import LeadService from "../../services/leadService";
import {
    hideModal, hideModalSpinner, saveLeadDetail, showModal, showModalSpinner
} from './actions';
import {fetchLeadList, hideListSpinner, showListSpinner} from "../LeadList/actions";


const leadService = new LeadService();

function* fetchLeadDetail(action) {
    yield put(showListSpinner());
    const result = yield call(leadService.getLeadById, action.payload.id);
    yield put(saveLeadDetail(result));
    yield put (hideListSpinner());
    yield put (showModal());
}

function* addLead (action) {
    yield put(showModalSpinner());
    yield call(leadService.addLead, action.payload.lead);
    yield put(fetchLeadList());
    yield put(hideModalSpinner());
    yield put(hideModal());
}

function* editLead (action) {
    yield put(showModalSpinner());
    yield call(leadService.editLead, action.payload.lead.id, action.payload.lead);
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
