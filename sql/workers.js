var knex = require("./sqlConnectionOptions").knex;

function getWorkerByUserId(userId) {
    return knex('workers')
        .select('*')
        .where('user_id', userId)
        .then(users => {
            if (!users[0]) {
                return {
                    user_id: 0,
                };
            } else {
                return users[0];
            }
        });
}


module.exports = {
    getWorkerByUserId
}
