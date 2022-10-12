import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ author, quote }) => {
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {

        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width })

    }, [quote])


    return (
        <>
            <blockquote className="blockquote text-end">
                <p ref={pRef} className="my-3">{quote}</p>
                <footer className="blockquote-footer text-end">{author}</footer>
            </blockquote>


            <code> {JSON.stringify(boxSize)}</code>
        </>
    )

}
