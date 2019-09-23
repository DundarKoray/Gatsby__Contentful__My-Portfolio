import React from "react"
import { storiesOf } from "@storybook/react"
import { jsxDecorator } from "storybook-addon-jsx"

import HeroVideo from ".."

storiesOf("HeroVideo", module)
  .addDecorator(jsxDecorator)
  .add("Header video", () => <HeroVideo />)
