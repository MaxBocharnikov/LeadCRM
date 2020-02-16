import {
    ON_ITEM_CHANGE,
    RESET_FILTER
} from './constants';

const onItemChange = (name, value) => {
    return {
        type: ON_ITEM_CHANGE,
        payload: {
            name,
            value
        }
    }
}

const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
};


export {
    onItemChange,
    resetFilter
}
