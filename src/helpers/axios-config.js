import axios from 'axios';

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:4000/';
    baseURL: 'https://inventarios-back.onrender.com/'
});

export {
    axiosInstance,
}
