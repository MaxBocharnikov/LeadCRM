import {
    ADD_LEAD, EDIT_LEAD, FETCH_LEAD_DETAIL, HIDE_MODAL, HIDE_MODAL_SPINNER, SAVE_LEAD_DETAIL, SHOW_MODAL,
    SHOW_MODAL_SPINNER
} from "./constants";


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

const showModalSpinner = () => {
    return {
        type: SHOW_MODAL_SPINNER
    }
};

const hideModalSpinner = () => {
    return {
        type: HIDE_MODAL_SPINNER
    }
};

const addLead = (lead) => {
    return {
        type: ADD_LEAD,
        payload: {
            lead
        }
    }
};

const editLead = (lead) => {
    return {
        type: EDIT_LEAD,
        payload: {
            lead
        }
    }
};


export {
    fetchLeadDetail,
    saveLeadDetail,
    showModalSpinner,
    showModal,
    hideModalSpinner,
    hideModal,
    addLead,
    editLead
}
