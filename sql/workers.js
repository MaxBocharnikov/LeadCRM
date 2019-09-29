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


module.exports = {
    getWorkerByUserId
}
