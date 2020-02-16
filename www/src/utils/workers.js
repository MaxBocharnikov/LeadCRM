import {Roles} from '../constatnts/roles';

export function getAvailableSupervisors(workers) {
    if(workers) {
        return workers.filter(worker => worker.roleId === Roles.supervisor);
    }
}

export function getAvailableManagers(workers, supervisor, currentWorker) {
    if(workers) {
        if(supervisor) {
            switch (currentWorker.roleId) {
                case Roles.supervisor:
                    return workers.filter(worker => +worker.supervisor === +supervisor);

                case Roles.manager:
                    return workers.filter(worker => +worker.supervisor === +supervisor && +worker.roleId === +Roles.manager);

                default: workers.filter(worker => +worker.supervisor === +supervisor);
            }
        }
        return workers;
    }
}

export function setSupervisorByManager(workers, managerId) {
    if(!managerId) return null;
    return workers.find(worker => worker.id === +managerId).supervisor;
}
