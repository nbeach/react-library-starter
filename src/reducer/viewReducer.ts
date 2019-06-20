import {Action} from "redux"

import {isAction} from "../util/action-util"
import {ViewState} from "../model/AppState"
import {widgetLoadedAction} from "../model/action/WidgetLoadedAction"


export const viewReducer = (priorState: ViewState, action: Action): ViewState => {

    if (isAction(widgetLoadedAction, action)) {
        return {
            ...priorState,
            message: action.widget,
        }
    }

    return priorState
}
