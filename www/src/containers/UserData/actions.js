import {
    FETCH_AVAILABLE_WORKERS, FETCH_SOURCES, FETCH_STATUSES, FETCH_WORKER, SAVE_AVAILABLE_WORKERS, SAVE_SOURCES,
    SAVE_STATUSES,
    SAVE_WORKER
} from './constants';

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

const fetchSources = () => {
  return {
      type: FETCH_SOURCES
  }
};

const saveSources = (sources) => {
    return {
        type: SAVE_SOURCES,
        payload: sources
    }
};

const fetchStatuses = () => {
  return {
      type: FETCH_STATUSES
  }
};

const saveStatuses = (statuses) => {
  return {
      type: SAVE_STATUSES,
      payload: statuses
  }
};

const fetchAvailableWorkers = () => {
    return {
        type: FETCH_AVAILABLE_WORKERS
    }
};

const saveAvailableWorkers = (workers) => {
  return {
      type: SAVE_AVAILABLE_WORKERS,
      payload: workers
  }
};

export {
    fetchWorker,
    saveWorker,
    fetchSources,
    saveSources,
    fetchStatuses,
    saveStatuses,
    fetchAvailableWorkers,
    saveAvailableWorkers
}