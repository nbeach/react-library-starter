import {UserState} from "redux-oidc"
import {RouterState} from "connected-react-router"

export interface AppState {
    readonly view: ViewState
    readonly user: UserState
    readonly router: RouterState
}

export interface ViewState  {
    readonly message: string
}
