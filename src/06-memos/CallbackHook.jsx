
import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        () => {
            setCounter((value) => value + 1)
        },
        [],
    )

    useEffect(() => {
        incrementFather()
    }, [])

    return (
        <>
            <h1> useCallBackHook: {counter} </h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}

useCallback(() => { first }, [second],)

