import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {ControlledOnOff, OnOffPropsType} from "../ControlledOnOff/ControlledOnOff";
import {action} from "@storybook/addon-actions";
import {Accordion} from "../SelfControlledAccordion/Accordion";
import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
}

const callback = action("UnControlledAccordion made change event fired")



export const ModeChanging = () => {

    return <UnControlledAccordion titleValue={'Users'} />
}


