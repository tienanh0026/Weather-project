import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import WeatherResult from '../../pages/result';

export default function ConfigRouter() {
  return (
    <Routes>
      <Route element={<Home />} path={'/'} />
      <Route element={<WeatherResult />} path={'/weather-result'} />
    </Routes>
  );
}
