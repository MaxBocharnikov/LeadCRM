import HttpClient from './httpClient';
import {_BASE_URL} from '../../constatnts/httpClient';

export default class AuthService {
    static login = async (data) => {
        const response = await HttpClient.call('post',`${_BASE_URL}/login`, data);
        return response;
    };
}