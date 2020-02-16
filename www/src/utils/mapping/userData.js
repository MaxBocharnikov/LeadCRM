export const mapWorkerFromDtoToClient = worker => {
    return {
        id: worker.worker_id,
        userId: worker.user_id,
        name: worker.name,
        surname: worker.surname,
        middlename: worker.middlename,
        departmentId: worker.department_id,
        roleId: worker.role_id ,
    }


};


export const mapWorkersFromDtoToClient = worker => {
    return {
        id: worker.worker_id,
        userId: worker.user_id,
        name: worker.name,
        surname: worker.surname,
        middlename: worker.middlename,
        departmentId: worker.department_id,
        roleId: worker.role_id ,
        supervisor: worker.supervisor
    }


};


export const mapSourceFromDtoToClient = source => {
    return {
        id: source.source_id,
        title: source.source_title
    }
};


export const mapStatusFromDtoToClient = status  => {
    return {
       id: status.status_id,
       title: status.title
    }
}

