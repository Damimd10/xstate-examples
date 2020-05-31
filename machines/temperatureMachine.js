import { Machine, assign } from 'xstate';

export default Machine({
  id: 'temperature',
  initial: 'active',
  context: {
    celsius: '',
    fahrenheit: '',
  },
  states: {
    active: {
      on: {
        CHANGE_CELSIUS: {
          actions: assign({
            celsius: (_, { value }) => value,
            fahrenheit: (_, { value }) =>
              value.length ? (value * (9 / 5) + 32).toFixed(2) : 0,
          }),
        },
        CHANGE_FAHRENHEIT: {
          actions: assign({
            celsius: (_, { value }) =>
              value.length ? ((value - 32) * (5 / 9)).toFixed(2) : '',
            fahrenheit: (_, { value }) => value,
          }),
        },
      },
    },
  },
});
