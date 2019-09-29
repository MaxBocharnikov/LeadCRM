import axios from 'axios';


export default class UserDataService {
    url = 'http://localhost:5000';
    getCurrentUser = () => {
        return axios({
            method: 'get',
            url: `${this.url}/current-user`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Basic ${this.token}`
            }
        }).then(response => {
            return response;
        })
    };

    getWorkerByUserId = () => {
        const token = localStorage.getItem('JWT');
        return axios({
            method: 'get',
            url: `${this.url}/workers/getWorkerByUserId`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Basic ${token}`
            }
        }).then(response => {
            return response;
        })
    }
}