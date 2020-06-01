import React from 'react';
import { useMachine } from '@xstate/react';

import { timerMachine } from '../machines';

const Timer = () => {
  const [state, send] = useMachine(timerMachine);

  const handleChangeDuration = ({ target: { value } }) => {
    send('DURATION.UPDATE', { value: Number(value) });
  };

  const { duration, elapsed } = state.context;

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center flex-wrap">
      <label>
        <span>Elapsed time:</span>
        <div>
          {elapsed}s / {duration}s
        </div>
        <progress
          className="h-8 bg-blue-500 text-xs leading-none py-1 text-center"
          max={duration}
          value={elapsed}
        />
      </label>
      <label>
        <div>Duration:</div>
        <input
          type="range"
          min={0}
          max={30}
          onChange={handleChangeDuration}
          value={duration}
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={(_) => send('RESET')}
      >
        Reset
      </button>
    </section>
  );
};

export default Timer;
