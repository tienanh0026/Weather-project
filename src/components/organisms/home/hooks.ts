import { getCurrentWeather } from '@app/modules/api/weather';
import { GeolocationProps, WeatherData } from '@app/modules/model/weather';
import { useState } from 'react';

function useHome() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [queryErrorMessage, setQueryErrorMessage] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const getCoordinates = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const handleClick = () => {
    if (navigator.geolocation) {
      setLoading(true);
      getCoordinates()
        .then((data) => {
          const locationData = data as GeolocationProps;
          return getCurrentWeather({
            q: `${locationData.coords.latitude},${locationData.coords.longitude}`,
          });
        })
        .then(({ data }) => {
          setWeatherData(data);
          setLoading(false);
          setQueryErrorMessage('');
          setShowResult(true);
        })
        .catch((err) => {
          setQueryErrorMessage(err.response.data.error.message);
        });
    }
  };
  const handleSubmitData = (cityName: string) => {
    getCurrentWeather({
      q: cityName,
    })
      .then(({ data }) => {
        setWeatherData(data);
        setLoading(false);
        setQueryErrorMessage('');
        setShowResult(true);
      })
      .catch((err) => {
        setQueryErrorMessage(err.response.data.error.message);
      });
  };
  const handleBack = () => {
    setShowResult(false);
  };

  return {
    loading,
    showResult,
    queryErrorMessage,
    weatherData,
    handleClick,
    handleSubmitData,
    handleBack,
  };
}

export default useHome;
