import { useCounter } from "./../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incremento, reset, decremento } = useCounter();

  return (
    <>
      <h1>Counter With Hook {counter}</h1>

      <hr />
      <button onClick={() => incremento(2)} className="btn btn-success">
        +1
      </button>
      <button onClick={reset} className="btn btn-warning">
        Reset
      </button>
      <button onClick={() => decremento(2)} className="btn btn-danger">
        -1
      </button>
    </>
  );
};
