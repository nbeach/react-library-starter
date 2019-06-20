import {applyMiddleware, compose, createStore} from "redux"
import rootSaga from "./saga/rootSaga"
import createSagaMiddleware from "@redux-saga/core"
import {loadUser} from "redux-oidc"
import {userManager} from "./util/userManager"
import {routerMiddleware} from "connected-react-router"
import createBrowserHistory from "history/createBrowserHistory"
import {createRootReducer} from "./reducer/rootReducer"

export const history = createBrowserHistory()
export const initializeStore = () => {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const sagaMiddleware = createSagaMiddleware()

    const enhancers = composeEnhancers(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware(history)),
    )

    const store = createStore(createRootReducer(history), enhancers)

    sagaMiddleware.run(rootSaga)
    loadUser(store, userManager)
    return store
}
