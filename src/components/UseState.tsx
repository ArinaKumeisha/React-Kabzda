import React, {useState} from "react";


export const Examples =() =>{
    return(
        <Example1/>
    )
}
function generalData() {
    console.log("generalData")
    return 23455555
}
export const Example1 = () => {
    console.log("Example1")
    const[count, setCount] = useState(generalData)
    const change = (state: number) => state+1
    return <>
        <button onClick={()=>setCount(change)}>Счетчик</button>
        {count}
        </>
};
