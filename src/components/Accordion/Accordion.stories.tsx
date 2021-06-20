import React, {useState} from 'react';
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

/*export const Template: Story<AccordionPropsType> = (args) => <OnOff {...args} />*/
const callback=action("collapsed or uncollapsed")
export const MenuCollapsedMode= () => <Accordion titleValue={"Menu"}  collapsed={true} onChange={callback} />
export const UserOncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />

/*
export const ModeChanging =()=>{
    const[value, setValue]=useState<boolean>(false)
    return <Accordion titleValue={"User"}collapsed={value} onChange={()=>setValue(!value)}/>
}
*/





