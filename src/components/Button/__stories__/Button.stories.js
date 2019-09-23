import React from 'react'
import { storiesOf } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import Button from '..'

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .add('Primary', () => <Button styleClass="btn-primary" />)
  .add('Secondary', () => <Button styleClass="btn-secondary" />)
