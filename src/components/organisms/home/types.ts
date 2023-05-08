import { WeatherData } from '@app/modules/model/weather';

type HomePageProps = {
  loading: boolean;
  showResult: boolean;
  queryErrorMessage: string;
  weatherData: WeatherData | undefined;
  handleClick: () => void;
  handleSubmitData: (cityName: string) => void;
  handleBack: () => void;
};

export type { HomePageProps };
