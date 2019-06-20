import {storiesOf} from "@storybook/react"
import React from "react"
import {Message, MessageDispatchProps, MessageStateProps} from "./Message"

const state: MessageStateProps & MessageDispatchProps = {
    message: "Hello World!",
    messageClicked: () => {},
}

storiesOf(Message.name, module)
    .add("default state", () => <Message {...state}/>)
