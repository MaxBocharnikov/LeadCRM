import {Roles} from '../constatnts/roles';

export function getAvailableSupervisors(workers) {
    if(workers) {
        return workers.filter(worker => worker.role_id === Roles.supervisor);
    }
}

export function getAvailableManagers(workers, supervisor, currentWorker) {
    if(workers) {
        if(supervisor) {
            switch (currentWorker.role_id) {
                case Roles.supervisor:
                    return workers.filter(worker => worker.supervisor == supervisor);
                    break;

                case Roles.manager:
                    return workers.filter(worker => worker.supervisor == supervisor &&  worker.role_id === Roles.manager);
                    break;
            }
        }
        return workers;
    }
}
