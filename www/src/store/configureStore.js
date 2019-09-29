import { applyMiddleware, combineReducers,  createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {LeadListReducer} from '../containers/LeadList/reducer';
import leadListWatcher from '../containers/LeadList/saga';
import { all } from 'redux-saga/effects';
import leadDetailWatcher from '../containers/LeadDetail/saga';
import {LeadDetailReducer} from '../containers/LeadDetail/reducer';
import {FilterReducer} from '../containers/Filter/reducer';
import {AuthReducer} from '../containers/Auth/reducer';
import authWatcher from '../containers/Auth/saga';
import {UserDataReducer} from '../containers/UserData/reducer';
import userDataWatcher from '../containers/UserData/saga';


const reducers = combineReducers({
    leadList: LeadListReducer,
    leadDetail: LeadDetailReducer,
    filter: FilterReducer,
    auth: AuthReducer,
    userData: UserDataReducer
});

function* sagas() {
    yield all([
        leadListWatcher(),
        leadDetailWatcher(),
        authWatcher(),
        userDataWatcher()
    ]);
}


export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(sagas);
    return store;
}