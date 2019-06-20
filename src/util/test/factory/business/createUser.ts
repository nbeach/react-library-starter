import {objectCreatorFactory} from "../objectCreatorFactory"
import {UserState} from "redux-oidc"

export const createUser = objectCreatorFactory<UserState>({
    isLoadingUser: true,
})
