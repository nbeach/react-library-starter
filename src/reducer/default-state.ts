import {AppState} from "../model/AppState"

export const DEFAULT_STATE: AppState = {
    view: {
        message: "",
    },
    router: {
        location: {
            pathname: "",
            search: "",
            state: {},
            hash: "",
        },
        action: "PUSH",
    },
    user: {
        isLoadingUser: true,
    },
}
