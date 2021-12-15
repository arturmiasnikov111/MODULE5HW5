import React from 'react'

interface Props {
    error: string
}

const Error = (props : Props) => {
    return <p style={{ color: 'red', fontSize: 14 }}>{props.error}</p>
}

export default Error