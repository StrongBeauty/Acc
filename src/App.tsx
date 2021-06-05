import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Rating/Rating";
import UnControlledAccordion from "./UnControlledAccordion/UnControlledAccordion";
import {OnOff} from "./OnOff/OnOff";
import {UnControlledRating} from "./UnControlledRating/UnControlledRating";
import {Accordion} from "./SelfControlledAccordion/Accordion";
import {ControlledOnOff} from "./ControlledOnOff/ControlledOnOff";


function App() {
  console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

        return (
    <div className={"App"}>


        <OnOff onChange={(value) => {setSwitchOn(!switchOn)}}/>
        <ControlledOnOff value={switchOn}
                         onChange={ (value) => {setSwitchOn(!switchOn)}}/>
        <UnControlledRating  />
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UnControlledAccordion titleValue={"Menu"} />
        <Accordion titleValue={"Menu"}
                   collapsed={accordionCollapsed}
                   onClick= {() => {setAccordionCollapsed(!accordionCollapsed)}}/>
    </div>
  )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log ("PageTitle rendering")
    return <h1>{props.title}</h1>
}
export default App;
