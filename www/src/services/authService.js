import axios from 'axios';


export default class AuthService {
    url = 'http://localhost:5000';

    login = (data) => {
        return axios({
            method: 'post',
            url: `${this.url}/login`,
            headers: {
                "Content-Type": "application/json"
            },
            data
        }).then(response => {
            return response;
        })
    };
}