import React from "react"
import {App} from "../presentation/App"
import {Provider} from "react-redux"
import {history, initializeStore} from "../../store"
import {OidcProvider} from "redux-oidc"
import {userManager} from "../../util/userManager"
import {ConnectedRouter} from "connected-react-router"

const store = initializeStore()

export const AppContainer = () =>
    <Provider store={store}>
        <OidcProvider userManager={userManager} store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </OidcProvider>
    </Provider>
