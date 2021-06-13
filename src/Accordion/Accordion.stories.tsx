import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {ControlledOnOff, OnOffPropsType} from "../OnOff/OnOff";
import {action} from "@storybook/addon-actions";
import {Accordion} from ".//Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("accordion made change event fired")
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]} onClick={onClickCallback} />
export const UserUncollapsedMode = () => <Accordion titleValue={"Menu"}
                                                    collapsed={false}
                                                    onChange={callback}
                                                    items={[{title: 'D', value: 1},
                                                        {title: 'A', value: 2},
                                                        {title: 'C', value: 3}
                                                        ]}
                                                    onClick={onClickCallback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: 'D', value: 1},
                          {title: 'A', value: 2},
                          {title: 'C', value: 3}
                          ]}
                      onClick={onClickCallback} />
}


