import React, {useState} from 'react';
import {OnOff, OnOfProps} from "./OnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

/*export const Template: Story<OnOfProps> = (args) => <OnOff {...args} />;*/

export const OnMode = () => <OnOff on={true} onChange={action("клик")} />
export const OffMode = () => <OnOff on={false} onChange={action("клик")} />

/*
export const ModeChanging =()=>{
    const[value, setValue]=useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}

*/




