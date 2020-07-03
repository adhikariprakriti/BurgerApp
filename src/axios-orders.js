import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerapp-9fac3.firebaseio.com/'
});

export default instance; 