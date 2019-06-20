import {MessageContainer} from "./MessageContainer"
import {AppState} from "../../model/AppState"
import {createAppState, createViewState} from "../../util/test/factory/createAppState"
import {queryByTestHandle, renderComponentWithState, trigger} from "../../util/test/container-testing"
import {MessageTestHandles} from "../presentation/Message"
import {messageClickedAction} from "../../model/action/MessageClickedAction"

describe(MessageContainer.name, () => {

    it("when message is clicked dispatches a message clicked action", () => {
        const state: AppState = createAppState({
            view: createViewState({
                message: "Hello World!",
            }),
        })

        const { mockStore, rootElement } = renderComponentWithState(MessageContainer, state)
        trigger("click", queryByTestHandle(MessageTestHandles.Message, rootElement))

        expect(mockStore.getActions()).toEqual([messageClickedAction({ message: "Hello World!" })])
    })

})
