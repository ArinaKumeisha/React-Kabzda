import {useState} from "react";


const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}

    </div>
}


export const Example1 = () => {


    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Arina", "Masha", "Dasha"])
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
