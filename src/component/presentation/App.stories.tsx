import {storiesOf} from "@storybook/react"
import React from "react"
import {App} from "./App"

storiesOf(App.name, module)
    .add("default state", () => <App/>)
