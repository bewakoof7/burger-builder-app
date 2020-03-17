import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-app-5ef23.firebaseio.com/'
});

export default instance;