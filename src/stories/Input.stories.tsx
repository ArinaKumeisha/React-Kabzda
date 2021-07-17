import React, {useState} from 'react';



 export default {
title: 'Input',
/*component: "Input",*/
};

export const ControlledInput=() => {
    const [parentValue, setParentValue] = useState("")
    return <input value={parentValue}
                  onChange={(e) => {
                      setParentValue(e.currentTarget.value)
                  }}/>
}

export const ControlledCheckBox=() =>{
    const [parentValue, setParentValue]=useState<boolean>(true)

    return<input type={"checkbox"} checked={parentValue}
                 onChange={(e) => {setParentValue(e.currentTarget.checked)}}/>
}

export const ControlledSelect=() =>{
    const [parentValue, setParentValue]=useState<string|undefined>(undefined)

    return <select value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}>;
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={1}>Kiev</option>
    </select>

}



