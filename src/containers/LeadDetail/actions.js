import {FETCH_LEAD_DETAIL, SAVE_LEAD_DETAIL} from "./constants";


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

export {
    fetchLeadDetail,
    saveLeadDetail
}
