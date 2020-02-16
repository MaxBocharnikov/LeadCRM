import axios from 'axios';
import {AUTH_TYPE, TOKEN_STORAGE} from '../../constatnts/token';

export default class HttpClient {
    static async call(method, url, data = null) {
        const response = await axios({
            method,
            url,
            data,
            timeout: 15000,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${AUTH_TYPE} ${localStorage.getItem(TOKEN_STORAGE)}`
            }
        });
        return response;
    }
}
