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

function addLead(lead) {
    return knex('leads')
        .insert(lead)
        .then(resp => {
            return resp
        })
}


function editLead(id, lead) {
    const query = `update leads set source = ${lead.source}, fio = '${lead.fio}', phone = '${lead.phone}', email = '${lead.email}', address = '${lead.address}',
                   status = ${lead.status}, supervisor = ${lead.supervisor}, responsible = ${lead.responsible}, comment = '${lead.comment}' where lead_id = ${id}`;
    return knex.raw(query)
        .then(lead => lead.id)
}

function getLeadById(id) {
    return knex('leads')
        .select('*')
        .where('lead_id', id)
        .then(lead => {
            return lead[0];
        })
}

module.exports = {
    getLeadList,
    getOwnLeadsList,
    addLead,
    getLeadById,
    editLead
}
