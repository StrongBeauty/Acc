import React, {useState} from 'react';
import './App.css';
import Rating, {RatingPropsType, RatingValueType} from "./Rating/Rating";
import {UnControlledOnOff, UnControlledOnOffPropsType} from "./UnControlledOnOff/UnControlledOnOff";
import {Accordion, AccordionPropsType} from "./Accordion/Accordion";
import {OnOff, OnOffPropsType} from "./OnOff/OnOff";
import {UnControlledAccordion, UnControlledAccordionPropsType} from "./UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating, UnControlledRatingPropsType} from "./UnControlledRating/UnControlledRating";


type AppPropsType = {
    UnControlledOnOff: UnControlledOnOffPropsType
    OnOff: OnOffPropsType
    UnControlledRating: UnControlledRatingPropsType
    Rating: RatingPropsType
    UnControlledAccordion: UnControlledAccordionPropsType
    Accordion: AccordionPropsType
}

function App(props: AppPropsType) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className={"App"}>


            <UnControlledOnOff onChange={(value) => {
                setSwitchOn(!switchOn)
            }}/>
            <OnOff value={switchOn}
                   onChange={(value) => {
                       setSwitchOn(!switchOn)
                   }}/>
            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
