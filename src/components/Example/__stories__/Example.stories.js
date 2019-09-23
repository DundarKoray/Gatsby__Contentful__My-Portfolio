import React from 'react'
import { storiesOf } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import Example from '..'

const users = [
  {
    firstName: 'Jo',
    lastName: 'Doe',
    age: 123,
  },
]
storiesOf('Example', module)
  .addDecorator(jsxDecorator)
  .add('passing label prop', () => (
    <>
      <h1 style={{ color: 'red' }}>this is the default:</h1>
      <Example label="Example component" />
    </>
  ))
  .add('with isButton', () => (
    <Example label="Example component with button" isButton users={users} />
  ))
