import LocationInput from '@components/molecules/Location';
import WeatherResultView from '@components/molecules/Result';
import { HomePageProps } from './types';

function HomeView({
  loading,
  showResult,
  queryErrorMessage,
  weatherData,
  handleClick,
  handleSubmitData,
  handleBack,
}: HomePageProps) {
  return (
    <div className='flex items-center justify-center h-full bg-cyan-200'>
      {loading ? (
        <>
          <span className='text-[20px] font-semibold'>Loading</span>
          <span className='loading-dots'>
            <div className='loading-dots--dot m-[3px]'></div>
            <div className='loading-dots--dot m-[3px]'></div>
            <div className='loading-dots--dot m-[3px]'></div>
          </span>
        </>
      ) : (
        <>
          {showResult ? (
            <WeatherResultView handleBack={handleBack} weatherData={weatherData} />
          ) : (
            <>
              <LocationInput
                handleClick={handleClick}
                handleSubmitData={handleSubmitData}
                querryError={queryErrorMessage}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default HomeView;
