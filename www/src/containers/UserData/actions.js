import {FETCH_WORKER, SAVE_WORKER} from './constants';

const fetchWorker = () => {
    return {
        type: FETCH_WORKER,
    }
};

const saveWorker = (worker) => {
    return {
        type: SAVE_WORKER,
        payload: worker
    }
};

export {
    fetchWorker,
    saveWorker
}