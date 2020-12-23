export const  increment = "Increment";
export const decrement = "Decrement";
export const reset = "Reset";

export const incrementAction = () => ({
    type: increment,
})

export const decrementAction = () => ({
    type: decrement,
})

export const resetAction = () => ({
    type: reset,
}) 