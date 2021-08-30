import React, {useState} from "react";
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
};



export const WithValue = () => {
    const [value, setValue]=useState("2")
    return <Select
        value={value}
            items={[
                {value: "1", title: "Mogilev"},
                {value: "2", title: "Minsk"},
                {value: "3", title: "Slonim"},
            ]}
    onChange={setValue}/>
}

export const WithoutValue= () => {
    const [value, setValue]=useState(null)
    return <Select
        value={null}
        items={[
            {value: "1", title: "Mogilev"},
            {value: "2", title: "Minsk"},
            {value: "3", title: "Slonim"},
        ]}
        onChange={setValue}/>
}
