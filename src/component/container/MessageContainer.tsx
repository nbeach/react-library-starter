import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {Message, MessageDispatchProps, MessageStateProps} from "../presentation/Message"
import {AppState} from "../../model/AppState"
import {messageClickedAction} from "../../model/action/MessageClickedAction"

export const mapStateToProps: MapStateToProps<MessageStateProps, void, AppState> = state => ({
   message: state.view.message,
})

export const mapDispatchToProps: MapDispatchToProps<MessageDispatchProps, void> = dispatch => ({
    messageClicked: (message: string) => dispatch(messageClickedAction({ message })),
})

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)
