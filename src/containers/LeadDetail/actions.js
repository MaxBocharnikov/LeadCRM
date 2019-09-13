import {FETCH_LEAD_DETAIL, HIDE_MODAL, HIDE_SPINNER, SAVE_LEAD_DETAIL, SHOW_MODAL, SHOW_SPINNER} from "./constants";


const fetchLeadDetail = (id) => {
        return {
            type: FETCH_LEAD_DETAIL,
            payload: {
                id
            }
        }
};

const saveLeadDetail = (lead) => {
        return {
            type: SAVE_LEAD_DETAIL,
            payload: {
                lead
            }
        }
};

const showModal = () => {
    return {
        type: SHOW_MODAL
    }
};

const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
};

const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
};

const hideSpinner = () => {
    return {
        type: HIDE_SPINNER
    }
}


export {
    fetchLeadDetail,
    saveLeadDetail,
    showSpinner,
    showModal,
    hideSpinner,
    hideModal
}
