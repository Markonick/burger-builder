import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-c7925.firebaseio.com/'
});

export default instance;