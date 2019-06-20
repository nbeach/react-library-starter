import {all, call, put, take} from "redux-saga/effects"
import {retrieveThing} from "../repository/ExampleRepository"
import {exampleAction, ExampleAction} from "../model/action/ExampleAction"

export function* exampleRetrievalSaga() {
    while (true) {
        const action: ExampleAction = yield take(exampleAction.type)
        const thing = yield call(retrieveThing, action.someProp)
        yield put(exampleAction({ someProp: thing }))
    }
}

export default function* rootSaga() {
    yield all([
        exampleRetrievalSaga(),
    ])
}
