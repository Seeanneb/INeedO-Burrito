import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ineedoburrito.firebaseio.com/'
})

export default instance;