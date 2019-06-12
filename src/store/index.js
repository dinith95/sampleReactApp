import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // rect middleware
import reducer from "./reducer";

const initialState = {
  // totalCounter: 0,
  // counters: [
  //   { id: 1, value: 0 },
  //   { id: 2, value: 0 },
  //   { id: 3, value: 0 },
  //   { id: 4, value: 0 },
  //   { id: 5, value: 0 }
  // ]
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // view the redux store
  )
);

export default store;
