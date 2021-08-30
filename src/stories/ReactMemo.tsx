import React from 'react';

import {useState} from "react";


const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}

    </div>
}

const Users= React.memo(UsersSecret)

export const Example1 = () => {
const addUser =() =>{
    setUsers([...users, user])
}

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Arina", "Masha", "Dasha"])
    const [user, setUser] = useState("")
    return <>
        <input value={user} onChange={(e) =>{setUser(e.currentTarget.value)}}/>
        <button onClick={addUser}>+
        </button>

           <div> <button onClick={() => {setCounter(counter+1)}}>Add</button></div>

        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
