import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {OnOff, OnOffPropsType} from ".//OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action("on or off clicked")

export const OnMode = () => <OnOff value={true} onChange={x=>x} />
export const OffMode = () => <OnOff value={false} onChange={x=>x} />

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return <OnOff value={value} onChange={setValue} />
}
