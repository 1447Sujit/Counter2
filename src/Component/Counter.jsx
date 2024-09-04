import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counterContainer">
      <div className="count">{count}</div>

      <div className="btnBox">
       
      <button onClick={() => dispatch(decrement())} className="dec">
          Decrement
        </button>

        <button onClick={() => dispatch(reset())} className="res">
          Reset
        </button>

        <button onClick={() => dispatch(increment())} className="inc">
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
