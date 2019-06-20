import {createActionFactory} from "../../util/action-util"

export interface WidgetLoadedAction {
    readonly widget: string
}

export const widgetLoadedAction = createActionFactory<WidgetLoadedAction>("WIDGET_LOADED")
