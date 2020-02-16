var knex = require("./sqlConnectionOptions").knex;

function getWorkerByUserId(userId) {
    return knex('workers')
        .select('*')
        .where('user_id', userId)
        .then(workers => {
            if (!workers[0]) {
                return {
                    user_id: 0,
                };
            } else {
                return workers[0];
            }
        });
}

function getWorkers() {
    return knex('workers')
        .innerJoin('departments', 'workers.department_id', 'departments.department_id')
        .select('workers.*', 'departments.head as supervisor')
        .then(workers => {
           return workers
        });
}

function getWorkersByDepartment(currentUser) {
    return knex('workers')
        .innerJoin('departments', 'workers.department_id', 'departments.department_id')
        .select('workers.*', 'departments.head as supervisor')
        .where ('workers.worker_id', currentUser.workerID).orWhere('workers.worker_id', currentUser.supervisorID)
        .then(workers => {
            return workers
        });
}


module.exports = {
    getWorkerByUserId,
    getWorkers,
    getWorkersByDepartment
}
