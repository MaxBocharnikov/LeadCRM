import {mapClientLeadToDtoLead, mapDtoLeadToClientLead} from '../../utils/mapping/leads';
import HttpClient from './httpClient';
import {_BASE_URL} from '../../constatnts/httpClient';

export default class LeadService {
    static getLeadList = async (filter) => {
        const response = await HttpClient.call('post',`${_BASE_URL}/leads/getLeadList`,filter);
        return response.data.map(mapDtoLeadToClientLead);
    };

    static getLeadById = async (id) => {
        const response = await HttpClient.call('get',`${_BASE_URL}/leads/getLeadById/${id}`);
        return mapDtoLeadToClientLead(response.data);
    };

    static addLead = async (lead) => {
       return HttpClient.call('post',`${_BASE_URL}/leads/addLead`, mapClientLeadToDtoLead(lead));
    };


    static editLead = async (lead) => {
        return HttpClient.call('put',`${_BASE_URL}/leads/editLead/${lead.id}`, mapClientLeadToDtoLead(lead));
    }

    static addLeadsByImport = async (data) => {
        const mappedData = data.map(mapClientLeadToDtoLead);
        return HttpClient.call('post',`${_BASE_URL}/leads/addLeads`, mappedData);
    }
}