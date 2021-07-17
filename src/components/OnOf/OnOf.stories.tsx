import React, {useState} from 'react';
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {OnOff, OnOfProps} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const Template: Story<OnOfProps> = (args) => <OnOff {...args} />;
const callbacks=action("клик")
export const OnMode = () => <OnOff on={true} onChange={callbacks} />
export const OffMode = () => <OnOff on={false} onChange={callbacks} />

/*
export const ModeChanging =()=>{
    const[value, setValue]=useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}
*/





