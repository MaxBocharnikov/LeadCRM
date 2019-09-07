import {FETCH_LEAD_LIST, SAVE_LEAD_LIST} from "./constants";


const fetchLeadList = () => {
        return {
            type: FETCH_LEAD_LIST
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

export {
    fetchLeadList,
    saveLeadList
}
