import React from 'react'
import { storiesOf } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import NavBar from '..'

storiesOf('NavBar', module)
  .addDecorator(jsxDecorator)
  .add('navbar', () => <NavBar />)
