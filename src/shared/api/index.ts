import axios from 'axios';

const BASE_URL = 'https://api.zendu.io/v1';

export const zenduApi = axios.create({
  baseURL: BASE_URL,
});
