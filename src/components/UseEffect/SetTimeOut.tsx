import React, {useEffect, useState} from 'react';

const SetTimeOutExample = () => {
    const [fake, setFake] = useState(0)
    const [count, setCount] = useState(0)
    console.log('SetTimeOutExample')

    useEffect(() => {
            setTimeout(() => {
                console.log("setTimeOut")
                document.title = count.toString()
            }, 1000)
        },
        [count])
    useEffect(() => {
            setInterval(() => {
                console.log("tick  "+ count)
                setCount((state)=>state+1)
            }, 1000)
        },
        [])

    return (
        <div>

            Hello, fake {fake} - count{count}
            <button onClick={() => setFake(fake + 1)}>fake</button>
            <button onClick={() => setCount(count + 1)}>count</button>
        </div>
    );
};

export default SetTimeOutExample;