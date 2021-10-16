import { useState } from "react"

export const useCounter = (initialState = 10, factor = 4) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter + factor);
    };

    const decrement = () => {
        setCounter(counter - factor);
    };

    const reset = (value = initialState) => {
        setCounter(value);
    };

    return {counter, increment, decrement, reset};
}