const moment = require('moment');

function filterLeads(leads, filter) {
    let filtered = leads;
    if(filter.phone) filtered = filtered.filter(lead => lead.phone == filter.phone);
    if(filter.status) filtered = filtered.filter(lead => lead.status == filter.status);
    if(filter.supervisor) filtered = filtered.filter(lead => lead.supervisor == filter.supervisor);
    if(filter.fio) filtered = filtered.filter(lead => lead.fio.indexOf(filter.fio) > -1);
    if(filter.source) filtered = filtered.filter(lead => lead.source == filter.source);
    if(filter.responsible) filtered = filtered.filter(lead => lead.responsible == filter.responsible);
    if(filter.date){
        console.log(filtered);
        filtered = filtered.filter(lead => {
            console.log(moment(lead.creation_date).format('DD-MM-YYYY'));
            console.log(filter.date);
            return moment(lead.creation_date).format('DD-MM-YYYY') == filter.date;
        });
    }
    return filtered;
}

module.exports = {
    filterLeads
}