import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter + 4);
        console.log(counter);
    };

    const decrement = () => {
        setCounter(counter - 4);
    };

    const reset = () => {
        setCounter(initialState);
    };

    return {counter, increment, decrement, reset};
}