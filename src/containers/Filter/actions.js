
import {
    ON_DATE_CHANGE, ON_FIO_CHANGE, ON_PHONE_CHANGE, ON_RESPONSIBLE_CHANGE, ON_SOURCE_CHANGE,
    ON_STATUS_CHANGE,
    ON_SUPERVISOR_CHANGE, RESET_FILTER
} from "./constants";

const onPhoneChange = (event)=> {
    return {
        type: ON_PHONE_CHANGE,
        payload: event.target.value
    }
};

const onFioChange = (event)=> {
    return {
        type: ON_FIO_CHANGE,
        payload: event.target.value
    }
};

const onDateChange = (event)=> {
    return {
        type: ON_DATE_CHANGE,
        payload: event.target.value
    }
};

const onSourceChange = (event)=> {
    return {
        type: ON_SOURCE_CHANGE,
        payload: event.target.value
    }
};

const onStatusChange = (event)=> {
    return {
        type: ON_STATUS_CHANGE,
        payload: event.target.value
    }
};

const onSupervisorChange = (event)=> {
    return {
        type: ON_SUPERVISOR_CHANGE,
        payload: event.target.value
    }
};

const onResponsibleChange = (event)=> {
    return {
        type: ON_RESPONSIBLE_CHANGE,
        payload: event.target.value
    }
};

const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
};


export {
    onPhoneChange,
    onFioChange,
    onDateChange,
    onSourceChange,
    onStatusChange,
    onResponsibleChange,
    onSupervisorChange,
    resetFilter
}
