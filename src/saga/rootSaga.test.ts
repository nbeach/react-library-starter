import {retrieveWidgetSaga} from "./rootSaga"
import {take, call, put} from "redux-saga/effects"
import {retrieveWidget} from "../repository/ExampleRepository"
import {viewWidgetAction} from "../model/action/ViewWidgetAction"
import {widgetLoadedAction} from "../model/action/WidgetLoadedAction"

describe("saga", () => {

    it(`${retrieveWidgetSaga.name} retrieves the widget and dispatches a loaded event`, () => {
        const saga = retrieveWidgetSaga()

        const action = viewWidgetAction({ id: "123" })
        const widget = "Some Widget"

        expect(saga.next().value).toEqual(take(action.type))
        expect(saga.next(action).value).toEqual(call(retrieveWidget, "123"))
        expect(saga.next(widget).value).toEqual(put(widgetLoadedAction({ widget })))
        expect(saga.next().value).toEqual(take(action.type))
    })

})
