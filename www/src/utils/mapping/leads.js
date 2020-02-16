export const mapDtoLeadToClientLead = lead => {
    return {
        id: lead.lead_id,
        date: lead.creation_date,
        source: lead.source,
        fio: lead.fio,
        phone: lead.phone,
        email: lead.email,
        address: lead.address,
        status: lead.status,
        supervisor: lead.supervisor,
        responsible: lead.responsible,
        comment: lead.comment
    }
}

export const mapClientLeadToDtoLead = lead => {
    return {
        source: lead.source,
        fio: lead.fio,
        phone: lead.phone,
        email: lead.email,
        address: lead.address,
        status: lead.status,
        supervisor: lead.supervisor,
        responsible: lead.responsible,
        comment: lead.comment
    }
}