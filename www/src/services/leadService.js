import axios from 'axios';
import {formatDate} from '../utils/timeUtils';
import {AUTH_TYPE, TOKEN_STORAGE} from '../constatnts/token';

export default class LeadService {
    url = 'http://localhost:5000';


    getLeadList = (filter) => {
        return axios({
            method: 'post',
            url: `${this.url}/leads/getLeadList`,
            timeout: 15000,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            },
            data: {
                filter
            }
        }).then(response => {
            return response.data;
        })
    };

    getLeadById = (id) => {
        return axios({
            method: 'get',
            url: `${this.url}/leads/getLeadById/${id}`,
            timeout: 15000,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        }).then(response => {
            return response.data;
        })
    };

    addLead = (lead) => {
        return axios({
            method: 'post',
            url: `${this.url}/leads/addLead`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            },
            data: {
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

    editLead = (lead) => {
        console.log(lead);
        return axios({
            method: 'put',
            url: `${this.url}/leads/editLead/${lead.id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            },
            data: {
                "date": lead.creation_date,
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