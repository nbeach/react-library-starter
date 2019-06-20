import React from "react"
import {App} from "../presentation/App"
import {Provider} from "react-redux"
import {initializeStore} from "../../store"

export const AppContainer = () =>
    <Provider store={initializeStore()}>
        <App/>
    </Provider>
