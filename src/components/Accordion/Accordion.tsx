import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
   onChange:()=>void

}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} accordionCollapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

    type AccordionTitlePropsType = {
        accordionCollapsed:boolean
        title: string
        onChange:()=>void

    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return (
            <h3 onClick={props.onChange}>{props.title}</h3>
        )
    }

    function AccordionBody() {
        return (<div>

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }