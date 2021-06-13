import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Rating/Rating";
import UnControlledAccordion from "./UnControlledAccordion/UnControlledAccordion";
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./UnControlledRating/UncontrolledRating";
import {Accordion} from "./Accordion/Accordion";
import {ControlledOnOff} from "./OnOff/OnOff";


function App() {
  console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

        return (
    <div className={"App"}>


        <UncontrolledOnOff onChange={(value) => {setSwitchOn(!switchOn)}}/>
        <ControlledOnOff value={switchOn}
                         onChange={ (value) => {setSwitchOn(!switchOn)}}/>
        <UncontrolledRating  />
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
