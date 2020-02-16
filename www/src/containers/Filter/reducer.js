import {
    ON_ITEM_CHANGE, RESET_FILTER
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
        case ON_ITEM_CHANGE: {
            return {
                ...state,
                [action.payload.name]: action.payload.value
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
