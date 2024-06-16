import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const click = () => {
        setCount(count + 1)
    }

    const prev = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={click}>click</button>
            <button onClick={prev}>prev</button>
        </div>
    )
}

export default Counter