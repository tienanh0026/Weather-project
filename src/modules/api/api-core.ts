import axios from 'axios';

const baseURL = import.meta.env.VITE_API_WEATHER_URL;

axios.defaults.baseURL = baseURL;

class APICore {
  get = (url: string, params: object) => {
    return axios.get(url, { params });
  };
}

export { APICore };
