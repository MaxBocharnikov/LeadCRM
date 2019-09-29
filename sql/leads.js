var knex = require("./sqlConnectionOptions").knex;

function getLeadList() {
    return knex('leads')
        .select('*')
        .then(leads => {
            return leads;
        })
}

module.exports = {
    getLeadList,
}