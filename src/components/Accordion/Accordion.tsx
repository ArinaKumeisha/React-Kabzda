import React from "react";

type ItemsType = {
    value: any
    title: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemsType>
    onClick: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                accordionCollapsed={props.collapsed}/>
            {!props.collapsed &&
            <AccordionBody
                items={props.items}
                onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    accordionCollapsed: boolean
    title: string
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: Array<ItemsType>
    onClick: (value: any) => void

}

function AccordionBody(props: AccordionBodyType) {
    return (<div>
            {props.items.map(
                (i, index) => <li key={index}
                                  onClick={() => {
                                      props.onClick(i.value)
                                  }}>{i.title}</li>)}
        </div>
    )
}
