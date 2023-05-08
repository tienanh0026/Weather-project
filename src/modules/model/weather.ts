type WeatherData = {
  location: {
    country: string;
    name: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

type Location = {
  latitude: number;
  longitude: number;
};

type GeolocationProps = {
  coords: Location;
};

export type { WeatherData, GeolocationProps, Location };
