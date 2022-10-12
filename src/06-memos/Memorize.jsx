
import { useCounter } from './../hooks/useCounter';
import { Small } from './small';
import { useState } from 'react';

const Memorize = () => {

    const { counter, incremento } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />

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

export default Memorize
