import React, { useContext } from 'react'
import { Store } from './Contenx'

export default function Y() {
    const { incHandler } = useContext(Store)
    return (
        <div>Y <button onClick={incHandler}>+</button></div>
    )
}
