import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from './';



export const MultipleCustomHooks = () => {

  const { counter, incremento, decremento } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  //! SI la data tiene valor ENTONCES toma la data en posicion CERO

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={author} quote={quote} />
      }

      <button
        onClick={() => decremento()}
        className="btn btn-primary"
        disabled={counter < 2}>
        Back Quote
      </button>

      <button
        onClick={() => incremento()}
        className="btn btn-primary">
        Next Quote
      </button>
    </>
  );
};
