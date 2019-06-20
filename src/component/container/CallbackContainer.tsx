import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../model/AppState"
import {messageClickedAction} from "../../model/action/MessageClickedAction"
import {CallbackComponent} from "redux-oidc"
import {userManager} from "../../util/userManager"
import {Dispatch} from "redux"

export const mapStateToProps: MapStateToProps<any, void, AppState> = state => ({ userManager })

export const mapDispatchToProps: MapDispatchToProps<any, void> = (dispatch: Dispatch) => ({
    successCallback: () => {},
    errorCallback: (message: string) => dispatch(messageClickedAction({ message })),
})

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(CallbackComponent)
