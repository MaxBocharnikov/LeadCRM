import {FETCH_LEAD_LIST, HIDE_LIST_SPINNER, SAVE_LEAD_LIST, SHOW_LIST_SPINNER} from "./constants";


const fetchLeadList = () => {
        return {
            type: FETCH_LEAD_LIST,
        }
};

const saveLeadList = (list) => {
        return {
            type: SAVE_LEAD_LIST,
            payload: {
                list
            }
        }
};

const showListSpinner = () => {
    return {
        type: SHOW_LIST_SPINNER
    }
};

const hideListSpinner = () => {
    return {
        type: HIDE_LIST_SPINNER
    }
}

export {
    fetchLeadList,
    saveLeadList,
    showListSpinner,
    hideListSpinner
}
