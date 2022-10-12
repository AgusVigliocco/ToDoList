import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select()
        console.log(inputRef.current.value);
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder='Ingrese su nombre'
            />

            <button
                className="btn btn-primary my-3"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}
