import configureStore from "redux-mock-store"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import React from "react"
import {findIndex} from "lodash"
import {AppState} from "../../model/AppState"

export const mockStateStore = (state: AppState) => configureStore()(state)

export const renderComponentWithState = (Component: any, state: AppState) => {
    const mockStore = mockStateStore(state)
    const rootElement = document.createElement("DIV")!
    document.body.innerHTML = ""
    document.body.appendChild(rootElement)
    ReactDOM.render(<Provider store={mockStore}><Component/></Provider>,  rootElement)

    return { mockStore, rootElement }
}

export const trigger = (eventType: string, element: Element): void => {
    element.dispatchEvent(new Event(eventType, { bubbles: true, cancelable: true}))
}

export const testHandleSelector = (handle: string): string => `[data-test-handle='${handle}']`
export const queryByTestHandle = (handle: string, element: Element) => element.querySelector(testHandleSelector(handle))!
export const queryAllByTestHandle = (handle: string, element: Element) => element.querySelectorAll(testHandleSelector(handle))

export const testHandle = (identifier: string) => ({ "data-test-handle": identifier })

export function setSelectValue(selectBox: Element, value: string | null): void {
    (selectBox as any).selectedIndex = findIndex(selectBox.children, option =>
            option.getAttribute("value") === value || option.textContent === value)

    trigger("change", selectBox)
}
