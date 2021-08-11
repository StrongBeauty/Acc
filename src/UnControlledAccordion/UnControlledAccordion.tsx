import React, {useReducer, useState} from "react";

export type UnControlledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE_COLLAPSED'){
        return !state
    }
    return state
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    //console.log("UnControlledAccordion rendering")

    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)



     return <div>
                {/*<AccordionTitle title={props.titleValue} onClick={ ()=>{setCollapsed(!collapsed)}}*/}
         <AccordionTitle title={props.titleValue} onClick={ ()=>{dispatch({type: 'TOGGLE_COLLAPSED'})}}
         {collapsed  && <AccordionBody/>}
     </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return(
        <div>
            <h3 onClick = {() => {props.onClick()}}>{props.title}</h3>
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

