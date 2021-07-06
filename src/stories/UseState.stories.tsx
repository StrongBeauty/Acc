import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    return 6327265362
}

export const Example = () => {
    const[counter, setCounter] = useState<number>(generateData)

/*    const changer = (state:number) => {
        return state + 1
    }*/

    return <>
    <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}