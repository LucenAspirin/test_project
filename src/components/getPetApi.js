import axios from 'axios';
const getPetApi = () => {
    return axios({
        method: 'get',
        url: 'https://api.thedogapi.com/v1/breeds?limit=10&page=0',
    });
};