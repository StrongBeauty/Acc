import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {ControlledOnOff, OnOffPropsType} from "../ControlledOnOff/ControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'ControlledOnOff',
    component: ControlledOnOff
}

const callback = action("on or off clicked")

export const OnMode = () => <ControlledOnOff value={true} onChange={x=>x} />
export const OffMode = () => <ControlledOnOff value={false} onChange={x=>x} />

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return <ControlledOnOff value={value} onChange={setValue} />
}
