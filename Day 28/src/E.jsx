import React, { useContext } from 'react'
import { Store } from './Contenx'

export default function E() {
    const { count } = useContext(Store)
    return (
        <div>E:{count}</div>
    )
}
