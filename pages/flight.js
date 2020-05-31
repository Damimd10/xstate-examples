import React from 'react';
import { useMachine } from '@xstate/react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { flightMachine } from '../machines';

const Flight = () => {
  const [state, send] = useMachine(flightMachine);

  const handleChange = ({ target: { value } }) => send('SET_TRIP', { value });

  const canSubmit = flightMachine.transition(state, 'SUBMIT').changed;

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="relative inline-flex">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fillRule="nonzero"
          />
        </svg>
        <select
          className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleChange}
          value={state.context.trip}
        >
          <option value="oneWay">One Way</option>
          <option value="roundTrip">Round Trip</option>
        </select>
      </div>
      <div className="m-4 text-center">
        <DatePicker
          selected={state.context.startDate}
          placeholderText="Click to select a date"
          onChange={(date) => send('START_DATE_UPDATE', { date })}
        />
      </div>
      <div className="m-4 text-center">
        <DatePicker
          selected={state.context.returnDate}
          placeholderText="Click to select a date"
          onChange={(date) => send('RETURN_DATE_UPDATE', { date })}
        />
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => send('SUBMIT')}
          disabled={!canSubmit}
        >
          {state.matches('editing') && 'Submit'}
          {state.matches('submitted') && 'Success!'}
        </button>
      </div>
    </section>
  );
};

export default Flight;
