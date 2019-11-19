var knex = require("./sqlConnectionOptions").knex;

function getUserStatuses() {
    return knex('statuses')
        .select('*')
        .then(sources => {
            return sources
        });
}


module.exports = {
    getUserStatuses
}
