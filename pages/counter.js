import React from 'react';
import { useMachine } from '@xstate/react';

import { counterMachine } from '../machines';

import './counter.css';

const Counter = () => {
  const [state, send] = useMachine(counterMachine);

  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="custom-number-input h-10 w-32">
        <div className="output">{state.context.count}</div>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={() => send('DECREMENT')}
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={() => send('INCREMENT')}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
