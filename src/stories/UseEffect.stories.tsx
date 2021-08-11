import React, {useMemo, useState, useEffect} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const[fake, setFake] = useState(1)
    const[counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('UseEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('UseEffect only first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        setInterval(() => {
        console.log('tick: ' + counter)
        setCounter(state => state + 1) // ф-ция, чтобы counter был актуальный, т.к. по-другому не будет меняться из-за замыкания
    }, 1000)
    }, [])

    return <>
        Hi, counter:{counter} fake: {fake}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick: ' + counter)
            setCounter(state => state + 1) // ф-ция, чтобы counter был актуальный, т.к. по-другому не будет меняться из-за замыкания
        }, 1000)

        return () => {
            clearInterval(intervalId )
        }
    }, [])

    return <>
        Hi, counter:{counter}
    </>
}

export const ResetEffectExample = () => {
    const[counter, setCounter] = useState(1)

    console.log('Component Render ' + counter)

    useEffect(() => {

            console.log('Effect occurred ' + counter)
        return () => {
                console.log('Reset Effect ' + counter)
        }
        }, [counter])

    return <>
        Hi, counter:{counter} <button onClick={() => setCounter(counter+1)}>+</button>
    </>
}

export const KeysTackerExample = () => {
    const[text, setText] = useState('')

    console.log('Component Render with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', handler)
                return () => {
                    window.document.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}
