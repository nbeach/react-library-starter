// import {loadAssemblySaga,} from "./rootSaga"
// import {call, put, take} from "redux-saga/effects"
// import {retrieveAssembly,} from "../../repository/AssemblyRepository"
// import {assemblySelectedAction} from "../../model/action/AssemblySelectedAction"
// import {createAssemblySummaryView} from "../util/test/factory/view/createAssemblySummaryView"
// import {createAssembly} from "../util/test/factory/business/createAssembly"
// import {exampleAction} from "../model/action/ExampleAction"
//
// describe("rootSaga", () => {
//
//     it("loadAssemblySaga", () => {
//         const saga = loadAssemblySaga()
//
//         const assembly = createAssembly({ serialNumber: "123" })
//         const sourceAssemblySummary = createAssemblySummaryView({ serialNumber: "123" })
//         const action = assemblySelectedAction({ assembly: sourceAssemblySummary })
//
//         expect(saga.next().value).toEqual(take(action.type))
//         expect(saga.next(action).value).toEqual(call(retrieveAssembly, "123"))
//         expect(saga.next(assembly).value).toEqual(put(exampleAction({ someProp: "123" })))
//         expect(saga.next().value).toEqual(take(action.type))
//     })
//
// })

export const foo = "foo"
