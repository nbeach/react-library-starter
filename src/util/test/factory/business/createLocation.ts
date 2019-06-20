import {objectCreatorFactory} from "../objectCreatorFactory"
import {Location} from "history"

export const createLocation = objectCreatorFactory<Location>({
    pathname: "",
    search: "",
    state: {},
    hash: "",
})
