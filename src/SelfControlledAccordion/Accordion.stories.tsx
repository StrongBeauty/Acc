import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {ControlledOnOff, OnOffPropsType} from "../ControlledOnOff/ControlledOnOff";
import {action} from "@storybook/addon-actions";
import {Accordion} from "../SelfControlledAccordion/Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("accordion made change event fired")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />
export const UserUncollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}


