import {createActionFactory} from "../../util/action-util"

export interface MessageClickedAction {
    readonly message: string
}

export const messageClickedAction = createActionFactory<MessageClickedAction>("MESSAGE_CLICKED")
