import { AxiosResponse } from 'axios';
import { APICore } from './api-core';

type LocationParams = {
  q: string;
};

const api = new APICore();

const apiKey = import.meta.env.VITE_API_WEATHER_KEY;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCurrentWeather = (params: LocationParams): Promise<AxiosResponse<any>> => {
  const queryParams = {
    key: apiKey,
    ...params,
  };
  return api.get('/current.json', queryParams);
};

export { getCurrentWeather };
