import {objectCreatorFactory} from "../objectCreatorFactory"
import {RouterState} from "connected-react-router"
import {createLocation} from "./createLocation"

export const createRouterState = objectCreatorFactory<RouterState>({
    location: createLocation(),
    action: "PUSH",
})
