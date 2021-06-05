import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

     return <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
         {!props.collapsed  && <AccordionBody/>}
     </div>

}

/* function UnControlledAccordion (props: AccordionPropsType) {
  console.log("UnControlledAccordion rendering")

    if (props.collapsed == true)
        return(
            <div>
                {true}
                <AccordionTitle title={props.titleValue}/>
            </div>
        )

    else
        return(
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
} */

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return(
        <div>
            <h3 onClick={(e) => props.onClick}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

