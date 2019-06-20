import {all, call, put, take} from "redux-saga/effects"
import {ViewWidgetAction, viewWidgetAction} from "../model/action/ViewWidgetAction"
import {retrieveWidget} from "../repository/ExampleRepository"
import {widgetLoadedAction} from "../model/action/WidgetLoadedAction"

export function* retrieveWidgetSaga() {
    while (true) {
        const action: ViewWidgetAction = yield take(viewWidgetAction.type)
        const widget = yield call(retrieveWidget, action.id)
        yield put(widgetLoadedAction({ widget }))
    }
}

export default function* rootSaga() {
    yield all([
        retrieveWidgetSaga(),
    ])
}
