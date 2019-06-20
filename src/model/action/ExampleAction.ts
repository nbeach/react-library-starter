import {createActionFactory} from "../../util/action-util"

export interface ExampleAction {
    readonly someProp: string
}

export const exampleAction = createActionFactory<ExampleAction>("EXAMPLE_ACTION")
