import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 2,
    counter3: 4,
  });

  const { counter1, counter2, counter3 } = counter;
  return (
    <>
      <h1>CounterApp</h1>
      <hr />
      <div className="d-flex m-5 text-center">
        <h2>Counter1: {counter1}</h2>
        <h2 className="mx-5">Counter2: {counter2}</h2>
        <h2>Counter3: {counter3}</h2>
        <hr />
        <button
          className="btn btn-success mx-5"
          onClick={() =>
            setCounter({
              ...counter,
              counter1: counter1 + 1,
            })
          }
        >
          +1
        </button>
      </div>
    </>
  );
};
