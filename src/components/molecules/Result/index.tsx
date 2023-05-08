import { WeatherData } from '@app/modules/model/weather';
import { faArrowLeft, faLocationDot, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
function WeatherResultView({
  handleBack,
  weatherData,
}: {
  handleBack: () => void;
  weatherData?: WeatherData;
}) {
  return (
    <div className='w-[18rem] bg-white border-gray-300 border rounded-lg  '>
      <p className='border-b-gray-300 border-b p-[10px] font-bold'>
        <button onClick={handleBack} className='px-1'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        &nbsp;Weather App
      </p>
      <div className='p-[10px] flex flex-col items-center'>
        <img src={`${weatherData?.current.condition.icon}`} className='w-28' />
        <p className='text-4xl font-bold'>{`${weatherData?.current.temp_c}`}&#8451;</p>
        <p className='text-[17px]'>{`${weatherData?.current.condition.text}`}</p>

        <p className='text-[17px] max-w-[18rem] text-center'>
          <FontAwesomeIcon icon={faLocationDot} style={{ padding: '0px 5px' }} />
          {`${weatherData?.location.name}, ${weatherData?.location.country}`}
        </p>
      </div>
      <div className='grid grid-cols-2 border-t'>
        <div className='px-[10px] py-[10px] text-[17px] text-center flex items-center justify-center'>
          <FontAwesomeIcon icon={faTemperatureHalf} size={'lg'} style={{ padding: '0px 5px' }} />
          <div className='inline-block text-[15px] leading-[15px]'>
            {`${weatherData?.current.feelslike_c}`}&#8451; <br />
            <p className='text-[11px] leading-[12px]'>Feels like</p>
          </div>
        </div>
        <div className='px-[10px] py-[10px] text-[17px] text-center flex items-center justify-center border-l'>
          <FontAwesomeIcon icon={faDroplet} size={'lg'} style={{ padding: '0px 5px' }} />
          <div className='inline-block text-[15px] leading-[15px]'>
            {`${weatherData?.current.humidity}%`} <br />
            <p className='text-[11px] leading-[12px]'>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherResultView;
