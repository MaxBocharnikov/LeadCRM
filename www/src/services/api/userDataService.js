import HttpClient from './httpClient';
import {_BASE_URL} from '../../constatnts/httpClient';
import {
    mapSourceFromDtoToClient, mapStatusFromDtoToClient,
    mapWorkerFromDtoToClient, mapWorkersFromDtoToClient
} from '../../utils/mapping/userData';


export default class UserDataService {
    static getCurrentUser = async () => {
       return HttpClient.call('get', `${_BASE_URL}/current-user`);
    };

    static getWorkerByUserId = async () => {
        const response = await HttpClient.call('get', `${_BASE_URL}/workers/getWorkerByUserId`);
        return mapWorkerFromDtoToClient(response.data);
    };

    static getAvailableWorkers = async () => {
        const response = await HttpClient.call('get', `${_BASE_URL}/workers/getWorkers`);
        return response.data.map(mapWorkersFromDtoToClient);
    };

    static getUserSources = async () => {
        const response = await HttpClient.call('get', `${_BASE_URL}/sources/getUserSources`);
        return response.data.map(mapSourceFromDtoToClient);
    };

    static getUserStatuses = async () => {
        const response = await HttpClient.call('get', `${_BASE_URL}/statuses/getUserStatuses`);
        return response.data.map(mapStatusFromDtoToClient);
    };
}