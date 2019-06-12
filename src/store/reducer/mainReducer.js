const initialState = {
  totalCounter: 0,
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const modifiedCounters = state.counters.map(counter => {
        if (counter.id === action.payload) {
          counter.value += 1;
        }
        return counter;
      });
      const modifiedTotalCounter = state.totalCounter + 1;
      return {
        ...state,
        counters: modifiedCounters,
        totalCounter: modifiedTotalCounter
      };
    }
    case "DECREMENT": {
      const modifiedCounters = state.counters.map(counter => {
        if (counter.id === action.payload) {
          counter.value -= 1;
        }
        return counter;
      });
      const modifiedTotalCounter = state.totalCounter - 1;
      return {
        ...state,
        counters: modifiedCounters,
        totalCounter: modifiedTotalCounter
      };
    }
    default: {
      return state;
    }
  }
}
