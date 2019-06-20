import {shallow} from "enzyme"
import * as React from "react"
import {Message, MessageTestHandles} from "./Message"
import {testHandleSelector} from "../../util/test/container-testing"

describe(Message.name, () => {

    it("displays the message", () => {
        const tree = shallow(<Message message={"Hello World!"} messageClicked={() => {}}/> )
        const message = tree.find(testHandleSelector(MessageTestHandles.Message)).text()
        expect(message).toEqual("Hello World!")
    })

})
