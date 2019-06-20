import React from "react"

export interface MessageStateProps {
    readonly message: string
}

export interface MessageDispatchProps {
    readonly messageClicked: (message: string) => void
}

export const Message = ({message, messageClicked}: MessageStateProps & MessageDispatchProps) =>
    <h1 onClick={() => messageClicked(message)} data-test-handle={MessageTestHandles.Message}>{message}</h1>

export enum MessageTestHandles {
    Message = "MESSAGE_MESSAGE",
}
