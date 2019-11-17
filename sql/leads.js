var knex = require("./sqlConnectionOptions").knex;

function getLeadList() {
    return knex('leads')
        .select('*')
        .then(leads => {
            return leads;
        })
}

function getOwnLeadsList(currentUser) {
    return knex('leads')
        .select('*')
        .where('responsible', currentUser.workerID)
        .then(leads => {
            return leads;
        })
}

module.exports = {
    getLeadList,
    getOwnLeadsList
}
