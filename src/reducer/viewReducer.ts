import {Action} from "redux"

import {isAction} from "../util/action-util"
import {ViewState} from "../model/AppState"
import {exampleAction} from "../model/action/MessageClickedAction"


export const viewReducer = (priorState: ViewState, action: Action): ViewState => {

    if (isAction(exampleAction, action)) {

    }

    return priorState
}
