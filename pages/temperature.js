import React from 'react';
import { useMachine } from '@xstate/react';

import { temperatureMachine } from '../machines';

const TemperatureConverter = () => {
  const [state, send] = useMachine(temperatureMachine);

  const handleCelsiusChange = ({ target: { value } }) => {
    send('CHANGE_CELSIUS', { value });
  };

  const handleFahrenheitChange = ({ target: { value } }) => {
    send('CHANGE_FAHRENHEIT', { value });
  };

  return (
    <div className="h-screen flex items-center justify-center flex-wrap">
      <div className="w-full md:w-1/12 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Celsius
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          onChange={handleCelsiusChange}
          type="number"
          value={state.context.celsius}
        />
      </div>
      <span>=</span>
      <div className="w-full md:w-1/12 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Fahrenheit
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          onChange={handleFahrenheitChange}
          type="number"
          value={state.context.fahrenheit}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
