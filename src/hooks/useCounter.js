
import { useState } from 'react';


export const useCounter = (initalValue = 10) => {

    const [counter, setCounter] = useState(initalValue)

    const incremento = (value = 1) => {
        if (counter === 15) alert('no se puede mas')
        setCounter(counter + value)
    }

    const decremento = (value = 1) => {
        if (counter === 0) return;
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initalValue)
    }


    return {
        counter,
        incremento,
        decremento,
        reset,
    }

}