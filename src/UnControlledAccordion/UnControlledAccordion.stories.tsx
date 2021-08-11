import React from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
}

const callback = action("UnControlledAccordion made change event fired")



export const ModeChanging = () => {

    return <UnControlledAccordion titleValue={'Users'} />
}


