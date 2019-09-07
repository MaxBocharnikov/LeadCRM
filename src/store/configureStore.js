import { applyMiddleware, combineReducers,  createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {LeadListReducer} from "../containers/LeadList/reducer";
import leadListWatcher from "../containers/LeadList/saga";
import { all } from 'redux-saga/effects';

const reducers = combineReducers({
    leadList: LeadListReducer
});

function* sagas() {
    yield all([
        leadListWatcher()
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