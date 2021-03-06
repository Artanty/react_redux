import axios from 'axios';
import config from '../config/config';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            `Client-ID ${config.unsplashClientId}`
    }
})
