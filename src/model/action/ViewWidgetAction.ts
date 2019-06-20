import {createActionFactory} from "../../util/action-util"

export interface ViewWidgetAction {
    readonly id: string
}

export const viewWidgetAction = createActionFactory<ViewWidgetAction>("VIEW_WIDGET")
