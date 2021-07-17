import React, {useState} from 'react';
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};


const callback = action("collapsed or uncollapsed")
const onClickCallback = action("some item was clicked")
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>

export const UserOnCollapsedMode = () => <Accordion titleValue={"Users"}
                                                    collapsed={false}
                                                    onChange={callback}
                                                    items={[
                                                        {value: 1, title: "Arina"},
                                                        {value: 2, title: "Masha"},
                                                        {value: 3, title: "Dasha"},
                                                        {value: 4, title: "Sveta"}
                                                    ]}
                                                    onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={"User"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {value: 1, title: "Arina"},
                          {value: 2, title: "Masha"},
                          {value: 3, title: "Dasha"},
                          {value: 4, title: "Sveta"}
                      ]}
                      onClick={(value) => {alert(`user ${value} be happy!`)}}/>
}




