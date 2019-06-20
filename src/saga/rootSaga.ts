import {all, call, put, take} from "redux-saga/effects"
import {retrieveThing} from "../repository/ExampleRepository"
import {exampleAction, MessageClickedAction} from "../model/action/MessageClickedAction"

export function* exampleRetrievalSaga() {
    while (true) {
        const action: MessageClickedAction = yield take(exampleAction.type)
        const thing = yield call(retrieveThing, action.someProp)
        yield put(exampleAction({ someProp: thing }))
    }
}

export default function* rootSaga() {
    yield all([
        exampleRetrievalSaga(),
    ])
}
