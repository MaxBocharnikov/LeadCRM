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
        filtered = filtered.filter(lead => {
            return moment(lead.creation_date).format('DD-MM-YYYY') == filter.date;
        });
    }
    return filtered;
}

function formatPhoneUtil(phone){
    if(phone && phone.length > 10) {
        return phone.slice(2).replace(/[\(\)\-\s]+/g, '');
    }
    return phone;
};

module.exports = {
    filterLeads,
    formatPhoneUtil
}