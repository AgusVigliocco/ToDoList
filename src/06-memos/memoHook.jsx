
import { useCounter } from './../hooks/useCounter';
import { useMemo, useState } from 'react';



const heavyStuff = (iterationNumber) => {
    for (let i = 0; i < iterationNumber; i++) {

        console.log("Ahi vamos...");
    }

    return ` ${iterationNumber} iteraciones realizadas `
}


export const MemoHook = () => {

    const { counter, incremento } = useCounter(400)
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])



    return (
        <>
            <h1>Counter: <small> {counter} </small> </h1>
            <hr />

            <h3>{memorizeValue}</h3>

            <button
                className='btn btn-success'
                onClick={() => incremento()}>
                + 1
            </button>
            <button
                className='btn btn-outline-success'
                onClick={() => setShow(!show)}>
                show/hide {JSON.stringify(show)}
            </button>
        </>

    )
}


