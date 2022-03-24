import React from "react";
//state ulaşmak için useSelector
// state değiştirmek için useDispatch
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state); //buradaki counter aslında store.js reducer içerindeki counter.
  const dispatch = useDispatch();
  const incrementOperation = () => {
    dispatch(increment(10));
  };
  const decrementOperation = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{countValue.counter.value}</h1>
      <br />
      <br />
      <button onClick={incrementOperation}>INC</button>
      <button onClick={decrementOperation}>DEC</button>
    </div>
  );
};

export default Counter;
