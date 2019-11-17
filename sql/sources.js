var knex = require("./sqlConnectionOptions").knex;

function getUserSources() {
    return knex('sources')
        .select('*')
        .then(sources => {
            return sources
        });
}


module.exports = {
    getUserSources
}
