import {AppState, ViewState} from "../../../model/AppState"
import {objectCreatorFactory} from "./objectCreatorFactory"
import {createUser} from "./business/createUser"
import {createRouterState} from "./business/createRouterState"

export const createViewState = objectCreatorFactory<ViewState>({
    message: "",
})

export const createAppState = objectCreatorFactory<AppState>({
    view: createViewState(),
    router: createRouterState(),
    user: createUser(),
})


