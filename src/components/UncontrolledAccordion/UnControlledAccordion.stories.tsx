import React from 'react';
import {UncontrolledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
 const callback=action("accordion mode change event fired")
 const callback1=action("collapsed or uncollapsed")
export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"} collapsed={true}/>;


export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"}  />
}





