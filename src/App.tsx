import React, {useState} from 'react';

import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";


import {OnOff} from "./components/OnOf/OnOff";
import {UnControlledOnOff} from "./components/OnOf/UnControledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UnControlledAccordion";


type PageTitlePropsType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            {/*   <UncontrolledRating />*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
