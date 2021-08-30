import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";


import {OnOff} from "./components/OnOf/OnOff";
import {UnControlledOnOff} from "./components/OnOf/UnControledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UnControlledAccordion";
import {ControlledInput} from "./stories/Input.stories";
import {UncontrolledRating} from "./components/UnControledRating/UnControledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {Example1} from "./stories/ReactMemo";
import Selects from "./components/Selects/Selects";
import {LikeUseCallBack} from "./components/Use.Memo";
import {Examples} from "./components/UseState";
import UseEffect from "./components/UseEffect/UseEffect";
import SetTimeOutExample from "./components/UseEffect/SetTimeOut";
import {Clock} from "./Clock/Clock";


/*
type PageTitlePropsType = {
    title: string
}
*/

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <ControlledInput/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating onChange={setRatingValue}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[]}
                       onClick={(value) => {
                           alert(`user ${value} be happy!`)
                       }}
            />

            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <input/>
            <Example1/>
            <Selects/>
            <LikeUseCallBack/>
            <Examples/>
            <UseEffect/>
            <SetTimeOutExample/>
            <Clock/>

        </div>
    );
}

export default App;
