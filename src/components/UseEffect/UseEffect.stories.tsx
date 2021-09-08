import React, {useEffect, useState} from 'react';
import UseEffect from "./UseEffect";


export default {
    title: 'UseEffect',
    component: UseEffect,
    /* argTypes: {
         backgroundColor: {control: 'color'},
     },*/
};
export const SimpleExample = () => {
    console.log("SimpleExample")
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {   // useEffect  будет адресовываться при каждом render
        console.log("UseEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {      //useEffect  будет адресовываться только первый раз( как бы вмонтироваться)
        console.log("UseEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {       // useEffect  будет адресовываться в первый раз и при каждом изменении
        console.log("UseEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])
    return (
        <>Hello, {counter}{fake}
            <button onClick={() => setFake(fake + 1)}>+UseEffect</button>
            <button onClick={() => setCounter(counter + 1)}>+UseEffectCounter</button>
        </>
    )
}
export const UseEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered ' + counter)
    useEffect(() => {
        console.log('Effect ' + counter)
        return () => {
            console.log('Очистка ' + counter)
        }
    })
    const increase = () => setCounter(counter + 1)
    return <>
        Hello counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeyExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])
    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeOutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const setTimeOutID = setTimeout(() => {
            console.log('Time out Expired')
            setText('3 seconds passed')
        }, 3000)
        return () => clearInterval(setTimeOutID)
    }, [text])
    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeOut2 = () => {
    const [text, setText] = useState('')
    console.log('Component rendered ' + text)
useEffect(()=>{
    const setInterval1 = setInterval(() => {
        console.log('Time out 2 second!!!')
        setText(state => '2 seconds!!!')
    }, 2000)
    return () => {
        clearInterval(setInterval1)
    }
},[text])
return <>text:{text}</>
}




