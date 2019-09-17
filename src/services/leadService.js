import axios from 'axios';

export default class LeadService {
    url = 'http://localhost:3030';


    getLeadList = () => {
        return axios({
            method: 'get',
            url: `${this.url}/leadList`,
            timeout: 15000,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.data;
        })
    };

    getLeadById = (id) => {
        return axios({
            method: 'get',
            url: `${this.url}/leadList/${id}`,
            timeout: 15000,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.data;
        })
    };

    addLead = (lead) => {
        const id = Math.floor(Math.random() * 100);
        return axios({
            method: 'post',
            url: `${this.url}/leadList`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "id": id,
                "date": lead.date,
                "fio": lead.fio,
                "phone": lead.phone,
                "source": lead.source,
                "status": lead.status,
                "supervisor": lead.supervisor,
                "responsible": lead.responsible,
                "email": lead.email,
                "address": lead.address,
                "comment": lead.comment
            }
        }).then(response => {
            return response.data.lead
        })
    };

    editLead = (id, lead) => {
        return axios({
            method: 'put',
            url: `${this.url}/leadList/${id}`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "id": id,
                "date": lead.date,
                "fio": lead.fio,
                "phone": lead.phone,
                "source": lead.source,
                "status": lead.status,
                "supervisor": lead.supervisor,
                "responsible": lead.responsible,
                "email": lead.email,
                "address": lead.address,
                "comment": lead.comment
            }
        }).then(response => {
            return response.data.lead
        })
    }
}