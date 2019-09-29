import {
    ON_DATE_CHANGE, ON_FIO_CHANGE, ON_PHONE_CHANGE, ON_RESPONSIBLE_CHANGE, ON_SOURCE_CHANGE,
    ON_STATUS_CHANGE, ON_SUPERVISOR_CHANGE, RESET_FILTER
} from "./constants";

const initialState = {
    phone: '',
    fio: '',
    date: '',
    source: '',
    status: '',
    supervisor: '',
    responsible: ''
};

export const FilterReducer = (state = initialState, action) => {
    switch (action.type) {

        case ON_FIO_CHANGE: {
            return {
                ...state,
                fio: action.payload
            }
        }

        case ON_PHONE_CHANGE: {
            return {
                ...state,
                phone: action.payload
            }
        }

        case ON_DATE_CHANGE: {
            return {
                ...state,
                date: action.payload
            }
        }

        case ON_SOURCE_CHANGE: {
            return {
                ...state,
                source: action.payload
            }
        }

        case ON_STATUS_CHANGE: {
            return {
                ...state,
                status: action.payload
            }
        }

        case ON_RESPONSIBLE_CHANGE: {
            return {
                ...state,
                responsible: action.payload
            }
        }

        case ON_SUPERVISOR_CHANGE: {
            return {
                ...state,
                supervisor: action.payload
            }
        }

        case RESET_FILTER: {
            return {
                phone: '',
                fio: '',
                date: '',
                source: '',
                status: '',
                supervisor: '',
                responsible: ''
            }
        }

        default: {
            return state;
        }
    }
};
