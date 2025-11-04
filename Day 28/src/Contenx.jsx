import React, { createContext, useState } from 'react'
const Store = createContext()

export default function Contenx(props) {
    const [count, setCount] = useState(100);
    function incHandler() {
        setCount(count + 1)
    }

    return (
        <Store.Provider value={{ count, incHandler, setCount }}>
            {props.children}
        </Store.Provider>
    )
}

export { Store }
