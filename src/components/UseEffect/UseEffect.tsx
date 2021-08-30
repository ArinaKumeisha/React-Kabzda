import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    return (
        <div>
            <SimpleExample/>
        </div>
    );
};

export default UseEffect;

const SimpleExample = () => {
    console.log("SimpleExample")
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {   // useEffect  будет адресовываться при каждом render
        console.log("UseEffect every render")
        document.title = counter.toString()
    }, )

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