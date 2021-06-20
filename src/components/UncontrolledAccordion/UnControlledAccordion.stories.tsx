import React, {useState} from 'react';
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UnControlledAccordion";



export default {
    title: 'UnControlledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

/*export const Template: Story<AccordionPropsType> = (args) => <OnOff {...args} />*/
/*const callback=action("collapsed or uncollapsed")*/
export const ModeChanging= () => <UncontrolledAccordion titleValue={"Users"}  />


/*
export const ModeChanging =()=>{
    const[value, setValue]=useState<boolean>(false)
    return <UncontrolledAccordion titleValue={"User"}/>
}
*/





