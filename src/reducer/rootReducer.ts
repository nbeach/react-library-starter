import {Action} from "redux"
import {viewReducer} from "./viewReducer"
import {DEFAULT_STATE} from "./default-state"
import {AppState} from "../model/AppState"
import {reducer as userReducer} from "redux-oidc"
import {connectRouter} from "connected-react-router"
import {History} from "history"

export const createRootReducer = (history: History) => (previousState: AppState = DEFAULT_STATE, action: Action): AppState => ({
    view: viewReducer(previousState.view, action),
    user: userReducer(previousState.user, action),
    router: connectRouter(history)(previousState.router, action as any),
})
