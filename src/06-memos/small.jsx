import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log("me volvi a renderizar :S");
    return (
        <small>{value}</small>
    )
})

