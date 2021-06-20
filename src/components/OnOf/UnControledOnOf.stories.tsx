import React, {useState} from 'react';
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {OnOff, OnOfProps} from "./OnOff";
import {UnControlledOnOff} from "./UnControledOnOff";


export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const Template: Story<OnOfProps> = (args) => <OnOff {...args} />;
const callbacks=action("клик")
export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callbacks} />
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callbacks} />
export const DefaultInputValue = () => <input defaultValue={"Yo"} />


export const ModeChanging =()=>{
    const[value, setValue]=useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}





