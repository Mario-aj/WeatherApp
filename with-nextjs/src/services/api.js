import axios from 'axios';

export default {
    key: 'f3bec359b0a64f8298f05812200511',

    api: axios.create({
        baseURL: 'http://api.weatherapi.com/v1',
    }),
};
