import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';

function LocationInput({
  handleClick,
  handleSubmitData,
  querryError,
}: {
  handleClick: () => void;
  handleSubmitData: (arg: string) => void;
  querryError: string;
}) {
  const schema = yup
    .object()
    .shape({
      cityName: yup.string().required('Location name is required'),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
  });
  return (
    <div className='min-w-min bg-white border-gray-300 border rounded-lg  '>
      <p className='border-b-gray-300 border-b p-[10px] font-bold'>Weather App</p>
      <div className='p-[10px]'>
        <form
          className='gap-y-3 flex flex-col items-center'
          onSubmit={handleSubmit((data) => handleSubmitData(data.cityName))}
        >
          <input
            className='w-72 h-9 placeholder:text-center border border-gray-200 rounded px-2'
            placeholder='Enter city name'
            {...register('cityName')}
          />
          <ErrorMessage
            errors={errors}
            name={'cityName'}
            render={({ message }) => (
              <p className='text-sm mt-0.5 text-red-500'>
                <span>{message}</span>
              </p>
            )}
          />
          <input
            type='submit'
            value='Get Location Weather'
            className='w-72 h-9 bg-blue-400 rounded px-3 font-bold text-[16px]'
          />
        </form>
        <div className='relative'>
          <p className='text-center absolute -inset-3 m-auto'>
            <span className='bg-white z-10 px-2 text-gray-500'>or</span>
          </p>
          <hr className='h-px  my-[15px]'></hr>
        </div>

        <button
          className='w-72 h-9 bg-blue-400 rounded font-bold text-[16px]'
          onClick={handleClick}
        >
          Get Device Location
        </button>
      </div>
      {querryError && (
        <p className='text-sm mt-0.5 text-red-500 text-center pb-2'>
          <span>{querryError}</span>
        </p>
      )}
    </div>
  );
}

export default LocationInput;
