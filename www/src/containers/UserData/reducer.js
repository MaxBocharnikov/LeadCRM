import {SAVE_AVAILABLE_WORKERS, SAVE_SOURCES, SAVE_STATUSES, SAVE_WORKER} from './constants';

const initialState = {
    worker: null,
    sources: null,
    statuses: null,
    availableWorkers: null,
};

export const UserDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVE_WORKER: {
            return {
                ...state,
                worker: action.payload
            }
        }

        case SAVE_SOURCES: {
            return {
                ...state,
                sources: action.payload
            }
        }

        case SAVE_STATUSES: {
            return {
                ...state,
                statuses: action.payload
            }
        }

        case SAVE_AVAILABLE_WORKERS: {
            return {
                ...state,
                availableWorkers: action.payload
            }
        }

        default: {
            return state
        }
    }
};