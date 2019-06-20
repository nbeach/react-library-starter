
import {configure, shallow} from "enzyme"
import * as React from "react"
import Adapter from "enzyme-adapter-react-16"
import {App} from "./App"
configure({ adapter: new Adapter() })


describe("rootSaga", () => {

    it("loadAssemblySaga", () => {
        const tree = shallow(<App /> )
        expect(tree.text()).toEqual("Hello World!")
    })

})
