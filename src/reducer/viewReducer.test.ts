import {viewReducer} from "./viewReducer"
import {widgetLoadedAction} from "../model/action/WidgetLoadedAction"
import {createViewState} from "../util/test/factory/createAppState"

describe(viewReducer.name, () => {

    describe(`when ${widgetLoadedAction.name}`, () => {

        it("sets the message to the widget value", () => {
            const action = widgetLoadedAction({ widget: "Hello World!"})
            const newState = viewReducer(createViewState(), action)

            expect(newState.message).toEqual("Hello World!")
        })

    })

})
