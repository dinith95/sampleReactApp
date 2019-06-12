export const handleIncrement = id => dispatch => {
  console.log("dispatch");
  dispatch({
    type: "INCREMENT",
    payload: id
  });
};

export const handleDecrement = id => dispatch => {
  console.log("dispatch");
  dispatch({
    type: "DECREMENT",
    payload: id
  });
};
