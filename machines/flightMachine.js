import { Machine, assign } from 'xstate';

export default Machine({
  id: 'flight',
  initial: 'editing',
  context: {
    startDate: null,
    returnDate: null,
    trip: 'oneWay',
  },
  states: {
    editing: {
      on: {
        START_DATE_UPDATE: {
          actions: assign({ startDate: (_, { date }) => date }),
        },
        RETURN_DATE_UPDATE: {
          actions: assign({ returnDate: (_, { date }) => date }),
          cond: (ctx) => ctx.trip === 'roundTrip',
        },
        SET_TRIP: {
          actions: assign({ trip: (_, { value }) => value }),
          cond: (_, { value }) => value === 'oneWay' || value === 'roundTrip',
        },
        SUBMIT: {
          target: 'submitted',
          cond: (ctx) => {
            if (ctx.trip === 'oneWay') {
              return !!ctx.startDate;
            }

            return (
              !!ctx.startDate &&
              !!ctx.returnDate &&
              ctx.returnDate > ctx.startDate
            );
          },
        },
      },
    },
    submitted: {
      type: 'final',
    },
  },
});
