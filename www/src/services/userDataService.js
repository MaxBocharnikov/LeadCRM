import axios from 'axios';
import {AUTH_TYPE, TOKEN_STORAGE} from '../constatnts/token';


export default class UserDataService {
    url = 'http://localhost:5000';
    getCurrentUser = () => {
        return axios({
            method: 'get',
            url: `${this.url}/current-user`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        }).then(response => {
            return response;
        })
    };

    getWorkerByUserId = () => {
        return axios({
            method: 'get',
            url: `${this.url}/workers/getWorkerByUserId`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        }).then(response => {
            return response;
        })
    };

    getAvailableWorkers = () => {
        return axios({
            method: 'get',
            url: `${this.url}/workers/getWorkers`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        }).then(response => {
            return response;
        })
    };


    getUserSources = () => {
        return axios({
            method: 'get',
            url: `${this.url}/sources/getUserSources`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        }).then(response => {
            return response;
        })
    };

    getUserStatuses = () => {
        return axios({
            method: 'get',
            url: `${this.url}/statuses/getUserStatuses`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        }).then(response => {
            return response;
        })
    }
}